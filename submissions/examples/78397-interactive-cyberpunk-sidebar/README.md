# Interactive Sidebar with Cyberpunk Styling

A responsive Cyberpunk-inspired sidebar and dashboard interface built
with pure HTML and Vanilla CSS.

The component provides a futuristic navigation experience with neon
accents, interactive states, animated system visuals, and a CSS-only
mobile sidebar.

## Features

- Interactive Cyberpunk sidebar
- Responsive desktop navigation
- CSS-only mobile sidebar
- Overlay-based mobile navigation
- Neon cyan and pink visual accents
- Active navigation state
- Navigation badges
- System status indicator
- Profile section
- Animated dashboard visual
- Responsive metrics
- Project activity panel
- Security status panel
- Hover and focus interactions
- Keyboard-accessible navigation
- `prefers-reduced-motion` support
- No JavaScript
- No external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

The desktop sidebar is always visible. On smaller screens, the sidebar
becomes a CSS-only off-canvas navigation.

The mobile menu is controlled using a checkbox:

```html
<input
  class="sidebar-toggle"
  type="checkbox"
  id="sidebar-toggle"
/>