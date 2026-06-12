# Animated Breadcrumb Navigation Component

A modern, responsive breadcrumb trail component built entirely with **pure HTML and CSS**. It supports staggered path slide-ins on page load, slide-expanding hover underlines, sibling separator shifts, interlocking chevron blocks, and built-in screen-reader accessibility rules.

---

## 1. What does this do?

The **Animated Breadcrumb Navigation** shows the user's location within a website hierarchy:

- **Chronological Stagger Reveal**: Path nodes slide in sequentially from left to right on page load using CSS delay multipliers.
- **Micro-Interactions**:
  - Hovering a link scales a centered bottom accent line.
  - Sibling separators shift dynamically (`translateX(4px)`) when the preceding link is hovered.
- **Modern Layout Themes**: Supports Classic Light (for clean modes), Glassmorphic Dark (translucent glow), Capsule Pill (floating badges), and Chevron Blocks (CSS clip-path arrows).
- **Mobile Swipe Scroll**: On compact display screens, breadcrumb paths overflow horizontally as a scrollable container rather than wrapping or truncating.
- **JS-Free & Accessible**: Operates without script libraries and supports screen readers via `aria-label` and `aria-current`.

---

## 2. How is it used?

### File Setup

Link `style.css` in the head of your document and copy the markup template:

```html
<link rel="stylesheet" href="style.css" />
```

### HTML Layout Structure

Wrap lists in semantic navigation tags containing `aria-label="Breadcrumb"` and tag the final item using `aria-current="page"`. Set cascade indices using inline `--item-index`:

```html
<nav
  aria-label="Breadcrumb"
  class="ease-breadcrumb-nav ease-breadcrumb-classic-light"
>
  <ol class="ease-breadcrumb-list">
    <!-- Item 1 (delay 1) -->
    <li class="ease-breadcrumb-item" style="--item-index: 1;">
      <a href="#home" class="ease-breadcrumb-link">
        <svg class="ease-breadcrumb-icon">...</svg>
        <span class="ease-breadcrumb-text">Home</span>
      </a>
      <span class="ease-breadcrumb-separator" aria-hidden="true">
        <svg class="separator-icon-svg">...</svg>
      </span>
    </li>

    <!-- Item 2 (delay 2) -->
    <li class="ease-breadcrumb-item" style="--item-index: 2;">
      <a href="#components" class="ease-breadcrumb-link">
        <span class="ease-breadcrumb-text">Components</span>
      </a>
      <span class="ease-breadcrumb-separator" aria-hidden="true">
        <svg class="separator-icon-svg">...</svg>
      </span>
    </li>

    <!-- Current Item (delay 3) -->
    <li class="ease-breadcrumb-item" style="--item-index: 3;">
      <span class="ease-breadcrumb-active" aria-current="page"
        >Breadcrumbs</span
      >
    </li>
  </ol>
</nav>
```

---

## 3. Why is it useful?

- **Standardized Accessibility Audits**: Out-of-the-box support for screen reader directives. Wrappers identify themselves to user agents, and active/current pages are correctly structured.
- **Responsive Width Handling**: Line wraps or text cutoffs look messy on mobile trails. Allowing horizontal touch-swipes on overflow keeps paths readable and clean.
- **Hardware-Accelerated Speeds**: Item slide-ins and chevron translations run on hardware layers without triggering document paint reflows, ensuring zero lag.
- **Motion Sensory Fallbacks**: Fully supports `@media (prefers-reduced-motion: reduce)`. For users with motion sensitivities, slide translations and underline animations are turned off.
