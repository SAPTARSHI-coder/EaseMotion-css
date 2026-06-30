# Color-Blind Safe Palette Recommendations

This guide explains how to use EaseMotion status colors in an accessible way.

## Default Status Colors

| Variable       | Purpose          |
| -------------- | ---------------- |
| --ease-success | Success messages |
| --ease-warning | Warning messages |
| --ease-danger  | Error messages   |

## Accessibility Notes

Color alone should never communicate important information.

Instead, combine colors with:

- Icons
- Labels
- Status text
- Patterns or borders

### Good Example

✔ Success

⚠ Warning

✖ Error

### Avoid

Using only green, yellow, or red without supporting text.

## Common Color-Blindness Types

- Protanopia
- Deuteranopia
- Tritanopia

Users may not distinguish red and green effectively.

## Recommended Pattern

```html
<div class="success">✔ Success: File uploaded</div>

<div class="warning">⚠ Warning: Check your settings</div>

<div class="danger">✖ Error: Upload failed</div>
```

## Color-Blind Simulator

Use:

https://www.color-blindness.com/coblis-color-blindness-simulator/

to test interfaces under different color-vision conditions.

## Recommendations

- Always include text labels
- Use icons alongside color
- Maintain sufficient contrast
- Test with accessibility tools
- Avoid relying solely on red vs green distinctions
