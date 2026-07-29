# ease-input — Form Input Component

Styled form inputs with smooth focus animations, error/success states, and icon+input group support.

## Classes

| Class | Description |
|---|---|
| `ease-input` | Base input style |
| `ease-input-focus` | Smooth border + glow animation on focus |
| `ease-input-error` | Red border + glow for invalid state |
| `ease-input-success` | Green border + glow for valid state |
| `ease-input-group` | Wrapper for icon + input combinations |
| `ease-input-icon` | Icon slot inside `ease-input-group` |

## Usage

```html
<!-- Base -->
<input class="ease-input" type="text" placeholder="Enter text" />

<!-- Focus animation -->
<input class="ease-input ease-input-focus" type="email" />

<!-- Error state -->
<input class="ease-input ease-input-error" type="text" />

<!-- Success state -->
<input class="ease-input ease-input-success" type="text" />

<!-- Icon group -->
<div class="ease-input-group">
  <span class="ease-input-icon"><!-- svg icon --></span>
  <input class="ease-input" type="search" />
</div>
```

## Why it fits EaseMotion CSS

Pure CSS, no JS. Uses CSS variables from the design token system. Respects `prefers-reduced-motion`.
