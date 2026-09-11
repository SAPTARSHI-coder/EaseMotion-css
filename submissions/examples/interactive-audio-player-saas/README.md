# SaaS Modern Interactive Audio Player Component

A lightweight, pure CSS interactive audio player UI variant designed for SaaS dashboards and modern web applications.

## Key Features
- **Zero JavaScript Dependencies**: State toggles (Play/Pause, Mute/Unmute, Favorite) are powered completely via pure CSS state machine architecture (`<input type="checkbox">` + sibling selectors).
- **EaseMotion Integration**: Built with `EaseMotion` design tokens and custom timing curves for smooth hardware-accelerated state transitions.
- **Accessibility Compliant**: Fully supports `prefers-reduced-motion` media queries to automatically suppress ambient animations for users with motion sensitivity.
- **Responsive & Fluid**: Fits cleanly across desktop panels, tablet sidebars, and mobile screen viewports.

## File Hierarchy
- `demo.html` - Interactive standalone preview page.
- `style.css` - Component design system tokens, layout structures, and animated state interactions.

## Usage
Simply link `style.css` in your markup and include the player structure into your dashboard or component library.
