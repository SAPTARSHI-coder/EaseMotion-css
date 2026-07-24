# Glitch-Flicker Carousel

Pure CSS carousel where each slide arrives with a short glitch-style flicker, addressing #54203.

## Files
- `demo.html` — three-slide carousel using radio-input navigation
- `style.css` — flicker entrance keyframes, fully theme-able via CSS custom properties
- `README.md` — this file

## Usage
Open `demo.html`. Click a nav dot (or tab to it and press Space/Enter) to switch slides — the newly active slide plays a brief flicker-in sequence before settling at full opacity.

## How slide-switching works (no JS)
Same pattern as the Blur-Entrance Carousel: hidden radio inputs sharing one `name`, toggled by visible `<label>` dots, revealed via `#slide-N:checked ~ .carousel-track .carousel-slide--N`.

## Customization
Exposed as CSS custom properties on `:root`:
- `--carousel-bg`, `--carousel-border`, `--carousel-text` — panel colors
- `--carousel-accent` — active dot color
- `--carousel-dot-inactive` — inactive dot color
- `--carousel-radius` — track corner rounding
- `--carousel-height` — track height (auto-reduced on small viewports)
- `--carousel-duration` — flicker sequence duration (default `0.6s`)

## Accessibility
- Nav dots are real `<label>` elements bound to radio inputs — keyboard-focusable, toggleable with Space/Enter, `tabindex="0"`.
- Each dot has visually-hidden text announcing which slide it selects.
- Visible `:focus-visible` outline on dots.
- **Photosensitivity consideration:** the flicker is intentionally a handful of low-contrast opacity/offset steps over ~0.6s using `steps(1, end)`, not a fast high-contrast strobe, to keep it well clear of seizure-trigger thresholds. It also plays once per slide activation rather than looping.
- Respects `prefers-reduced-motion: reduce` — the flicker animation is fully disabled and the slide simply appears at full opacity.

## Notes on scope
Pure CSS/HTML, no JavaScript. As with the Blur-Entrance Carousel, navigation is fixed radio-button-driven slides rather than swipe/drag or auto-play, since those would require JS.