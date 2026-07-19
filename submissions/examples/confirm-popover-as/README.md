# Confirm Popover

### What does this do?

It shows a small confirm popover that appears above a delete button to ask are you sure, with cancel and confirm actions and an arrow pointing at the button. It works with no JavaScript by using a hidden checkbox.

### How is it used?

```html
<div class="confirm">
  <input type="checkbox" id="cf" class="cf-toggle" />
  <label class="cf-trigger" for="cf"><svg>...</svg>Delete</label>
  <div class="cf-pop" role="dialog" aria-label="Confirm delete">
    <p>Delete this item?</p>
    <div class="cf-actions">
      <label class="cf-cancel" for="cf">Cancel</label>
      <a class="cf-yes" href="#">Delete</a>
    </div>
  </div>
</div>
```

The trigger and the cancel button both point at the same checkbox, so the trigger opens the popover and cancel closes it. The confirm action is a real link or button.

### Why is it useful?

Destructive actions often ask for confirmation in a small inline popover rather than a full modal. This anchors a confirm bubble to a button with an arrow and two actions using only a checkbox and CSS. The reveal transition is reduced under reduced motion.
