# Interactive Pricing Tier Slider Card

> A modern, interactive SaaS pricing calculator card featuring a custom-styled range slider, dynamic text updates, billing cycle toggle, and full responsive design.

## Features

- **Custom Range Slider** — Consistently styled `<input type="range">` across WebKit, Firefox, and Edge with a dynamic background track fill (`--fill-percent`).
- **Real-Time Calculation** — Vanilla JS updates pricing amounts, tier names, MAU counts, and feature checkmarks instantly as the slider moves.
- **Billing Cycle Toggle** — Switch between Monthly and Annual billing (with a 20% discount calculation) using a custom checkbox toggle.
- **Glassmorphic UI** — Sleek dark mode design with vibrant gradient accents (`#10b981` to `#06b6d4`), blurred backgrounds, and subtle glows.
- **Keyboard Accessible** — Full `tabindex` support and arrow-key navigation for the range input with live ARIA value updates.
- **High Contrast & Motion Safe** — Respects `forced-colors: active` for Windows high-contrast themes and `prefers-reduced-motion` for disabling layout transitions.

## Files

```
submissions/examples/pricing-calculator-card-em/
├── demo.html    — HTML structure for the slider, toggle, output display, and features
├── style.css    — Custom range input styling, design tokens, and responsive layout
├── script.js    — Pricing math logic, DOM updates, and event listeners
└── README.md    — Component documentation
```

## Design Tokens

| Variable | Default Value | Purpose |
|---|---|---|
| `--accent-primary` | `#10b981` | Emerald base accent |
| `--accent-gradient`| `linear-gradient(...)` | Track fill and button gradient |
| `--fill-percent`   | `50%` | Dynamically updated by JS for the slider track fill |
| `--card-bg`        | `#0f172a` | Dark surface color |

## Usage

```html
<!-- Wrapper for custom track fill -->
<div class="slider-wrapper">
  <input type="range" class="range-slider" id="usageSlider" min="0" max="4" step="1" value="2">
  <div class="slider-track-fill" id="sliderFill"></div>
</div>
```

## Acceptance Criteria ✅

- [x] Range input thumb and track styled cleanly across Chrome, Firefox, Safari, and Edge.
- [x] Price text updates smoothly as slider moves.
- [x] Track background fill adjusts dynamically behind the slider thumb.
- [x] Fully responsive on mobile screens.
- [x] Keyboard accessible (Arrow keys increment/decrement range values).
- [x] Matches repository CI requirements (`demo.html`, `style.css`).

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) project.
