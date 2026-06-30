# Group Hover Animation

Trigger animations on child elements when a parent container
is hovered — using `.ease-group` and `.ease-group-hover-*` classes.
Pure CSS, no JavaScript.

## Structure
group-hover-animation/

├── demo.html

├── style.css

└── README.md
## Usage

```html
<div class="ease-card ease-group">
  <span class="ease-group-hover-bounce">⭐</span>
  <h3 class="ease-group-hover-slide-up">Pro Plan</h3>
  <p class="ease-group-hover-fade-in">Details here.</p>
  <div class="ease-group-hover-zoom-in">$29/mo</div>
  <span class="ease-group-hover-slide-right">→</span>
</div>
```

## Available Classes

| Class | Effect on parent hover |
|---|---|
| `ease-group-hover-bounce` | Bouncy scale + rotate |
| `ease-group-hover-fade-in` | Fades from 40% to full opacity |
| `ease-group-hover-slide-up` | Slides up 4px |
| `ease-group-hover-zoom-in` | Scales from 0.95 to 1 |
| `ease-group-hover-slide-right` | Slides right 6px |

## How It Works
`.ease-group` is the parent trigger. Child elements with
`.ease-group-hover-*` classes have their initial styles set,
then the `.ease-group:hover .ease-group-hover-*` selector
overrides them when the parent is hovered.

## Features
- Pure CSS — no JavaScript
- 5 group hover utilities
- Composable — mix multiple on one card
- 3 card color variants in demo
- Fully responsive
- Respects `prefers-reduced-motion`

## Use Cases
- Pricing cards
- Feature highlight sections
- Portfolio project cards
- SaaS landing pages