# Ink Spread Radial Reveal

CSS-only radial reveal using `clip-path: circle()` transition, triggered by a hidden checkbox and `:has()`.

## Classes

| Class | Effect |
|---|---|
| `ease-ink-trigger` | Wrapper label; toggling the checkbox inside drives the reveal |
| `ease-ink-overlay` | The dark overlay that sweeps in/out via `clip-path: circle()` |
| `ease-ink-content` | Content fades in after the overlay spreads |
| `ease-ink-blob` | Modifier on `.ease-ink-card` — adds `filter: blur+contrast` for organic blob edges |

## Usage

```html
<label class="ease-ink-trigger">
  <input type="checkbox" hidden />
  <div class="ease-ink-card">
    <div class="ease-ink-overlay"></div>
    <div class="ease-ink-content">Revealed</div>
  </div>
</label>
```

## How it works

`clip-path: circle(0%)` → `circle(150%)` is a radial wipe. On `.ease-ink-blob`, applying `filter: blur(8px)` to the overlay inside a `filter: contrast(20)` parent creates organic blob-edge morphology — the classic CSS goo trick applied to clip-path reveals.

Closes #9598
