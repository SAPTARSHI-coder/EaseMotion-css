# Interactive Vinyl Record Player

A CSS-only interactive record player where hovering drops the needle and starts the music spinning.

## Preview
Open `demo.html` in your browser. You will see a square turntable with a black record. Hover your mouse over the player. The grey tonearm will swing over onto the record, and the record will begin to continuously spin.

## Implementation
- The `.record` uses multiple `inset box-shadow` layers to simulate the vinyl grooves.
- The `.tonearm` has `transform-origin: top center` so it pivots from its base.
- When the parent `.player` is `:hover`ed, the tonearm rotates inward. Simultaneously, the record triggers an infinite `spin` animation via `@keyframes`.
