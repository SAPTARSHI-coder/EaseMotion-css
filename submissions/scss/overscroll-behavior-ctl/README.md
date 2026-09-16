# Overscroll Behavior Control Mixin

### What does this do?
Provides SCSS mixins to control overscroll behavior, preventing unwanted scroll chaining (rubber-banding) on scrollable components like modals and drawers, with built-in legacy browser fallbacks and CSS variable integration.

### How is it used?

```scss
@use 'submissions/scss/overscroll-behavior-ctl/overscroll-behavior-ctl' as *;

// Prevent scroll chaining on both axes (perfect for modals)
.ease-modal-content {
  @include ease-prevent-scroll-chaining();
}

// Control overscroll behavior on a specific axis
.ease-drawer {
  @include ease-overscroll-behavior(contain, y);
}

// Disable overscroll bounce entirely
.ease-no-bounce {
  @include ease-overscroll-behavior(none);
}
```

### Why is it useful?
When users reach the end of a scrollable area inside a modal or drawer, the browser may start scrolling the underlying page (scroll chaining). This mixin easily prevents this behavior across modern and legacy browsers, ensuring a robust, app-like scroll experience. It also utilizes CSS variables (`--ease-overscroll-behavior`) for dynamic overrides within the EaseMotion design system.
