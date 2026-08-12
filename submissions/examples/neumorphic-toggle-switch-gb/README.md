# Neumorphic Soft Shadow Toggle

## Issue #73871

A pure HTML & vanilla CSS checkbox/toggle switch featuring a Neumorphic Soft Shadow style — no JavaScript required for the toggle itself.

## Features

- **Pure CSS interaction** — built on a native `<input type="checkbox">` wrapped by a `<label>`, so it works with zero JS and is fully keyboard-accessible (`Tab` + `Space`).
- **Neumorphic styling** — soft inset shadows on the track and dual light/dark drop shadows on the thumb create the classic embossed, soft-UI look.
- **Smooth transitions** — the thumb slides using `transform: translateX(...)` with a bouncy `cubic-bezier` easing; only `transform` and `box-shadow`/`background` are animated, keeping the animation on the compositor (hardware accelerated, no layout thrashing).
- **Dark mode compatible** — automatically adapts via the `[data-theme="dark"]` attribute set on `<html>` (the same toggle mechanism used elsewhere in EaseMotion CSS), switching to darker neumorphic shadows for a proper dark-surface emboss effect.
- **Accessible states** — includes a visible `:focus-visible` outline for keyboard users and a `:disabled` state with reduced opacity and a `not-allowed` cursor.
- **Reduced motion support** — respects `prefers-reduced-motion: reduce` by disabling the slide transition for users who've opted out of animation.

## Usage

```html
<label class="ease-neu-toggle">
  <input type="checkbox" class="ease-neu-toggle-input" />
  <span class="ease-neu-toggle-track">
    <span class="ease-neu-toggle-thumb"></span>
  </span>
  <span class="ease-neu-toggle-label">Your label here</span>
</label>
```

Add `checked` to the input for a toggle that starts in the "on" state, or `disabled` for a locked/inactive toggle.

## Files Included

- `demo.html` — Interactive demonstration with three toggle states (default, pre-checked, disabled) and a light/dark theme switcher button.
- `style.css` — Self-contained stylesheet with the neumorphic toggle component and its dark-mode variant.
