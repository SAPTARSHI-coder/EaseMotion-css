# Ease List Number Count — Sequential Reveal

> **PR:** #36779  
> **Component:** `<list-number-count>`

Ordered list where each number counts up on scroll or interaction.

## CSS Custom Properties

| Property          | Default   | Description            |
|-------------------|-----------|------------------------|
| `--number-color`  | `#3b82f6` | Number badge color     |
| `--text-color`    | `#e2e8f0` | List item text color   |
| `--count-duration`| `0.6s`    | Count-up duration      |
| `--stagger-delay` | `0.12s`   | Delay between items    |

## Usage

```html
<list-number-count start="1">
  <ol>
    <li>Step one</li>
    <li>Step two</li>
  </ol>
</list-number-count>
```

## Features

- Animated number counter per item
- Staggered reveal on scroll
- Dark theme by default
