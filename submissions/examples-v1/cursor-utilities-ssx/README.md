# Cursor Utilities (ssx)

## What does this do?

Provides a complete set of pure-CSS utility classes for every common cursor style — including pointer, text, move, grab/grabbing, resize directions, zoom in/out, wait, help, not-allowed, and more — so developers can apply the correct cursor to any element with a single class.

## How is it used?

Apply any `cursor-*` class directly to any element to set its cursor on hover:

```html
<!-- Common interaction cursors -->
<button class="cursor-pointer">Click Me</button>
<button class="cursor-not-allowed" disabled>Disabled</button>
<span class="cursor-help" title="Hint">Need help?</span>
<div class="cursor-grab">Drag me</div>

<!-- Resize cursors (great for splitters/handles) -->
<div class="cursor-ew-resize">↔ Horizontal handle</div>
<div class="cursor-ns-resize">↕ Vertical handle</div>

<!-- Zoom cursors (image galleries) -->
<img class="cursor-zoom-in" src="photo.jpg" alt="Click to zoom" />
```

Available classes include:

- **Common:** `cursor-default`, `cursor-pointer`, `cursor-text`, `cursor-move`, `cursor-grab`, `cursor-grabbing`, `cursor-crosshair`, `cursor-help`, `cursor-wait`, `cursor-progress`, `cursor-not-allowed`, `cursor-none`
- **Resize:** `cursor-n-resize`, `cursor-s-resize`, `cursor-e-resize`, `cursor-w-resize`, `cursor-ne-resize`, `cursor-nw-resize`, `cursor-se-resize`, `cursor-sw-resize`, `cursor-ew-resize`, `cursor-ns-resize`, `cursor-col-resize`, `cursor-row-resize`
- **Zoom:** `cursor-zoom-in`, `cursor-zoom-out`

## Why is it useful?

Cursor feedback is one of the smallest but most important UX details — it instantly tells users what an element does (clickable, draggable, disabled, loading, etc.). Instead of writing inline `style="cursor: ..."` over and over, these utility classes make cursor intent declarative and consistent across the entire UI. It aligns perfectly with EaseMotion CSS's philosophy of minimal, expressive, and reusable styling utilities that improve developer experience without adding any JavaScript or runtime cost.