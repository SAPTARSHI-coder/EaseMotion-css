# Caret-Color Utilities

> Submission for issue [#16544 — feat: add caret-color utilities](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/16544)

---

## 1. What does this do?

A collection of **25 reusable utility classes** that control the color of the blinking text cursor (caret) inside `<input>` and `<textarea>` elements — including 17 solid colors, 3 neutrals, 3 special modes (`transparent`, `auto`, `currentColor`), and **2 animated carets** (`rainbow` and `neon-pulse`) powered by the modern `@property` CSS feature.

---

## 2. How is it used?

Just add a `cc-*` class to any input or textarea — that's it.

```html
<!-- Solid color carets -->
<input type="text" class="cc-blue"    placeholder="Blue cursor" />
<input type="text" class="cc-emerald" placeholder="Emerald cursor" />
<input type="text" class="cc-rose"    placeholder="Rose cursor" />

<!-- Invisible / browser default -->
<input type="text" class="cc-transparent" />
<input type="text" class="cc-auto" />

<!-- Animated carets -->
<input    type="text" class="cc-rainbow"    placeholder="Rainbow caret 🌈" />
<textarea            class="cc-neon-pulse">Neon pulse ⚡</textarea>
```

### Available classes

| Category | Classes |
|---------|---------|
| **Solid colors (17)** | `.cc-red` `.cc-orange` `.cc-amber` `.cc-yellow` `.cc-lime` `.cc-green` `.cc-emerald` `.cc-teal` `.cc-cyan` `.cc-sky` `.cc-blue` `.cc-indigo` `.cc-violet` `.cc-purple` `.cc-fuchsia` `.cc-pink` `.cc-rose` |
| **Neutrals (3)** | `.cc-white` `.cc-black` `.cc-gray` |
| **Special (3)** | `.cc-transparent` (hide caret) · `.cc-auto` (browser default) · `.cc-current` (inherit from text color) |
| **Animated (2)** | `.cc-rainbow` (cycles through 6 colors) · `.cc-neon-pulse` (pulses between cyan ↔ magenta) |

---

## 3. Why is it useful?

The `caret-color` CSS property is one of the most **underused** and **delightful** styling tools — it lets your forms feel branded, alive, and distinctive instead of using the same boring black/white cursor everywhere.

- **🎨 Brand consistency** — match the caret to your accent color in one class instead of writing custom styles for every input.
- **♿ Accessibility** — `.cc-current` ensures the caret always inherits text color for high-contrast modes, and `prefers-reduced-motion` disables the animated variants automatically.
- **✨ Animated carets** — uses the modern `@property` API to smoothly animate `caret-color` (normally an un-animatable property!) — a genuinely novel CSS trick most developers don't know about.
- **🧩 Composable** — works with any form library, framework, or vanilla HTML. No JS, no dependencies, no setup.
- **⚡ Tiny footprint** — ~25 single-property utility classes; the entire file is under 4 KB unminified.

This fits EaseMotion CSS's philosophy of **lightweight, declarative, motion-first utilities** that turn overlooked CSS features into beautiful UX in a single class name.

---

## Browser Support

| Feature | Support |
|---------|---------|
| Static caret colors (`cc-red`, etc.) | ✅ All modern browsers (Chrome, Edge, Firefox, Safari, Opera) |
| Animated carets (`cc-rainbow`, `cc-neon-pulse`) | ✅ Chrome, Edge, Safari · ⚠️ Falls back to solid initial color in Firefox |

The fallback for animated carets is graceful — Firefox users still get a beautifully colored static caret instead of breaking.

---

## Preview

Open `demo.html` in any browser to see all 25 utility classes in action across inputs and a textarea.

---

## Author

Submitted by [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux)