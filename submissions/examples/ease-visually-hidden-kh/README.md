# ease-visually-hidden Utility

## What does this do?

Provides an accessibility utility class that visually hides content while keeping it available to screen readers.

## How is it used?

```html
<span class="ease-visually-hidden">
  Accessible text for screen readers
</span>
```

## CSS

```css
.ease-visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;

  padding: 0;
  margin: -1px;

  overflow: hidden;

  clip: rect(0, 0, 0, 0);

  white-space: nowrap;

  border: 0;
}
```

## Features

- Screen-reader accessible
- Visually hidden from the page
- Lightweight utility class
- Pure CSS solution
- Common accessibility pattern
- Easy to combine with existing components

## Example Use Cases

- Icon-only buttons
- Navigation links
- Form labels and hints
- Accessibility descriptions
- Screen-reader-only content

## Why does it fit EaseMotion CSS?

The utility provides a simple, human-readable accessibility helper that can be reused across forms, buttons, navigation, and interactive components. It follows EaseMotion CSS naming conventions and promotes inclusive user interfaces without adding complexity.