# Zoom-In Accordion for Product Catalog Layouts

A pure CSS/HTML accordion built for product catalog pages, where each
collapsed row expands to reveal product details. Unlike a typical
slide-down accordion, the panel content **zooms in** (scale + fade) as it
reveals, giving expanded details a bit more visual weight.

## ✨ Features

- 100% CSS-driven — uses the checkbox hack, **zero JavaScript** required
  for the accordion itself (the demo's dark-mode toggle is the only script,
  and it's unrelated to the component)
- Smooth height reveal via the `grid-template-rows: 0fr → 1fr` technique
  (no `max-height` guessing games)
- Content zooms in from `scale(0.85)` + `opacity: 0` to full scale/opacity
  as each panel opens
- Chevron indicator rotates 180° on open
- Dark mode support (`data-theme="dark"` or OS `prefers-color-scheme`)
- Fully responsive — comfortable tap targets and spacing down to small
  mobile widths
- Respects `prefers-reduced-motion` (transitions collapse to effectively
  instant, no scale/zoom motion)
- Keyboard accessible — built on native `<input type="checkbox">` +
  `<label>`, with visible focus states
- BEM-style class naming, namespaced under `ease-*`

## 📦 Files

| File        | Purpose                                                          |
| ----------- | ----------------------------------------------------------------- |
| `demo.html` | Showcase page — a 4-item product catalog accordion                |
| `style.css` | The reusable component styles + demo page styles                  |
| `README.md` | This file                                                          |

## 🚀 Usage

Each accordion item is a hidden checkbox + label pair, followed by the
panel. No JavaScript is required — the `:checked` pseudo-class drives
everything.

```html
<div class="ease-accordion">
  <div class="ease-accordion__item">
    <input class="ease-accordion__toggle" type="checkbox" id="acc-1" />
    <label class="ease-accordion__header" for="acc-1">
      <span class="ease-accordion__thumb" aria-hidden="true">🎧</span>
      <span class="ease-accordion__title-group">
        <span class="ease-accordion__name">Wireless Headphones</span>
        <span class="ease-accordion__price">$79.99</span>
      </span>
      <span class="ease-accordion__chevron" aria-hidden="true">▾</span>
    </label>
    <div class="ease-accordion__panel">
      <div class="ease-accordion__panel-inner">
        <div class="ease-accordion__content">
          <p>Product description goes here.</p>
          <button class="ease-accordion__btn" type="button">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Repeat .ease-accordion__item for each product -->
</div>
```

Each `.ease-accordion__item` is independent — checkboxes are not
radio-grouped, so multiple items can be open at once. If you want a
single-open-at-a-time behavior, swap the `<input type="checkbox">` for
`<input type="radio" name="ease-accordion-group">` with unique `id`s.

## 🎨 Customization

All colors, spacing, and timing are exposed as CSS custom properties on
`:root`:

```css
:root {
  --ease-acc-bg: #ffffff;
  --ease-acc-text: #1a1a1a;
  --ease-acc-accent: #4f46e5;
  --ease-acc-accent-bg: #eef2ff;
  --ease-acc-radius: 12px;
  --ease-acc-duration: 380ms;
  --ease-acc-easing: cubic-bezier(0.22, 1, 0.36, 1);
}
```

### Dark mode

Activates automatically via `prefers-color-scheme: dark`, or can be forced:

```html
<html data-theme="dark">
```

## ♿ Accessibility

- Uses native `<input type="checkbox">` + `<label for="">`, so it's
  operable with keyboard (Tab + Space/Enter) and works without any
  ARIA polyfills.
- A visible focus ring (`:focus-visible`) appears on the header when the
  underlying checkbox is focused via keyboard.
- Users with `prefers-reduced-motion: reduce` get near-instant state
  changes instead of the height/zoom animation.

## 📱 Responsive Behavior

Padding, thumbnail size, and spacing scale down at `max-width: 480px` so
the accordion stays comfortable to tap on small phones while keeping the
same zoom-in interaction on every viewport.

## 🧪 Browser Support

Uses standard CSS only — custom properties, the checkbox `:checked`
selector, and `grid-template-rows` transitions — all supported in current
versions of Chrome, Firefox, Safari, and Edge.