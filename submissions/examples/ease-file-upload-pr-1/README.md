# Submission: File Upload Dropzone

## 1. What does this do?

A drag-and-drop file upload dropzone with three states — empty, drag-over,
and uploaded files — plus a file list with name, size, progress bar
simulation, status labels (uploading / complete / error), and a remove button
per file. CSS-only hover and drag-over feedback; progress simulation via
vanilla JS.

---

## 2. How is it used?

```html
<!-- Dropzone -->
<div class="dropzone" id="dropzone">
  <input type="file" id="fileInput" class="dropzone-input" multiple />

  <div class="dropzone-inner">
    <div class="dz-icon-wrap">
      <div class="dz-icon-ring"></div>
      <div class="dz-icon-body"><!-- upload SVG --></div>
    </div>
    <div class="dz-text">
      <p class="dz-title">Drop files here to upload</p>
      <p class="dz-sub">or <label for="fileInput" class="dz-browse">browse files</label></p>
    </div>
    <div class="dz-meta">
      <span class="dz-chip">PNG</span>
      <span class="dz-chip">PDF</span>
      <span class="dz-chip dz-chip--muted">Max 10 MB</span>
    </div>
  </div>
</div>

<!-- File list -->
<ul class="file-list">
  <li class="file-item file-item--done">
    <div class="file-icon file-icon--img"><!-- svg --></div>
    <div class="file-meta">
      <div class="file-meta-top">
        <span class="file-name">design.png</span>
        <span class="file-size">2.4 MB</span>
      </div>
      <div class="file-progress-wrap">
        <div class="file-progress-bar file-progress-bar--done" style="width:100%"></div>
      </div>
      <span class="file-status file-status--done">Complete</span>
    </div>
    <button class="file-remove" aria-label="Remove"><!-- × svg --></button>
  </li>
</ul>
```

Add `dropzone--dragover` class via JS on `dragenter`/`dragover` events
and remove on `dragleave`/`drop` to activate drag-over visual state.

---

## 3. Why is it useful?

EaseMotion CSS is animation-first — every interaction should feel alive.
The file upload dropzone covers one of the most common UI patterns missing
from the framework:

- `dropzone--dragover` — dashed border turns solid purple, background
  highlights, icon lifts with glow, ring spins — all triggered by a
  single class toggle, readable in plain English
- `file-progress-bar--active` — shimmer sweep animation on the progress
  track while uploading
- `file-progress-bar--done` — turns green on completion
- `file-progress-bar--error` — turns red for oversized / failed files
- `file-remove:hover` — scales up with red tint, composable hover effect
- `dz-icon-ring` — CSS `ring-spin` keyframe on drag-over
- All states: empty, drag-over, uploading, complete, error

Zero external libraries — pure CSS transitions + vanilla JS drag events
+ `requestAnimationFrame` entrance for new file items.
`prefers-reduced-motion` strips all animations.

---

## Proposed class names (maintainer decides final naming)

| Raw name                    | Proposed ease-* name                |
|-----------------------------|-------------------------------------|
| `dropzone`                  | `ease-dropzone`                     |
| `dropzone--dragover`        | `ease-dropzone-dragover`            |
| `dropzone--compact`         | `ease-dropzone-compact`             |
| `dz-icon-wrap`              | `ease-dz-icon`                      |
| `dz-icon-ring`              | `ease-dz-ring`                      |
| `dz-icon-body`              | `ease-dz-icon-body`                 |
| `dz-browse`                 | `ease-dz-browse`                    |
| `dz-chip`                   | `ease-dz-chip`                      |
| `file-list`                 | `ease-file-list`                    |
| `file-item`                 | `ease-file-item`                    |
| `file-item--done`           | `ease-file-item-done`               |
| `file-item--uploading`      | `ease-file-item-uploading`          |
| `file-item--error`          | `ease-file-item-error`              |
| `file-progress-bar--active` | `ease-file-progress-active`         |
| `file-progress-bar--done`   | `ease-file-progress-done`           |
| `file-progress-bar--error`  | `ease-file-progress-error`          |
| `file-remove`               | `ease-file-remove`                  |