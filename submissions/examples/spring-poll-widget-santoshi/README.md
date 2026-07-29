# Spring Poll Widget

A gaming-inspired poll card for EaseMotion CSS with spring-style hover, focus, and selection animations. Built entirely with HTML5 and CSS3 — no JavaScript.

## 🧩 Component Overview

Spring Poll Widget presents a single-choice poll (radio group) styled like a modern game menu: dark surfaces, neon cyan/magenta accents, and a chunky display typeface. Every option's result bar and percentage are visible in the DOM from the start — selecting an option doesn't reveal hidden data, it spotlights your choice with a spring-style "pop," a glowing border, and a "Your Pick" badge, all driven by the plain CSS `:checked` sibling selector.

The demo poll asks *"Which genre should EaseMotion CSS power next?"* with four options — RPG Dashboard, Racing HUD, Puzzle Game UI, and Strategy War Room — each carrying a sample result percentage.

## ✨ Features

- Gaming-inspired dark UI with neon cyan/magenta gradient accents
- Spring-style entry, hover, and selection animations using overshooting `cubic-bezier` curves
- Selecting an option triggers a spring "pop," a glowing border, and a "Your Pick" badge — all via `input:checked + label`, no `:has()` dependency required
- Animated bar-fill growth on page load
- Real, native `<input type="radio">` controls (visually hidden, not `display:none`) so keyboard and assistive-tech behavior stays standard
- Distinct `:focus-visible` ring on the label, separate from the hover state
- Semantic `<fieldset>` / `<legend>` grouping for the option set
- Flexbox-based layout throughout — no fixed widths, so the card reflows naturally at any container size
- `prefers-reduced-motion` support disables all animation
- Fully responsive across desktop, tablet, and mobile

## 🛠 Technologies Used

- HTML5 (`<form>`, `<fieldset>`, `<legend>`, native radio inputs, inline SVG icons)
- CSS3 (Flexbox, custom properties, keyframe animations, overshoot `cubic-bezier` easing, media queries)
- Google Fonts: Orbitron (display/headings), Inter (body text)
- No JavaScript, no external UI frameworks

## 📁 Folder Structure

submissions/examples/spring-poll-widget-santoshikumbhar3-art/
├── demo.html   # Poll markup with realistic sample options and results
├── style.css   # Design tokens, spring animations, layout, responsive rules
└── README.md   # This file

## ⚙ Installation

No build tools or dependencies are required — this is a static HTML/CSS component.

```bash
# Clone the repository
git clone https://github.com/your-username/easemotion-css.git

# Navigate to this component's folder
cd easemotion-css/submissions/examples/spring-poll-widget-santoshikumbhar3-art

# Open the demo directly in your browser
open demo.html   # macOS
# or
start demo.html  # Windows
```

## 🚀 Usage

1. Open `demo.html` in any modern browser to preview the poll.
2. Click, tap, or tab-and-press-Space on an option to see the spring selection effect.
3. To reuse the component, copy the `.poll-widget` markup block and update:
   - The question in `<h2 id="poll-heading">`
   - Each `<input>`'s shared `name` attribute (must match across all options in one poll)
   - Each option's icon, label text, and `--result` percentage (set inline via `style="--result: NN%;"` on `.option-bar-fill`)
4. Since this is a pure-CSS component, actually tallying and persisting real votes requires wiring the form up to a backend or adding your own JavaScript — this component provides the presentation layer only.

## 🎨 Customization

| Variable | Controls |
|---|---|
| `--accent-cyan`, `--accent-magenta` | The two accent colours used in bars, icons, and the "Your Pick" badge |
| `--widget-bg`, `--option-bg`, `--option-bg-selected` | Surface colours for the card and its options at rest/selected |
| `--ease-spring`, `--ease-spring-soft` | The overshoot curves driving the spring feel — adjust the overshoot amount by tweaking the second and fourth values |
| `--duration-spring` | How long the selection "pop" animation takes |
| `--widget-radius` | Corner rounding for the whole card |

## ♿ Accessibility Notes

- All poll results (bars and percentages) exist in the DOM as regular, non-hidden text at all times, so screen reader users hear the full results immediately rather than only after making a selection.
- Radio inputs remain real, focusable `<input>` elements — visually hidden with `opacity: 0` and sized to fully overlay their label, not removed from the accessibility tree with `display: none`.
- A visually hidden `<legend>` gives the option group a clear accessible name without duplicating the visible heading text.
- Keyboard focus is styled explicitly via `:focus-visible` on the label (since the input itself is invisible), producing a ring distinct from the hover-only lift.
- Color choices maintain strong contrast between text and the dark widget background.
- All animation respects `prefers-reduced-motion: reduce`.

## 🌐 Browser Compatibility

Built with broadly supported CSS features — no experimental selectors:

- The `:checked` sibling combinator (`input:checked + label`) — supported in effectively all browsers that support radio inputs
- CSS custom properties, Flexbox, `:focus-visible` — broadly supported in all current major browsers (Chrome, Edge, Firefox, Safari)

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.