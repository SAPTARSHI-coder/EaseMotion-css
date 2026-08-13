# ease-drag-crop-rotate-image-sap

An image crop preview frame — drag the image to reposition it within the fixed crop bounds, plus a rotate button, common in avatar/profile upload UIs.

## Usage
1. Include `style.css`.
2. Add markup: `.crop-frame` (fixed size, `overflow: hidden`) containing the draggable `<img>`.
3. Attach the drag + rotate/reset logic from `demo.html`.

## Customization
- Frame dimensions/border-radius (circular for avatar-style crop, or square/rectangular).
- Rotation increment (`90°` per click) — reduce for finer control.
- Image starting size/zoom level.

## Notes
- Position and rotation are both stored as CSS custom properties (`--tx`, `--ty`, `--rot`) combined in a single `transform`, so dragging and rotating compose correctly instead of overwriting each other.
- `overflow: hidden` on the frame is what creates the actual "crop" — the image extends beyond the frame and only the visible portion counts as the crop result.
- Respects `prefers-reduced-motion`: the smoothing transition on the image transform is removed; live drag remains 1:1 direct input regardless, and the rotate button's transform change becomes an instant snap rather than eased.