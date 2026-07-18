# EaseMotion `em=""` Motion Engine DSL Playground

An interactive documentation showcase for EaseMotion CSS v1.2's optional **Motion Engine**. Type an `em=""` DSL string, preview the animation live, inspect parsed values, and compare the equivalent `ease-*` utility-class approach side by side.

> Submission track: `submissions/docs/ease-em-dsl-playground-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #43217

---

## What does this do?

EaseMotion CSS v1.2 introduced the `em=""` attribute DSL — a human-readable way to declare animations inline:

```html
<div em="fade-in 500ms ease-out delay-200ms repeat-2">Hello</div>
```

Under the hood, the Motion Engine **parser** tokenizes the string, the **compiler** generates a scoped CSS rule, and the **runtime** injects it into the page. This playground makes that pipeline visible and interactive.

## How is it used?

1. Open `demo.html` in a browser (requires internet for CDN assets).
2. Type or edit a DSL string in the input field — e.g. `slide-up 800ms spring`.
3. Press **Run** (or Enter) to:
   - Preview the animation via the Motion Engine compiler
   - See parsed values: animation, duration, easing, delay, iterations, fill
   - View the closest `ease-*` class equivalent side by side
   - Read the compiled CSS output
4. Click a **quick preset** chip to load a common pattern instantly.
5. Press **Copy CSS** to copy the compiler output.

### Example DSL strings

| String | What it does |
|--------|-------------|
| `fade-in 500ms ease-out delay-200ms repeat-2` | Fade in over 500ms, ease-out, 200ms delay, 2 loops |
| `slide-up 800ms spring` | Slide up with spring easing |
| `bounce repeat-infinite` | Bouncing loop |
| `zoom-in 300ms` | Quick zoom entrance |

## Why is it useful?

- **Teaches the Motion Engine** — beginners see parser output and compiled CSS, not just a black-box attribute.
- **Compares two approaches** — `em=""` for precise control vs `ease-*` classes for zero-JS simplicity.
- **Honest equivalence notes** — when a DSL feature (custom easing, exact duration, repeat count) has no exact `ease-*` match, the playground says so.
- **Self-contained** — no backend, no build step, no changes to `core/` or `components/`.

## How the comparison works

| Panel | Mechanism |
|-------|-----------|
| **em="" preview** | Imports `parser.js` + `compiler.js` from the official npm CDN, compiles a scoped `_em_*` class, injects the rule, and applies it to the preview target. |
| **ease-* preview** | Maps the parsed AST to the closest utility classes (`ease-fade-in`, `ease-duration-medium`, `ease-delay-200`, etc.) and notes any approximations. |

## Supported DSL tokens

- **Animations:** fade-in, fade-out, slide-up, slide-down, bounce, zoom-in, shake, spin, pulse, wobble, flip-x, float, heartbeat, rubber-band, and more
- **Duration:** `300ms`, `1.5s`
- **Easing:** ease, ease-in, ease-out, ease-in-out, linear, spring, bounce, snap
- **Delay:** `delay-200ms`, `delay-1s`
- **Repeat:** `repeat-2`, `repeat-infinite`
- **Fill:** forwards, backwards, both, none

## Accessibility

- All controls have visible labels and keyboard support (Enter to run).
- Error messages use `role="alert"` and `aria-live="polite"`.
- `prefers-reduced-motion: reduce` is respected — the compiler output includes reduced-motion overrides, and playground micro-interactions collapse to near-zero duration.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Playground UI + ES module imports from Motion Engine CDN |
| `style.css` | Layout styles referencing `--ease-*` design tokens |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/` — no existing files modified or deleted.
- Uses official CDN bundles for `easemotion.min.css` and `easemotion-css@1.2.0` engine modules.
- Folder name carries the unique contributor suffix `-sp`.
