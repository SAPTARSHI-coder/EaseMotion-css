# CSS Scroll-Driven Sticky Header Shrink & Backdrop-Blur Transition

## What does this do?

This component implements a sticky navigation header navbar that dynamically shrinks, applies a glassmorphic blur background, and fades in a bottom border as the user scrolls down the page. The transition is bound directly to the scroll distance of the page using modern CSS scroll-driven animations (`animation-timeline: scroll(root)`).

## How is it used?

Apply the `.sticky-header` and `.header-logo` classes to your page navigation header markup.

```html
<header class="sticky-header">
  <div class="header-container">
    <a href="#" class="header-logo">
      <svg class="logo-icon">...</svg>
      <span class="logo-text">EaseMotion</span>
    </a>
    <nav class="header-nav">
      <ul class="nav-list">
        <li><a href="#" class="nav-link">Home</a></li>
        <li><a href="#" class="nav-link">Features</a></li>
      </ul>
    </nav>
  </div>
</header>
```

## Why is it useful?

Traditional implementation of shrinking sticky headers requires JavaScript scroll event listeners (e.g. `window.addEventListener('scroll', ...)`), which can cause layout thrashing, repaint delays, and scroll stutter on lower-end devices.

Key architectural advantages of this pure CSS approach include:

- **Zero Scripting / Reflow overhead**: Animations are offloaded to the compositor thread using native GPU-accelerated css selectors and timelines.
- **Scroll-Linked Range Mapping**: By setting `animation-range: 0px 150px`, the transition operates exclusively during the initial 150px of document scrolling, remaining stable for the remainder of the page.
- **Progressive Enhancement**: Employs `@supports` queries to check browser capability. Unsupported browsers fall back to a static glassmorphic navbar.
- **Accessibility Fallbacks**: Honors `prefers-reduced-motion: reduce` preference by disabling scroll animation/logo resizing and displaying a static compact navbar to prevent scrolling motion sickness.

## Tech Stack

- HTML5
- CSS3 (Scroll-Driven Animations, Keyframe Offsets, Backdrop Filters, Supports Queries)

## Preview

Open `demo.html` directly in any modern web browser to interact with the scroll animations.

## Contribution Notes

- Class naming was handled by the contributor (`pp`).
- Maintainer will rename classes to standard `ease-*` conventions (e.g. `.ease-sticky-header`, `.ease-header-logo`) and replace hardcoded colors with project theme variables on merge.
