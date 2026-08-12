# Zoom-In Carousel — Neumorphic Soft

A pure CSS carousel using a smooth zoom-in transition, styled for
neumorphic ("soft UI") layouts — raised and inset shadows on a
monochrome background. Built with radio inputs and the `:checked`
selector — zero JavaScript.

## Files
- `demo.html` — carousel markup (radio-driven slides + dot navigation)
- `style.css` — zoom-in transition, neumorphic shadows, dot indicators

## Usage
Open `demo.html` in a browser. Click a dot, or tab to the carousel
and use arrow keys (native radio group behavior) to switch slides —
no mouse required.

## Customization
Exposed via CSS custom properties on `.zin-carousel`:
- `--zin-duration` — transition duration (default `0.5s`)
- `--zin-easing` — transition easing curve (default `cubic-bezier(.22,1,.36,1)`)
- `--zin-scale-from` — starting scale for the zoom-in effect (default `0.85`)

Example:
```css
.zin-carousel {
  --zin-duration: 0.8s;
  --zin-easing: ease-out;
  --zin-scale-from: 0.7;
}
```

## Accessibility
- Navigation uses native `<input type="radio">` elements, so slides
  are reachable and switchable via keyboard (Tab + Arrow keys) without
  any JavaScript or `tabindex` workarounds
- Dot labels include `aria-label` for screen reader context
- Respects `prefers-reduced-motion` by disabling the zoom/opacity transition

## Notes
Neumorphic shadows rely on a light, low-contrast background (`#e0e5ec`
here). If embedding into a page with a different background color,
adjust the shadow colors in `style.css` to match for the effect to read correctly.