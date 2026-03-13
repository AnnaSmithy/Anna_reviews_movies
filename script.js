
const grid = document.getElementById("reviewsGrid");
const searchInput = document.getElementById("search");
const yearFilter = document.getElementById("yearFilter");
const sortBy = document.getElementById("sortBy");
const resultsText = document.getElementById("resultsText");
const featuredTitle = document.getElementById("featuredTitle");
const featuredText = document.getElementById("featuredText");
const featuredMeta = document.getElementById("featuredMeta");
const statCount = document.getElementById("stat-count");
const statLatest = document.getElementById("stat-latest");

function populateYears() {
  const years = [...new Set(REVIEWS.map(r => r.year))].sort((a, b) => b - a);
  years.forEach(year => {
    const option = document.createElement("option");
    option.value = String(year);
    option.textContent = year;
    yearFilter.appendChild(option);
  });
}

function pickFeatured() {
  const featured = [...REVIEWS]
    .sort((a, b) => (b.rating - a.rating) || b.date.localeCompare(a.date))[0];
  featuredTitle.textContent = featured.title;
  featuredText.textContent = featured.review;
  featuredMeta.textContent = `${featured.year} • ${featured.rating.toFixed(1)}/10 • ${featured.tags.join(" • ")}`;
}

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const year = yearFilter.value;
  const sort = sortBy.value;

  let items = REVIEWS.filter(item => {
    const matchQuery =
      item.title.toLowerCase().includes(query) ||
      item.review.toLowerCase().includes(query) ||
      item.tags.join(" ").toLowerCase().includes(query);

    const matchYear = year === "all" || String(item.year) === year;
    return matchQuery && matchYear;
  });

  items.sort((a, b) => {
    if (sort === "newest") return b.date.localeCompare(a.date);
    if (sort === "oldest") return a.date.localeCompare(b.date);
    if (sort === "highest") return b.rating - a.rating || a.title.localeCompare(b.title);
    if (sort === "lowest") return a.rating - b.rating || a.title.localeCompare(b.title);
    if (sort === "title") return a.title.localeCompare(b.title);
    return 0;
  });

  render(items, query, year);
}

function render(items, query, year) {
  grid.innerHTML = "";

  if (!items.length) {
    grid.innerHTML = `<div class="empty-state">No reviews match your current search. Try a different title, year, or sorting option.</div>`;
  } else {
    const fragment = document.createDocumentFragment();

    items.forEach(item => {
      const card = document.createElement("article");
      card.className = "review-card";

      card.innerHTML = `
        <div class="review-meta">
          <span>${formatDate(item.date)}</span>
          <span>${item.runtime} min</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.review}</p>
        <div class="review-footer">
          <div class="tags">
            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <div class="rating">${item.rating.toFixed(1)}/10</div>
        </div>
      `;
      fragment.appendChild(card);
    });

    grid.appendChild(fragment);
  }

  const parts = [];
  parts.push(`${items.length} review${items.length === 1 ? "" : "s"}`);
  if (year !== "all") parts.push(`from ${year}`);
  if (query) parts.push(`matching “${query}”`);
  resultsText.textContent = `Showing ${parts.join(" ")}`;
}

function formatDate(iso) {
  return new Date(iso + "T12:00:00").toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

populateYears();
pickFeatured();
statCount.textContent = REVIEWS.length;
statLatest.textContent = REVIEWS[0].year;

searchInput.addEventListener("input", applyFilters);
yearFilter.addEventListener("change", applyFilters);
sortBy.addEventListener("change", applyFilters);

applyFilters();
