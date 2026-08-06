# ease-progress-ring

Submission for Issue #51223

## What this adds

An animated circular progress ring component using CSS
conic-gradient driven by a `--progress` custom property,
animated on value change via `@property` transition.
Zero JavaScript required for animation.

## How It Works

```css
@property --progress {
  syntax: "<number>";
  inherits: false;
  initial-value: 0;
}

.ease-progress-ring {
  background: conic-gradient(
    var(--ease-ring-color) calc(var(--progress) * 1%),
    var(--ease-ring-track) 0
  );
  animation: ease-ring-fill 1s cubic-bezier(0.22, 1, 0.36, 1) both;
}
```

The inner hole is created by an `::before` pseudo-element
with `inset: var(--ease-ring-thickness)` and matching background.

## HTML Structure

```html
<div class="ease-progress-ring ease-progress-ring--p75"
     role="progressbar"
     aria-valuenow="75"
     aria-valuemin="0"
     aria-valuemax="100">
  <div class="ease-progress-ring__label">75<small>%</small></div>
</div>
```

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-ring-size` | 80px | Ring diameter |
| `--ease-ring-thickness` | 8px | Ring stroke width |
| `--ease-ring-color` | #4ade80 | Fill color |
| `--ease-ring-track` | #1e293b | Track (background) color |
| `--ease-progress-target` | 75 | Target fill value (0–100) |

## Classes

### Size
| Class | Size |
|---|---|
| `ease-progress-ring--xs` | 48px |
| `ease-progress-ring--sm` | 64px |
| `ease-progress-ring--md` | 80px (default) |
| `ease-progress-ring--lg` | 112px |
| `ease-progress-ring--xl` | 148px |
| `ease-progress-ring--2xl` | 200px |

### Progress Presets
`--p10`, `--p25`, `--p33`, `--p50`, `--p66`, `--p75`, `--p90`, `--p100`

### Color
`--green`, `--blue`, `--purple`, `--pink`, `--orange`, `--red`, `--white`
`--gradient`, `--gradient-purple`, `--gradient-sunset`

### Modifiers
| Class | Description |
|---|---|
| `--thin/medium/thick` | Stroke thickness |
| `--glow` | Drop shadow glow effect |
| `--indeterminate` | Infinite spinning indicator |

## Live Value Update (JS)

```js
ring.style.setProperty('--ease-progress-target', newValue);
ring.style.setProperty('--progress', newValue);
ring.setAttribute('aria-valuenow', newValue);
```

## Accessibility

- `role="progressbar"` on ring wrapper
- `aria-valuenow`, `aria-valuemin`, `aria-valuemax` attributes
- Respects `prefers-reduced-motion`

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, `data-theme="dark"`.
