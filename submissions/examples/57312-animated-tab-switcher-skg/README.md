# Animated Tab Switcher (`ease-tabs-skg`)

> Submission for [Issue #57312](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/57312)

---

## What does this do?

A responsive, **CSS-only animated tab switcher** component with:

- **Sliding underline indicator** — a `<span>` element translates horizontally via `transform: translateX()` to track the active tab, driven entirely by `transition`.
- **Smooth content transitions** — each panel fades in and slides up from `translateY(10px)` to `translateY(0)` using a `@keyframes` animation triggered by `:checked` state.
- **Three style variants** included: underline (GitHub-style), pill (rounded), and card (raised tab).
- **Multiple independent tab groups** — each group uses a unique `name` attribute on its radio inputs so groups don't interfere.
- **Accessible** — inputs are visually hidden (not `display:none`), labels carry `role="tab"`, and `aria-label` attributes are present. Respects `prefers-reduced-motion`.

---

## How to use it

```html
<!-- 1. Hidden radio inputs control state -->
<input type="radio" class="tab-radio" name="my-tabs" id="tab1" checked />
<input type="radio" class="tab-radio" name="my-tabs" id="tab2" />
<input type="radio" class="tab-radio" name="my-tabs" id="tab3" />

<!-- 2. Tab bar — labels trigger the radios -->
<div class="tab-bar" role="tablist">
  <label class="tab-btn" for="tab1" role="tab">Overview</label>
  <label class="tab-btn" for="tab2" role="tab">Features</label>
  <label class="tab-btn" for="tab3" role="tab">Pricing</label>
  <!-- Sliding underline (underline variant only) -->
  <span class="tab-bar__track" aria-hidden="true"></span>
</div>

<!-- 3. Panels — shown/hidden via :checked selectors in CSS -->
<div class="tab-panels">
  <div class="tab-panel tab-panel--1">Content for tab 1…</div>
  <div class="tab-panel tab-panel--2">Content for tab 2…</div>
  <div class="tab-panel tab-panel--3">Content for tab 3…</div>
</div>
```

The `:checked` + sibling combinator (`~`) in CSS then:
1. Moves the underline indicator to the correct horizontal position.
2. Highlights the active label.
3. Shows and animates the matching panel.

---

## Why is this useful?

Tab interfaces appear on dashboards, documentation sites, settings pages, and product pages. A CSS-only solution:

- **Eliminates JavaScript dependency** — nothing to load, parse, or fail.
- **Showcases composable EaseMotion patterns** — the sliding indicator and fade-in panel animation are reusable primitives that fit EaseMotion's utility philosophy.
- **Lightweight** — the core tab mechanism is ~40 lines of CSS.
- **Dark mode + reduced motion ready** — uses CSS custom properties for theming and a `prefers-reduced-motion` media query to disable animations for users who prefer it.
