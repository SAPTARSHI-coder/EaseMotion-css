# Quick Tooltip

A tooltip that pops in from above with a scale effect on hover or focus.

## Features

- Smooth pop-in animation with scale transform
- Arrow pointer pointing downward
- Customizable background, text color, and animation duration
- Pure CSS transitions

## Usage

Wrap any trigger element with a `.tooltip` child. The tooltip appears on hover/focus of the parent `.trigger-area`.

```html
<div class="trigger-area" tabindex="0">
  Hover me
  <span class="tooltip">Hello! I'm a tooltip</span>
</div>
```

## CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--tooltip-bg` | `#333` | Tooltip background color |
| `--tooltip-color` | `#fff` | Tooltip text color |
| `--pop-duration` | `0.2s` | Pop-in animation duration |
