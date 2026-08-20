# Pure CSS Scroll-Driven Header Morphing System

A modern, hardware-accelerated hero header morphing system powered by native CSS Scroll-Driven Animations (`animation-timeline: scroll(root);`).

## Features

- **Silky Smooth 120fps**: Smooth header state interpolation linked directly to document scroll position without JavaScript event listeners.
- **Dynamic Morphing**: Seamlessly interpolates height, padding, backdrop blur (`backdrop-filter`), background opacity, border styling, and box shadow over the initial 250px scroll range.
- **Zero JavaScript**: Operates entirely on the browser compositor thread.
- **Graceful Fallback**: Includes `@supports not (animation-timeline: scroll())` fallback styles for legacy browser support.
- **Fully Responsive**: Adapts across all device sizes.

## Component Classes

- `.ease-header-morph`: Sticky top header container bound to scroll timeline.
- `.ease-header-logo`: Brand logo element with scaling transition.
- `.ease-header-nav`: Navigation link container.
- `.ease-header-nav-link`: Individual navigation menu link.
- `.ease-header-cta`: Call-to-action button.

## Usage Example

```html
<header class="ease-header-morph">
  <a href="#" class="ease-header-logo">
    <svg ...></svg>
    <span>Brand</span>
  </a>

  <nav>
    <ul class="ease-header-nav">
      <li><a href="#features" class="ease-header-nav-link">Features</a></li>
      <li><a href="#about" class="ease-header-nav-link">About</a></li>
    </ul>
  </nav>

  <a href="#cta" class="ease-header-cta">Get Started</a>
</header>
```

## CSS Timeline Specs

```css
@keyframes headerMorph {
  from {
    height: 120px;
    padding: 2rem 3rem;
    background: rgba(15, 23, 42, 0.3);
    backdrop-filter: blur(0px);
  }
  to {
    height: 60px;
    padding: 0.75rem 2rem;
    background: rgba(15, 23, 42, 0.85);
    backdrop-filter: blur(16px);
  }
}
```
