# Text Gradient Animation Class

An animated gradient text effect using `background-clip: text` with a smoothly shifting multi-colour gradient. Works on headings, spans, paragraphs — any text element. Customisable via CSS custom properties.

## Classes

| Class                     | Description                       |
| ------------------------- | --------------------------------- |
| `ease-text-gradient`      | Animated gradient text (4s cycle) |
| `ease-text-gradient-slow` | Slower variant (8s cycle)         |
| `ease-text-gradient-fast` | Faster variant (2s cycle)         |

## Custom Properties

| Property               | Default   | Description            |
| ---------------------- | --------- | ---------------------- |
| `--ease-gradient-from` | `#7c6cff` | Left gradient colour   |
| `--ease-gradient-mid`  | `#a78bfa` | Middle gradient colour |
| `--ease-gradient-to`   | `#3b82f6` | Right gradient colour  |

## Usage

```html
<h1 class="ease-text-gradient">Animated Gradient Heading</h1>
<p class="ease-text-gradient ease-text-gradient-slow">Slower variant</p>
<span
  class="ease-text-gradient"
  style="--ease-gradient-from: #22c55e; --ease-gradient-to: #06b6d4;"
  >Custom colours</span
>
```

## Why it fits EaseMotion CSS

Pure CSS animated gradient text using `background-clip: text` with `ease-` prefixed keyframes (`ease-kf-text-gradient`), speed modifier classes, customisable gradient colours via CSS custom properties, and respects `prefers-reduced-motion`.
