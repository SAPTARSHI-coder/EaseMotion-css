# Interactive Timeline

A vertical timeline with scroll-reveal animations, expandable detail cards, and a progressively drawn connecting line.

## Features

- Items slide in from the left with staggered opacity on scroll
- Connecting line draws progressively from top to bottom
- Click a card to expand hidden detail content
- Dot markers transition from inactive to active colour when visible
- Fully customizable via CSS custom properties

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--it-duration` | `0.6s` | Transition duration for item reveal and card expand |
| `--it-stagger` | `0.15s` | Stagger delay between consecutive timeline items |
| `--it-line-color` | `#334155` | Colour of the connecting line |
| `--it-dot-color` | `#334155` | Inactive dot colour |
| `--it-active-dot` | `#3b82f6` | Active / visible dot colour |
| `--it-card-bg` | `#1e293b` | Background colour of timeline cards |
| `--it-radius` | `10px` | Border radius for timeline cards |

## Usage

Include `style.css` and `script.js`. Add `it-item` blocks inside `it-timeline` with a `data-year` attribute, a dot, and a card containing `.it-summary` and `.it-details`. The Intersection Observer in the script handles scroll-reveal automatically.
