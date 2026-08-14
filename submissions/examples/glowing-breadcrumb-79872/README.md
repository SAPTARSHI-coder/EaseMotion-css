# Glowing Breadcrumb

A Glowing Breadcrumb component enhances navigation by combining traditional breadcrumb trails with animated glow effects. It helps users understand their current location while adding visual emphasis and modern styling.

## Features

- Animated glow effects
- Responsive layout
- Lightweight implementation
- Accessible navigation structure
- Easy customization
- Pure HTML and CSS support

---

## Basic Usage

### HTML

```html
<nav class="breadcrumb">
  <a href="#">Home</a>
  <span>/</span>
  <a href="#">Components</a>
  <span>/</span>
  <a href="#" aria-current="page">Breadcrumb</a>
</nav>
```

### CSS

```css
.breadcrumb{
  display:flex;
  gap:.5rem;
  align-items:center;
}

.breadcrumb a{
  text-decoration:none;
}
```

---

## Glowing Breadcrumb Example

### HTML

```html
<nav class="glowing-breadcrumb">
  <a href="#">Home</a>
  <span>›</span>

  <a href="#">Dashboard</a>
  <span>›</span>

  <a href="#" class="active">
    Analytics
  </a>
</nav>
```

### CSS

```css
.glowing-breadcrumb{
  display:flex;
  gap:.75rem;
  align-items:center;
}

.glowing-breadcrumb a{
  color:#38bdf8;
  text-decoration:none;
  transition:.3s ease;
}

.glowing-breadcrumb a:hover{
  text-shadow:
    0 0 10px #38bdf8,
    0 0 20px #38bdf8;
}

.active{
  text-shadow:
    0 0 10px #38bdf8,
    0 0 20px #38bdf8;
}
```

---

## Customization

### Change Glow Color

```css
.glowing-breadcrumb a:hover{
  text-shadow:
    0 0 10px #a855f7,
    0 0 20px #a855f7;
}
```

### Increase Glow Intensity

```css
.active{
  text-shadow:
    0 0 12px #38bdf8,
    0 0 24px #38bdf8,
    0 0 40px #38bdf8;
}
```

---

## Responsive Example

```css
.glowing-breadcrumb{
  flex-wrap:wrap;
}
```

---

## Accessibility Notes

### Current Page Indicator

```html
<a href="#" aria-current="page">
  Analytics
</a>
```

### Keyboard Navigation

Ensure breadcrumb links remain keyboard accessible and maintain visible focus styles.

```css
.glowing-breadcrumb a:focus{
  outline:2px solid #38bdf8;
}
```

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
submissions/docs/glowing-breadcrumb-79872/
└── README.md
```

## Why it fits EaseMotion CSS

Glowing Breadcrumb provides smooth visual feedback, modern aesthetics, responsive behavior, and lightweight implementation while maintaining usability and accessibility.