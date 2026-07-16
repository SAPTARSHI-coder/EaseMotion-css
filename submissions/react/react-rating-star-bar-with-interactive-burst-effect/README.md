# React Rating Star Bar with Interactive Burst Effect

## Description
A modular, copy-paste ready React rating component. Clicking a star sets the rating and triggers a small radiating "burst" particle animation from that star. Hovering previews the rating before committing on click.

## Files
- `RatingStarBar.jsx` — the component
- `style.css` — required styling (burst animation, star fill states)
- `README.md` — this file

## Installation
Copy `RatingStarBar.jsx` and `style.css` into your project, then import both:
```jsx
import RatingStarBar from "./RatingStarBar";
import "./style.css";
```

## Usage
```jsx
<RatingStarBar
  totalStars={5}
  initialRating={3}
  size={36}
  color="#facc15"
  onRate={(rating) => console.log("User rated:", rating)}
/>
```

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `totalStars` | `number` | `5` | Number of stars rendered |
| `initialRating` | `number` | `0` | Starting rating value |
| `size` | `number` | `32` | Star size in pixels |
| `color` | `string` | `"#facc15"` | Color of filled stars and burst particles |
| `onRate` | `(rating: number) => void` | `undefined` | Callback fired with the new rating when a star is clicked |

## Accessibility
Implemented as a `radiogroup`/`radio` pattern with `aria-checked`, keyboard-focusable stars, and visible `:focus-visible` outlines. Respects `prefers-reduced-motion` by disabling the burst animation entirely.

## Dependencies
None beyond React itself — no external animation or icon libraries.