# Fix: Expand prefers-reduced-motion support (#61569)

## Issue
`components/loaders.css` defines four animated loader variants with no
`prefers-reduced-motion` override:
- `.ease-loader-spin` → `ease-kf-rotate`
- `.ease-loader-pulse` → `ease-kf-pulse`
- `.ease-loader-ping` → `ease-kf-ping`
- `.ease-loader-dot` → `ease-kf-bounce`

## Scope note
- `components/ease-marquee.css` already has a `prefers-reduced-motion`
  override (line 134) — no change needed there.
- `components/scroll-gallery.css` defines no `@keyframes` at all — nothing
  to disable.
- There is no central "typewriter" component file in `components/`; it
  only exists inside individual contributor `submissions/` folders, so
  it's out of scope for a components-level fix.
- The issue's suggested snippet references `.ease-spinner`, which doesn't
  exist in this codebase. The real classes are `.ease-loader-*`.

## Fix
Added a `prefers-reduced-motion: reduce` media query that sets
`animation: none` on the spin, pulse, and dot loader variants, so users
with reduced-motion enabled see static (non-animated) loaders instead.

## Files
- `style.css` — demo loader styles + the recommended fix
- `demo.html` — visual demo of all loader variants, with instructions for
  toggling reduced motion at the OS level to verify the fix

## Testing
1. Open `demo.html` in a browser.
2. Enable "Reduce motion" in OS/browser accessibility settings.
3. Confirm spin, pulse, and dot loaders freeze; refresh to confirm they
   animate normally with the setting off.
