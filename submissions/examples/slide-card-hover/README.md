# Slide Card Hover — EaseMotion CSS Submission

**GSSoC-26 Contribution · Feature Request: Animation: Slide Card Hover**

---

## 1. What does this do?

Adds a smooth slide animation to card components on hover using pure CSS `@keyframes` — the card slides in a direction on mouse-enter and returns on mouse-leave.

---

## 2. How is it used?

Add the class to any card element:

```html
<!-- Slide up (default) -->
<div class="ease-card card-slide-hover">...</div>

<!-- Slide left variant -->
<div class="ease-card card-slide-left-hover">...</div>

<!-- Slide right variant -->
<div class="ease-card card-slide-right-hover">...</div>
```

Composable with existing EaseMotion card modifiers:

```html
<div class="ease-card ease-card-shadow ease-card-glow card-slide-hover">
  ...
</div>
```

---

## 3. Why is it useful?

EaseMotion CSS treats motion as a first-class feature. The existing `ease-card-hover` class lifts cards vertically using `transition`, but there is no dedicated **slide** animation class using `@keyframes` — which gives better control over enter vs. leave easing independently (e.g., `ease-out` in, `ease-in` out). This submission fills that gap and follows the framework's pattern of one class = one clearly named behavior.

---

## Files

| File        | Purpose                                       |
| ----------- | --------------------------------------------- |
| `style.css` | Raw CSS — `@keyframes` + utility classes      |
| `demo.html` | Self-contained browser demo, no server needed |
| `README.md` | This file                                     |

---

## Changes Made (for maintainer review)

> **No existing files were modified.** This is a new addition only.

### New file: `submissions/examples/slide-card-hover/style.css`

Added the following:

| Addition                                  | Description                                               |
| ----------------------------------------- | --------------------------------------------------------- |
| `@keyframes card-slide-enter`             | Slides element from `translateY(0)` → `translateY(-10px)` |
| `@keyframes card-slide-leave`             | Returns from `translateY(-10px)` → `translateY(0)`        |
| `.card-slide-hover`                       | Applies slide-up on hover, slide-back on leave            |
| `@keyframes card-slide-left-enter/leave`  | Horizontal left variants                                  |
| `.card-slide-left-hover`                  | Applies slide-left on hover                               |
| `@keyframes card-slide-right-enter/leave` | Horizontal right variants                                 |
| `.card-slide-right-hover`                 | Applies slide-right on hover                              |

### New file: `submissions/examples/slide-card-hover/demo.html`

Self-contained demo showing all three variants on dark background, matching the EaseMotion CSS demo aesthetic.

---

## Notes for Maintainer

- Class names use raw naming (no `ease-` prefix) per contribution guidelines — maintainer will standardize to `ease-card-slide-hover` etc.
- Hard-coded values (`10px`, `8px`, `0.3s`) can be replaced with CSS custom properties (`--ease-space-*`, `--ease-speed-*`) during integration.
- `will-change: transform` is included for GPU compositing — can be removed if the maintainer prefers to keep it in a separate performance utility.
- No breaking changes — zero edits to `core/` or `components/`.
