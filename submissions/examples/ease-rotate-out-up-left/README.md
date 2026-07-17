# ease-rotate-out-up-left

A CSS exit animation that rotates and translates an element up and to the left simultaneously, simulating an element being flicked off-screen.

## Classes

| Class | Effect |
|-------|--------|
| `ease-rotate-out-up-left` | Triggers rotate + translate exit on class add |
| `ease-rotate-out-up-left-hover` | Triggers rotate + translate exit on hover |

## Usage

```html
<!-- Hover trigger -->
<div class="ease-rotate-out-up-left-hover">
  Hover to exit
</div>

<!-- Class trigger (e.g. via JS) -->
<div class="ease-rotate-out-up-left">
  Exits on load/class add
</div>
```

## Customization

```css
:root {
  --ease-rotate-out-duration: 0.5s;
  --ease-rotate-out-easing: cubic-bezier(0.55, 0, 1, 0.45);
}
```

## Features
- Combines rotate(-45deg) with translate(-40px, -40px)
- Fades opacity to 0 simultaneously
- Hover and class trigger variants
- Customizable duration and easing
- Respects prefers-reduced-motion