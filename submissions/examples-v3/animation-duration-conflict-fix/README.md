# Fix: Merge conflict in animation-duration values between ease-speed-* utilities and component defaults

Resolves #30484

## The Problem

Components like `ease-fade` hardcoded their own `transition-duration`
values directly. Separately, speed utility classes (`.ease-speed-fast`,
`.ease-speed-slow`) maintained an independent set of duration numbers.
Both rule types had equal selector specificity, so applying a speed
utility on top of a component sometimes had no visible effect — whichever
declaration appeared later in the compiled stylesheet silently won,
regardless of which one was intended to take precedence.

## The Fix

**1. A single shared duration scale**

```css
--ease-duration-fast: 150ms;
--ease-duration-base: 400ms;
--ease-duration-slow: 900ms;
```

Mirrors a SCSS map (`$ease-durations`) so there is exactly one place in
the codebase where duration numbers are defined. Component defaults now
read `transition-duration: var(--ease-duration-base)` instead of a
hardcoded number, so "default speed" always means the same thing as the
utility scale's base value.

**2. Cascade layers guarantee deterministic precedence**

```css
@layer base, components, utilities;
```

Following the same pattern used in the `!important` fix for #30483,
component duration rules live in the `components` layer and speed
utilities live in `utilities`, declared last. Any utility duration now
beats any component default regardless of source order — no
`!important`, no defensive overrides, no ambiguity.

## Files

| File | Purpose |
|---|---|
| `demo.html` | Three identical `ease-fade` cards — default, `.ease-speed-fast`, `.ease-speed-slow` — with replay-on-click and a live duration readout |
| `style.css` | The actual fix — shared duration scale + cascade layers ensuring utilities always override component defaults |
| `script.js` | Replays each card's fade-in transition on click and reads the live computed `transition-duration` to confirm which value is actually in effect |

## How to Test

1. Open `demo.html` in a browser.
2. Click each card to replay its fade-in animation — confirm the fast
   card animates noticeably quicker than default, and the slow card
   noticeably slower.
3. Check the live duration readout below — confirm it reports `150ms`,
   `400ms`, and `900ms` respectively, proving the utility values are
   actually being applied at runtime, not silently overridden by the
   component's own default.

## Notes

- This mirrors the cascade-layer approach used in the #30483 fix
  (`!important` conflict between utilities and components), applied
  here specifically to duration-related properties. Future utility
  categories (e.g. a hypothetical `.ease-delay-*` utility) should follow
  the same pattern: read from a shared scale, live in the `utilities`
  layer, and never need `!important`.