# Blur In & Blur Out Animation Utilities

A set of premium animation utilities for introducing and dismissing elements with a smooth blur transition effect.

## Questions for Contributing Guide

### 1. What does this do?

This submission adds hardware-accelerated blur entry and exit transition animations (`ease-blur-in` and `ease-blur-out`) that transition an element's filter blur state and opacity smoothly.

### 2. How is it used?

Apply the `.ease-blur-in` class to animate an element from blurred/invisible to clear/visible on mount or reveal, or `.ease-blur-out` to transition it from clear/visible to blurred/invisible.

```html
<div class="ease-blur-in">This text transitions from blurred to sharp!</div>
```

### 3. Why is it useful?

Blur-reveal and blur-dismiss animations are standard in premium, high-end modern interfaces (like iOS overlay sheets, macOS dropdowns, and glassmorphic dashboards). They provide a highly refined visual depth cue that is softer and more modern than simple opacity fades.

---

## Class Reference

| Class Name       | Animation Target           | Description                                                                   |
| ---------------- | -------------------------- | ----------------------------------------------------------------------------- |
| `.ease-blur-in`  | `@keyframes ease-blur-in`  | Transition filter from `blur(10px)` to `blur(0)` and opacity from `0` to `1`. |
| `.ease-blur-out` | `@keyframes ease-blur-out` | Transition filter from `blur(0)` to `blur(10px)` and opacity from `1` to `0`. |

## Keyframes Reference

### `@keyframes ease-blur-in`

```css
@keyframes ease-blur-in {
  from {
    filter: blur(10px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
}
```

### `@keyframes ease-blur-out`

```css
@keyframes ease-blur-out {
  from {
    filter: blur(0);
    opacity: 1;
  }
  to {
    filter: blur(10px);
    opacity: 0;
  }
}
```

## Customization Options

You can customize the duration and timing curve by overriding the custom variables in your element styling or `:root` context:

```css
.my-custom-modal {
  /* Override variables */
  --ease-duration-normal: 500ms;
  --ease-timing-smooth: cubic-bezier(0.16, 1, 0.3, 1);
}
```

## Use Cases

- **Modals and Dialog Overlays**: Transitioning dialog frames on open (`ease-blur-in`) and close (`ease-blur-out`).
- **Hero Image Reveal**: Smoothly focusing abstract graphics or photos on initial page load.
- **Card Content Reveals**: Subtle hover effects that focus content contextually (e.g. spoiler text or premium dashboard items).
- **Page Load Entrances**: Focusing typography content incrementally to keep the layout feeling fluid and premium.
