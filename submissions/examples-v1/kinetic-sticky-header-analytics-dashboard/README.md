# Kinetic Sticky Header (Analytics Dashboard)

A high-performance, pure HTML + CSS kinetic sticky header optimized for modern analytics dashboards. This component features smooth kinetic shrink, margin spacing, and border-radius morphing directly linked to the browser's scroll progress using the native CSS Scroll-driven Animations API, requiring **zero JavaScript**.

## Features

- **Pure CSS Kinetic Scroll**: Morphs smoothly from a full-width flat header to a centered floating "island" glassmorphic pill as the page scrolls down.
- **Customizable**: Exposes semantic CSS custom properties for easy integration and branding.
- **Responsive Drawer Menu**: A lightweight, CSS-only slide-out menu drawer for smaller viewports.
- **Keyboard Accessible**: Clear, focusable navigation outlines targeting `:focus-visible` to satisfy WCAG guidelines.
- **Reduced Motion Support**: Detects `prefers-reduced-motion: reduce` and defaults to a static modern sticky header layout.
- **No External Libraries**: Independent layout containing inline optimized SVG indicators.

---

## Folder Structure

```text
submissions/examples/kinetic-sticky-header-analytics-dashboard/
├── demo.html    # Showcase page with interactive analytics layout & CSS charts
├── style.css    # Responsive layouts, mobile toggles, and scroll keyframes
└── README.md    # Documentation & usage guidelines
```

---

## Customization API

Customize the header behavior easily by updating these CSS custom properties in your `:root` or class selector:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-header-height` | `76px` | The initial header height at scroll position 0. |
| `--ease-header-scrolled-height` | `58px` | The height of the header when fully scrolled. |
| `--ease-header-duration` | `0.4s` | Transition duration for mobile drawer opening and focus states. |
| `--ease-header-easing` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Easing curve for transitions. |
| `--ease-header-bg-initial` | `rgba(11, 15, 25, 0.6)` | Header background color at the top (transparent dark glass). |
| `--ease-header-bg-scrolled` | `rgba(22, 28, 45, 0.75)` | Translucent background color when sticky/scrolled. |
| `--ease-header-blur` | `16px` | Glassmorphism backdrop blur intensity. |
| `--ease-header-shadow` | `0 12px 40px -10px rgba(0,0,0,0.5), ...` | Shadow intensity when scrolled. |
| `--ease-header-radius` | `20px` | Rounded corner radius when floating. |
| `--ease-header-spacing` | `1.25rem` | Outer margins pushing the floating header from viewport edges. |

---

## Implementation Details

### Scroll-Driven Kinetic Keyframes
The core scroll-driven animation binds directly to the root element scrolling over the first `180px` using `@supports (animation-timeline: scroll())`:

```css
@supports (animation-timeline: scroll()) {
  .ease-kinetic-header {
    position: fixed;
    animation: ease-kf-kinetic-shrink linear both;
    animation-timeline: scroll(root block);
    animation-range: 0px 180px;
  }
}
```

### Pure CSS Hamburger Toggle
Uses a standard checkbox hack to drive show/hide state transitions for the mobile drawer:

```html
<input type="checkbox" id="ease-menu-toggle" class="ease-menu-toggle-checkbox">
...
<label for="ease-menu-toggle" class="ease-menu-toggle-label">Hamburger Icon</label>
...
<div class="ease-mobile-drawer">...</div>
```

---

## Browser Compatibility

- **CSS Scroll-Driven Animations API**: Native support in Chrome, Edge, Opera, Chrome Android, and Samsung Internet.
- **Fallback Support**: Non-compatible browsers (Safari, Firefox) fallback automatically to a premium static sticky header layout with interactive hover scaling.
