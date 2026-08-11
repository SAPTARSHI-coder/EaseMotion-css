# Scrollbar Width Utilities

> Submission for issue [#16526 — feat: add scrollbar-width utilities](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/16526)

---

## 1. What does this do?

A **comprehensive cross-browser set of 11 utility classes** that control both the **width** and **visual style** of scrollbars on any scrollable element — including native sizes (`auto`, `thin`, `none`), custom widths (4 / 12 / 20px), and 5 styled themes (`rounded`, `glass`, `neon`, `gradient`, `minimal`). Works on every modern browser by combining the modern `scrollbar-width` / `scrollbar-color` spec with `::-webkit-scrollbar` fallbacks.

---

## 2. How is it used?

Just add a `sb-*` class to any element that has `overflow: auto` or `overflow: scroll`.

```html
<!-- Native width values -->
<div class="my-scroller sb-thin">...</div>
<div class="my-scroller sb-none">...</div>  <!-- hidden but scrollable -->

<!-- Custom widths -->
<div class="my-scroller sb-xthin">...</div> <!-- 4px -->
<div class="my-scroller sb-fat">...</div>   <!-- 20px -->

<!-- Styled themes -->
<div class="my-scroller sb-rounded">...</div>
<div class="my-scroller sb-glass">...</div>
<div class="my-scroller sb-neon">...</div>
<div class="my-scroller sb-gradient">...</div>
<div class="my-scroller sb-minimal">...</div>  <!-- Mac-style hover-reveal -->
```

### Available classes

| Category | Classes | Behavior |
|---------|---------|----------|
| **Native widths (3)** | `.sb-auto` · `.sb-thin` · `.sb-none` | Map directly to `scrollbar-width` values |
| **Custom sizes (3)** | `.sb-xthin` (4px) · `.sb-md` (12px) · `.sb-fat` (20px) | Custom widths via `::-webkit-scrollbar` |
| **Themed styles (5)** | `.sb-rounded` · `.sb-glass` · `.sb-neon` · `.sb-gradient` · `.sb-minimal` | Full visual customization with smooth hover transitions |

---

## 3. Why is it useful?

Scrollbars are one of the most **visually inconsistent** parts of the web — each browser ships its own default, and most developers either ignore them or write fragile vendor-specific CSS that only works in one engine.

- **🌐 True cross-browser support** — every utility ships **both** the modern spec (`scrollbar-width` / `scrollbar-color` for Firefox & modern Chromium) **and** `::-webkit-scrollbar` rules (for Chrome, Edge, Safari). No half-broken styles.
- **🎨 Beautiful theming** — `glass`, `neon`, and `gradient` variants give scrollbars a real design identity instead of leaving them as system defaults.
- **👻 Smart UX patterns** — `.sb-minimal` implements the Mac-style "scrollbar appears on hover" pattern in pure CSS, no JS required.
- **♿ Accessibility-friendly** — `.sb-fat` provides a 20px hit target for touch / motor-impaired users, and the whole set respects `prefers-reduced-motion`.
- **🧩 Composable** — drop on any container (sidebar, modal, chat, code block, table, dropdown) without touching the rest of your CSS.
- **⚡ Pure CSS** — no JavaScript, no dependencies, zero runtime cost.

This fits EaseMotion CSS's philosophy of turning **overlooked browser primitives** into **expressive, one-class utilities** that work everywhere.

---

## Browser Support

| Browser | Width control | Color / style customization |
|---------|---------------|------------------------------|
| Chrome / Edge / Opera | ✅ Full | ✅ Full (via `::-webkit-scrollbar`) |
| Firefox 64+ | ✅ Full | ✅ Full (via `scrollbar-color`) |
| Safari 14+ | ✅ Full | ✅ Full (via `::-webkit-scrollbar`) |
| iOS / Android Safari | ✅ Full | ✅ Full |

---

## Preview

Open `demo.html` in any browser to see all 11 utilities side-by-side in a responsive dark-themed grid.

---

## Author

Submitted by [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux)