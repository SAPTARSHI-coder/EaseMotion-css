# Avatar Group Stack

A stacked avatar group showing multiple users. Hover expands the stack; avatars can be added or removed with animation.

## Features

- Overlapping avatars with negative margin
- Hover expands to show full names via tooltip
- Add/remove with scale + fade animation
- Count badge for remaining avatars

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ags-duration` | `0.3s` | Animation duration |
| `--ags-avatar-size` | `48px` | Avatar dimensions |
| `--ags-border-color` | `#0f172a` | Avatar border color |
| `--ags-overlap` | `16px` | Negative margin overlap |
| `--ags-count-bg` | `#f59e0b` | Count badge background |

## Usage

```html
<div class="ags-group">
  <div class="ags-avatar" style="--i:0;"><img src="..." alt=""></div>
  <div class="ags-count">+3</div>
</div>
```

Set `--i` on each avatar for stagger on hover.
