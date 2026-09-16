# ease-typewriter — Typewriter Text Animation Utility

**Fixes:** Issue #8391

## Overview

A pure CSS typewriter effect — characters appear one by one with
a blinking cursor. Perfect for hero headings, terminal-style UIs,
taglines, and landing pages. Zero JavaScript.
`prefers-reduced-motion` safe.

## Usage

```html
<!-- Default typewriter on load -->
<h1 class="ease-typewriter">Hello World</h1>

<!-- Infinite loop -->
<p class="ease-typewriter ease-typewriter-loop">Loading...</p>

<!-- No cursor -->
<h2 class="ease-typewriter ease-typewriter-no-cursor">Welcome Back</h2>

<!-- Fast with delay -->
<span class="ease-typewriter ease-typewriter-fast ease-delay-300">
  Building the future.
</span>

<!-- Slow loop with colored cursor -->
<h1 class="ease-typewriter ease-typewriter-slow ease-typewriter-loop
           ease-typewriter-cursor-primary">
  EaseMotion CSS ✨
</h1>
```

> **Important:** Works best on single-line text. Apply to `<h1>`,
> `<h2>`, `<p>`, or `<span>`. The default `steps(30)` count works
> for text up to ~30 characters.

## Variants

| Class | Description |
|---|---|
| `.ease-typewriter` | Default — types once, cursor blinks |
| `.ease-typewriter-loop` | Loops typewriter infinitely |
| `.ease-typewriter-no-cursor` | No blinking cursor |
| `.ease-typewriter-fast` | Duration `1s` |
| `.ease-typewriter-slow` | Duration `5s` |
| `.ease-typewriter-cursor-primary` | Purple cursor (`#6c63ff`) |
| `.ease-typewriter-cursor-green` | Green cursor (`#a6e3a1`) |
| `.ease-typewriter-cursor-white` | White cursor |

## Composability

| Combination | Behaviour |
|---|---|
| `.ease-typewriter-fast.ease-typewriter-loop` | Fast infinite loop |
| `.ease-typewriter-slow.ease-typewriter-no-cursor` | Slow, no cursor |
| `.ease-typewriter-fast.ease-delay-300` | 300ms delay then fast |
| `.ease-typewriter-loop.ease-typewriter-cursor-primary` | Loop + purple cursor |

## How It Works

```css
@keyframes ease-kf-typewriter {
  from { width: 0; }
  to   { width: 100%; }
}

@keyframes ease-kf-cursor-blink {
  0%, 100% { border-color: transparent; }
  50%       { border-color: currentColor; }
}

.ease-typewriter {
  display: inline-block;
  overflow: hidden;          /* clips text to current width */
  white-space: nowrap;       /* prevents line wrap */
  border-right: 2px solid currentColor;  /* cursor */
  animation-name: ease-kf-typewriter, ease-kf-cursor-blink;
  animation-timing-function: steps(30, end), step-end;
}
```

`steps(30, end)` creates 30 discrete width jumps — each reveals
roughly one character. `border-right` + `ease-kf-cursor-blink` creates
the blinking cursor effect without any pseudo-elements.

## Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  .ease-typewriter {
    animation:    none !important;
    width:        100% !important;
    border-right: none !important;
    overflow:     visible !important;
  }
}
```

Full text shown instantly — no animation, no cursor, no motion.

## Acceptance Criteria

- [x] `ease-kf-typewriter` keyframe (steps-based width reveal)
- [x] `ease-kf-cursor-blink` keyframe (sharp step-end blink)
- [x] `.ease-typewriter` base class
- [x] `.ease-typewriter-loop` variant
- [x] `.ease-typewriter-no-cursor` variant
- [x] `.ease-typewriter-fast` (1s)
- [x] `.ease-typewriter-slow` (5s)
- [x] Cursor color variants (primary, green, white)
- [x] Works with `ease-delay-*` classes
- [x] `prefers-reduced-motion` — shows full text instantly
- [x] Hero heading + terminal use cases in demo
- [x] Zero JavaScript
- [x] No `core/` or `components/` files modified