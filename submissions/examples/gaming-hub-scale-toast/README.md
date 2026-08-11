# Gaming Hub - Scale Hover Toast

A pure CSS/HTML showcase component: game cards in a responsive grid that scale up on hover and reveal a toast-style info panel with the game title and description.

## Features

- Smooth scale + shadow lift on hover/focus using CSS transitions
- Toast panel slides up from the bottom with a fade-in
- Fully keyboard accessible via `tabindex="0"` and `:focus-within`
- Responsive grid (`auto-fit`, `minmax`) — collapses to a single column on mobile
- Respects `prefers-reduced-motion` by disabling transforms/transitions
- No external JS or frameworks — pure CSS/HTML

## Usage

1. Copy `demo.html` and `style.css` into your project.
2. Replace the `.game-cover` image `src` and `.toast-title` / `.toast-desc` text with your own content.
3. Reuse `.game-card` inside any `.hub-grid` to add more cards.

## CSS Custom Properties

| Property | Purpose |
|---|---|
| `--hub-bg` | Page background color |
| `--card-bg` | Card background color |
| `--toast-bg` | Toast panel background (with transparency for blur) |
| `--accent` | Hover outline / focus accent color |
| `--text-primary` | Primary text color |
| `--text-secondary` | Secondary/description text color |
| `--card-radius` | Border radius for cards |
| `--transition-speed` | Duration for all hover/focus transitions |

## Accessibility

- Cards are keyboard-focusable (`tabindex="0"`), so the toast reveal works with both mouse hover and keyboard focus.
- A visible `:focus-visible` outline is included for keyboard users.
- All animation is disabled under `prefers-reduced-motion: reduce`.