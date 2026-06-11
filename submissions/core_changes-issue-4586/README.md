# Core Changes — Issue #4586: Missing reduced-motion overrides for `.ease-hover-glow`, `.ease-hover-underline`, `.ease-shimmer-text`

## Overview
The `@media (prefers-reduced-motion: reduce)` block in `core/animations.css` suppresses `transition` and `animation-duration` broadly, but three classes still show their hover/active effects because their **target CSS properties** aren't explicitly reset.

## Problem
The current reduced-motion block:
```css
@media (prefers-reduced-motion: reduce) {
  [class*="ease-"] {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
  [class*="ease-hover-"],
  [class*="ease-card-"],
  .ease-btn-hover {
    transition: none !important;
    transform: none !important;
  }
}
```

| Class | What it does | Why it slips through |
|-------|-------------|---------------------|
| `.ease-hover-glow` | Sets `filter: drop-shadow(...)` on hover | `[class*="ease-hover-"]` suppresses transition but not the `filter` value itself |
| `.ease-hover-underline` | Sets `background-size: 100% 2px` on hover | Same — transition is killed but `background-size` still applies instantly |
| `.ease-shimmer-text` | Animates `background-position` with `background-clip: text` | Not caught by `[class*="ease-hover-"]` at all |

## Fix
Add explicit reduced-motion rules:
```css
.ease-hover-glow:hover,
.ease-hover-glow:focus-visible {
  filter: none !important;
  box-shadow: none !important;
}
.ease-hover-underline:hover,
.ease-hover-underline:focus-visible {
  background-size: 0% 2px !important;
}
.ease-shimmer-text {
  -webkit-text-fill-color: currentColor !important;
  color: inherit !important;
  background: none !important;
  animation: none !important;
}
```

## Affected Files
- `core/animations.css` — add the three rules to the existing `@media (prefers-reduced-motion: reduce)` block

## Verification
Open `demo.html`. Toggle reduce-motion simulation. Without the fix, hover over the glow/underline/text elements and they still animate. With the fix, they stay static.

## Labels
- `bug`, `animation`, `accessibility`, `GSSoC-26`
