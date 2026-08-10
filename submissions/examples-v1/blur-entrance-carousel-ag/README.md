# Blur-Entrance Carousel

Pure CSS carousel where each slide fades in from a blur when activated, addressing #54199.

## Files
- `demo.html` — three-slide carousel using radio-input navigation
- `style.css` — blur-to-sharp entrance transition, fully theme-able via CSS custom properties
- `README.md` — this file

## Usage
Open `demo.html`. Click a nav dot (or tab to it and press Space/Enter) to switch slides — the newly active slide transitions from blurred/scaled-up/transparent to sharp/full-opacity.

## How slide-switching works (no JS)
Each slide is paired with a hidden radio input (`#slide-1`, `#slide-2`, `#slide-3`) sharing the same `name`, so only one can be checked at a time. The visible `<label for="...">` dots toggle the radios. CSS general sibling selectors (`#slide-N:checked ~ .carousel-track .carousel-slide--N`) reveal the matching slide and highlight the matching dot.

## Customization
Exposed as CSS custom properties on `:root`:
- `--carousel-bg`, `--carousel-border` — track colors
- `--carousel-accent` — active dot color
- `--carousel-dot-inactive` — inactive dot color
- `--carousel-radius` — track corner rounding
- `--carousel-height` — track height (auto-reduced on small viewports)
- `--carousel-blur-amount` — how blurred an inactive slide is before it enters (default `14px`)
- `--carousel-duration` — transition duration (default `0.5s`)

## Accessibility
- Nav dots are real `<label>` elements bound to radio inputs, so they're natively keyboard-focusable and toggleable with Space/Enter, and `tabindex="0"` keeps them in the tab order.
- Each dot has visually-hidden (`sr-only`) text announcing which slide it selects.
- Visible `:focus-visible` outline on dots.
- Respects `prefers-reduced-motion: reduce` — the blur/scale/opacity transition is removed, and slides switch instantly.

## Notes on scope
Since this is pure CSS/HTML with no JavaScript, this carousel uses fixed, pre-defined slides selected via radio buttons rather than swipe/drag gestures or auto-play. Auto-advancing timed slides and touch-swipe support would require JavaScript and are out of scope here, per the "no JS" constraint; the radio-based dot navigation is the CSS-only equivalent.