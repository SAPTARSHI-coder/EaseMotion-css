# Morphing Slider

A Morphing Slider is an interactive range input that visually transforms as users adjust its value. Morphing effects can include changing track shapes, animated thumbs, dynamic colors, and smooth transitions that enhance user interaction.

## Features

- Smooth morphing animations
- Interactive slider thumb
- Responsive design
- Pure HTML and CSS implementation
- Easy customization
- Accessible user interaction

---

## Basic Usage

### HTML

```html
<div class="slider-container">
  <input
    type="range"
    min="0"
    max="100"
    value="50"
    class="morph-slider"
  >
</div>
```

### CSS

```css
.slider-container{
  width:300px;
}

.morph-slider{
  width:100%;
  cursor:pointer;
}
```

---

## Styled Morphing Slider Example

### HTML

```html
<div class="slider-wrapper">
  <input type="range" class="morph-slider">
</div>
```

### CSS

```css
.morph-slider{
  width:100%;
  appearance:none;
  height:12px;
  border-radius:999px;
  background:#dbeafe;
  transition:.3s ease;
}

.morph-slider::-webkit-slider-thumb{
  appearance:none;
  width:24px;
  height:24px;
  border-radius:50%;
  background:#2563eb;
  cursor:pointer;
  transition:.3s ease;
}

.morph-slider::-webkit-slider-thumb:hover{
  transform:scale(1.15);
}
```

---

## Customization

### Change Track Color

```css
.morph-slider{
  background:#c4b5fd;
}
```

### Change Thumb Color

```css
.morph-slider::-webkit-slider-thumb{
  background:#7c3aed;
}
```

### Increase Thumb Size

```css
.morph-slider::-webkit-slider-thumb{
  width:32px;
  height:32px;
}
```

---

## Responsive Example

```css
.slider-container{
  width:min(100%,500px);
}
```

---

## Accessibility Notes

### Provide Labels

```html
<label for="volume">
  Volume
</label>

<input
  id="volume"
  type="range"
  class="morph-slider"
>
```

### Support Reduced Motion

```css
@media (prefers-reduced-motion: reduce){

  .morph-slider,
  .morph-slider::-webkit-slider-thumb{
    transition:none;
  }

}
```

### Best Practices

- Use descriptive labels
- Ensure keyboard accessibility
- Maintain sufficient color contrast
- Avoid excessive animation

---

## Browser Support

| Browser | Support |
|----------|----------|
| Chrome | ✅ |
| Firefox | ✅ |
| Edge | ✅ |
| Safari | ✅ |

---

## File Structure

```text
submissions/docs/morphing-slider-79905/
└── README.md
```

## Why it fits EaseMotion CSS

Morphing Slider aligns with EaseMotion CSS by combining smooth motion, interactive feedback, accessibility, and lightweight implementation while remaining highly customizable for modern interfaces.