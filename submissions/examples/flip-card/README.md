# ease-flip-card

A 3D card flip component for [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).

Flips a card in 3D on hover to reveal a back face — using CSS `perspective`, `transform-style: preserve-3d`, and `rotateY`/`rotateX`. Zero JavaScript.

---

## Usage

### HTML Structure

```html
<div class="ease-flip-card" tabindex="0">
  <div class="ease-flip-card-inner">
    <div class="ease-flip-card-front">
      <h3>Front Face</h3>
    </div>
    <div class="ease-flip-card-back">
      <h3>Back Face</h3>
    </div>
  </div>
</div>
```

> `tabindex="0"` is recommended for keyboard accessibility — the card also flips on `:focus-within`.

### Include the stylesheet

```html
<link rel="stylesheet" href="style.css">
```

---

## Available Classes

| Class | Effect |
|---|---|
| `.ease-flip-card` | Outer wrapper — sets perspective context (required) |
| `.ease-flip-card-inner` | The rotating container (required) |
| `.ease-flip-card-front` | Front face — visible by default (required) |
| `.ease-flip-card-back` | Back face — revealed on hover (required) |
| `.ease-flip-vertical` | Flips top → bottom (rotateX) instead of left → right |
| `.ease-flip-slow` | 800ms flip duration |
| `.ease-flip-fast` | 300ms flip duration |

---

## How It Works

```css
/* 1. Perspective on the wrapper creates the 3D scene */
.ease-flip-card {
  perspective: 1000px;
}

/* 2. Inner container holds both faces and rotates */
.ease-flip-card-inner {
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}

/* 3. Flip on hover or keyboard focus */
.ease-flip-card:hover .ease-flip-card-inner,
.ease-flip-card:focus-within .ease-flip-card-inner {
  transform: rotateY(180deg);
}

/* 4. Both faces are stacked; back is pre-rotated 180deg */
.ease-flip-card-front,
.ease-flip-card-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
}

.ease-flip-card-back {
  transform: rotateY(180deg);
}
```

---

## Customisation via CSS Custom Properties

```css
:root {
  --ease-flip-perspective:   1000px;
  --ease-flip-duration:      0.6s;
  --ease-flip-duration-slow: 0.8s;
  --ease-flip-duration-fast: 0.3s;
  --ease-flip-width:         300px;
  --ease-flip-height:        200px;
  --ease-flip-radius:        14px;
  --ease-flip-front-bg:      #1a1d2e;
  --ease-flip-back-bg:       #5a6aee;
}
```

Override per-card using inline style or a scoped class:

```html
<div class="ease-flip-card" style="--ease-flip-back-bg: #059669; --ease-flip-height: 260px;">
```

---

## Features

- ✅ Zero JavaScript — pure CSS only
- ✅ Horizontal flip (default) and vertical flip variant
- ✅ 3 speed variants (slow, default, fast)
- ✅ Keyboard accessible via `:focus-within`
- ✅ `prefers-reduced-motion` — falls back to a smooth opacity fade
- ✅ Safari-compatible via `-webkit-backface-visibility`
- ✅ Fully themeable via CSS custom properties

---

## Use Cases

- Pricing tables
- Team member profile cards
- Product showcase cards
- Flashcard / quiz apps
- Feature highlight sections

---

## File Structure

```
flip-card/
├── style.css     # Component styles
├── demo.html     # Interactive demo page
└── README.md     # This file
```

---

## Closes

Resolves issue [#2707](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/2707)

---

## Author

Contributed as part of **Google Summer of Code 2026**