# Ease View Morph

## 1. What does this do?
`ease-view-morph` enables seamless native DOM morphing between element state transitions using the browser's native **CSS View Transitions API**. It smoothly animates size, position, and layout bounding box changes between collapsed and expanded states without requiring heavy JavaScript calculations or manual layout math (such as FLIP transitions).

## 2. How is it used?

### CSS Configuration
Assign a unique `view-transition-name` to the element and define the pseudo-element transition behavior:

```css
.ease-morph-card {
  view-transition-name: ease-morph-target;
}

::view-transition-group(ease-morph-target) {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

::view-transition-old(ease-morph-target),
::view-transition-new(ease-morph-target) {
  height: 100%;
  width: 100%;
}
```

### JavaScript Trigger
Wrap your DOM state mutation in `document.startViewTransition`:

```javascript
function toggleMorph(el) {
  if (!document.startViewTransition) {
    el.classList.toggle('is-expanded');
    return;
  }
  document.startViewTransition(() => el.classList.toggle('is-expanded'));
}
```

## 3. Why is it useful?
- **Zero Heavy Dependencies**: Completely replaces heavy JS animation libraries (such as Framer Motion or GSAP FLIP, which can add 100kB+ to bundle size) with browser-native state-to-state interpolation.
- **High Performance**: Browser engine handles layout interpolation on the compositor thread for smooth 60fps/120fps transitions.
- **Progressive Enhancement**: Gracefully falls back to instantaneous class toggling on browsers that do not support the View Transitions API.
