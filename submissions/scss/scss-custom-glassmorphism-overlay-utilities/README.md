# SCSS Custom Glassmorphism Overlay Utilities

Reusable SCSS utility for creating modern glassmorphism overlays.

---

## Features

- Custom glass overlay mixin
- Adjustable opacity
- Adjustable blur intensity
- Custom border color
- Reusable utility classes
- Lightweight and customizable

---

## Parameters

| Parameter | Default | Description |
|-----------|----------|-------------|
| `$bg-color` | `#ffffff` | Background color |
| `$opacity` | `0.15` | Overlay opacity |
| `$blur` | `16px` | Blur amount |
| `$border-color` | `rgba(255,255,255,.2)` | Border color |

---

## Usage

```scss
.card {
  @include glass-overlay();
}

.dark-card {
  @include glass-overlay(
    #111827,
    .25,
    20px,
    rgba(255,255,255,.08)
  );
}
```

---

## Generated Utility Classes

- `.glass-overlay`
- `.glass-overlay-light`
- `.glass-overlay-dark`
- `.glass-overlay-strong`

---

## CSS Compilation Result

The SCSS compiles into reusable utility classes with customizable blur, transparency, borders, and shadow effects suitable for glassmorphism interfaces.