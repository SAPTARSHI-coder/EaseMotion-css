# Letter Spacing Animate (#36773)

An interactive letter-spacing (tracking) animation that expands on hover.

## CSS Custom Properties

| Property          | Default   | Description              |
|-------------------|-----------|--------------------------|
| `--text-color`    | `#e0e0e0` | Text color               |
| `--start-spacing` | `-0.02em` | Initial letter spacing   |
| `--end-spacing`   | `0.12em`  | Expanded letter spacing  |
| `--expand-duration` | `0.5s` | Transition duration    |

## Usage

```html
<span class="ease-letter-spacing">Your text here</span>
```

Apply the class to any inline element. Hover to trigger the tracking expansion.
