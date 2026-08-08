# Rotate Sticky Header (Glassmorphic UI)

A premium, pure HTML + CSS floating sticky header featuring a scroll-driven 3D perspective rotation tilt, designed for modern glassmorphic landing pages and SaaS templates. The component is completely JavaScript-free, using modern scroll timelines and a pure CSS responsive hamburger menu drawer.

## Features

- **Scroll-Driven 3D Rotation**: Uses CSS `@supports (animation-timeline: scroll())` to tilt the header backward (`rotateX(-7deg)`) in 3D perspective as the user scrolls, darkening the glass backdrop and intensifying the shadow glow.
- **Cross-Browser Hover Fallback**: Fallback rules tilt the header on hover or keyboard focus for browsers that do not support scroll-driven timelines.
- **Layered Glassmorphism**: Blends backdrop blur (`16px`), border highlights, and dark translucent drop shadows to create floating depth.
- **Pure CSS Drawer**: Uses a hidden checkbox toggle to control the opening/closing slide of the mobile navigation panel.
- **Keyboard Accessible**: Clear active focus outlines are styled on links and action buttons using `:focus-visible`.
- **Reduced Motion Support**: Disables X-axis perspective rotations and transitions when `prefers-reduced-motion: reduce` is active.

---

## Folder Structure

```text
submissions/examples/rotate-sticky-header-glassmorphism/
├── demo.html    # Standalone demo containing mock sections to demonstrate scroll stickiness
├── style.css    # Layout rules, scroll timeline keyframes, hover fallbacks, and mobile views
└── README.md    # Documentation & API guidelines
```

---

## Customization API

Easily adjust spacings, tilt angles, and styling variables by updating these CSS custom properties in your stylesheet:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-header-duration` | `0.45s` | Timing speed for hover transitions. |
| `--ease-header-easing` | `cubic-bezier(0.25, 1, 0.5, 1)` | Standard transition timing curve. |
| `--ease-header-rotation` | `-7deg` | Angle of the 3D X-axis perspective tilt as the page scrolls. |
| `--ease-header-blur` | `16px` | Backdrop blur intensity on the glass card. |
| `--ease-header-opacity` | `0.06` | Translucent glass background factor. |
| `--ease-header-radius` | `18px` | Outer corner radius of the header. |
| `--ease-header-shadow` | `0 10px 30px rgba(0, ...)` | Default shadow/glow strength. |
| `--ease-header-spacing` | `1.25rem` | Inner margins and padding. |

---

## Technical Details

### Scroll-Driven Perspective Animation
The keyframe binds the 3D `rotateX` tilt directly to the viewport scroll:

```css
@keyframes ease-kf-header-scroll-rotate {
  from {
    transform: perspective(1000px) rotateX(0deg);
  }
  to {
    transform: perspective(1000px) rotateX(var(--ease-header-rotation));
    background-color: rgba(15, 23, 42, 0.65);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.45), 0 0 20px rgba(59, 130, 246, 0.08);
  }
}

@supports (animation-timeline: scroll()) {
  .ease-rotate-sticky-header {
    animation: ease-kf-header-scroll-rotate linear both;
    animation-timeline: scroll();
    animation-range: 0px 160px;
  }
}
```

### Cross-Browser Hover & Focus Fallback
Browsers without scroll-driven animation support fall back to hover/focus tilts:

```css
@supports not (animation-timeline: scroll()) {
  .ease-rotate-sticky-header:hover,
  .ease-rotate-sticky-header:focus-within {
    transform: perspective(1000px) rotateX(var(--ease-header-rotation)) scale(1.005);
    background-color: rgba(15, 23, 42, 0.65);
  }
}
```
If reduced motion is active, all tilts are bypassed.
