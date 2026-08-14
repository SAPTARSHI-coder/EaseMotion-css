# CSS Retrospective Card

A responsive sprint retrospective card built with pure HTML and CSS.

## Features

- Went Well section
- Improve section
- Action Items section
- Color-coded categories
- Smooth hover animation
- Responsive layout
- Semantic HTML
- Reduced-motion support
- No JavaScript required

## Files

- `demo.html` — Interactive demonstration
- `style.css` — Component styling
- `README.md` — Documentation

## Usage

Use the `retro-card` class for each retrospective category.

```html
<article class="retro-card positive">
  <div class="card-top">
    <div class="card-icon" aria-hidden="true">✓</div>
    <span class="card-count">03</span>
  </div>

  <p class="category">Went well</p>

  <h2>What worked?</h2>

  <ul>
    <li>Clear sprint priorities</li>
    <li>Fast team communication</li>
    <li>Consistent code reviews</li>
  </ul>
</article>