# Loading Dots Bounce

Three-dot loading indicator with a sequential bounce animation. Each dot bounces upward with a staggered delay for a wave-like effect.

## Features

- Bounce `@keyframes` using `translateY`
- Staggered delays via `nth-child` selectors
- Fully customizable CSS custom properties
- Show/hide toggle with JavaScript demo
- Pure CSS animation, no dependencies

## Usage

Add `.ldb-dot` spans inside `.ldb-container`. Toggle `.ldb-hidden` on the container to show/hide the loading state.

```html
<div class="ldb-container">
  <span class="ldb-dot"></span>
  <span class="ldb-dot"></span>
  <span class="ldb-dot"></span>
</div>
```

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ldb-dot-size` | `16px` | Diameter of each dot |
| `--ldb-dot-color` | `#6366f1` | Dot background color |
| `--ldb-duration` | `0.6s` | Animation duration |
| `--ldb-delay` | `0.15s` | Stagger delay between dots |
| `--ldb-bg-color` | `#0f172a` | Page background color |
