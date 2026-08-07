# Gaming Hub - Zoom-In Toast

A pure CSS/HTML showcase component: game cards in a responsive grid where a centered toast panel zooms in from the middle of the card on hover or keyboard focus, showing the game title and description.

## Features

- Toast zooms in from `scale(0.6)` to `scale(1)` with a bouncy easing curve
- Card image dims and blurs slightly when the toast is active
- Fully keyboard accessible via `tabindex="0"` and `:focus-within`
- Responsive grid (`auto-fit`, `minmax`) — collapses to a single column on mobile
- Respects `prefers-reduced-motion` by disabling the toast transition
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
| `--toast-bg` | Toast panel background |
| `--accent` | Focus outline accent color |
| `--text-primary` | Primary text color |
| `--text-secondary` | Secondary/description text color |
| `--card-radius` | Border radius for cards |
| `--transition-speed` | Duration for the toast zoom transition |

## Accessibility

- Cards are keyboard-focusable (`tabindex="0"`), so the toast reveal works with both mouse hover and keyboard focus.
- A visible `:focus-visible` outline is included for keyboard users.
- The zoom transition is disabled under `prefers-reduced-motion: reduce`.