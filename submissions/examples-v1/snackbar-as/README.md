# Snackbar

### What does this do?

It shows a single snackbar toast with an icon, a message, an undo action, and a thin countdown bar that runs down while it is shown. A close button dismisses it with a slide down. It works with no JavaScript.

### How is it used?

```html
<input type="checkbox" id="sb-close" class="sb-close" />
<div class="snackbar" role="status">
  <span class="sb-icon"><svg>...</svg></span>
  <span class="sb-text">Message moved to archive</span>
  <a class="sb-action" href="#">Undo</a>
  <label class="sb-x" for="sb-close" aria-label="Dismiss">✕</label>
  <span class="sb-timer"></span>
</div>
```

Keep the checkbox before the snackbar so the sibling selector can slide it away. The timer bar animates its scale to zero over a set duration, and the close label dismisses the snackbar.

### Why is it useful?

Apps confirm quick actions with a snackbar that offers an undo. This builds a snackbar with an action, an auto dismiss countdown bar, and a close control, using only a checkbox and CSS. The countdown and slide are removed under reduced motion.
