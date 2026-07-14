# Chip Remove Slide Out

A CSS animation demo where chips slide out and fade away when dismissed via a close button.

## Features

- Inline-flex chip components with close buttons
- Slide-out + fade exit animation (`translateX` + `opacity`)
- Scale-in entrance animation for new chips
- Fully customizable via CSS custom properties
- Different colored chips with per-chip overrides
- "Add chip" button to dynamically insert new chips

## CSS Custom Properties

| Property                | Default   | Description              |
| ----------------------- | --------- | ------------------------ |
| `--chip-duration`       | `0.35s`   | Remove animation duration |
| `--chip-bg`             | `#e0e0e0` | Chip background          |
| `--chip-text-color`     | `#212121` | Chip label color         |
| `--chip-border-radius`  | `8px`     | Chip border radius       |
| `--chip-remove-color`   | `#616161` | Close button color       |
| `--chip-hover-bg`       | `#bdbdbd` | Chip hover background    |

## Usage

```html
<div class="chip">
  <span class="chip-label">Label</span>
  <button class="chip-close">&times;</button>
</div>
```

Add the `chip-removing` class to trigger the slide-out animation. The element is removed from the DOM after `animationend`.
