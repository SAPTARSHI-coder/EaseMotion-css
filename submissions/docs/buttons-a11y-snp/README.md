# Button Accessibility, Consistency & Loading-State Fixes

## What does this do?

Fixes 8 consistency, accessibility, and loading-state bugs in the EaseMotion CSS button component (`components/buttons.css`), accompanied by a dark-theme demo showcasing all improvements.

## How is it used?

```html
<!-- Border-only coloured outline buttons (red, green, blue) -->
<button class="ease-btn ease-btn-outline-red ease-btn-pill">Red Action</button>
<button class="ease-btn ease-btn-outline-green ease-btn-pill">Green Action</button>
<button class="ease-btn ease-btn-outline-blue ease-btn-pill">Blue Action</button>

<!-- aria-disabled for <a> elements used as buttons -->
<a href="#" class="ease-btn ease-btn-primary" aria-disabled="true" tabindex="-1">
  Disabled Link Button
</a>

<!-- Loading state — correct font-size:0 + margin-based spinner centering -->
<button class="ease-btn ease-btn-primary ease-btn-loading">Save</button>

<!-- Disabled state — now includes opacity:0.55 for theme-agnostic affordance -->
<button class="ease-btn ease-btn-primary" disabled>Disabled</button>
```

## Fixes included

| # | Area | Fix |
|---|---|---|
| 1 | Consistency | Explicit `--ease-btn-focus` on `ease-btn-primary`, `ease-btn-outline`, `ease-btn-ghost` |
| 2 | Consistency | `--ease-btn-loading-color: #ffffff` on solid-color variants |
| 3 | Consistency | `ease-btn-outline:hover` now fires `box-shadow` glow via `--ease-btn-glow` |
| 4 | Consistency | `overflow: hidden` on `.ease-btn-group` for correct radius clipping |
| 5 | Accessibility | `[aria-disabled="true"]` in all disabled selector groups |
| 6 | Accessibility | `opacity: 0.55` on disabled state — works in dark/high-contrast themes |
| 7 | Loading state | `color: transparent` → `font-size: 0` — fixes failing smoke test at `tests/smoke.test.js:116` |
| 7b | Loading state | Spinner centering fix: margin-based instead of conflicting `translate` + `transform` in keyframes |
| 8 | Loading state | `cursor: wait` + suppress `:active` scale on loading buttons |
| 9 | Accessibility | `prefers-reduced-motion` fallback: static full ring instead of invisible spinner |

## Why does it fit EaseMotion CSS?

EaseMotion CSS is an **accessibility-first, animation-aware** framework. These fixes:

- Ensure all button variants produce the correct focus ring colour via the `--ease-btn-focus` token system — making the component API predictable and self-documenting
- Add `[aria-disabled]` support so developers can use `<a>` tags as buttons (a common pattern) without breaking the disabled visual state
- Fix a real rendering bug in the loading spinner — the conflicting `translate` property and `transform: translate()` in keyframes caused the spinner to visually mis-centre during rotation
- Respect `prefers-reduced-motion` with a meaningful fallback (static ring) rather than making the spinner disappear entirely
- All 13 existing smoke tests pass ✅

## Demo

Open `demo.html` directly in a browser — no server required. Uses EaseMotion CSS from CDN.

Sections:
1. **Border-only outline buttons** (red / green / blue) with click popups
2. **aria-disabled** anchor buttons
3. **Loading state** (4 variants)
4. **Disabled state** with opacity affordance
