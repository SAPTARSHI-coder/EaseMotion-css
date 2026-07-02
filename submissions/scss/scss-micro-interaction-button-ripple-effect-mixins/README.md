# SCSS Micro-Interaction Button Ripple Effect Mixins

A reusable, performance-optimized SCSS module that provides highly configurable click ripple effects for buttons, cards, and interactive elements, powered by EaseMotion CSS animation patterns.

## What does this do?
This module provides a `@mixin ripple` API that compiles clean active-state ripple animation targets using pure CSS keyframes. Clicking the component triggers a expanding radial pulse from a customizable origin point (center or any button corner) and fades out smoothly at 60fps.

---

## Mixin Configuration API

The `@mixin ripple` supports the following custom parameters:

```scss
@mixin ripple(
  $color: rgba(255, 255, 255, 0.28),                  // Ripple background color
  $duration: 0.55s,                                    // Animation speed duration
  $size: 220%,                                         // Maximum ripple scale diameter bounds
  $easing: cubic-bezier(0.1, 0.8, 0.3, 1),            // Animation timing curve
  $origin: 'center',                                   // Origins: 'center', 'top-left', 'top-right', 'bottom-left', 'bottom-right'
  $apply-base: true                                    // Inject base overflow clipping styles
)
```

---

## Sass Usage Examples

Import the partial module into your stylesheet and include the mixin:

```scss
@import 'ripple';

// 1. Center Ripple (Default)
.btn-primary {
  background-color: #3b82f6;
  @include ripple();
}

// 2. Corner Origin Ripple (e.g. Top-Left corner trigger)
.btn-feature {
  background-color: #10b981;
  @include ripple($origin: 'top-left');
}

// 3. Dark Ripple for light backgrounds
.btn-light {
  background-color: #f1f5f9;
  color: #0f172a;
  @include ripple($color: rgba(0, 0, 0, 0.15), $origin: 'center');
}

// 4. Custom Speed & Easing
.btn-slow-reveal {
  background-color: #8b5cf6;
  @include ripple(
    $color: rgba(255, 255, 255, 0.4),
    $duration: 1.2s,
    $easing: ease-out
  );
}
```

---

## Compiled CSS Output

When compiled by Sass, the mixin outputs clean CSS without duplicate keyframe declarations. Here is an example of the compiled CSS code block for `.btn-primary` (Center) and `.btn-feature` (Top-Left):

```css
/* Predefined Global Keyframes (included once in output) */
@keyframes ease-kf-ripple-center {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.55;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.05);
    opacity: 0;
  }
}

@keyframes ease-kf-ripple-top-left {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.55;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
}

/* Compiled Center Ripple button */
.btn-primary {
  position: relative;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}
.btn-primary::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.28);
  width: 220%;
  height: 220%;
  pointer-events: none;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
}
.btn-primary:active::after {
  animation: ease-kf-ripple-center 0.55s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
}

/* Compiled Top-Left Ripple button */
.btn-feature {
  position: relative;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}
.btn-feature::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.28);
  width: 220%;
  height: 220%;
  pointer-events: none;
  opacity: 0;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%) scale(0);
}
.btn-feature:active::after {
  animation: ease-kf-ripple-top-left 0.55s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
}
```

---

## Why is it useful?
1. **Performance First**: Driven by GPU-friendly `transform` and `opacity` properties, ensuring lag-free 60fps animations.
2. **Webkit Overflow Highlight Clipping**: Autoinjects `-webkit-mask-image` rules to resolve long-standing layout rendering bugs where absolute children overflow rounded borders during active hover clicks.
3. **No Keyframe Pollution**: Compiles cleanly with statically mapped animation links rather than creating dynamic, duplicate keyframe strings in the final build.
