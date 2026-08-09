# ease-radial-menu-sap

A floating action button that expands into a radial cluster of shortcut icons on click, each flying out to its own position with a bouncy scale-in.

## Usage
1. Include `style.css`.
2. Add markup: `.radial-trigger` button + `.radial-item` links inside `.radial-menu-sap`.
3. Attach the toggle click handler from `demo.html`.

## Customization
- Per-item `translate()` values (via `:nth-child`): the arrangement/spread pattern (currently a simple 4-point diamond) — recalculate for a full circular spread with more items using trigonometry (`cos`/`sin` of angle).
- Trigger icon rotation on open (currently 45° "+" to "×" look).
- Item colors/icons.

## Notes
- Items sit at `top: 50%; left: 50%` with a negative margin offset (half their own size) so their `translate()` values represent movement from dead-center — this keeps the per-item positioning math simple regardless of item size.
- `pointer-events: none` on closed items prevents accidentally clicking an invisible/collapsed link.
- Respects `prefers-reduced-motion`: items and trigger both lose their transform-based fly-out/rotate, relying on opacity alone to signal open/closed state.