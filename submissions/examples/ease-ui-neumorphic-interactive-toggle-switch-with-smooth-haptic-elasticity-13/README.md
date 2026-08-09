# Neumorphic Interactive Toggle Switch (Minimalist Clean Edition)

A flat, single-tone toggle switch with a soft elastic thumb snap. No JavaScript.

## How it works
A standard checkbox/label toggle. The track swaps from a light gray to a solid dark accent on check; the thumb slides via `translateX` with a bouncy `cubic-bezier` for a subtle snap, without any gradients or shadows beyond a light drop-shadow on the thumb — deliberately restrained for the minimalist style.

## Files
- `demo.html`, `style.css`, `README.md`

## Custom properties
`--ease-min-duration`, `--ease-min-easing`, `--ease-min-bg`, `--ease-min-text`, `--ease-min-muted`, `--ease-min-border`, `--ease-min-accent`, `--ease-min-track-width/height`, `--ease-min-thumb-size`

## Notes
Respects `prefers-reduced-motion`. `:focus-visible` outline included.