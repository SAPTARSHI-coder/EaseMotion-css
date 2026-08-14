# Neumorphic Input Field

A soft, modern input field component inspired by neumorphism design principles. This component uses subtle shadows, rounded corners, and smooth interactions to create a clean and tactile user experience.

## Features

- Soft neumorphic appearance
- Pure HTML and CSS
- Smooth focus transitions
- Responsive layout
- Accessible form input structure
- Lightweight and easy to customize

---

## Basic Usage

### HTML

```html
<div class="neumorphic-input-container">
  <input
    type="text"
    class="neumorphic-input"
    placeholder="Enter your name"
  />
</div>
```

### CSS

```css
body {
  background: #e9eef5;
}

.neumorphic-input {
  width: 100%;
  padding: 1rem 1.25rem;
  border: none;
  border-radius: 16px;
  outline: none;

  background: #e9eef5;

  box-shadow:
    inset 4px 4px 8px #c7ccd3,
    inset -4px -4px 8px #ffffff;

  transition: all 0.3s ease;
}

.neumorphic-input:focus {
  box-shadow:
    inset 2px 2px 4px #c7ccd3,
    inset -2px -2px 4px #ffffff,
    0 0 0 3px rgba(99, 102, 241, 0.2);
}
```

---

## Example

```html
<form>
  <label for="email">Email Address</label>

  <input
    id="email"
    type="email"
    class="neumorphic-input"
    placeholder="you@example.com"
  />
</form>
```

---

## Customization

### Change Border Radius

```css
.neumorphic-input {
  border-radius: 24px;
}
```

### Change Background Color

```css
.neumorphic-input {
  background: #f1f5f9;
}
```

### Adjust Shadow Depth

```css
.neumorphic-input {
  box-shadow:
    inset 6px 6px 12px #c7ccd3,
    inset -6px -6px 12px #ffffff;
}
```

---

## Accessibility Notes

- Always pair inputs with labels.
- Ensure sufficient contrast between text and background.
- Preserve visible focus states for keyboard navigation.
- Use appropriate input types such as `email`, `password`, and `search`.

---

## Browser Support

| Browser | Supported |
|----------|-----------|
| Chrome | ✅ |
| Firefox | ✅ |
| Edge | ✅ |
| Safari | ✅ |

---

## Why it fits EaseMotion CSS

This component follows EaseMotion CSS principles by combining smooth visual transitions, approachable styling, accessibility, and reusable design patterns in a lightweight CSS-only implementation.