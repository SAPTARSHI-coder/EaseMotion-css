# Vertex Connect (vertex-connect-tay)

A hover micro-interaction where four corner nodes are connected by
progressively growing lines, forming a complete blueprint-style frame.

## Usage

```html
<div class="vertex-connect-tay">
  <span class="vc-node-tay vc-node-tl-tay"></span>
  <span class="vc-node-tay vc-node-tr-tay"></span>
  <span class="vc-node-tay vc-node-bl-tay"></span>
  <span class="vc-node-tay vc-node-br-tay"></span>
  <h3>Your content</h3>
</div>
```

## How it works
- 4 `.vc-node-tay` spans mark the resting corner state.
- The container's `::before`/`::after` draw the top and bottom lines.
- The top two nodes each get their own `::after` to draw the left and
  right lines, so the whole frame is built from pseudo-elements only —
  no extra line elements needed.
- Staggered `transition-delay` values make the frame build up in a
  natural top → sides → bottom order instead of all sides snapping at once.

## Notes
- Pure CSS, no JavaScript.
- Fully self-contained; safe to drop into any card/button/container.