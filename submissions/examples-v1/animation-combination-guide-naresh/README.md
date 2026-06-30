# Animation Combination Guide

## 1. What does this do?

This submission serves as a developer guide documenting the CSS cascade animation-overwrite limitation (where multiple animation classes applied to a single element override each other) and details two standard solutions to combine them.

## 2. The Animation Overwrite Limitation

In CSS, when multiple utility classes attempt to set the shorthand `animation` (or `animation-name`) property on the same element, only the last declared class in the stylesheet is applied:

```html
<!-- ❌ Only the slide animation runs; the fade is overwritten -->
<div class="ease-fade-in ease-slide-up"></div>
```

---

## 3. How to Combine Animations (Workarounds)

### Workaround 1: Nested Wrappers (No Custom CSS Required)

The simplest and most performant workaround is nesting HTML elements. Apply the fade animation to the parent element, and the sliding/scaling animation to the child element:

```html
<!-- ✅ Both animations run simultaneously -->
<div class="ease-fade-in">
  <div class="ease-slide-up">Your content here</div>
</div>
```

### Workaround 2: Custom Combined Keyframes (Flat HTML Layout)

If you prefer a flat DOM layout, you can define a custom combined animation class in your project's stylesheet that merges the properties of both animations:

```css
@keyframes easeFadeSlideUpCombined {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ease-fade-slide-up {
  animation: easeFadeSlideUpCombined 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
```

```html
<!-- ✅ Both animations run via the single combined class -->
<div class="ease-fade-slide-up">Your content here</div>
```

---

## 4. Why is it useful?

Understanding limitations in CSS cascade logic is key to building stable UI animations. This guide equips developers with clean workarounds to stack transitions, keeping layouts lightweight and avoiding complex JS animators.
