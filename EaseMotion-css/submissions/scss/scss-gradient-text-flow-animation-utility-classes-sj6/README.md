# Gradient Text Flow & Animation Utility Classes (SCSS)

Animated, looping multi-colour gradients painted **through** text. A moving `background-position` over a `background-clip: text` fill creates a smooth *flowing* effect — perfect for hero headings, logos, and call-to-action labels.

> Track: `submissions/scss/` · Closes issue **#28277**

---

## What it does

- A **`gradient-text-flow()`** mixin that handles the gradient, the text clipping, the animation, and a graceful fallback.
- Four ready-made **preset gradients** (`brand`, `sunset`, `ocean`, `aurora`) whose first and last stops match, so the loop is **seamless**.
- Auto-generated **utility classes** plus speed modifiers, usable straight from HTML.
- Uses EaseMotion palette tokens (`--ease-color-primary`, `--ease-color-secondary`) with safe fallbacks, and compiles **standalone with no warnings** (Dart Sass 1.101.0).

---

## API

| Kind | Signature | Purpose |
|------|-----------|---------|
| Mixin | `gradient-text-flow($colors, $duration, $angle, $fallback)` | Animated gradient text on any element. |
| Keyframes | `ease-text-gradient-flow` | Slides the gradient one full width. |
| Classes | `.ease-text-gradient-flow` | Default (brand) gradient. |
| Classes | `.ease-text-gradient-flow-{brand\|sunset\|ocean\|aurora}` | One class per preset. |
| Modifiers | `.ease-text-gradient-flow--slow` / `--fast` | Override the cycle speed (8s / 2s). |

### `gradient-text-flow()` parameters

| Param | Default | Description |
|-------|---------|-------------|
| `$colors` | brand preset | Two or more colour stops (repeat the first as the last for a seamless loop). |
| `$duration` | `4s` | Time for one full flow cycle. |
| `$angle` | `90deg` | Gradient direction. |
| `$fallback` | `var(--ease-color-primary, #6c63ff)` | Solid colour shown where `background-clip: text` is unsupported. |

Override the presets by re-declaring `$em-text-gradients` before the `@use` (it is `!default`).

---

## How to use

### 1. As utility classes (no SCSS)

```html
<h1 class="ease-text-gradient-flow">EaseMotion</h1>
<h2 class="ease-text-gradient-flow-sunset ease-text-gradient-flow--slow">Sunset, slowed down</h2>
<span class="ease-text-gradient-flow-ocean">Ocean</span>
```

### 2. As a mixin

```scss
@use "gradient-text-flow-animation-utility-classes" as g;
@use "sass:map";

.headline   { @include g.gradient-text-flow($duration: 6s); }
.brand-name { @include g.gradient-text-flow(map.get(g.$em-text-gradients, ocean), 5s, 120deg); }
```

---

## Compiled CSS output

Compiled with `sass` (Dart Sass 1.101.0). The keyframes and the default class:

```css
@keyframes ease-text-gradient-flow {
  to { background-position: 200% center; }
}

.ease-text-gradient-flow {
  color: var(--ease-color-primary, #6c63ff); /* fallback */
}
@supports ((-webkit-background-clip: text) or (background-clip: text)) {
  .ease-text-gradient-flow {
    background-image: linear-gradient(90deg,
      var(--ease-color-primary, #6c63ff),
      #ec4899,
      var(--ease-color-secondary, #8b5cf6),
      var(--ease-color-primary, #6c63ff));
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    animation: ease-text-gradient-flow 4s linear infinite;
  }
}
```

The `sunset` preset (others follow the same shape):

```css
@supports ((-webkit-background-clip: text) or (background-clip: text)) {
  .ease-text-gradient-flow-sunset {
    background-image: linear-gradient(90deg, #f43f5e, #fb923c, #facc15, #f43f5e);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    animation: ease-text-gradient-flow 4s linear infinite;
  }
}
```

And the `@include` example:

```css
@supports ((-webkit-background-clip: text) or (background-clip: text)) {
  .headline {
    background-image: linear-gradient(90deg,
      var(--ease-color-primary, #6c63ff),
      #ec4899,
      var(--ease-color-secondary, #8b5cf6),
      var(--ease-color-primary, #6c63ff));
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    animation: ease-text-gradient-flow 6s linear infinite;
  }
}
```

---

## Accessibility & robustness

- **Reduced motion:** the animation runs on a compositor-friendly property (`background-position`); EaseMotion's global `prefers-reduced-motion` layer neutralises it, leaving a static gradient (text stays fully legible).
- **Unsupported browsers:** an `@supports` guard means the transparent fill is applied **only** where `background-clip: text` works. Everywhere else, the solid `$fallback` colour keeps the text visible.

## Compile it yourself

```bash
sass _gradient-text-flow-animation-utility-classes.scss
```
