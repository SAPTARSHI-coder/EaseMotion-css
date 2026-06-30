# Bug Fix: Modal body text references undefined CSS variable (#11643)

### 1. What does this do?
Provides a self-contained modal component demonstration template that maps modal body text elements correctly to the active design token system token `--ease-color-muted`.

### 2. How is it used?
```html
<div class="modal-body-sb">
  <p>Modal textual content aligned seamlessly with framework design variables...</p>
</div>