# Modal Dialog

### What does this do?

It shows a modal dialog that opens from a trigger link and closes with a backdrop click or a cancel button. It uses the CSS `:target` state, so it opens and closes with no JavaScript and animates in with a fade and scale.

### How is it used?

```html
<a class="modal-open" href="#demo-modal">Open dialog</a>

<div class="modal" id="demo-modal" role="dialog" aria-modal="true">
  <a class="modal-backdrop" href="#" tabindex="-1"></a>
  <div class="modal-card">
    <h3>Delete this file?</h3>
    <p>This cannot be undone.</p>
    <div class="modal-actions">
      <a class="modal-close" href="#">Cancel</a>
      <a class="modal-confirm" href="#">Delete</a>
    </div>
  </div>
</div>
```

The trigger points to the modal `id`. When that id is the URL target, the modal becomes visible. Any link back to `#` closes it.

### Why is it useful?

Dialogs confirm actions and show quick forms across most apps. This builds a modal with a dimmed backdrop and an entry animation using only the `:target` state and CSS. The card carries dialog roles and the animation is removed under reduced motion.
