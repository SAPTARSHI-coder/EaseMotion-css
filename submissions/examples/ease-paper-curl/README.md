# Ease Paper Curl

A reusable CSS component that creates a realistic folded-paper corner animation.

When users hover over the component, a corner of the card appears to lift and curl like a physical sheet of paper. The effect introduces depth and tactile feedback while maintaining a clean and minimal aesthetic.

Unlike traditional hover animations that rely on scaling or glowing effects, Ease Paper Curl uses a paper-inspired interaction to create a unique visual experience.

---

## Features

✅ Pure CSS

✅ No JavaScript required

✅ Folded corner animation

✅ Smooth hover transitions

✅ Lightweight implementation

✅ Responsive design

✅ Customizable curl size

✅ Accessibility-friendly

---

## Preview

Default State

```text
┌───────────────┐
│               │
│   CONTENT     │
│               │
└───────────────┘
```

Hover State

```text
┌─────────────╮
│             ╲
│   CONTENT    │
│              │
└──────────────┘
```

The folded corner creates the illusion of a lifted sheet of paper.

---

## Installation

Include the stylesheet in your project:

```html
<link rel="stylesheet" href="style.css">
```

---

## Usage

```html
<div class="ease-paper-curl">
    <h2>Paper Card</h2>
    <p>Hover to reveal the paper curl effect.</p>
</div>
```

---

## CSS Variables

```css
:root{
    --ease-curl-size: 32px;
    --ease-curl-speed: 350ms;
}
```

| Variable            | Description        | Default |
| ------------------- | ------------------ | ------- |
| `--ease-curl-size`  | Folded corner size | `32px`  |
| `--ease-curl-speed` | Animation speed    | `350ms` |

---

## Large Variant

```html
<div class="ease-paper-curl ease-paper-curl-large">
    Content
</div>
```

This variant increases the visible folded corner.

---

## Accessibility

The component respects reduced-motion preferences:

```css
@media (prefers-reduced-motion: reduce){
    .ease-paper-curl{
        transition:none;
    }
}
```

---

## Use Cases

* Feature Cards
* Blog Cards
* Portfolio Projects
* Documentation Blocks
* Notes Components
* Product Showcases
* Educational Content

---

## Browser Support

* Chrome
* Firefox
* Safari
* Edge

---
