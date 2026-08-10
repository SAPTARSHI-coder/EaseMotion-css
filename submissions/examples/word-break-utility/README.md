# Word Break Utility

Introduces the typographic overflow protection utility token (`.ease-word-break`) under issue #15139.

## Functional Mechanics

- **The Problem:** When rendering user-generated content, long URLs, technical logs, or non-breaking strings inside tight layout slots (like sidebars or notification toasts), browsers strictly respect word boundaries. This forces long strings to bleed outside their containers, breaking the visual layout and horizontal scrolling logic.
- **The Solution:** Fluid string wrapping. The `.ease-word-break` utility applies `word-break: break-word;`. This instructs the rendering engine to allow arbitrary breaks within a word when no other break points exist, ensuring your UI layout stays robust even when processing unpredictable data streams.



## Usage Layout Structure
```html
<div class="sidebar-slot" style="width: 150px;">
  <p class="ease-word-break">LongStringThatNormallyBreaksTheLayoutContainer</p>
</div>
```

Closes #15139
