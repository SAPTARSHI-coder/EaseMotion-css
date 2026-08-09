# Border Draw Accordion

A premium accordion for EaseMotion CSS, inspired by modern medical dashboards and Linear/Vercel-style SaaS interfaces, where a border traces itself around each section header in one continuous stroke on hover and keyboard focus. Built entirely with HTML5 and CSS3 — no JavaScript.

## 🧩 Component Overview

Each accordion section is a native `<details>`/`<summary>` element, so opening, closing, keyboard interaction, and independent multi-section expand/collapse all come from the browser for free. The "border draw" effect uses exactly two pseudo-elements per header — `::before` traces the top edge and then the right edge, `::after` continues with the bottom edge and then the left edge — with staggered transition delays so the four sides complete in sequence, reading as one unbroken stroke tracing the full rectangle rather than four sides animating independently.

The demo content frames the accordion as a patient dashboard (Patient Monitoring, Vitals History, Medication Schedule, Lab Results, Care Team Notes), matching the medical-dashboard design brief.

## ✨ Features

- Premium single-stroke border-draw animation using only two pseudo-elements (`::before` and `::after`) per header
- Native `<details>`/`<summary>` accordion — multiple sections can be open simultaneously, with zero custom JavaScript state management
- Smooth `cubic-bezier` easing throughout, including an emphasized overshoot curve on the chevron rotation
- Icon badges that shift from soft tinted to a solid gradient fill on hover/open
- Rotating chevron indicator built from a plain rotated border corner (no icon asset)
- Subtle fade-and-lift entrance animation on each panel's content when opened
- Distinct `:focus-visible` outline layered on top of the border-draw effect, so keyboard focus is never dependent on the drawn border alone
- Fluid, `clamp()`-based spacing and typography instead of fixed pixel values
- `prefers-reduced-motion` support disables the border draw, chevron rotation, and panel fade
- Fully responsive across desktop, tablet, and mobile with no layout shift or overflow

## 📁 Folder Structure

submissions/examples/border-draw-accordion-santoshikumbhar3-art/
├── demo.html   # Five-section accordion with realistic dashboard content
├── style.css   # Design tokens, border-draw mechanics, layout, responsive rules
└── README.md   # This file

## ⚙ Installation

No build tools or dependencies are required — this is a static HTML/CSS component.

```bash
# Clone the repository
git clone https://github.com/your-username/easemotion-css.git

# Navigate to this component's folder
cd easemotion-css/submissions/examples/border-draw-accordion-santoshikumbhar3-art

# Open the demo directly in your browser
open demo.html   # macOS
# or
start demo.html  # Windows
```

## 🚀 Usage

1. Open `demo.html` in any modern browser and hover or tab to a section header to see the border trace itself.
2. Click a header, or focus it and press Enter/Space, to expand or collapse that section — each section is independent.
3. To reuse the component, copy a single `<details class="accordion-item">` block and update its icon, title, and panel content. Add the `open` attribute to any `<details>` you want expanded by default.

## 🎨 Customization

All key visual and motion properties live in `:root` as CSS custom properties:

| Variable | Controls |
|---|---|
| `--accent`, `--accent-dark`, `--accent-soft` | The teal accent used for the border stroke, icon badges, and open-state chevron |
| `--stroke-width`, `--stroke-color` | Thickness and colour of the drawn border |
| `--duration-stroke` | How long each side of the border takes to draw — the full stroke takes roughly 4× this value |
| `--item-radius` | Corner rounding for each accordion item |
| `--item-shadow`, `--item-shadow-open` | Resting vs. expanded drop shadow |

To change the stroke's drawing order (e.g. start from the bottom-left instead of the top-left), swap which corner `::before`/`::after` are pinned to and adjust their `border-*-radius` properties to match.

## 📱 Responsive Design

| Breakpoint | Behavior |
|---|---|
| 🖥 Desktop (> 768px) | Full-width accordion up to a comfortable max-width, generous fluid padding |
| 📟 Tablet (≤ 768px) | Accordion expands to fill its container width |
| 📱 Mobile (≤ 480px) | Icon badges and header gaps shrink slightly to prevent wrapping or overflow on narrow headers |

Spacing and type sizing use `clamp()` throughout rather than fixed breakpivot values, so the accordion scales smoothly between the defined breakpoints rather than jumping.

## ♿ Accessibility

- Built on native `<details>`/`<summary>`, which carries correct expand/collapse semantics and keyboard behavior (Enter/Space to toggle, native Tab order) without any custom ARIA state management.
- The default browser disclosure triangle is removed only visually (`::-webkit-details-marker { display: none }`); the custom chevron is purely decorative (`aria-hidden="true"`) since the semantics still come from the native element.
- `:focus-visible` applies a solid, clearly visible outline distinct from the hover-triggered border draw, so keyboard users are never relying on a thin decorative stroke as their only focus cue.
- Icons throughout are marked `aria-hidden="true"` since their meaning is already conveyed by the adjacent text label.
- Colour choices maintain strong contrast between text and the light background in both resting and hover states.
- All animation — the border draw, chevron rotation, and panel fade-in — is disabled under `prefers-reduced-motion: reduce`.

## 🌐 Browser Compatibility

Built with widely supported CSS features:

- `<details>`/`<summary>` — supported in all current major browsers (Chrome, Edge, Firefox, Safari)
- CSS custom properties, Flexbox, transitions with per-property delays, `:focus-visible` — broadly supported

No experimental or vendor-specific features are required beyond the `::-webkit-details-marker` marker-hiding rule, which is a no-op (safely ignored) in browsers that don't use that pseudo-element.

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.