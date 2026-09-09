# ease-spinner

**Pure CSS animated loading spinners for EaseMotion CSS.**

Fixes / closes: #2726

## Variants

| Class | Description |
|---|---|
| `.ease-spinner` | Classic rotating ring |
| `.ease-spinner-dual` | Dual counter-rotating ring |
| `.ease-spinner-dots` | Three bouncing dots (needs 3 `<span>` children) |
| `.ease-spinner-bars` | Equalizer bars (needs 5 `<span>` children) |

## Size modifiers

| Class | Size |
|---|---|
| `.ease-spinner-sm` | 16 px |
| *(default)* | 32 px |
| `.ease-spinner-lg` | 48 px |

## Colour modifiers

| Class | Colour |
|---|---|
| `.ease-spinner-primary` | `--ease-color-primary` (default purple) |
| `.ease-spinner-white` | White — for dark buttons |

## Usage

```html
<!-- Page loader -->
<div class="ease-spinner ease-spinner-lg ease-spinner-primary"></div>

<!-- Inside a button -->
<button disabled>
  <span class="ease-spinner ease-spinner-sm ease-spinner-white"></span>
  Loading…
</button>

<!-- Dots -->
<div class="ease-spinner-dots">
  <span></span><span></span><span></span>
</div>

<!-- Bars -->
<div class="ease-spinner-bars">
  <span></span><span></span><span></span><span></span><span></span>
</div>
```

## Technical notes

- 100 % CSS `@keyframes` — no SVG, no JS
- Respects `--ease-color-primary` CSS variable
- All sizes and colours are composable modifier classes
- Dot and bar variants use child `<span>` elements for staggered animation delays
