# Typewriter Text

## What does this do?

Reveals text character-by-character with a blinking cursor using pure CSS.
Builds directly on EaseMotion's own core keyframes (`ease-kf-typewriter-loop`
and `ease-kf-cursor-blink` from `core/animations.css`) — no new keyframes
defined, no JavaScript required.

---

## How is it used?

### Basic — types once on load

```html
<h1
  class="ease-typewriter"
  style="--ease-typewriter-steps: 18;"
  aria-label="Hello, EaseMotion!"
>
  Hello, EaseMotion!
</h1>
```

Set `--ease-typewriter-steps` to match your exact character count including
spaces and punctuation. `"Hello, EaseMotion!"` = 18 characters.

### No cursor

```html
<h2
  class="ease-typewriter ease-typewriter-no-cursor"
  style="--ease-typewriter-steps: 13;"
>
  Build faster.
</h2>
```

### Cursor color variants

```html
<h2
  class="ease-typewriter ease-typewriter-cursor-primary"
  style="--ease-typewriter-steps: 26;"
>
  Powered by core CSS variables.
</h2>
```

| Class                            | Token used             |
| -------------------------------- | ---------------------- |
| `ease-typewriter-cursor-primary` | `--ease-color-primary` |
| `ease-typewriter-cursor-success` | `--ease-color-success` |
| `ease-typewriter-cursor-danger`  | `--ease-color-danger`  |
| `ease-typewriter-cursor-muted`   | `--ease-color-muted`   |

### Staggered multi-line

```html
<h3 class="ease-typewriter" style="--ease-typewriter-steps: 9;">Line one.</h3>
<h3
  class="ease-typewriter ease-typewriter-delay-600"
  style="--ease-typewriter-steps: 9;"
>
  Line two.
</h3>
<h3
  class="ease-typewriter ease-typewriter-delay-1200"
  style="--ease-typewriter-steps: 10;"
>
  Line three.
</h3>
```

| Class                        | Delay  |
| ---------------------------- | ------ |
| `ease-typewriter-delay-300`  | 300ms  |
| `ease-typewriter-delay-600`  | 600ms  |
| `ease-typewriter-delay-900`  | 900ms  |
| `ease-typewriter-delay-1200` | 1200ms |

### Speed variants

```html
<h2
  class="ease-typewriter ease-typewriter-fast"
  style="--ease-typewriter-steps: 18;"
>
  Hello, EaseMotion!
</h2>
```

Available: `ease-typewriter-fast`, `ease-typewriter-slow`

---

## Why is it useful?

Typewriter effects are widely used in hero sections, developer portfolios,
CLI-tool documentation, and terminal UIs. This submission differentiates
itself from other typewriter submissions by:

- Using `ease-kf-typewriter-loop` and `ease-kf-cursor-blink` directly from
  `core/animations.css` — no keyframe duplication
- Using `var(--ease-font-mono)`, `var(--ease-color-primary)`,
  `var(--ease-speed-slow)` — core design tokens throughout
- Adding cursor color variants tied to semantic color tokens
- Adding stagger delay utilities for multi-line sequences
- Full `prefers-reduced-motion` support — text immediately visible
  when motion is reduced
- `aria-label` pattern documented for screen reader accessibility

---

## Browser Support

| Browser | Supported |
| ------- | --------- |
| Chrome  | ✅        |
| Firefox | ✅        |
| Edge    | ✅        |
| Safari  | ✅        |

---

**Submitted by:** @AjayBandiwaddar
**Issue:** #217
**Date:** 2026-06-04
