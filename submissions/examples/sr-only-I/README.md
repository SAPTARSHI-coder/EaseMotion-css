# Screen Reader Only Utility

Visually hidden but accessible to screen readers — essential for accessible icon buttons and skip links.

## Files

- demo.html - Interactive demo
- style.css - SR only styles
- README.md - Documentation

## Class

- ease-sr-only - Visually hidden, screen reader accessible

## Usage

```html
<!-- Basic screen reader only text -->
<span class="ease-sr-only">This text is only for screen readers</span>

<!-- Accessible icon button -->
<button>
  <span>❤️</span>
  <span class="ease-sr-only">Like this post</span>
</button>

<!-- Skip to content link -->
<a href="#main" class="ease-sr-only">Skip to main content</a>
```
