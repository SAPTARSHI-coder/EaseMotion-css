# Ease Breath Border

A lightweight CSS animation component that creates a smooth breathing border effect around any element.

The border gently expands and contracts over time, simulating the natural rhythm of breathing. Combined with a subtle glow effect, it helps draw attention to content without being distracting.

This component is ideal for cards, feature sections, pricing tables, forms, notifications, and call-to-action elements where a soft animated emphasis is desired.

---

## Preview

The border continuously transitions between relaxed and expanded states:

- Smooth breathing motion
- Soft animated glow
- Fully customizable
- Pure CSS implementation
- No JavaScript required

---

## Features

✅ Pure CSS

✅ Lightweight and reusable

✅ Customizable animation speed

✅ Customizable border color

✅ Responsive by default

✅ Accessibility-friendly

✅ Supports reduced-motion preferences

✅ Works with cards, buttons, forms, and containers

---

## Installation

Include the stylesheet in your project:

```html
<link rel="stylesheet" href="style.css" />
```

Or import it into your existing stylesheet:

```css
@import url("ease-breath-border.css");
```

---

## Basic Usage

Apply the `.ease-breath-border` class to any container element.

```html
<div class="ease-breath-border">
  <h2>Breathing Border</h2>
  <p>This card uses the Ease Breath Border animation.</p>
</div>
```

---

## Example

```html
<div class="ease-breath-border">
  <h2>Welcome</h2>
  <p>Experience a subtle and elegant animated border.</p>
</div>
```

---

## Animation Behavior

The component combines two synchronized animations:

### Border Expansion

The border gently scales outward and returns to its original size.

```text
Normal State
      ↓
Expands Slightly
      ↓
Returns
      ↓
Repeats
```

### Glow Pulse

A soft shadow glow expands and fades alongside the border movement.

```text
Low Glow
      ↓
Bright Glow
      ↓
Low Glow
      ↓
Repeats
```

Together these create the breathing effect.

---

## CSS Variables

The component uses CSS custom properties for easy customization.

### Default Variables

```css
:root {
  --ease-breath-speed: 2.5s;
  --ease-breath-speed-slow: 4s;

  --ease-border-color: #6366f1;
  --ease-shadow-color: rgba(99, 102, 241, 0.25);

  --card-radius: 18px;
}
```

### Variable Reference

| Variable                   | Description                       | Default Value           |
| -------------------------- | --------------------------------- | ----------------------- |
| `--ease-breath-speed`      | Default breathing animation speed | `2.5s`                  |
| `--ease-breath-speed-slow` | Slower breathing animation speed  | `4s`                    |
| `--ease-border-color`      | Border color                      | `#6366f1`               |
| `--ease-shadow-color`      | Glow shadow color                 | `rgba(99,102,241,0.25)` |
| `--card-radius`            | Border radius                     | `18px`                  |

---

## Customization Examples

### Faster Animation

```css
:root {
  --ease-breath-speed: 1.5s;
}
```

### Slower Animation

```css
:root {
  --ease-breath-speed: 5s;
}
```

### Green Breathing Border

```css
:root {
  --ease-border-color: #22c55e;
  --ease-shadow-color: rgba(34, 197, 94, 0.25);
}
```

### Red Breathing Border

```css
:root {
  --ease-border-color: #ef4444;
  --ease-shadow-color: rgba(239, 68, 68, 0.25);
}
```

---

## Variants

### Default Variant

```html
<div class="ease-breath-border">Default Breathing Border</div>
```

### Slow Variant

```html
<div class="ease-breath-border ease-breath-border-slow">
  Slow Breathing Border
</div>
```

The slow variant uses a longer animation duration for a calmer appearance.

---

## Accessibility

Ease Breath Border respects user accessibility preferences.

Users who have enabled reduced motion in their operating system will automatically receive a static version of the component.

```css
@media (prefers-reduced-motion: reduce) {
  .ease-breath-border::before,
  .ease-breath-border::after {
    animation: none;
  }
}
```

This helps reduce motion-related discomfort while maintaining the visual design.

---

## Browser Support

The component relies on modern CSS features including:

- CSS Animations
- CSS Variables
- Pseudo-elements
- Backdrop Filters

Supported browsers include:

| Browser | Support |
| ------- | ------- |
| Chrome  | ✅      |
| Firefox | ✅      |
| Edge    | ✅      |
| Safari  | ✅      |

---

## Performance Notes

The animation is designed to be lightweight and GPU-friendly.

Recommendations:

- Use on important UI elements rather than large numbers of elements simultaneously.
- Avoid applying dozens of breathing borders on a single page.
- Prefer reduced glow intensity for large layouts.

---

## Use Cases

Ease Breath Border works particularly well for:

- Feature cards
- Pricing cards
- Login forms
- Dashboard widgets
- Call-to-action sections
- Notifications
- Profile cards
- Product highlights
- Portfolio sections
