# Text Truncate Utility

## Description

A lightweight CSS utility that truncates overflowing single-line text with an ellipsis (`...`). It helps maintain clean and responsive layouts without requiring custom CSS for every component.

## Usage

Apply the utility class to any element containing long text.

```html
<h3 class="text-truncate">
  This is a very long heading that will be truncated...
</h3>
```

## CSS

```css
.text-truncate {
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

## Benefits

- Prevents layout breaking
- Works with headings, buttons, links, cards, and table cells
- Pure CSS solution
- Lightweight and reusable
- Responsive-friendly