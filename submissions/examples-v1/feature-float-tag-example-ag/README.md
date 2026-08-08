# Float Tag (Hover Effect) - EaseMotion CSS

A lightweight, pure HTML & CSS implementation of a **Float Tag (Hover Effect)** for EaseMotion CSS. This component elevates tag elements smoothly on `:hover` and `:focus-visible` using GPU-accelerated CSS transforms and spring-physics transitions.

---

## What the Example Does

The **Float Tag (Hover Effect)** component adds an interactive micro-interaction to category badges, topic chips, status indicators, and actionable tags.

When a user hovers over a tag or navigates to it using the keyboard (`Tab` key), the element smoothly floats upward (`translateY(-6px)`) while expanding its drop-shadow glow, providing clear tactile feedback without triggering layout reflows (`layout shift`).

---

## Features

- **Pure HTML5 & CSS3**: Zero JavaScript required.
- **Performant & Smooth**: Uses `transform: translateY()` and GPU composition for 60fps performance without redundant permanent layer allocations.
- **Spring-Physics Timing**: Custom `cubic-bezier(0.34, 1.56, 0.64, 1)` easing curve for natural motion.
- **Accessible Out-of-the-Box**: Full support for `:focus-visible`, native semantic HTML (`ul`/`li`, `button`, `a`), and keyboard navigation (`tabindex="0"`).
- **Reduced Motion Friendly**: Automatically disables vertical translation when `prefers-reduced-motion: reduce` is enabled in user system settings.
- **Multiple Color & Shape Variants**: Includes Standard, Pill, Glassmorphism, Outline, and color variations (Primary, Emerald, Amber, Rose, Purple).
- **Namespace Isolated**: Every custom CSS class ends with the mandatory `-ag` suffix to prevent collisions.

---

## File Structure

```text
submissions/examples/feature-float-tag-example-ag/
├── demo.html    # Interactive showcase page with standard tag examples
├── style.css    # Scoped CSS styles, custom properties, and animations
└── README.md    # Documentation and usage guide
```

---

## How to Use

### 1. Link the Stylesheets

Include the official EaseMotion CSS CDN stylesheet followed by `style.css` in your HTML head section:

```html
<!-- Official EaseMotion CSS CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css">
<link rel="stylesheet" href="style.css">
```

### 2. Add Tag Markup

Use the example class `float-tag-example-ag` or `float-tag-ag`:

#### Basic Div Tag
```html
<div class="float-tag-example-ag" tabindex="0">Hover me</div>
```

#### Semantic Tag List
```html
<ul class="tag-group-ag" aria-label="Topic tags">
  <li class="float-tag-ag float-tag-primary-ag" tabindex="0">#CSS3</li>
  <li class="float-tag-ag float-tag-emerald-ag" tabindex="0">#Animation</li>
</ul>
```

#### Clickable Button Tag
```html
<button type="button" class="float-tag-ag float-tag-primary-ag">
  #UI Design
</button>
```

#### Link Tag with Icon
```html
<a href="#topic" class="float-tag-ag float-tag-outline-ag">
  <svg class="tag-icon-ag" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
  <span>Discussion</span>
  <span class="tag-count-ag">12</span>
</a>
```

---

## Customization

The component uses CSS Custom Properties defined in `:root`. You can override these variables to match your application's brand identity:

```css
:root {
  /* Override spring physics and duration */
  --ease-spring-ag: cubic-bezier(0.34, 1.56, 0.64, 1);
  --transition-duration-ag: 0.25s;

  /* Custom Color Tokens */
  --primary-bg-ag: rgba(99, 102, 241, 0.15);
  --primary-border-ag: rgba(99, 102, 241, 0.4);
  --primary-text-ag: #818cf8;
  --primary-glow-ag: rgba(99, 102, 241, 0.35);
}
```

### Modifying Elevation Height

To adjust how high the tag floats on hover or focus, update the `translateY` offset:

```css
.float-tag-ag:hover,
.float-tag-ag:focus-visible {
  transform: translateY(-8px); /* Deeper elevation */
}
```

---

## Accessibility

- **Keyboard Focus Parity**: The float animation triggers on both `:hover` and `:focus-visible`, ensuring keyboard users receive identical feedback to mouse users.
- **Focus Rings**: High-contrast outline (`outline: 2px solid`) with `outline-offset: 3px` ensures clear focus tracking across screens.
- **Semantic HTML**: Prefers native `<ul>`/`<li>`, `<button>`, and `<a>` elements over generic ARIA roles.
- **Reduced Motion Support**:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .float-tag-example-ag,
    .float-tag-ag {
      transform: none !important;
      transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease !important;
    }
  }
  ```
  When reduced motion is enabled, motion is replaced with subtle color and opacity shifts to avoid motion sickness or disorientation.

---

## Why This Effect is Useful

1. **Enhanced Tactile Feedback**: Elevating elements along the Z-axis signals interactability to users far better than static color shifts.
2. **Zero Layout Shift (CLS)**: Animating `transform` instead of `margin-top` or `top` ensures that surrounding elements do not jump or re-render.
3. **High Performance**: Hardware acceleration offloads rendering to the GPU, guaranteeing smooth 60fps performance even on lower-end mobile devices.
4. **Modern Design Aesthetics**: Floating tags create depth and dynamic hierarchy in modern Web Apps, SaaS dashboards, and eCommerce stores.
