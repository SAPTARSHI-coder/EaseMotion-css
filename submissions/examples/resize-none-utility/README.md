# Resize None Utility

Introduces the rigid layout constraint configuration token (`.ease-resize-none`) under issue #15114.

## Functional Mechanics

- **The Problem:** By default, multi-line `<textarea>` elements display an interactive dragging handle on the bottom-right corner. When an end-user expands fields freely, it pushes surrounding grids aside, breaks delicate absolute alignments, and shatters card layouts.
- **The Solution:** Locks presentation layouts. The `.ease-resize-none` utility deactivates the user-agent resizing handle completely. This guarantees that your forms, commentary boxes, and review blocks adhere strictly to your intended responsive width and height dimensions.

## Usage Layout Structure
```html
<textarea class="ease-resize-none">
  This container locks down dimensions securely...
</textarea>
```

Closes #15114
