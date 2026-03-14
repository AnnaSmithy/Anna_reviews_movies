
async function loadMovies() {
  const res = await fetch('data/movies.json');
  return res.json();
}
function formatDate(iso) {
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString(undefined, { year:'numeric', month:'long', day:'numeric' });
}
function stars(r){
  const full = Math.floor(r);
  const half = (r - full) >= 0.5 ? '½' : '';
  return '★'.repeat(full) + half;
}
function reviewCard(movie, base='.') {
  return `
    <article class="card review-card">
      <div class="meta">
        <span class="pill">${movie.year}</span>
        <span class="pill">${movie.genres[0]}</span>
        <span class="pill">${stars(movie.rating)}</span>
      </div>
      <div>
        <h3><a href="${base}/reviews/${movie.slug}.html">${movie.title}</a></h3>
      </div>
      <p class="muted small">Directed by ${movie.director}</p>
      <div class="meta">
        <span>Reviewed ${formatDate(movie.reviewDate)}</span>
      </div>
    </article>
  `;
}
async function renderHomeRecent() {
  const shell = document.querySelector('[data-home-recent]');
  if (!shell) return;
  const movies = await loadMovies();
  shell.innerHTML = movies.slice(0, 9).map(m => reviewCard(m, '.')).join('');
}
function getUnique(movies, keyBuilder){
  return [...new Set(movies.map(keyBuilder))].sort((a,b)=> String(a).localeCompare(String(b), undefined, {numeric:true}));
}
async function renderArchive() {
  const shell = document.querySelector('[data-archive-results]');
  if (!shell) return;
  const movies = await loadMovies();
  const q = document.querySelector('#q');
  const genre = document.querySelector('#genre');
  const decade = document.querySelector('#decade');
  const rating = document.querySelector('#rating');
  const sort = document.querySelector('#sort');

  genre.innerHTML += getUnique(movies, m => m.genres[0]).map(v => `<option value="${v}">${v}</option>`).join('');
  decade.innerHTML += getUnique(movies, m => Math.floor(m.year/10)*10).map(v => `<option value="${v}">${v}s</option>`).join('');

  function apply() {
    const term = q.value.trim().toLowerCase();
    let list = movies.filter(m => {
      const hay = `${m.title} ${m.director} ${m.genres.join(' ')}`.toLowerCase();
      const genreOK = !genre.value || m.genres[0] === genre.value;
      const decadeOK = !decade.value || Math.floor(m.year/10)*10 === Number(decade.value);
      const ratingOK = !rating.value || m.rating >= Number(rating.value);
      const termOK = !term || hay.includes(term);
      return genreOK && decadeOK && ratingOK && termOK;
    });

    if (sort.value === 'oldest-review') list.sort((a,b)=> a.reviewDate.localeCompare(b.reviewDate));
    else if (sort.value === 'title') list.sort((a,b)=> a.title.localeCompare(b.title));
    else if (sort.value === 'rating') list.sort((a,b)=> b.rating - a.rating || a.title.localeCompare(b.title));
    else list.sort((a,b)=> b.reviewDate.localeCompare(a.reviewDate));

    document.querySelector('[data-archive-count]').textContent = `${list.length} reviews`;
    shell.innerHTML = list.length ? list.map(m => reviewCard(m, '.')).join('') : `<div class="archive-empty">No reviews match those filters. Try clearing one of the fields or searching by a shorter title.</div>`;
  }

  [q, genre, decade, rating, sort].forEach(el => el.addEventListener('input', apply));
  [genre, decade, rating, sort].forEach(el => el.addEventListener('change', apply));
  apply();
}
document.addEventListener('DOMContentLoaded', () => {
  renderHomeRecent();
  renderArchive();
});
