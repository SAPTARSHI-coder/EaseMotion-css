# CSS Glitch-Flicker Tabs

A tab navigation where hovering a tab briefly triggers a glitch-style RGB text-shadow flicker.

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--ease-tabs-glitch-color` | `#ec4899` | Primary glitch shadow color |
| `--ease-tabs-accent` | `#4f46e5` | Active tab underline/text color |

## Usage
```html
<div class="ease-tabs" role="tablist">
  <button class="ease-tabs__tab ease-tabs__tab--active" role="tab" aria-selected="true">Overview</button>
  <button class="ease-tabs__tab" role="tab" aria-selected="false">Details</button>
</div>
```

## Accessibility
`role="tablist"`/`tab` and `aria-selected` reflect state to screen readers. The glitch effect is purely visual and doesn't affect readability of the text itself; `prefers-reduced-motion` disables it.

## Why it fits EaseMotion CSS
Pure CSS `text-shadow` glitch technique using `steps()` timing, `ease-` prefixed classes, themeable, zero dependencies.
