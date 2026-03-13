const reviews = window.REVIEWS || [];
const grid = document.getElementById("reviewsGrid");
const searchInput = document.getElementById("search");
const yearFilter = document.getElementById("yearFilter");
const genreFilter = document.getElementById("genreFilter");
const sortBy = document.getElementById("sortBy");
const resultsText = document.getElementById("resultsText");

const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalKicker = document.getElementById("modalKicker");
const modalMeta = document.getElementById("modalMeta");
const modalBody = document.getElementById("modalBody");

const featured = reviews.find(r => r.title === "Past Lives") || reviews[0];
document.getElementById("featured-title").textContent = featured.title;
document.getElementById("featured-meta").textContent = `${featured.genre} · Reviewed ${formatDate(featured.review_date)} · ${featured.word_count} words`;
document.getElementById("featured-excerpt").textContent = excerpt(featured.review, 190);
document.getElementById("featured-button").addEventListener("click", () => openModal(featured));

const years = [...new Set(reviews.map(r => r.year))].sort((a,b) => b-a);
const genres = [...new Set(reviews.map(r => r.genre))].sort();
document.getElementById("stat-count").textContent = reviews.length;
document.getElementById("stat-latest").textContent = years[0];

years.forEach(year => {
  const option = document.createElement("option");
  option.value = String(year);
  option.textContent = year;
  yearFilter.appendChild(option);
});

genres.forEach(genre => {
  const option = document.createElement("option");
  option.value = genre;
  option.textContent = genre;
  genreFilter.appendChild(option);
});

function formatDate(dateStr){
  return new Date(`${dateStr}T12:00:00`).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function excerpt(text, length = 220){
  if (text.length <= length) return text;
  return `${text.slice(0, length).trim()}…`;
}

function render(){
  const search = searchInput.value.trim().toLowerCase();
  const selectedYear = yearFilter.value;
  const selectedGenre = genreFilter.value;
  const sort = sortBy.value;

  let filtered = reviews.filter(review => {
    const matchesSearch =
      review.title.toLowerCase().includes(search) ||
      review.genre.toLowerCase().includes(search) ||
      review.review.toLowerCase().includes(search);
    const matchesYear = selectedYear === "all" || String(review.year) === selectedYear;
    const matchesGenre = selectedGenre === "all" || review.genre === selectedGenre;
    return matchesSearch && matchesYear && matchesGenre;
  });

  filtered.sort((a,b) => {
    if (sort === "oldest") return new Date(a.review_date) - new Date(b.review_date);
    if (sort === "rating") return b.rating - a.rating;
    if (sort === "title") return a.title.localeCompare(b.title);
    return new Date(b.review_date) - new Date(a.review_date);
  });

  resultsText.textContent = filtered.length === reviews.length
    ? `Showing all ${reviews.length} reviews`
    : `Showing ${filtered.length} review${filtered.length === 1 ? "" : "s"}`;

  if (!filtered.length){
    grid.innerHTML = `<article class="review-card"><h3>No matches</h3><p>Try a different title, year, or genre filter.</p></article>`;
    return;
  }

  grid.innerHTML = filtered.map(review => `
    <article class="review-card">
      <div class="review-top">
        <div>
          <h3>${review.title}</h3>
          <p class="meta">Reviewed ${formatDate(review.review_date)}</p>
        </div>
        <div class="badge">${review.rating.toFixed(1)}/10</div>
      </div>
      <div class="chips">
        <span class="chip">${review.genre}</span>
        <span class="chip">${review.word_count} words</span>
        <span class="chip">Released ${review.release_year}</span>
      </div>
      <p>${excerpt(review.review, 250)}</p>
      <div class="card-footer">
        <span>Review date follows the release window.</span>
        <button data-title="${escapeAttribute(review.title)}">Read review</button>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll("button[data-title]").forEach(button => {
    button.addEventListener("click", () => {
      const review = reviews.find(r => r.title === button.dataset.title);
      if (review) openModal(review);
    });
  });
}

function escapeAttribute(value){
  return value.replace(/"/g, "&quot;");
}

function openModal(review){
  modalKicker.textContent = `${review.genre} · ${review.word_count} words`;
  modalTitle.textContent = review.title;
  modalMeta.textContent = `Released ${formatDate(review.release_date)} · Reviewed ${formatDate(review.review_date)} · ${review.rating.toFixed(1)}/10`;
  modalBody.innerHTML = review.review.split("\n\n").map(paragraph => `<p>${paragraph}</p>`).join("");
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal(){
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

[searchInput, yearFilter, genreFilter, sortBy].forEach(el => el.addEventListener("input", render));
[yearFilter, genreFilter, sortBy].forEach(el => el.addEventListener("change", render));
modalBackdrop.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

render();
