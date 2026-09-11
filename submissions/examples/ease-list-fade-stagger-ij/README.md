# List Fade Stagger

A modern staggered fade-in list component using custom CSS variables. Each list item fades in and slides up sequentially with an incremental animation delay, creating a smooth cascading entrance effect.

## Features

- **Staggered Entrance**: Items fade and slide up one after another using `--stagger-delay-base` multiplied by each item's index.
- **CSS Variables**: Fully customizable via `:root` variables (`--stagger-duration`, `--stagger-delay-base`, `--stagger-item-bg`, `--stagger-text-color`, `--stagger-border-color`).
- **Replay Button**: Click "Replay Animation" to re-trigger the stagger sequence.
- **Responsive**: Adapts to all screen sizes with a clean dark-gradient background.

## File Structure

```text
submissions/examples/ease-list-fade-stagger-ij/
├── demo.html    # HTML structure with list items and replay button
├── style.css    # Custom CSS with stagger keyframes and variables
└── README.md    # Documentation
```

## Usage

Open `demo.html` in any modern browser. Click the **Replay Animation** button to watch the staggered entrance again.
