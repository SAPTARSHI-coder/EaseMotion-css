# CSS Modal / Overlay

## What does this do?

CSS-only modal dialogs using checkbox hack and :target pseudo-class with overlay backdrop blur.

## How is it used?

```html
<input type="checkbox" id="modal1" class="mo-check" />
<div class="mo-overlay">
  <div class="mo-modal">
    <div class="mo-header-bar">
      <h3>Title</h3>
      <label for="modal1" class="mo-close">&times;</label>
    </div>
    <div class="mo-body"><p>Content</p></div>
  </div>
</div>
<label for="modal1" class="mo-btn mo-primary">Open</label>
```

## Why is it useful?

Two modal patterns: checkbox (no URL change) and :target (URL hash). Overlay with backdrop blur. Alert, confirm variants. Accessible close controls. No JS needed.
