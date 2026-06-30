# Cursor State Utilities

An isolated interaction layout utility pack that provides direct access to system cursor states (`.ease-cursor-*`), allowing clear affordances for custom cards, tabs, drag handles, and disabled submit layers.

## Utility Roster API

- `.ease-cursor-pointer`: Forces the target element viewport to render the standard pointing-hand icon. Best for custom anchor nodes, sliders, and tab triggers.
- `.ease-cursor-not-allowed`: Renders the system block indicator. Built for un-hydrated forms or disabled workflow steps.
- `.ease-cursor-wait`: Renders an execution loading loop indicator to display background transaction status signals.
- `.ease-cursor-move`: Changes the pointer into a directional pan anchor to signify draggable canvas blocks.
- `.ease-cursor-help`: Renders a tool-tip question anchor indicating supplementary context definitions.
- `.ease-cursor-text`: Applies standard character tracking beams over text fields.
- `.ease-cursor-default`: Forces the native contextual arrowhead profile.
- `.ease-cursor-none`: Explicitly hides the system cursor visibility loop within the element path.

## Usage Layout Structure

```html
<div class="custom-card ease-cursor-pointer">
  <h3>Clickable Container Block</h3>
</div>
```

Closes #13477
