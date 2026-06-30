# ease-morph

Submission for Issue #3835

## What this adds

CSS utility that continuously animates border-radius to create
organic blob/morph shapes. Zero JavaScript required.

## Classes

### Base

| Class        | Description                              |
| ------------ | ---------------------------------------- |
| `ease-morph` | Default looping border-radius morph (8s) |

### Shape Variants

| Class                | Description                       |
| -------------------- | --------------------------------- |
| `ease-morph--subtle` | Small radius shifts, natural feel |
| `ease-morph--hard`   | Dramatic shape changes            |

### Speed Variants

| Class              | Duration     |
| ------------------ | ------------ |
| `ease-morph--fast` | 3s           |
| `ease-morph`       | 8s (default) |
| `ease-morph--slow` | 16s          |

### Interaction

| Class                 | Description               |
| --------------------- | ------------------------- |
| `ease-morph--hover`   | Morphs only on hover      |
| `ease-morph--reverse` | Runs animation in reverse |

### Fill Helpers

| Class                              | Color                  |
| ---------------------------------- | ---------------------- |
| `ease-morph--fill-green`           | #4ade80                |
| `ease-morph--fill-blue`            | #60a5fa                |
| `ease-morph--fill-purple`          | #a78bfa                |
| `ease-morph--fill-pink`            | #f472b6                |
| `ease-morph--fill-orange`          | #fb923c                |
| `ease-morph--fill-gradient-green`  | Green → Cyan gradient  |
| `ease-morph--fill-gradient-purple` | Purple → Pink gradient |
| `ease-morph--fill-gradient-sunset` | Orange → Red gradient  |

## Usage

```html
<!-- Default morph blob -->
<div
  class="ease-morph ease-morph--fill-green"
  style="width:100px;height:100px"
></div>

<!-- Slow morph -->
<div
  class="ease-morph ease-morph--slow ease-morph--fill-gradient-purple"
  style="width:120px;height:120px"
></div>

<!-- Hover only -->
<div
  class="ease-morph ease-morph--hover ease-morph--fill-blue"
  style="width:100px;height:100px"
></div>
```

## Accessibility

Respects `prefers-reduced-motion` — morph animation falls back
to a gentle opacity + scale pulse, border-radius fixed at 50%.

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, `data-theme="dark"`.
