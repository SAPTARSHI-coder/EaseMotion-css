# User Menu Dropdown Component Sandbox

## Overview
A user profile dropdown menu triggered by clicking an avatar. The menu slides and fades in from the trigger with a scale transition. Menu items have a translateX hover animation, and logout shows a confirmation dialog.

## Sandbox Configuration Files
- `demo.html` — Standalone presentation with Inter font, heading, avatar trigger button, dropdown menu with user info and items, overlay click-to-close, Escape key support, and logout confirmation.
- `style.css` — Scoped custom properties, scale + opacity transition on the menu, translateX hover on items, and logout button with danger styling.

## Key Layout Mechanics
1. **Custom Properties Driven:** All visual knobs (`--umd-duration`, `--umd-menu-bg`, `--umd-item-hover`, `--umd-avatar-border`, `--umd-radius`, `--umd-shadow`) are exposed as `:root` variables.
2. **Scale + Opacity Entrance:** The menu uses `transform: scale(0.92) translateY(-8px)` to `scale(1) translateY(0)` combined with opacity for a polished slide-fade effect.
3. **Item Hover Animation:** Each item shifts `translateX(4px)` on hover, providing a subtle horizontal movement cue.
