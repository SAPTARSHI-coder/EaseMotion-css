# Animated ::selection Styles

Three `::selection` pseudo-element styling patterns using CSS custom properties and focus-state transitions.

## Classes

| Class | Effect |
|---|---|
| `ease-selection-ink` | Ink-spread `text-shadow` on `::selection`, activated by `:focus` |
| `ease-selection-themed` | Selection color driven by `data-theme` attribute on any ancestor |
| `ease-selection-redact` | High-contrast inverted "redacted document" look |

## Usage

```html
<p class="ease-selection-ink" tabindex="0">Select this text.</p>

<div data-theme="ocean">
  <p class="ease-selection-themed">Theme-aware selection.</p>
</div>
```

Closes #9596
