# ease-typewriter

A CSS-only typewriter text animation utility for EaseMotion CSS. Animates text character by character using CSS `steps()` timing, `width` animation, and a blinking cursor — **zero JavaScript required**.

---

## ✨ Features

- **Pure CSS** — no JavaScript, no libraries
- **Multiple speed modifiers** — default, fast (1s), slow (4s)
- **Loop variant** — types and deletes on repeat
- **Blinking cursor** — pipe cursor via `::after` pseudo-element
- **5 cursor color variants** — purple, green, amber, pink, cyan
- **Delay utilities** — stagger multiple lines with `.ease-delay-*`
- **CSS variable customization** — override duration, steps, cursor color
- **Reduced motion support** — text shown instantly for accessibility

---

## 🚀 Usage

### 1. Link the stylesheet

```html
<link rel="stylesheet" href="style.css" />
```

### 2. Add the classes

```html
<!-- Basic typewriter -->
<p class="ease-typewriter ease-cursor-blink">Hello, I'm EaseMotion CSS.</p>

<!-- Slow hero heading -->
<h1 class="ease-typewriter ease-typewriter-slow ease-cursor-blink">
  Animation-first framework.
</h1>

<!-- Fast tagline -->
<span class="ease-typewriter ease-typewriter-fast ease-cursor-blink">
  Fast. Clean. Pure CSS.
</span>

<!-- Loop (types and deletes forever) -->
<span class="ease-typewriter-loop ease-cursor-blink">
  Types, deletes, and repeats.
</span>
```

---

## 📋 Class Reference

| Class | Effect |
|---|---|
| `.ease-typewriter` | Types text left to right, holds at end |
| `.ease-typewriter-loop` | Types and deletes on repeat |
| `.ease-typewriter-fast` | Completes in 1s |
| `.ease-typewriter-slow` | Completes in 4s |
| `.ease-cursor-blink` | Adds blinking pipe cursor (purple) |
| `.ease-cursor-green` | Green blinking cursor |
| `.ease-cursor-amber` | Amber blinking cursor |
| `.ease-cursor-pink` | Pink blinking cursor |
| `.ease-cursor-cyan` | Cyan blinking cursor |
| `.ease-cursor-white` | White blinking cursor |
| `.ease-delay-1` | 0.5s animation delay |
| `.ease-delay-2` | 1s animation delay |
| `.ease-delay-3` | 1.5s animation delay |
| `.ease-delay-4` | 2s animation delay |
| `.ease-delay-5` | 2.5s animation delay |

---

## 🎨 CSS Variable Customization

```css
:root {
  --ease-color-primary: #7c3aed;        /* default cursor color */
  --ease-typewriter-duration: 2.5s;     /* default speed */
  --ease-typewriter-fast-duration: 1s;  /* fast speed */
  --ease-typewriter-slow-duration: 4s;  /* slow speed */
  --ease-typewriter-steps: 30;          /* character steps */
  --ease-blink-speed: 0.75s;            /* cursor blink rate */
}
```

> **Tip:** Increase `--ease-typewriter-steps` for longer text strings so each character gets its own step.

---

## ⏱️ Staggering Multiple Lines

Use `.ease-delay-*` to sequence lines one after another:

```html
<p><span class="ease-typewriter ease-cursor-blink">Design with intent.</span></p>
<p><span class="ease-typewriter ease-cursor-blink ease-delay-2">Animate with purpose.</span></p>
<p><span class="ease-typewriter ease-cursor-blink ease-delay-4">Ship with EaseMotion.</span></p>
```

---

## ♿ Accessibility

Users who have `prefers-reduced-motion` enabled will see the full text immediately with no animation, and the cursor will remain visible without blinking.

---

## 📁 File Structure

```
submissions/examples/typewriter-gn/
├── demo.html    ← live demo with all variants
├── style.css    ← utility classes + CSS variables
└── README.md    ← this file
```

---

## 🙏 Credits

Submitted as part of **GSSoC 2026** contribution to [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).  
Closes issue [#2706](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/2706).