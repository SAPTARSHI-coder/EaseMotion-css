# Component: ease-parallax-speed-dial

This submission implements the `ease-parallax-speed-dial` component for GSSOC issue **#41658**.

## Description

A parallax speed dial component for banking design. Features layered motion effects where action buttons animate outward with staggered timing and parallax-like depth.

## Usage

```html
<div class="ease-parallax-speed-dial">
  <button class="speed-dial-trigger" aria-label="Open menu">
    <span class="dial-icon">+</span>
  </button>
  <ul class="speed-dial-actions">
    <li class="speed-dial-action">
      <button class="action-btn" aria-label="Action 1">
        <span class="action-icon">1</span>
      </button>
      <span class="action-label">Label</span>
    </li>
    <!-- More actions -->
  </ul>
</div>
```

### JavaScript (Required)

```javascript
document.querySelectorAll('.ease-parallax-speed-dial').forEach(dial => {
  const trigger = dial.querySelector('.speed-dial-trigger');
  trigger.addEventListener('click', () => {
    dial.classList.toggle('is-open');
  });
});
```

### Color Variants

```html
<div class="ease-parallax-speed-dial ease-parallax-primary">...</div>
<div class="ease-parallax-speed-dial ease-parallax-success">...</div>
```

### Size Variants

```html
<div class="ease-parallax-speed-dial ease-parallax-lg">...</div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--dial-size` | `56px` | Main button size |
| `--action-size` | `48px` | Action button size |
| `--dial-color` | `#3b82f6` | Button color |
| `--dial-offset` | `70px` | Spacing between actions |
| `--dial-duration` | `0.3s` | Animation duration |

## Acceptance Criteria

- ✅ Uses EaseMotion CSS variables
- ✅ Parallax open animation with staggered timing
- ✅ Live demo in demo.html
- ✅ README.md with usage instructions
- ✅ Responsive design
- ✅ `prefers-reduced-motion` support
- ✅ Accessibility attributes
