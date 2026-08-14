# Drag Handle Indicator

## What does this do?
A six-dot grid drag handle that shows a grab cursor, highlights on hover,
and scales on active — pure CSS, zero JavaScript.

## How is it used?
Place the handle at the start of any list item or card:

```html
<div class="drag-list-item">
  <div class="drag-handle">
    <div class="drag-handle-dots">
      <span></span><span></span>
      <span></span><span></span>
      <span></span><span></span>
    </div>
  </div>
  Your content here
</div>
```

Size variants: add `drag-handle-sm` or `drag-handle-lg` to the handle.

## Why is it useful?
Drag handles are a standard affordance in sortable lists, kanban boards,
and reorderable cards. No submission currently covers this pattern.
Pure CSS — the grab/grabbing cursor swap and hover highlight require
no JavaScript at all.

## Tech Stack
- HTML
- CSS only (no JavaScript, no frameworks)

## Preview
Open `demo.html` directly in your browser.