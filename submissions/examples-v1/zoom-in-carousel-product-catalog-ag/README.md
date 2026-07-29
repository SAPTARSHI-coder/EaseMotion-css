# Zoom-In Carousel — Product Catalog

A pure CSS carousel using a smooth zoom-in transition, styled for
product catalog layouts. Built with radio inputs and the `:checked`
selector — zero JavaScript.

## Files
- `demo.html` — carousel markup (radio-driven slides + dot navigation)
- `style.css` — zoom-in transition, dot indicators, responsive layout

## Usage
Open `demo.html` in a browser. Click a dot, or tab to the carousel
and use arrow keys (native radio group behavior) to switch slides —
no mouse required.

## Customization
Exposed via CSS custom properties on `.zic-carousel`:
- `--zic-duration` — transition duration (default `0.5s`)
- `--zic-easing` — transition easing curve (default `cubic-bezier(.22,1,.36,1)`)
- `--zic-scale-from` — starting scale for the zoom-in effect (default `0.85`)

Example:
```css
.zic-carousel {
  --zic-duration: 0.8s;
  --zic-easing: ease-out;
  --zic-scale-from: 0.7;
}
```

## Accessibility
- Navigation uses native `<input type="radio">` elements, so slides
  are reachable and switchable via keyboard (Tab + Arrow keys) without
  any JavaScript or `tabindex` workarounds
- Dot labels include `aria-label` for screen reader context
- Respects `prefers-reduced-motion` by disabling the zoom/opacity transition