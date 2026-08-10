# Fix: Duplicate Keyframe Definitions — ease-kf-fade-in (#61607)

## Issue
`@keyframes ease-kf-fade-in` is defined identically in two places:

- `core/animations.css` (line 14)
- `easemotion/fade.css`

Both definitions are byte-for-byte the same:
```css
@keyframes ease-kf-fade-in {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}
```

## Impact
- Larger file size from redundant CSS
- Confusion for contributors about which file "owns" the keyframe
- Maintenance risk — a future edit to one copy but not the other would
  silently desync the animation between `core` and `easemotion` usages

## Investigation
Confirmed via direct file inspection:
- `core/animations.css` defines `ease-kf-fade-in` once (line 14) and
  references it in two additional selectors: `.ease-fade-in` (line ~824)
  and `.ease-reveal-fade` (line ~1347).
- `easemotion/fade.css` defines the same keyframe again, used only by its
  own `.ease-fade-in` utility class within that file's `@layer
  easemotion-utilities` block.

## Recommended Fix
Since this submission can't modify `core/` or `easemotion/` directly:

1. Treat `core/animations.css` as the single source of truth for
   `ease-kf-fade-in`, since it's the original definition and has more
   dependents.
2. Remove the duplicate `@keyframes ease-kf-fade-in` block from
   `easemotion/fade.css`, letting `.ease-fade-in` in that file resolve
   against the core keyframe (via existing build/import order, or a
   shared `@import` if the layers don't already share scope).
3. Apply the same audit to the other three keyframes duplicated in
   `easemotion/fade.css` (`ease-kf-fade-out`, `ease-kf-fade-icon-exit`,
   and the reduced-motion override) — they mirror `core/animations.css`
   too and weren't in the original issue's example, but they're the same
   pattern.

## Files
- `style.css` — demo-namespaced reproduction of the shared keyframe
- `demo.html` — visual demo with a replay button to re-trigger the
  animation, plus notes on the recommended dedup approach

## Testing
1. Open `demo.html` in a browser.
2. Click "Replay animation" to confirm the fade-in matches the behavior
   defined in both `core/animations.css` and `easemotion/fade.css`.
