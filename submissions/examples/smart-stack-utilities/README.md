# Smart Stack Utilities

## Overview

Smart Stack Utilities provide a tiny, human-readable set of CSS utilities to arrange elements vertically with consistent spacing using a single class name. This keeps markup clean, predictable, and easy for authors of all skill levels.

## Problem Statement

Repeated vertical spacing in UI markup often requires extra wrappers or repeated margin utilities on each child. This leads to noisy HTML and inconsistent spacing across components.

## Proposed Solution

Introduce `.stack` utilities that apply `display:flex; flex-direction:column` and a consistent `gap` value. Variants (`.stack-sm`, `.stack`, `.stack-lg`, `.stack-xl`) let authors choose spacing with an English-like class name.

## Available Stack Sizes

- `.stack-sm` — small vertical spacing (approx 0.5rem)
- `.stack` — default spacing (approx 1rem)
- `.stack-lg` — large spacing (approx 1.5rem)
- `.stack-xl` — extra-large spacing (approx 2rem)

## Usage Examples

Basic usage:

```html
<div class="stack">
  <h2>Title</h2>
  <p>Description</p>
  <button>Action</button>
</div>
```

Form example:

```html
<form class="stack">
  <label>Full name <input type="text" /></label>
  <label>Email <input type="email" /></label>
  <button class="btn primary">Send</button>
</form>
```

## Benefits

- Readable classes that map directly to intent.
- Fewer utility classes on children; single wrapper controls spacing.
- Mobile-first and responsive-ready; gap values can be tuned per breakpoint.
- Works in plain HTML with no JS required.

## Future Improvements

- Add horizontal variants (e.g., `.inline-stack` or `.hstack`).
- Provide responsive size tokens (e.g., `stack-md-up`).
- Integrate with design tokens or CSS custom properties for theme-aware spacing.
- Add `align` helpers like `.stack-center`, `.stack-end` for convenience.

---

"If you can say it in English, you should be able to write it as a class." — Smart Stack Utilities align with the EaseMotion philosophy to make CSS classes readable and intent-driven.
