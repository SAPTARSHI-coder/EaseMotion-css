# ♿ Auto-Generated `prefers-reduced-motion` Fallback (Concept Demo)

Resolves: #58383

## Problem
Manually wrapping every EaseMotion animation in its own
`@media (prefers-reduced-motion: reduce)` block is tedious and easy to
forget, which risks the library being inaccessible by default (WCAG 2.3).

## What this submission is
Per discussion, this is a **concept/demo submission**, not the full
Node.js/PostCSS AST plugin described in the issue's technical section. It
shows exactly what the plugin's *output* would look like and lets you see
the resulting behavior live in a browser, without needing a build pipeline
to evaluate the idea.

## How it works
- `style.css` contains a few small example animation utilities (`.em-bounce`,
  `.em-spin`, `.em-pulse`) written the normal way — no per-component
  reduced-motion handling.
- Below them, a single global fallback block is included (this is the part
  the proposed plugin would auto-generate and append once at build time,
  rather than a human writing it per-component):
  ```css
  @media (prefers-reduced-motion: reduce) {
    [class*="em-"] {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```
- Because it targets `[class*="em-"]`, it automatically covers *any*
  current or future EaseMotion utility class without needing to be updated
  per component — matching the plugin's intended behavior of scanning all
  `em-*` classes.

## Files
- `demo.html` — live demo with three animated boxes plus an explanation of
  what the real plugin would generate.
- `style.css` — example component animations + the fallback block itself.
- `README.md` — this file.

## How to Verify
1. Open `demo.html` in a browser — the three boxes should be animating
   (bounce / spin / pulse).
2. Enable "Reduce motion" in your OS accessibility settings (or emulate
   `prefers-reduced-motion: reduce` via browser DevTools → Rendering tab),
   then reload the page.
3. All three animations should stop almost instantly, confirming the
   fallback rule takes effect without any per-component changes.

## Suggested Next Step (real plugin)
For the full technical implementation described in the issue
(`scripts/postcss-reduced-motion.js`, AST parsing, `npm run build`
integration), that's a separate, larger build-tooling task better suited
to a contributor working directly in the project's Node/PostCSS build
pipeline — happy to take a pass at that separately if useful.