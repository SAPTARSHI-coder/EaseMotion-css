# CSS Navigation: Gradient Shimmer Variation

An elegant, semantic, and highly performant navigation component featuring a subtle, pure CSS **Gradient Shimmer capsule sweep** interaction. Built with **Zero JavaScript**, vanilla CSS, and accessibility-first practices.

---

## Features

- **Subtle Gradient Shimmer:** A soft, modern reflection sweep effect on navigation link background capsules during hover and focus states.
- **Active Navigation Signature:** Active items sustain a continuous, low-frequency background sweep to establish visual hierarchy.
- **Hardware-Accelerated:** The animations animate only `transform: translateX() skewX()` rather than background-position. This keeps animation computations on the compositor thread (GPU), achieving a stable 60 FPS.
- **A11y Compliant:** Meets WCAG color contrast standards, includes high-visibility keyboard focus outline rings (`:focus-visible`), and preserves focus order.
- **Responsive Wrap:** Transitions to a centered column stacking layout on viewports under `640px` automatically using standard media query wrapping.
- **Theme-Adaptive:** Adapts automatically to light and dark themes using system queries (`prefers-color-scheme`), while also supporting forced selector styles.
- **Motion-Conscious:** Detects `prefers-reduced-motion: reduce` to completely disable the shimmer movement and fallback to simple opacity transitions.

---

## HTML Structure

The component uses clean, semantic HTML5 elements:

```html
<header class="egs-header">
  <div class="egs-container">
    <nav class="egs-nav" aria-label="Main Navigation">
      <!-- Brand Logo / Identity -->
      <a href="#" class="egs-brand">
        <!-- SVG Icon -->
        <span class="egs-brand__name">EaseNav</span>
      </a>

      <!-- Navigation Links -->
      <ul class="egs-nav__list">
        <li class="egs-nav__item">
          <a href="#home" class="egs-nav__link egs-nav__link--active">
            <span>Home</span>
          </a>
        </li>
        <li class="egs-nav__item">
          <a href="#features" class="egs-nav__link">
            <span>Features</span>
          </a>
        </li>
        <li class="egs-nav__item">
          <a href="#pricing" class="egs-nav__link">
            <span>Pricing</span>
          </a>
        </li>
        <li class="egs-nav__item">
          <a href="#get-started" class="egs-nav__link egs-nav__link--cta">
            <span>Get Started</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>
```

---

## CSS Classes

| Class Name               | Type     | Description                                                               |
| :----------------------- | :------- | :------------------------------------------------------------------------ |
| `.egs-navbar-wrapper`    | Scope    | Root namespace reset container. Wrap around header to isolate styles.     |
| `.egs-header`            | Block    | Sticky header container holding background blur and borders.              |
| `.egs-container`         | Layout   | Center alignment container with boundaries.                               |
| `.egs-nav`               | Block    | Main navigation flex container.                                           |
| `.egs-brand`             | Block    | Branding link containing logo icon and name.                              |
| `.egs-nav__list`         | Element  | Flex-aligned unordered navigation list.                                   |
| `.egs-nav__item`         | Element  | Individual items matching list semantics.                                 |
| `.egs-nav__link`         | Element  | Action links. Hosts relative bounds and animations.                       |
| `.egs-nav__link--active` | Modifier | Highlights active links and runs a continuous signature background sweep. |
| `.egs-nav__link--cta`    | Modifier | Accented CTA style (solid theme background).                              |

---

## Animation Mechanics: Shimmer & Sweep

1. **Composition**: The hover capsule background is built via a pseudo-element `::before` which transitions `opacity` and `scale`.
2. **Sweep Reflection**: The shimmer highlight line is constructed inside `::after` as an absolute layer spanning `200%` width. It utilizes a gradient:
   `linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)`.
3. **GPU Composite**: The sweep animation changes `transform: translateX(-100%) skewX(-25deg)` to `transform: translateX(100%) skewX(-25deg)`. Since it translates on a layer, it triggers compositor-only actions. No CPU paint or layout cycles occur.

---

## Adaptations & Preferences

### Dark Theme Support

Styles are mapped using CSS Custom Properties:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --egs-bg: #09090b;
    --egs-nav-bg: rgba(18, 18, 24, 0.85);
    /* Colors shift to high contrast light elements */
  }
}
```

You can also force the theme contextually by setting `--egs-` variables or using `.theme-forced-light` and `.theme-forced-dark` helper classes in the demo wrapper.

### Accessibility (Reduced Motion)

Users requesting decreased movement will automatically get a fast, direct transition:

```css
@media (prefers-reduced-motion: reduce) {
  .egs-nav__link::after {
    animation: none !important;
    display: none !important;
  }
}
```

This entirely removes the translation animation, maintaining design safety.

### Accessibility (Keyboard Focus & Contrast)

- Focus outlines use `:focus-visible` with negative offsets to remain readable and sharp without clipping.
- Tap targets have a fallback height of at least `40px` on standard layouts and `44px` minimum size on touch/coarse pointers to meet mobile interaction guidelines.
