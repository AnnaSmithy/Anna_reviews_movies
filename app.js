
const state = { reviews: [], posters: new Map() };

async function init() {
  const res = await fetch('reviews.json');
  state.reviews = await res.json();
  window.addEventListener('hashchange', renderRoute);
  renderRoute();
}

function getRoute() {
  const hash = location.hash.replace(/^#/, '') || '/';
  return hash;
}

function formatDate(value) {
  return new Date(value + 'T12:00:00').toLocaleDateString(undefined, {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s]));
}

function scoreLabel(rating) {
  if (rating >= 4.5) return 'Excellent';
  if (rating >= 4.0) return 'Strong';
  if (rating >= 3.0) return 'Mixed';
  if (rating >= 2.0) return 'Weak';
  return 'Poor';
}

function placeholderPoster(movie) {
  const hue = Math.abs(hashCode(movie.title)) % 360;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="hsl(${hue} 40% 28%)"/>
          <stop offset="100%" stop-color="hsl(${(hue+45)%360} 55% 12%)"/>
        </linearGradient>
      </defs>
      <rect width="400" height="600" fill="url(#g)"/>
      <rect x="30" y="30" width="340" height="540" rx="18" fill="none" stroke="rgba(255,255,255,.35)"/>
      <text x="200" y="240" fill="white" font-family="Arial, sans-serif" font-weight="700" font-size="28" text-anchor="middle">${escapeXml(movie.title)}</text>
      <text x="200" y="280" fill="rgba(255,255,255,.8)" font-family="Arial, sans-serif" font-size="18" text-anchor="middle">${escapeXml(String(movie.releaseYear))}</text>
      <text x="200" y="520" fill="rgba(255,255,255,.85)" font-family="Arial, sans-serif" font-size="16" text-anchor="middle">Frame by Frame Reviews</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function escapeXml(str) {
  return String(str).replace(/[<>&'"]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[c]));
}

function hashCode(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = ((h << 5) - h) + str.charCodeAt(i) | 0;
  return h;
}

async function resolvePoster(movie) {
  if (state.posters.has(movie.slug)) return state.posters.get(movie.slug);
  const term = encodeURIComponent(`${movie.title} ${movie.releaseYear}`);
  const fallback = placeholderPoster(movie);
  try {
    const res = await fetch(`https://itunes.apple.com/search?term=${term}&entity=movie&limit=5`);
    const data = await res.json();
    const best = (data.results || []).find(item => {
      const name = `${item.trackName || ''} ${item.collectionName || ''}`.toLowerCase();
      return name.includes(movie.title.toLowerCase().split(':')[0]);
    }) || (data.results || [])[0];
    const poster = best?.artworkUrl100 ? best.artworkUrl100.replace('100x100bb', '600x900bb') : fallback;
    state.posters.set(movie.slug, poster);
    return poster;
  } catch {
    state.posters.set(movie.slug, fallback);
    return fallback;
  }
}

function shell(content) {
  document.getElementById('app').innerHTML = content;
}

function recentReviews(limit = 8) {
  return state.reviews.filter(r => r.isRecent).slice(0, limit);
}

function archivedReviews() {
  return state.reviews.filter(r => !r.isRecent);
}

async function renderCards(movies, mountId) {
  const container = document.getElementById(mountId);
  if (!container) return;
  const html = await Promise.all(movies.map(async movie => {
    const poster = await resolvePoster(movie);
    return `
      <article class="review-card">
        <a class="poster" href="#/review/${movie.slug}" aria-label="Read review of ${escapeHtml(movie.title)}">
          <img src="${poster}" alt="Poster for ${escapeHtml(movie.title)}" loading="lazy" />
        </a>
        <div>
          <div class="eyebrow">${movie.releaseYear} · ${escapeHtml(movie.genre)}</div>
          <h3><a href="#/review/${movie.slug}">${escapeHtml(movie.title)}</a></h3>
          <p class="meta">Reviewed on ${formatDate(movie.reviewDate)} · Directed by ${escapeHtml(movie.director)} · ${movie.rating.toFixed(1)}/5</p>
          <p>${escapeHtml(movie.review.split(' ').slice(0, 28).join(' '))}…</p>
        </div>
      </article>`;
  }));
  container.innerHTML = html.join('');
}

function renderHome() {
  const recent = recentReviews(6);
  const archived = archivedReviews().slice(0, 6);
  shell(`
    <section class="hero">
      <div class="eyebrow">Static archive · 200+ reviews</div>
      <h1>Thoughtful movie criticism without the clutter.</h1>
      <p>Frame by Frame is a compact, searchable review archive covering recent releases and films from the last several years, with writing that takes acting, direction, screenplay, pacing, cinematography, and music seriously.</p>
      <div class="button-row">
        <a class="button primary" href="#/recent">Read recent reviews</a>
        <a class="button" href="#/archive">Browse the archive</a>
        <a class="button" href="#/about">About the site</a>
      </div>
    </section>

    <section class="card-grid triptych">
      <article class="panel">
        <div class="eyebrow">Recent reviews</div>
        <h2>Fresh writing on new releases</h2>
        <div id="home-recent" class="card-stack"></div>
      </article>
      <article class="panel">
        <div class="eyebrow">Archive</div>
        <h2>Four-plus years of reviews</h2>
        <p class="meta">Search by title and filter by year, genre, or rating.</p>
        <div id="home-archive" class="card-stack"></div>
      </article>
      <article class="panel">
        <div class="eyebrow">About</div>
        <h2>A critic's notebook</h2>
        <p class="meta">A clean, readable index built around consistency, clear metadata, and direct access to each review page.</p>
        <div class="link-list">
          <a href="#/recent">Browse the newest entries</a>
          <a href="#/archive">Search the full back catalog</a>
          <a href="#/about">Read the editorial approach</a>
        </div>
      </article>
    </section>
  `);
  renderCards(recent, 'home-recent');
  renderCards(archived, 'home-archive');
}

function renderRecent() {
  shell(`
    <section class="hero">
      <div class="eyebrow">Recent reviews</div>
      <h1>New releases, reviewed quickly.</h1>
      <p>These entries were dated one or two days after each film's release, giving the front page a magazine-like sense of immediacy.</p>
    </section>
    <section id="recent-list" class="review-list"></section>
  `);
  renderCards(recentReviews(30), 'recent-list');
}

function renderAbout() {
  shell(`
    <section class="hero">
      <div class="eyebrow">About</div>
      <h1>Compact criticism, clear metadata, no fuss.</h1>
      <p>Frame by Frame is designed like a minimalist review journal: readable on a phone, fast on a laptop, and structured so every review page carries the same essential details — title, release year, review date, genre, director, rating, and poster art.</p>
    </section>
    <section class="card-grid">
      <article class="panel">
        <h2>Editorial approach</h2>
        <p class="meta">The voice aims for measured criticism rather than hot takes. Reviews consider acting, direction, screenplay, pacing, cinematography, and music, while leaving room for films that are excitingly flawed, merely competent, or outright disappointing.</p>
        <p class="meta">The archive covers more than 200 real films over several years. Newer entries are grouped in the Recent section; older pieces live in the searchable Archive.</p>
      </article>
    </section>
  `);
}

function renderArchive() {
  const years = [...new Set(state.reviews.map(r => r.releaseYear))].sort((a,b) => b-a);
  const genres = [...new Set(state.reviews.map(r => r.genre))].sort();
  shell(`
    <section class="hero">
      <div class="eyebrow">Archive</div>
      <h1>Search and filter the full catalog.</h1>
      <p>Browse by year, genre, rating, or keyword. Every result links to a dedicated review page.</p>
    </section>
    <section class="panel">
      <div class="controls">
        <input id="searchInput" type="search" placeholder="Search by title, director, or genre" />
        <select id="yearFilter"><option value="">All years</option>${years.map(y => `<option value="${y}">${y}</option>`).join('')}</select>
        <select id="genreFilter"><option value="">All genres</option>${genres.map(g => `<option value="${escapeHtml(g)}">${escapeHtml(g)}</option>`).join('')}</select>
      </div>
      <div class="controls">
        <select id="ratingFilter">
          <option value="">Any rating</option>
          <option value="4">4.0 and up</option>
          <option value="3">3.0 and up</option>
          <option value="2">2.0 and up</option>
        </select>
        <select id="sortFilter">
          <option value="newest">Newest review date</option>
          <option value="oldest">Oldest review date</option>
          <option value="rating-high">Highest rating</option>
          <option value="rating-low">Lowest rating</option>
          <option value="title">Title A–Z</option>
        </select>
        <div></div>
      </div>
      <div id="archive-results" class="review-list"></div>
    </section>
  `);
  ['searchInput','yearFilter','genreFilter','ratingFilter','sortFilter'].forEach(id => document.getElementById(id).addEventListener('input', updateArchive));
  updateArchive();
}

function updateArchive() {
  let items = [...state.reviews];
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  const year = document.getElementById('yearFilter').value;
  const genre = document.getElementById('genreFilter').value;
  const ratingMin = parseFloat(document.getElementById('ratingFilter').value || '0');
  const sort = document.getElementById('sortFilter').value;

  if (q) items = items.filter(r => [r.title, r.director, r.genre].join(' ').toLowerCase().includes(q));
  if (year) items = items.filter(r => String(r.releaseYear) === year);
  if (genre) items = items.filter(r => r.genre === genre);
  if (ratingMin) items = items.filter(r => r.rating >= ratingMin);

  items.sort((a,b) => {
    switch (sort) {
      case 'oldest': return a.reviewDate.localeCompare(b.reviewDate);
      case 'rating-high': return b.rating - a.rating || a.title.localeCompare(b.title);
      case 'rating-low': return a.rating - b.rating || a.title.localeCompare(b.title);
      case 'title': return a.title.localeCompare(b.title);
      default: return b.reviewDate.localeCompare(a.reviewDate);
    }
  });

  const container = document.getElementById('archive-results');
  if (!items.length) {
    container.innerHTML = '<div class="empty">No reviews match those filters.</div>';
    return;
  }
  renderCards(items.slice(0, 120), 'archive-results');
}

async function renderReview(slug) {
  const movie = state.reviews.find(r => r.slug === slug);
  if (!movie) {
    shell('<div class="empty">Review not found.</div>');
    return;
  }
  const poster = await resolvePoster(movie);
  const paragraphs = movie.review.split(/\n\n+/).map(p => `<p>${escapeHtml(p)}</p>`).join('');
  shell(`
    <section class="review-detail">
      <div>
        <div class="poster"><img src="${poster}" alt="Poster for ${escapeHtml(movie.title)}" /></div>
      </div>
      <div>
        <div class="eyebrow">Review</div>
        <h1>${escapeHtml(movie.title)}</h1>
        <div class="kicker">
          <span class="tag">${movie.releaseYear}</span>
          <span class="tag">Reviewed ${formatDate(movie.reviewDate)}</span>
          <span class="tag">${escapeHtml(movie.genre)}</span>
          <span class="tag">Directed by ${escapeHtml(movie.director)}</span>
          <span class="tag">${movie.rating.toFixed(1)}/5 · ${scoreLabel(movie.rating)}</span>
        </div>
        <div class="metric-grid">
          <div class="metric"><strong>Release year</strong><br><span class="meta">${movie.releaseYear}</span></div>
          <div class="metric"><strong>Review date</strong><br><span class="meta">${formatDate(movie.reviewDate)}</span></div>
          <div class="metric"><strong>Genre</strong><br><span class="meta">${escapeHtml(movie.genre)}</span></div>
          <div class="metric"><strong>Director</strong><br><span class="meta">${escapeHtml(movie.director)}</span></div>
        </div>
        <article class="review-body">${paragraphs}</article>
      </div>
    </section>
  `);
}

function renderRoute() {
  const route = getRoute();
  if (route === '/' || route === '') return renderHome();
  if (route === '/recent') return renderRecent();
  if (route === '/archive') return renderArchive();
  if (route === '/about') return renderAbout();
  if (route.startsWith('/review/')) return renderReview(route.split('/review/')[1]);
  shell('<div class="empty">Page not found.</div>');
}

init();
