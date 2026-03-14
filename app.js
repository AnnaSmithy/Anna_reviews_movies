const app = document.getElementById('app');

const state = {
  data: null,
  reviews: [],
  reviewBySlug: new Map(),
  filters: {
    query: '',
    genre: 'all',
    year: 'all',
    rating: 'all',
    sort: 'newest'
  }
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatDate(value) {
  const date = new Date(`${value}T12:00:00`);
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

function sortReviews(items, sort) {
  const reviews = [...items];
  if (sort === 'oldest') {
    return reviews.sort((a, b) => a.reviewDate.localeCompare(b.reviewDate));
  }
  if (sort === 'title') {
    return reviews.sort((a, b) => a.title.localeCompare(b.title));
  }
  if (sort === 'rating') {
    return reviews.sort((a, b) => b.rating - a.rating || b.reviewDate.localeCompare(a.reviewDate));
  }
  if (sort === 'release') {
    return reviews.sort((a, b) => b.releaseYear - a.releaseYear || b.reviewDate.localeCompare(a.reviewDate));
  }
  return reviews.sort((a, b) => b.reviewDate.localeCompare(a.reviewDate));
}

function getRoute() {
  const raw = window.location.hash.replace(/^#/, '') || '/';
  const [path, queryString = ''] = raw.split('?');
  return {
    path,
    params: new URLSearchParams(queryString)
  };
}

function cardMarkup(review) {
  return `
    <article class="review-card">
      <div class="review-card__meta">
        <span class="pill">${escapeHtml(review.ratingLabel)}</span>
        <span>${escapeHtml(review.releaseYear)}</span>
      </div>
      <div>
        <h3><a href="#/review/${escapeHtml(review.slug)}">${escapeHtml(review.title)}</a></h3>
        <p>${escapeHtml(review.director)} · ${escapeHtml(review.genre)}</p>
      </div>
      <div class="review-meta">
        <span>Reviewed ${escapeHtml(formatDate(review.reviewDate))}</span>
      </div>
    </article>
  `;
}

function archiveItemMarkup(review) {
  const excerpt = review.review.split('\n\n')[0];
  return `
    <article class="archive-item">
      <div class="archive-meta">
        <span class="pill">${escapeHtml(review.ratingLabel)}</span>
        <span>${escapeHtml(review.releaseYear)}</span>
        <span>${escapeHtml(review.director)}</span>
      </div>
      <div>
        <h3><a href="#/review/${escapeHtml(review.slug)}">${escapeHtml(review.title)}</a></h3>
        <p>${escapeHtml(review.genre)}</p>
      </div>
      <p>${escapeHtml(excerpt)}</p>
      <div class="review-list-meta">
        <span>Reviewed ${escapeHtml(formatDate(review.reviewDate))}</span>
        <span>${escapeHtml(review.wordCount)} words</span>
      </div>
    </article>
  `;
}

function homePage() {
  const recent = state.reviews
    .filter((review) => review.featuredRecent)
    .sort((a, b) => b.reviewDate.localeCompare(a.reviewDate))
    .slice(0, 6);

  app.innerHTML = `
    <section class="hero">
      <div class="hero-card">
        <span class="kicker">Static film journal</span>
        <h1>${escapeHtml(state.data.site.name)}</h1>
        <p>${escapeHtml(state.data.about.bio)}</p>
      </div>

      <div class="home-links">
        <a class="link-card" href="#/archive">
          <span>Recent reviews</span>
          <span>Start with the latest pieces from the front page of the archive.</span>
        </a>
        <a class="link-card" href="#/archive">
          <span>Archived reviews</span>
          <span>Browse the full four-year review archive by title, genre, year, or rating.</span>
        </a>
        <a class="link-card" href="#/about">
          <span>About the critic</span>
          <span>Meet Mara Voss, the fictional writer behind The Late Screening.</span>
        </a>
      </div>

      <div class="section-heading">
        <h2>Recent reviews</h2>
        <a href="#/archive">View archive</a>
      </div>
      <div class="cards-grid">
        ${recent.map(cardMarkup).join('')}
      </div>
    </section>
  `;
}

function archivePage() {
  const genres = [...new Set(state.reviews.flatMap((review) => review.genre.split(',').map((item) => item.trim())))].sort((a, b) => a.localeCompare(b));
  const years = [...new Set(state.reviews.map((review) => review.releaseYear))].sort((a, b) => b - a);

  const query = state.filters.query.trim().toLowerCase();
  const filtered = sortReviews(state.reviews.filter((review) => {
    const matchesQuery = !query || [
      review.title,
      review.director,
      review.genre,
      review.review
    ].join(' ').toLowerCase().includes(query);

    const matchesGenre = state.filters.genre === 'all' || review.genre.split(',').map((item) => item.trim()).includes(state.filters.genre);
    const matchesYear = state.filters.year === 'all' || String(review.releaseYear) === state.filters.year;
    const matchesRating =
      state.filters.rating === 'all' ||
      (state.filters.rating === '4plus' && review.rating >= 4) ||
      (state.filters.rating === '3to3_5' && review.rating >= 3 && review.rating < 4) ||
      (state.filters.rating === 'under3' && review.rating < 3);

    return matchesQuery && matchesGenre && matchesYear && matchesRating;
  }), state.filters.sort);

  app.innerHTML = `
    <section class="page-header">
      <span class="kicker">Archive</span>
      <h1>All reviews</h1>
      <p>Search the full archive of ${state.reviews.length} reviews, then filter by genre, release year, rating, or sort order.</p>
    </section>

    <section class="archive-toolbar">
      <div class="toolbar-grid">
        <label>
          Search
          <input id="searchInput" type="search" placeholder="Title, director, genre, or review text" value="${escapeHtml(state.filters.query)}" />
        </label>

        <label>
          Genre
          <select id="genreSelect">
            <option value="all">All genres</option>
            ${genres.map((genre) => `<option value="${escapeHtml(genre)}" ${state.filters.genre === genre ? 'selected' : ''}>${escapeHtml(genre)}</option>`).join('')}
          </select>
        </label>

        <label>
          Release year
          <select id="yearSelect">
            <option value="all">All years</option>
            ${years.map((year) => `<option value="${year}" ${state.filters.year === String(year) ? 'selected' : ''}>${year}</option>`).join('')}
          </select>
        </label>

        <label>
          Rating
          <select id="ratingSelect">
            <option value="all" ${state.filters.rating === 'all' ? 'selected' : ''}>All ratings</option>
            <option value="4plus" ${state.filters.rating === '4plus' ? 'selected' : ''}>4.0 and up</option>
            <option value="3to3_5" ${state.filters.rating === '3to3_5' ? 'selected' : ''}>3.0 to 3.5</option>
            <option value="under3" ${state.filters.rating === 'under3' ? 'selected' : ''}>Under 3.0</option>
          </select>
        </label>

        <label>
          Sort
          <select id="sortSelect">
            <option value="newest" ${state.filters.sort === 'newest' ? 'selected' : ''}>Newest reviews</option>
            <option value="oldest" ${state.filters.sort === 'oldest' ? 'selected' : ''}>Oldest reviews</option>
            <option value="rating" ${state.filters.sort === 'rating' ? 'selected' : ''}>Highest rated</option>
            <option value="release" ${state.filters.sort === 'release' ? 'selected' : ''}>Newest films</option>
            <option value="title" ${state.filters.sort === 'title' ? 'selected' : ''}>Title A–Z</option>
          </select>
        </label>
      </div>
    </section>

    <p class="archive-count">${filtered.length} result${filtered.length === 1 ? '' : 's'}</p>

    <section class="archive-results">
      ${filtered.length ? filtered.map(archiveItemMarkup).join('') : '<div class="empty-state"><p>No reviews match those filters yet.</p></div>'}
    </section>
  `;

  document.getElementById('searchInput').addEventListener('input', (event) => {
    state.filters.query = event.target.value;
    archivePage();
  });
  document.getElementById('genreSelect').addEventListener('change', (event) => {
    state.filters.genre = event.target.value;
    archivePage();
  });
  document.getElementById('yearSelect').addEventListener('change', (event) => {
    state.filters.year = event.target.value;
    archivePage();
  });
  document.getElementById('ratingSelect').addEventListener('change', (event) => {
    state.filters.rating = event.target.value;
    archivePage();
  });
  document.getElementById('sortSelect').addEventListener('change', (event) => {
    state.filters.sort = event.target.value;
    archivePage();
  });
}

function reviewPage(slug) {
  const review = state.reviewBySlug.get(slug);

  if (!review) {
    app.innerHTML = `
      <section class="error-state">
        <p>That review could not be found.</p>
        <a class="back-link" href="#/archive">Back to archive</a>
      </section>
    `;
    return;
  }

  const paragraphs = review.review.split('\n\n').map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('');

  app.innerHTML = `
    <section class="review-page">
      <a class="back-link" href="#/archive">← Back to archive</a>
      <div class="review-grid">
        <article class="review-main">
          <header class="review-header">
            <span class="kicker">Review</span>
            <h1>${escapeHtml(review.title)}</h1>
            <div class="review-meta">
              <span class="pill">${escapeHtml(review.ratingLabel)}</span>
              <span>${escapeHtml(review.genre)}</span>
              <span>Directed by ${escapeHtml(review.director)}</span>
            </div>
          </header>
          <div class="review-copy">
            ${paragraphs}
          </div>
        </article>

        <aside class="review-sidebar">
          <h2>Review details</h2>
          <dl class="definition-list">
            <div class="definition-item">
              <dt>Title</dt>
              <dd>${escapeHtml(review.title)}</dd>
            </div>
            <div class="definition-item">
              <dt>Release year</dt>
              <dd>${escapeHtml(review.releaseYear)}</dd>
            </div>
            <div class="definition-item">
              <dt>Review date</dt>
              <dd>${escapeHtml(formatDate(review.reviewDate))}</dd>
            </div>
            <div class="definition-item">
              <dt>Genre</dt>
              <dd>${escapeHtml(review.genre)}</dd>
            </div>
            <div class="definition-item">
              <dt>Director</dt>
              <dd>${escapeHtml(review.director)}</dd>
            </div>
            <div class="definition-item">
              <dt>Rating</dt>
              <dd>${escapeHtml(review.ratingLabel)}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  `;
}

function aboutPage() {
  const years = [...new Set(state.reviews.map((review) => review.reviewDate.slice(0, 4)))].sort();
  const averageRating = (state.reviews.reduce((sum, review) => sum + review.rating, 0) / state.reviews.length).toFixed(2);

  app.innerHTML = `
    <section class="page-header">
      <span class="kicker">About</span>
      <h1>Mara Voss</h1>
      <p>The voice behind The Late Screening is fictional, but the archive is built to feel like the work of one consistent critic.</p>
    </section>

    <section class="about-grid">
      <article class="about-card">
        <h2>About the site</h2>
        <p>${escapeHtml(state.data.about.bio)}</p>
      </article>

      <aside class="stat-stack">
        <div class="stat-card">
          <strong>${state.reviews.length}</strong>
          <span class="muted">reviews in the archive</span>
        </div>
        <div class="stat-card">
          <strong>${years[0]}–${years[years.length - 1]}</strong>
          <span class="muted">review dates represented</span>
        </div>
        <div class="stat-card">
          <strong>${averageRating}/5</strong>
          <span class="muted">average rating across the archive</span>
        </div>
      </aside>
    </section>
  `;
}

function render() {
  if (!state.data) return;
  const route = getRoute();
  const path = route.path;

  if (path === '/' || path === '') {
    homePage();
    return;
  }
  if (path === '/archive') {
    archivePage();
    return;
  }
  if (path === '/about') {
    aboutPage();
    return;
  }
  if (path.startsWith('/review/')) {
    reviewPage(path.replace('/review/', ''));
    return;
  }

  app.innerHTML = `
    <section class="error-state">
      <p>That page does not exist.</p>
      <a class="back-link" href="#/">Return home</a>
    </section>
  `;
}

async function init() {
  try {
    const response = await fetch('reviews.json');
    if (!response.ok) {
      throw new Error('Could not load reviews.json');
    }
    const data = await response.json();
    state.data = data;
    state.reviews = data.reviews;
    state.reviewBySlug = new Map(data.reviews.map((review) => [review.slug, review]));
    render();
  } catch (error) {
    app.innerHTML = `
      <section class="error-state">
        <p>The archive could not be loaded. If you are opening this locally, serve the folder with a simple static server or deploy it to GitHub Pages.</p>
      </section>
    `;
    console.error(error);
  }
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', init);
