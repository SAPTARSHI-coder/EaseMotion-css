# Morphing Button

A Morphing Button is an interactive UI element that smoothly changes its shape, size, color, or content when users hover, click, or trigger an action. Morphing animations improve visual feedback and create a more engaging user experience.

## Features

- Smooth morphing transitions
- Hover and active state animations
- Modern interactive appearance
- Responsive behavior
- Easy customization
- Pure HTML and CSS implementation

---

## Basic Usage

### HTML

```html
<button class="morph-btn">
  Get Started
</button>
```

### CSS

```css
.morph-btn{
  padding:14px 32px;
  border:none;
  border-radius:12px;
  background:#6366f1;
  color:#fff;
  cursor:pointer;
  transition:all .35s ease;
}

.morph-btn:hover{
  border-radius:40px;
  transform:scale(1.05);
  background:#4f46e5;
}
```

---

## Morphing Button with Icon

### HTML

```html
<button class="morph-icon-btn">
  <span>Continue</span>
  <span>→</span>
</button>
```

### CSS

```css
.morph-icon-btn{
  display:flex;
  align-items:center;
  gap:10px;
  padding:14px 24px;
  border:none;
  border-radius:14px;
  background:#0f172a;
  color:white;
  transition:.3s ease;
}

.morph-icon-btn:hover{
  gap:16px;
  border-radius:40px;
}
```

---

## Customization

You can customize:

- Background colors
- Border radius values
- Animation duration
- Scale effects
- Hover transformations
- Typography

Example:

```css
.morph-btn{
  background:#06b6d4;
  transition:.5s ease;
}
```

---

## Responsive Example

```css
@media (max-width:600px){

  .morph-btn{
    width:100%;
  }

}
```

---

## Browser Support

Supported in all modern browsers:

- Chrome
- Edge
- Firefox
- Safari

---

## Accessibility Notes

- Use descriptive button labels.
- Maintain sufficient color contrast.
- Preserve keyboard focus states.
- Avoid overly long animations.

---

## Files

```text
submissions/docs/morphing-button-79910/
└── README.md
```