# ::target-text Demo

## What does this do?

Demonstrates the CSS `::target-text` pseudo-element, which styles the browser's text fragment highlight. Text fragments (using `#:~:text=` in URLs) let you link to specific content on a page — `::target-text` lets you customize how that highlighted text looks.

## How is it used?

```css
::target-text {
  background: #fef08a;
  color: #1e293b;
  animation: pulse 2s infinite;
}
```

## Why is it useful?

The Text Fragments API enables deep linking to specific page content without requiring IDs or anchors. With `::target-text`, you can brand the highlight to match your design system, add attention-grabbing animations, and improve the visual feedback for users who navigate via text fragment links.
