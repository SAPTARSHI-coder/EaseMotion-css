# Spotlight Hover Effect

A cursor-following radial glow effect on cards using CSS custom
properties (`--x`, `--y`) updated by a minimal JS mouse listener.

## Structure
spotlight-hover-effect/

├── demo.html

├── style.css

└── README.md
## Usage

```html
<div class="spotlight-card">
  <div class="card-content">
    <h2 class="card-title">Your Title</h2>
    <p class="card-desc">Your description here.</p>
  </div>
</div>

<script>
  document.querySelectorAll('.spotlight-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
  });
</script>
```

## Card Variants

| Class | Glow Color |
|---|---|
| `spotlight-card` | White glow |
| `spotlight-card card-purple` | Purple glow |
| `spotlight-card card-cyan` | Cyan glow |

## How It Works
Mouse position is tracked via `mousemove` and passed to CSS as
`--x` and `--y` custom properties. The `::before` pseudo-element
uses `radial-gradient(circle at var(--x) var(--y))` to render the
glow exactly under the cursor.

## Features
- Minimal JS (~6 lines) for mouse tracking only
- CSS `radial-gradient` spotlight via `::before`
- 3 color variants
- Hover lift animation
- Fully responsive
- Respects `prefers-reduced-motion`

## Use Cases
- Portfolio cards
- SaaS landing pages
- Feature highlight sections
- Premium dashboard components