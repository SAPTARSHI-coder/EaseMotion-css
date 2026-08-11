# Ripple Effect Button

A material-inspired button component that creates a ripple animation originating from the click point. The ripple expands and fades in a smooth circular burst.

## Features

- Ripple originates from exact click coordinates
- Multiple button color variants
- Customizable border radius and ripple opacity
- Animation removes itself after completion
- Lightweight JS with no dependencies

## Usage

```html
<button class="ripple-btn" style="--reb-btn-color: #6c5ce7;">
  <span class="btn-label">Click Me</span>
</button>
```

The JavaScript handles ripple creation automatically for all `.ripple-btn` elements.

## Custom Properties

| Property             | Default                  | Description              |
|----------------------|--------------------------|--------------------------|
| `--reb-duration`     | `0.6s`                   | Ripple animation duration|
| `--reb-btn-color`    | `#6c5ce7`                | Button background color  |
| `--reb-ripple-color` | `rgba(255,255,255,0.5)`  | Ripple circle color      |
| `--reb-radius`       | `12px`                   | Button border radius     |
| `--reb-text-color`   | `#ffffff`                | Button label color       |
