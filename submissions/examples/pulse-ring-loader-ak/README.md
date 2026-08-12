# Pulse Ring Loader

## What does this do?

A pure CSS loading indicator with concentric rings that pulse outward in sequence — creating a radar-like scanning effect with no JavaScript.

## How is it used?

Add the `.pulse-ring-ak` class to a container element.

```html
<div class="pulse-ring-ak" aria-label="Loading" role="status">
  <div class="pulse-ring-dot-ak"></div>
</div>
```

### Custom Properties

| Variable | Default | Purpose |
|---|---|---|
| `--pulse-ring-color-ak` | `#6c63ff` | Primary ring and dot color |
| `--pulse-ring-size-ak` | `60px` | Loader diameter |
| `--pulse-ring-speed-ak` | `2s` | Full pulse cycle duration |

## Why is it useful?

A visually distinct loading pattern that communicates activity through expanding rings — more expressive than a simple spinner. Works as a content loader, page loader, or async operation indicator.
