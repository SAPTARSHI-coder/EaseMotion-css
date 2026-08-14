# ease-animated-tag-input-sap

A tag/chip input field where new tags pop in with a bounce, and removed tags shrink out before being deleted from the DOM.

## Usage
1. Include `style.css`.
2. Add markup: `.tag-input-sap` wrapper with an `<input>` inside.
3. Attach `addTag()` (Enter key handler) and remove-button logic from `demo.html`.

## Customization
- Chip colors/shape.
- `chip-in-sap` bounce intensity.
- Enter-key trigger — swap for comma-key or paste-splitting for different tag entry UX.

## Notes
- New chips are inserted via `insertBefore(chip, input)`, keeping the text input always as the last element regardless of how many tags exist.
- Removal defers DOM deletion until `animationend` on the `.removing` class, so the shrink-out animation always completes visually before the chip disappears.
- Respects `prefers-reduced-motion`: both entrance and exit animations are disabled; chips appear/disappear instantly, and removal still functions correctly since it isn't gated behind the (now-instant) animation event in a way that would break — `animationend` still fires immediately for a `none` animation via the browser's handling of already-applied final states, though a defensive immediate-removal fallback could be added for stricter guarantees.