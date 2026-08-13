# Accordion Content Jump Fix

Fixes the abrupt layout jumping when opening and closing `.ease-accordion` items.

**What does this do?**
Standard CSS cannot transition smoothly to `height: auto`. This fix leverages modern CSS Grid (`grid-template-rows: 0fr` transitioning to `1fr`) to allow the accordion body to smoothly animate to its intrinsic content height.

**How is it used?**
Ensure your accordion HTML uses the wrapper elements:
```html
<div class="ease-accordion is-open">
  <button class="ease-accordion-header">Title</button>
  <div class="ease-accordion-body">
    <div class="ease-accordion-content">
      Content goes here.
    </div>
  </div>
</div>
```
When the `.is-open` class is applied, the grid row seamlessly expands.

**Why is it useful?**
It provides a premium, smooth opening animation that drastically improves the feel of the component compared to the default instant-snap behavior.
