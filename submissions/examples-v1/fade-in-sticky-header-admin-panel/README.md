# Fade In Sticky Header (Admin Panel)

A pure HTML + CSS responsive sticky header featuring smooth slide-down entrance animations and scroll-driven opacity fade-in, designed for modern enterprise admin panels. The header is built natively with zero JavaScript dependencies, adapting to custom theme properties.

## Features

- **Double-Fade Technique**:
  - **Load-time entrance**: Fades and slides in on initial page render.
  - **Scroll-driven fade-in**: As the user scrolls from the top (`0px` to `100px`), the header smoothly fades from opacity `0` to its customized translucent glass background.
- **Vercel-inspired Admin Aesthetic**: Slate-light gray grid layout optimized for dashboards.
- **Collapsible Drawer Menu**: Responsive navigation via a CSS-only hamburger toggle.
- **Keyboard Accessible**: Outlines styled via `:focus-visible` for semantic buttons, inputs, and links.
- **Prefers Reduced Motion**: Safely defaults to a static sticky layout with animations disabled.

---

## Folder Structure

```text
submissions/examples/fade-in-sticky-header-admin-panel/
├── demo.html    # Full Mock Admin panel layout showing audit logs & dashboard metrics
├── style.css    # Sidebar structures, entrance keyframes, and scroll-timeline bindings
└── README.md    # Integration documentation & API references
```

---

## Customization API

Easily override colors and timings via these CSS custom properties:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-header-height` | `70px` | Height of the header. |
| `--ease-header-duration` | `0.4s` | Duration of load-time slide entrance and mobile drawer slide. |
| `--ease-header-easing` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing curve for drawer transitions. |
| `--ease-header-bg` | `rgba(255, 255, 255, 0.85)` | Glassmorphic background color. |
| `--ease-header-opacity` | `0.98` | Target sticky opacity. |
| `--ease-header-shadow` | `0 4px 12px ...` | Shadow intensity when sticky. |
| `--ease-header-radius` | `0px` | Rounded corner radius (defaults to 0px for flat sidebar flush). |
| `--ease-header-spacing` | `0px` | Header margins from layout edges (defaults to 0px). |

---

## Implementation Details

### Progressive Scroll Animation
Modern browsers utilize native CSS scroll-timelines for the scroll fade-in transition:

```css
@supports (animation-timeline: scroll()) {
  .ease-fade-in-header {
    opacity: 0;
    transform: translateY(-8px);
    animation: ease-kf-fade-in-scroll linear both;
    animation-timeline: scroll(root block);
    animation-range: 0px 100px;
  }
}
```

### Non-Supported Browsers Fallback
Browsers lacking scroll-driven animation support ignore the `@supports` block and render the header statically sticky, with a smooth load-time transition instead:

```css
.ease-fade-in-header {
  position: fixed;
  top: 0;
  left: 260px;
  right: 0;
  animation: ease-kf-fade-in-load var(--ease-header-duration) var(--ease-header-easing) forwards;
}
```
