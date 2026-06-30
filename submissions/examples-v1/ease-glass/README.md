# ease-glass

Submission for Issue #3843

## What this adds

CSS utility for glassmorphism-style cards using `backdrop-filter: blur()`
and semi-transparent backgrounds. Zero JavaScript required.

## Classes

### Base

| Class               | Description                         |
| ------------------- | ----------------------------------- |
| `ease-glass`        | Base glassmorphism card, blur(12px) |
| `ease-glass--dark`  | Darker semi-transparent background  |
| `ease-glass--light` | Higher opacity white background     |

### Interaction

| Class               | Description                     |
| ------------------- | ------------------------------- |
| `ease-glass--hover` | Lifts card on hover with shadow |

### Border

| Class                     | Description                       |
| ------------------------- | --------------------------------- |
| `ease-glass--border`      | Bright inset top border highlight |
| `ease-glass--border-glow` | Green outer glow border           |

### Blur Intensity

| Class                 | Blur |
| --------------------- | ---- |
| `ease-glass--blur-sm` | 4px  |
| `ease-glass--blur-md` | 12px |
| `ease-glass--blur-lg` | 24px |
| `ease-glass--blur-xl` | 40px |

### Color Tints

| Class                     | Tint        |
| ------------------------- | ----------- |
| `ease-glass--tint-green`  | Green tint  |
| `ease-glass--tint-blue`   | Blue tint   |
| `ease-glass--tint-purple` | Purple tint |
| `ease-glass--tint-pink`   | Pink tint   |

## Usage

```html
<!-- Base glass card -->
<div class="ease-glass">Glass card content</div>

<!-- Dark glass with hover lift -->
<div class="ease-glass ease-glass--dark ease-glass--hover">Dark glass</div>

<!-- Light glass with border highlight -->
<div class="ease-glass ease-glass--light ease-glass--border">Light glass</div>

<!-- Heavy blur with tint -->
<div class="ease-glass ease-glass--blur-xl ease-glass--tint-purple">
  Purple glass
</div>
```

## Browser Support

`backdrop-filter` is supported in all modern browsers.
For older browsers, the card degrades gracefully to a
semi-transparent background without blur.

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, `data-theme="dark"`.
