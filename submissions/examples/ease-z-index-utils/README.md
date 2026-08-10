# ease-z-index utilities

Semantic z-index utility classes that expose the framework's `--ease-z-*` design tokens as reusable layout helpers.

## Class reference

| Class | CSS Property | Token |
|-------|--------------|-------|
| `.ease-z-base` | `z-index: var(--ease-z-base)` | `--ease-z-base` |
| `.ease-z-overlay` | `z-index: var(--ease-z-overlay)` | `--ease-z-overlay` |
| `.ease-z-modal` | `z-index: var(--ease-z-modal)` | `--ease-z-modal` |
| `.ease-z-toast` | `z-index: var(--ease-z-toast)` | `--ease-z-toast` |

## Usage

```html
<div class="ease-z-base">Default page content</div>
<div class="ease-z-overlay">Dimmed backdrop</div>
<div class="ease-z-modal">Dialog panel</div>
<div class="ease-z-toast">Notification toast</div>
```

## Token dependency

These classes require the `--ease-z-*` custom properties to be defined. When using the full EaseMotion CSS framework, `core/variables.css` provides the canonical token values. For standalone demos, define the same variables in your own `:root` block or load the framework stylesheet.
