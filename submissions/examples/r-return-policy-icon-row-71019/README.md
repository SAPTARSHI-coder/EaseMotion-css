# CSS Return Policy Icon Row

A responsive policy information row built with pure HTML and CSS.

## Features

- Return policy card
- Warranty information card
- Shipping information card
- CSS-only icons
- Smooth hover interactions
- Responsive layout
- Keyboard-friendly semantic structure
- Reduced-motion support
- No JavaScript required

## Files

- `demo.html` — Interactive demonstration
- `style.css` — Component styling
- `README.md` — Documentation

## Usage

Each policy item uses a semantic `<article>` element:

```html
<article class="policy-card">
  <div class="policy-icon" aria-hidden="true">
    <span class="icon-return">↩</span>
  </div>

  <div class="policy-content">
    <h2>Easy Returns</h2>
    <p>
      Return eligible products within 30 days of delivery.
    </p>
  </div>
</article>