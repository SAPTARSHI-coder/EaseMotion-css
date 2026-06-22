# Card Flip — Touch Device Verification & Fix (`ease-card-flip`)

An intermediate bug-fix for the existing `ease-card-flip` component, resolving unreliable behavior on touch devices where `:hover` either never fires, fires without a way to reverse it, or gets "stuck" after a single tap.

## The Bug

`:hover`-triggered flips rely on a continuous pointer state that doesn't exist on touch. When a finger taps and lifts, the browser can trigger `hover-in` but never `hover-out` — leaving the card permanently flipped with no way to reverse it. Or hover may never fire at all. Neither is acceptable for a UI that reveals content on demand.

## Verification

Reproduced in Chrome DevTools touch emulation (Cmd/Ctrl+Shift+M) and confirmed on a real touch device. Steps:
1. Open `demo.html` in a browser.
2. Enable DevTools → toggle device toolbar → select any mobile preset.
3. Tap the card — observe it either doesn't flip or flips and gets stuck.
4. Disable touch emulation — hover behavior continues working normally for mouse users.

## What Changed

### `style.css` — two additions, zero removals

```css
/* FIX 1: JS-toggled flip state — pointer-type agnostic */
.ease-card-flip.is-flipped .ease-card-flip-inner {
    transform: rotateY(180deg);
}

/* FIX 2: Suppress phantom hover on touch screens */
@media (hover: none) {
    .ease-card-flip:hover .ease-card-flip-inner {
        transform: none;
    }
}
```

The original `:hover` rule is **left completely untouched** — mouse users experience zero change. The `@media (hover: none)` block suppresses the hover trigger specifically for devices that report no hover capability, eliminating the stuck-card scenario. The `.is-flipped` class is the touch-safe alternative driven by JS.

### `demo.html` — minimal JS addition

A `matchMedia('(hover: hover) and (pointer: fine)')` check determines input type at load time:

- **Mouse device** → the script does nothing. `:hover` continues to drive everything exactly as before.
- **Touch / keyboard device** → a `click` listener toggles `.is-flipped`, driving the flip via a reliable class toggle rather than pointer state. The hint text also updates to say "Tap to flip card" rather than "Hover to flip card."

Three further improvements were folded in without changing the visual design:

- `role="button"` + `tabindex="0"` + `aria-pressed` make the card reachable and operable by keyboard-only users (who have the same root problem as touch users — no hover state).
- `Enter`/`Space` keydown handling fires `card.click()` for full keyboard operability.
- `-webkit-tap-highlight-color: transparent` removes the default blue flash on iOS tap.

## Touch vs. Hover Behavior — Documented Differences

| | Before fix | After fix |
|---|---|---|
| Mouse hover | ✅ Flips smoothly on hover | ✅ Unchanged |
| Touch tap | ❌ Card stuck / never flips | ✅ Tap toggles flip reliably |
| Keyboard Tab | ❌ No mechanism | ✅ Enter/Space toggles flip |
| Flip reversal (touch) | ❌ Requires tap off the card | ✅ Tap the card again |
| Hint text | Always shows "Hover" | Updates to "Tap" on touch devices |

## Files Changed

```
submissions/examples/ease-card-flip/
├── demo.html     ← touch fix JS + role/tabindex/aria-pressed added
├── style.css     ← .is-flipped rule + @media (hover: none) added
└── README.md     ← this file (new)
```

---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**