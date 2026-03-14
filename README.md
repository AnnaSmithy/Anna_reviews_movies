# The Late Screening Compact Build

This version keeps the site under 10 files by using a single-page static app.

Files:
- `index.html`
- `styles.css`
- `app.js`

Routes use URL hashes, so each review still has its own dedicated link, for example:
- `#/`
- `#/archive`
- `#/about`
- `#/review/mickey-17`

This works well on GitHub Pages because it avoids server-side routing requirements.
