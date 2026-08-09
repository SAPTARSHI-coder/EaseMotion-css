# Stagger Timeline Visualizer

## 1. What does this do?

A horizontal timeline tool that visualizes when each staggered child starts, with draggable delay knobs and a live restaggering list preview.

## 2. How is it used?

Open `demo.html` in a browser. Drag **Base delay** and **Step gap**, then watch lane markers, class mapping, and list items restagger. Press **Replay stagger** anytime.

```html
<ul class="preview-list is-playing">
  <li style="--delay: 80ms">Nova card</li>
  <li style="--delay: 200ms">Orbit tip</li>
</ul>
```

## 3. Why is it useful?

Developers often guess stagger timing. This educational demo makes delay composition visible and readable, aligned with EaseMotion’s teaching-friendly utility philosophy.

## Issue

Resolves #51861
