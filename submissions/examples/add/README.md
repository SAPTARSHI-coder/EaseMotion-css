# Minimalist Floating Action Button (FAB) Documentation

This guide covers the implementation, accessibility requirements, and styling overrides for the minimalist Floating Action Button component.

## Table of Contents
- [Documentation Index](#documentation-index)
- [HTML Markup Guidelines](#html-markup-guidelines)
- [Accessibility Features](#accessibility-features)
- [Keyboard Navigation](#keyboard-navigation)
- [Modifier Classes](#modifier-classes)
- [Custom CSS Property Overrides](#custom-css-property-overrides)

---

## Documentation Index
- [Main Documentation Index](../README.md)
- [Component Library](./index.md)
- **Minimalist FAB Accessibility Setup** (Current Document)

---

## HTML Markup Guidelines

Always use a standard `<button>` tag for interactive action triggers to retain standard form and focus accessibility.

### Standard Icon-Only FAB
For icon-only buttons, providing an `aria-label` is mandatory to give context to screen readers. SVG icons must include `aria-hidden="true"`.

```html
<button 
  type="button" 
  class="fab" 
  aria-label="Add new item">
  <svg class="fab__icon" aria-hidden="true" width="24" height="24">
    <use href="#icon-add"></use>
  </svg>
</button>
