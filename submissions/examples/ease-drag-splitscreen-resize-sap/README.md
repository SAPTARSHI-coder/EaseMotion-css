# Drag Splitscreen Resize

A before/after split-view layout with a draggable divider that resizes both
panes, built as a proper ARIA separator with full keyboard support.

**Level:** Advanced

## Usage

Drag `.split-handle` left/right to resize `#paneLeft` (percentage-based,
clamped 20–80%); `#paneRight` fills the remainder via `flex: 1`. Arrow keys
adjust by 5%, Home/End jump to the min/max bounds.

## Accessibility

- Handle uses `role="separator"` with `aria-orientation="vertical"` and
  `aria-valuemin`/`aria-valuemax`/`aria-valuenow` kept in sync on every resize.
- Fully keyboard-operable via ArrowLeft/ArrowRight/Home/End, independent of
  pointer dragging.
- `:focus-visible` outline shown on the handle.
- `prefers-reduced-motion` removes the handle's hover/focus grip-indicator
  transition; resizing itself is a direct, non-eased width change regardless.

## Notes

- Uses Pointer Events with `setPointerCapture`, consistent with the other
  drag-resize components in this set, so dragging stays reliable even if
  the pointer leaves the thin handle mid-drag.
- Bounds are clamped to 20–80% so neither pane can be fully collapsed,
  keeping both "before" and "after" content always at least partially visible.