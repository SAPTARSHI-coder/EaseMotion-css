# Contain Strict Utility

Introduces the absolute rendering and layout containment optimization token (`.ease-contain-strict`) under issue #15163.

## Functional Mechanics

- **The Problem:** In heavy dashboards, endless infinite feeds, or complex landing layouts, changing a single layout dimension or inserting a dynamic text string can force the browser to recalculate the structural positioning of elements across the entire page (global reflow). This degrades scrolling metrics and slows down client interactions.
- **The Solution:** Offloads tree-traversal calculation chains. The `.ease-contain-strict` utility applies `contain: strict` (combining `size`, `layout`, `style`, and `paint` rules). This treats the target container element as a completely independent layout island—guaranteeing that modifications inside this boundary box never leak out to penalize peripheral layout layers.

## Usage Layout Structure
```html
<div class="ease-contain-strict" style="width: 100%; height: 300px;">
  </div>
```

Closes #15163
