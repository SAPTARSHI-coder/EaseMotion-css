# Flip / 3D backface-visibility Safari Glitch Doc

A documentation showcase that reproduces **Safari flicker / reverse-face flash** during EaseMotion flip animations (`ease-flip`, flip-x / flip-y patterns) and documents a **Safari-safe 3D CSS stack**.

> Submission track: `submissions/docs/ease-flip-backface-safari-sp/`  
> Contributor suffix: `sp`  
> Related issue: [#47560](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/47560)

---

## What does this do?

3D flips look fine in Chrome with an incomplete stack, then flicker in Safari when:

- `-webkit-backface-visibility: hidden` is missing
- `perspective` sits on the wrong node
- `transform-style: preserve-3d` is incomplete
- faces z-fight mid-rotation without a tiny `translateZ`

This is a **3D compositor quirk**, not an iOS `100vh` / navbar issue.

This lab:

- Replays `ease-flip` plus local flip-x / flip-y entrance patterns
- Shows before (incomplete stack) vs after (Safari-safe) hover flip cards
- Lists a property checklist in the correct order
- Provides copy-friendly harden snippets — without editing core

## How is it used?

1. Open `demo.html` in a browser (ideally also check **Safari / iOS Safari**).
2. Click **Replay entrance flips** for `ease-flip` / flip-x / flip-y entrances.
3. Hover or focus the **Before** cards — incomplete stack (glitch risk).
4. Hover or focus the **After** cards — hardened Safari-safe stack.
5. Copy the checklist / project CSS harden snippet.

### Safari-safe harden snippet

```css
.ease-flip-3d-inner {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.ease-flip-3d-face {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0.1px);
}
.ease-flip-3d-back {
  transform: rotateY(180deg) translateZ(0.1px);
}
```

## Why is it useful?

- Documents a real Safari-only class of bugs for EaseMotion flip utilities
- Separates entrance flips (`ease-flip`) from double-sided cards (`ease-flip-3d`)
- Keeps the fix in project CSS during the core freeze
- Distinct from iOS viewport / navbar showcases

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Entrance demos, broken vs safe flip cards, checklist |
| `style.css` | Broken incomplete stack + Safari-safe hardened stack |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/ease-flip-backface-safari-sp/`
- No changes to `core/`, `components/`, workflows, or existing files
- Uses the official CDN bundle; no framework source copied
- Folder name includes unique contributor suffix `-sp`
- Respects `prefers-reduced-motion` (flips disabled / static)
