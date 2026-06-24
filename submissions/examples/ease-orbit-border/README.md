# Ease Orbit Border

A reusable CSS animation component that creates orbiting dots around the border of an element.

The component uses pure CSS animations to continuously move decorative dots along the perimeter, creating a futuristic and eye-catching border effect.

Unlike traditional animated borders that rotate gradients or pulse colors, Ease Orbit Border introduces motion around the component itself, making it ideal for highlighting important content while maintaining a clean design.

---

## Features

✅ Pure CSS

✅ No JavaScript required

✅ Lightweight implementation

✅ Customizable orbit speed

✅ Customizable dot size

✅ Customizable orbit color

✅ Responsive design

✅ Accessibility-friendly

✅ Modern UI aesthetic

---

## Preview

The orbiting dots continuously travel around the edges of the component.

```text
●───────────────────●
│                   │
│     CONTENT       │
│                   │
●───────────────────●
```

The motion creates a subtle sense of activity without distracting from the content.

---

## Installation

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

---

## Basic Usage

```html
<div class="ease-orbit-border">
    <h2>Orbit Border</h2>
    <p>
        Content inside the animated border.
    </p>
</div>
```

---

## Example

```html
<div class="ease-orbit-border">
    <h2>Featured Section</h2>
    <p>
        Orbiting dots continuously animate around the border.
    </p>
</div>
```

---

## CSS Variables

The component can be customized using CSS variables.

### Default Variables

```css
:root{
    --ease-orbit-speed: 8s;
    --ease-dot-size: 12px;
    --ease-dot-color: #6366f1;
}
```

### Variable Reference

| Variable             | Description              | Default   |
| -------------------- | ------------------------ | --------- |
| `--ease-orbit-speed` | Orbit animation duration | `8s`      |
| `--ease-dot-size`    | Dot diameter             | `12px`    |
| `--ease-dot-color`   | Dot color                | `#6366f1` |

---

## Customization

### Faster Orbit

```css
:root{
    --ease-orbit-speed: 4s;
}
```

### Larger Dots

```css
:root{
    --ease-dot-size: 18px;
}
```

### Green Orbit

```css
:root{
    --ease-dot-color: #22c55e;
}
```

---

## Accessibility

The component respects user motion preferences.

```css
@media (prefers-reduced-motion: reduce){
    .ease-orbit-border::before,
    .ease-orbit-border::after{
        animation:none;
    }
}
```

---

## Browser Support

| Browser | Support |
| ------- | ------- |
| Chrome  | ✅       |
| Firefox | ✅       |
| Safari  | ✅       |
| Edge    | ✅       |

---

## Use Cases

* Feature Cards
* Pricing Sections
* Dashboards
* Hero Components
* Portfolio Projects
* Product Highlights
* Call-to-Action Sections
