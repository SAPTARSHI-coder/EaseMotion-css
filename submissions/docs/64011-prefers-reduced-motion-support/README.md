# prefers-reduced-motion Support Guide

## Overview

This guide explains how to support users who prefer reduced motion by using the `prefers-reduced-motion` media feature. Respecting this user preference improves accessibility and creates a more inclusive experience.

---

## Why It Matters

Some users experience motion sickness, dizziness, or discomfort from excessive animations. Modern operating systems allow users to request reduced motion, and websites should respect this preference.

---

## Basic Usage

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

This disables unnecessary animations whenever the user's system preference is set to **Reduce Motion**.

---

## Example

Normal animation:

```css
.card {
    animation: fadeIn 0.8s ease;
}
```

Reduced motion support:

```css
@media (prefers-reduced-motion: reduce) {
    .card {
        animation: none;
    }
}
```

---

## Best Practices

- Keep important content visible even without animations.
- Never rely on animation alone to communicate information.
- Test using your operating system's Reduce Motion setting.
- Keep transition durations short when motion is necessary.
- Respect user accessibility preferences.

---

## Browser Support

- Chrome ✅
- Firefox ✅
- Edge ✅
- Safari ✅

---

## Benefits

- Better accessibility
- Improved user experience
- Supports WCAG recommendations
- Inclusive design
- Easier framework adoption

---

## Conclusion

Adding support for `prefers-reduced-motion` makes EaseMotion CSS more accessible while maintaining compatibility across modern browsers.