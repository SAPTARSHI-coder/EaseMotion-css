# Component: ease-shimmer-like-button

This submission implements the `ease-shimmer-like-button` component for GSSOC issue **#41522**.

## Description

An animated like button with shimmer effect. Features a sleek shimmer animation on hover and a satisfying pulse effect when liked.

## Usage

```html
<button class="ease-shimmer-like-btn">
  <svg class="like-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
  <span class="like-count">1.2k</span>
</button>
```

### JavaScript (for liked state)

```javascript
document.querySelectorAll('.ease-shimmer-like-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('is-liked');
  });
});
```

### Color Variants

```html
<button class="ease-shimmer-like-btn ease-shimmer-primary">Primary</button>
<button class="ease-shimmer-like-btn ease-shimmer-danger">Danger (Red)</button>
<button class="ease-shimmer-like-btn ease-shimmer-success">Success (Green)</button>
```

### Size Variants

```html
<button class="ease-shimmer-like-btn ease-shimmer-lg">Large</button>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--like-color` | `#ef4444` | Heart icon color |
| `--shimmer-duration` | `0.6s` | Animation duration |

## Acceptance Criteria

- ✅ Uses EaseMotion CSS variables
- ✅ Shimmer hover effect
- ✅ Heart beat animation on click
- ✅ Live demo in demo.html
- ✅ README.md with usage instructions
- ✅ `prefers-reduced-motion` support
- ✅ Pure CSS styling
