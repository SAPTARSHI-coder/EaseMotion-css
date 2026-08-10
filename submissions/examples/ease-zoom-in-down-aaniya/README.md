# ease-zoom-in-down: Zoom In While Sliding Down

A CSS entrance animation where an element fades in while scaling up and moving downward — a direction variant of `ease-zoom-in-up`. Great for dropdown entrances.

## Classes

| Class | Effect |
|-------|--------|
| `ease-zoom-in-down` | Triggers zoom-in-down on class add |
| `ease-zoom-in-down-hover` | Triggers zoom-in-down on hover |
| `ease-zoom-in-down-trigger` | Wraps a trigger element (e.g. dropdown button) |
| `ease-zoom-in-down-target` | The element that animates in when the trigger is hovered/focused |

## Usage

```html
<!-- Class trigger -->
<div class="ease-zoom-in-down">
  Zooms in and slides down
</div>

<!-- Dropdown entrance -->
<div class="ease-zoom-in-down-trigger">
  <button>Menu ▾</button>
  <div class="ease-zoom-in-down-target">
    <a href="#">Profile</a>
    <a href="#">Settings</a>
  </div>
</div>
```

## Animation

```css
@keyframes ease-zoom-in-down {
  from { transform: scale(0.5) translateY(-40px); opacity: 0; }
  to   { transform: scale(1) translateY(0);        opacity: 1; }
}
```

## Customization

```css
:root {
  --ease-zoom-in-down-duration: 0.5s;
  --ease-zoom-in-down-easing: ease-out;
}
```

## Features
- scale(0.5) + translateY(-40px) + opacity(0) → normal
- Smooth ease-out timing
- Class, hover, and dropdown-trigger variants
- Customizable duration and easing
- Respects prefers-reduced-motion