# ease-spotlight

A CSS-first spotlight effect — dark overlay with a radial-gradient
"torch" that follows the mouse cursor.

## How it works
- `@property` defines `--ease-x`, `--ease-y`, `--ease-radius`
  as typed, animatable CSS custom properties
- `radial-gradient(circle var(--ease-radius) at var(--ease-x) var(--ease-y))`
  creates the spotlight hole dynamically
- CSS `transition` on `--ease-x` and `--ease-y` gives smooth
  cursor-follow feel
- JS only sets two CSS variables on mousemove — all rendering is CSS

## Usage
```html
<div class="ease-spotlight-scene">
  <!-- your content here -->
  <div class="ease-spotlight" id="spotlight"></div>
</div>

<script>
  const scene = document.querySelector('.ease-spotlight-scene');
  const overlay = document.getElementById('spotlight');

  scene.addEventListener('mousemove', e => {
    const r = scene.getBoundingClientRect();
    overlay.style.setProperty('--ease-x',
      ((e.clientX - r.left) / r.width * 100).toFixed(2) + '%');
    overlay.style.setProperty('--ease-y',
      ((e.clientY - r.top) / r.height * 100).toFixed(2) + '%');
  });
</script>
```

## Variables
| Variable        | Default | Description          |
|-----------------|---------|----------------------|
| `--ease-x`      | 50%     | Spotlight X position |
| `--ease-y`      | 50%     | Spotlight Y position |
| `--ease-radius` | 18%     | Spotlight size       |
| `--ease-dark`   | 0.88    | Overlay darkness     |