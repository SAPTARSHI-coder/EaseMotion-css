# Animation Duration Reference Table

## Introduction

Animation duration plays an important role in creating smooth and intuitive user experiences. Selecting an appropriate duration helps users understand interface changes while maintaining responsiveness.

This guide provides recommended animation durations, explains their ideal use cases, and includes practical CSS examples.

---

# Animation Duration Reference

| Duration | CSS Value | Best For |
|----------|-----------|----------|
| Instant | `0ms` | State changes without animation |
| Very Fast | `100ms` | Button press feedback |
| Fast | `150ms` | Hover effects |
| Standard | `200ms` | Dropdowns, tooltips |
| Medium | `300ms` | Cards, dialogs |
| Slow | `500ms` | Page transitions |
| Very Slow | `700ms` | Hero animations |
| Long | `1000ms` | Showcase animations |

---

# Duration Guide

## 0ms — Instant

No animation is applied.

Recommended for:

- Accessibility preferences
- Immediate state updates
- Loading optimizations

Example:

```css
transition-duration: 0ms;
```

---

## 100ms — Very Fast

Provides immediate visual feedback.

Recommended for:

- Buttons
- Toggle switches
- Icon interactions

Example:

```css
transition: transform 100ms ease;
```

---

## 150ms — Fast

Suitable for lightweight interface interactions.

Recommended for:

- Hover effects
- Navigation links
- Small cards

Example:

```css
transition: all 150ms ease;
```

---

## 200ms — Standard

A balanced duration for most UI components.

Recommended for:

- Tooltips
- Dropdown menus
- Navigation panels

Example:

```css
transition: opacity 200ms ease;
```

---

## 300ms — Medium

Provides smoother visual transitions.

Recommended for:

- Cards
- Dialogs
- Side panels
- Accordions

Example:

```css
transition: transform 300ms ease;
```

---

## 500ms — Slow

Suitable for larger interface changes.

Recommended for:

- Page transitions
- Hero sections
- Large cards

Example:

```css
animation: fadeIn 500ms ease forwards;
```

---

## 700ms — Very Slow

Creates a more dramatic visual effect.

Recommended for:

- Landing pages
- Marketing content
- Feature showcases

Example:

```css
animation: slideUp 700ms ease;
```

---

## 1000ms — Long

Reserved for showcase or storytelling animations.

Recommended for:

- Product presentations
- Onboarding screens
- Demonstration pages

Example:

```css
animation: zoomReveal 1000ms ease;
```

---

# Best Practices

- Keep interaction animations under **300ms**.
- Use longer durations only for intentional visual emphasis.
- Maintain consistent timing across similar components.
- Avoid unnecessary long animations for frequently used controls.
- Respect user accessibility preferences by supporting `prefers-reduced-motion`.

---

# Accessibility

Always provide reduced-motion support:

```css
@media (prefers-reduced-motion: reduce) {

  * {
    animation: none !important;
    transition: none !important;
  }

}
```

---

# Summary

Choosing the correct animation duration improves usability, readability, and perceived performance. Following consistent timing guidelines helps create polished and accessible interfaces across EaseMotion CSS components.