# @container style() Queries Demo

## What does this do?

Demonstrates `@container style()` — a modern CSS feature that lets elements respond to the computed value of any custom property on an ancestor container. Unlike size-based container queries, style queries check property *values*. This enables: theme-aware cards that self-style based on a container's `--card-theme`, form fields that react to `--validation` state, component density that switches between compact and spacious layouts, and grid/list view toggles — all without modifier classes or JavaScript.

## How is it used?

Set a custom property on a named container, then use `@container` with `style()`:

```css
.theme-row {
  container-name: card-theme;
  container-type: inline-size;
}

.theme-row--primary { --card-theme: primary; }

@container card-theme style(--card-theme: primary) {
  .card { border-color: #6366f1; background: #eef2ff; }
}

@container card-theme style(--card-theme: success) {
  .card { border-color: #10b981; background: #ecfdf5; }
}
```

Four patterns are shown:

| Pattern | Container Property | What It Controls |
|---------|-------------------|-----------------|
| Theme-Aware Cards | `--card-theme` | Border, background gradient, badge color |
| Validation-Sensitive Forms | `--validation` | Input border, validation message, submit button |
| Component Density | `--component-density` | Grid layout, padding, icon size, text scale |
| Grid/List View Toggle | `--view-mode` | Card layout (multi-column grid vs horizontal list) |

## Why is it useful?

`@container style()` queries solve a fundamental CSS architecture problem: how to make a component adapt to its *context* without prop drilling, modifier classes, or JavaScript. Before style queries, you needed either complex BEM modifier chains (`.card--primary`, `.card--success`, etc.) or CSS-in-JS solutions. Style queries make components context-aware:

- **Single source of truth**: The container sets one property; all children react
- **No prop drilling**: Deeply nested components still see the container's properties
- **Composable**: Multiple containers with different properties can control different aspects of the same descendant
- **No JS**: Purely declarative, computed at style resolution time

## Browser Support

- **Chrome 115+**: Full support for `@container style()`
- **Edge 115+**: Full support
- **Safari 18+**: Full support
- **Firefox**: Pending (tracked in bug 1850706)

In unsupported browsers, components fall back to their base styles — the demo degrades gracefully.

## Modern CSS APIs Used

- `@container style()`
- `container-name`
- `container-type`
- CSS Custom Properties
- `prefers-color-scheme`
- `forced-colors: active`
- `@media print`
