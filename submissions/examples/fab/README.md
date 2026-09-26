# Documentation Index

Welcome to the project documentation. Below is a guide on using component assets in this project.

## Components

- [Minimalist Floating Action Button (FAB) Guide](./fab-accessibility.md)
- [Live FAB Accessibility Demo](./doc.html)

---

# Minimalist Floating Action Button (FAB) Setup & Accessibility

The **Floating Action Button (FAB)** performs the primary or most common action on a screen. This guide covers setup, customizable CSS properties, modifier classes, and accessibility (a11y) standards.

## 1. Quick Start / HTML Markup

Icon-only FABs **must** contain an `aria-label` describing the action, and decorative icons must use `aria-hidden="true"`.

```html
<!-- Icon-Only FAB -->
<button type="button" class="fab" aria-label="Add entry">
  <svg class="fab__icon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
</button>

<!-- Extended FAB -->
<button type="button" class="fab fab--extended" aria-label="Create new document">
  <svg class="fab__icon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
  <span class="fab__label">New Document</span>
</button>
