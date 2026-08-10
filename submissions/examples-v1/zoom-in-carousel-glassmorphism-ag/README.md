# Zoom-In Carousel — Glassmorphism

A pure CSS carousel using a smooth zoom-in transition, styled for
glassmorphism UI layouts (frosted blur, translucent layering, soft
gradient backdrop). Built with radio inputs and the `:checked`
selector — zero JavaScript.

## Files
- `demo.html` — carousel markup (radio-driven slides + dot navigation)
- `style.css` — zoom-in transition, glass effect, dot indicators

## Usage
Open `demo.html` in a browser. Click a dot, or tab to the carousel
and use arrow keys (native radio group behavior) to switch slides —
no mouse required.

## Customization
Exposed via CSS custom properties on `.zig-carousel`:
- `--zig-duration` — transition duration (default `0.5s`)
- `--zig-easing` — transition easing curve (default `cubic-bezier(.22,1,.36,1)`)
- `--zig-scale-from` — starting scale for the zoom-in effect (default `0.85`)

Example:
```css
.zig-carousel {
  --zig-duration: 0.8s;
  --zig-easing: ease-out;
  --zig-scale-from: 0.7;
}
```

## Accessibility
- Navigation uses native `<input type="radio">` elements, so slides
  are reachable and switchable via keyboard (Tab + Arrow keys) without
  any JavaScript or `tabindex` workarounds
- Dot labels include `aria-label` for screen reader context
- Respects `prefers-reduced-motion` by disabling the zoom/opacity transition

## Notes
`backdrop-filter` requires a modern browser (Safari, Chrome, Firefox
103+, Edge). A fallback translucent background is applied via
`rgba()` so the carousel still looks reasonable where blur isn't supported.