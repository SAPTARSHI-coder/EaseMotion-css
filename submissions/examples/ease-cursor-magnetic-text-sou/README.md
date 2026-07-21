# ease-cursor-magnetic-text

A character-level magnetic cursor effect — individual letters in a heading gently shift toward the cursor when it moves nearby, then smoothly return to rest.

---

## 1. What does this do?

It wraps every character of a target element in its own `<span>` and updates a per-character CSS variable (`--ease-char-offset-x`, `--ease-char-offset-y`, `--ease-char-offset`) based on the cursor's proximity, producing a smooth, physics-like magnetic pull on each letter.

---

## 2. How is it used?

Add the `magnetic-text` class and the `data-magnetic-text` attribute to any text element. The included script automatically wraps each character and drives the CSS variables — all motion is handled by CSS.

```html
<!-- Basic usage -->
<h1 class="magnetic-text" data-magnetic-text>Magnetic Text</h1>

<!-- Softer, gentler pull -->
<h2 class="magnetic-text magnetic-text--soft" data-magnetic-text>Hover Me</h2>

<!-- Snappier, stronger pull -->
<h3 class="magnetic-text magnetic-text--strong" data-magnetic-text>Stronger Pull</h3>

<!-- Smaller body text -->
<p class="magnetic-text magnetic-text--small" data-magnetic-text>
    Even paragraph text can be magnetic.
</p>
```

### Available modifiers

| Class                   | Effect                                      |
| ----------------------- | ------------------------------------------- |
| `magnetic-text`         | Base class — required                       |
| `magnetic-text--soft`   | Slower, gentler return                      |
| `magnetic-text--strong` | Snappier spring-like return                 |
| `magnetic-text--small`  | Reduced font size for body / paragraph text |

### CSS variables exposed per character

| Variable               | Range         | Meaning                                 |
| ---------------------- | ------------- | --------------------------------------- |
| `--ease-char-offset-x` | `-Npx`..`Npx` | Horizontal pull toward the cursor       |
| `--ease-char-offset-y` | `-Npx`..`Npx` | Vertical pull toward the cursor         |
| `--ease-char-offset`   | `0`..`1`      | Proximity factor (0 = far, 1 = closest) |

You can hook your own styles into `--ease-char-offset` (e.g. glow, scale, color) without touching the JS.

---

## 3. Why is it useful?

It fits EaseMotion's philosophy of **expressive, performant, declarative motion**:

- **Performant** — JS only updates CSS variables; the browser handles compositing on the GPU via `transform: translate3d()`.
- **Declarative** — All visual styling lives in CSS. Designers can re-skin the effect (glow, color, scale) by simply consuming `--ease-char-offset` without touching JavaScript.
- **Accessible** — Original text is preserved for screen readers via `aria-label`, and the entire effect is disabled automatically under `prefers-reduced-motion: reduce`.
- **Playful & memorable** — Adds personality and interactivity to hero headings, landing pages, and brand moments without overwhelming the user.