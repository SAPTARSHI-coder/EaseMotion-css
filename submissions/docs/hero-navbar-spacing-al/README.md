# Hero Navbar Spacing Fix — Issue \#45826

**Track:** Docs Track · `submissions/docs/hero-navbar-spacing-al/`  
**Issue:** [#45826 — Hero section overlaps with fixed navbar after switching to Light Theme](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/45826)

---

## 1. What this submission does

Demonstrates and fixes the bug where the **hero section overlaps a fixed navbar**
after the user switches from Dark Theme to Light Theme.

The root cause is a hardcoded pixel offset that only matches the navbar's height in
one theme. The fix uses a single CSS custom property `--navbar-height` so that the
body offset and hero spacing are always in sync with the actual navbar height —
regardless of which theme is active.

---

## 2. HTML usage example

### Minimum required markup

```html
<!-- 1. Fixed navbar — height controlled by CSS variable -->
<nav class="navbar">
  <!-- your navbar content -->
</nav>

<!-- 2. Main content — offset by the same variable -->
<main>
  <section class="hero">
    <!-- your hero content -->
  </section>
</main>
```

### Minimum required CSS (the complete fix)

```css
/* Step 1: Define the navbar height as a variable on :root.
   Do NOT put this inside a [data-theme] rule — it must
   never change when the theme changes. */
:root {
  --navbar-height: 64px;
}

/* Step 2: The navbar is exactly this tall */
.navbar {
  position: fixed;
  top:      0;
  left:     0;
  right:    0;
  height:   var(--navbar-height);
  z-index:  1000;
}

/* Step 3: Push all body content below the fixed navbar.
   This single rule is the core fix. */
body {
  padding-top: var(--navbar-height);
}

/* Step 4: Keep anchor scroll targets below the navbar too */
html {
  scroll-padding-top: var(--navbar-height);
}

/* Step 5 (optional): Give the hero its own padding-top as
   a secondary guard in case it is ever placed outside <main>. */
.hero {
  padding-top: var(--navbar-height);
}

/* Step 6: Responsive — one place to update */
@media (max-width: 768px) {
  :root {
    --navbar-height: 56px;
  }
}
```

### Theme toggle (no layout change required)

```html
<!-- Theme toggle only swaps colour tokens, not --navbar-height -->
<html data-theme="dark">
...
<button id="themeToggle">Light Mode</button>

<script>
  document.getElementById('themeToggle').addEventListener('click', function () {
    var html  = document.documentElement;
    var theme = html.getAttribute('data-theme');
    html.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
  });
</script>
```

---

## 3. Why this solution is useful

### The bug, precisely

When a page uses a hardcoded pixel offset — such as `margin-top: 64px` on the
`<main>` element — that value is correct only when it was written. If the navbar's
background, border, or padding changes between themes and affects its rendered
height, the hardcoded value becomes wrong. The result is the hero sitting partially
or fully behind the navbar.

### Why the CSS variable approach is the right fix

| Concern | Hardcoded px | CSS variable (`--navbar-height`) |
|---|---|---|
| Works in both themes | ✗ May break | ✅ Always correct |
| Responsive | Needs duplicated overrides | Single variable update per breakpoint |
| Anchor targets | Also breaks | `scroll-padding-top` inherits the same variable |
| Maintainability | Multiple places to update | One declaration in `:root` |
| JavaScript involved | Sometimes used to measure/set | Not required |

### Alignment with EaseMotion CSS philosophy

EaseMotion CSS promotes **CSS-first, low-overhead** solutions. This fix:

- Requires **zero JavaScript** for the spacing to work.
- Uses a **CSS custom property** — the same mechanism EaseMotion CSS uses for
  its own design tokens — keeping the solution idiomatic and consistent.
- Is **minimal**: the entire fix is five CSS lines (`:root` variable, `body`
  padding, `html` scroll-padding, optional `hero` padding, responsive override).
- Is **theme-agnostic**: colour tokens and layout tokens are kept separate,
  following the principle that theme changes should only affect visual appearance,
  never layout geometry.

---

## Files

| File | Purpose |
|---|---|
| `demo.html` | Self-contained demo — open directly in a browser |
| `style.css` | All styles; the fix is in sections 1, 5, and 6 |
| `README.md` | This document |

No build step, no server, no CDN. Open `demo.html` and click **Toggle Theme** to
verify the hero section stays correctly positioned in both Dark and Light themes.
