# Component: Pencil Sketch Effect

This submission implements the Pencil Sketch Effect for issue **#46892**.

## Description

CSS-based pencil sketch effect with hover reveal animation.

## Features

- **Sketch Filter**: Grayscale with contrast for sketch look
- **Hover Reveal**: White overlay fades on hover
- **Pencil Lines**: Subtle line texture overlay
- **Multiple Variants**: Default, grayscale, sepia
- **Mini Size**: Compact preview variant

## Usage

```html
<div class="sketch-container">
  <div class="image-wrapper">
    <img src="image.jpg" alt="Sketch" class="sketch">
  </div>
</div>
```

## CSS Filters

```css
.sketch {
  filter: grayscale(100%) contrast(1.2);
  mix-blend-mode: multiply;
}
```

## Variants

| Variant | Filter |
|---------|--------|
| Default | grayscale(100%) contrast(1.2) |
| Grayscale | grayscale(100%) contrast(1.5) |
| Sepia | sepia(100%) grayscale(50%) |

## Animation

The white overlay fades out on hover to reveal the sketch effect:

```css
.image-wrapper::before {
  background: white;
  opacity: 1;
  transition: opacity 0.5s ease;
}

.image-wrapper:hover::before {
  opacity: 0;
}
```

## Acceptance Criteria

- ✅ Sketch filter effect
- ✅ Hover reveal animation
- ✅ Pencil line texture
- ✅ Multiple filter variants
- ✅ README.md included
