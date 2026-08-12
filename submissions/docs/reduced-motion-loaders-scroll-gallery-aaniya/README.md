# Reduced-Motion Support for Loaders — Issue #61569

## Scope correction

Issue #61569 asks to expand `prefers-reduced-motion` support across
marquee, scroll-gallery, typewriter, and loading spinners. After
auditing `core/` and `components/`, the actual picture is different
from the issue description:

| Area | Status |
|---|---|
| `components/ease-marquee.css` | Already has a `prefers-reduced-motion` override (line 134). No change needed. |
| `components/scroll-gallery.css` | Defines no `@keyframes` at all — pure scroll-snap CSS, no animation to disable. Out of scope for this fix. |
| Typewriter | No central `components/*typewriter*.css` file exists. Every typewriter implementation lives inside individual `submissions/` folders (dozens of them, by many different contributors), so there's no single component file to patch. |
| `components/loaders.css` | **Genuinely missing** reduced-motion coverage for `.ease-loader-spin`, `.ease-loader-pulse`, `.ease-loader-ping`, and `.ease-loader-dot`. This is the real, actionable gap. |

The issue's own suggested code snippet references a class called
`.ease-spinner`, which doesn't exist anywhere in this codebase — the
actual loader classes are `.ease-loader-*`, as used in this demo.

## Demo

`demo.html` + `style.css` reproduce the three animated loader variants
(spin, pulse, dots) using renamed `demo-loader-*` classes to avoid
colliding with the live components, plus the missing
`prefers-reduced-motion` block. Toggling OS-level reduced motion (or
DevTools' Rendering emulation) stops all three from animating.

## Recommended fix (for maintainer to apply in `components/loaders.css`)

Add to `components/loaders.css`, inside the existing
`@layer easemotion-components` block or immediately after it:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-loader-spin,
  .ease-loader-pulse,
  .ease-loader-ping,
  .ease-loader-dot {
    animation: none;
  }
}
```

No changes are needed in `ease-marquee.css` or `scroll-gallery.css`.
Typewriter isn't addressable here since it has no central component
file — that would need to be tracked as a separate, narrower issue
once (if) a shared `components/typewriter.css` is introduced.

## Why this is submitted as a docs showcase, not a direct edit

Per `CONTRIBUTING.md`, PRs touching `core/` or `components/` are closed
automatically. This submission documents the actual gap and demonstrates
the fix so a maintainer can apply the two-line change directly to
`components/loaders.css`.
