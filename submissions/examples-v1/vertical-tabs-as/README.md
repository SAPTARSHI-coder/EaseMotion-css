# Vertical Tabs

### What does this do?

It shows a vertical tabs panel where a column of tabs on the left switches the content on the right. It uses radio inputs, so the active tab is real and keyboard operable, with no JavaScript.

### How is it used?

```html
<div class="vtabs">
  <input type="radio" name="vt" id="vt1" checked />
  <input type="radio" name="vt" id="vt2" />
  <div class="vt-list">
    <label for="vt1">Account</label>
    <label for="vt2">Billing</label>
  </div>
  <div class="vt-panels">
    <section class="vt-panel">Account settings</section>
    <section class="vt-panel">Billing settings</section>
  </div>
</div>
```

Keep the radios first so the sibling selectors can reach both the labels and the panels. The checked radio drives the active tab style and shows its matching panel by position.

### Why is it useful?

Settings pages and docs often use side tabs to switch panes. This builds a vertical tab layout where the checked radio drives both the active tab and the visible panel, using only CSS. Tabs are keyboard operable with a focus ring and the panel fade is removed under reduced motion.
