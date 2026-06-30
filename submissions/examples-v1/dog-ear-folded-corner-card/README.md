# Dog-Ear Folded Corner Card

A pure-CSS card component for the [EaseMotion CSS](https://github.com/easemotioncss) library.

---

## 1. What does this do?

Renders a document-style card UI with an animated folded corner (dog-ear) created entirely with CSS `::before` and `::after` pseudo-elements using the border-triangle technique — no JavaScript, no extra HTML elements, no images.

---

## 2. How is it used?

Link `style.css` into your project, then compose a card with the following HTML structure:

```html
<!-- Default top-right fold -->
<article class="fold-card card--default">
  <!-- The fold: pure CSS triangles, no visible content needed -->
  <span class="fold" aria-hidden="true">
    <span class="fold-line"></span>
  </span>

  <div class="card-inner">
    <header class="card-header">
      <h2 class="card-title">Card Title</h2>
      <span class="card-badge badge-violet">Category</span>
    </header>

    <p class="card-description">
      A short description of the card content goes here.
    </p>

    <time class="card-date" datetime="2025-06-12">Jun 12, 2025</time>

    <footer class="card-footer">
      <span class="card-footer-label">v1.0.0</span>
      <span class="card-footer-pill">Default</span>
    </footer>
  </div>
</article>
```

### Available modifier classes

| Class               | Effect                                   |
| ------------------- | ---------------------------------------- |
| `card--default`     | Violet accent, top-right fold            |
| `card--animated`    | Cyan accent, fold springs in on load     |
| `card--success`     | Emerald accent, success glow on hover    |
| `card--warning`     | Amber accent, warning glow on hover      |
| `card--important`   | Rose accent, pulsing ring animation      |
| `card--pinned`      | Indigo accent, pinned note style         |
| `fold--bottom-left` | Moves the fold to the bottom-left corner |
| `card--float`       | Adds a gentle idle floating animation    |

### Badge color variants

`badge-violet` · `badge-cyan` · `badge-emerald` · `badge-amber` · `badge-rose` · `badge-indigo`

---

## 3. Why is it useful?

The Dog-Ear Folded Corner Card embodies EaseMotion CSS's **animation-first, reusable** philosophy in three concrete ways:

**Motion is structural, not decorative.** The fold itself is the interaction — it expands on hover, springs in on load, and can pulse when urgent. Every animation communicates state rather than just adding visual noise. This mirrors EaseMotion's principle that motion should carry meaning.

**Zero runtime cost, maximum reusability.** The entire effect — shadows, fold flap, accent stripe, hover glow — lives in CSS custom properties and pseudo-elements. Changing `--fold-size`, `--fold-flap-color`, or `--fold-accent` is enough to create a completely new variant without touching the HTML. This makes it trivial to theme for any design system that already uses CSS variables.

**Composable by class, not by copy-paste.** Each semantic modifier (`card--success`, `fold--bottom-left`) layers only the delta onto a shared base, so the component scales from a single card to an entire project board without bloat. It slots naturally into EaseMotion's utility-layer architecture: bring the base card, add the accent modifier, drop in the animation variant — and you're done.
