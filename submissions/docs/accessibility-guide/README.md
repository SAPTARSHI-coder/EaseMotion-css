# Accessibility Best Practices Guide

## Purpose

This submission demonstrates how to make animations more accessible by respecting the user's motion preferences.

---

## Why Accessibility Matters

Some users experience motion sickness, dizziness, or discomfort from excessive animation.

Modern browsers support the `prefers-reduced-motion` media query, allowing websites to automatically reduce or disable animations when requested by the user.

---

## Example

```css
@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {

        animation: none !important;
        transition: none !important;
        scroll-behavior: auto !important;

    }

}
```

---

## Files

- demo.html
- style.css

---

## How to Run

Open `demo.html` in your browser.

To test:

- Windows → Accessibility → Visual Effects → Animation Effects
- macOS → Accessibility → Display → Reduce Motion

Refresh the page to observe the behavior.

---

## Benefits

- Improves accessibility
- Follows WCAG recommendations
- Provides a better experience for users sensitive to motion
- Helps developers build inclusive interfaces