# Printer

### What does this do?

It shows a desktop printer printing a page on a loop. A sheet with text lines rises up out of the top slot, pauses fully printed, then the cycle repeats, while a green status light blinks. Under reduced motion the page rests fully printed and the light stays on.

### How is it used?

```html
<div class="printer">
  <span class="tray"></span>
  <div class="output"><div class="page"><span class="ln l1"></span></div></div>
  <div class="cabinet"><span class="slot"></span><span class="led"></span></div>
</div>
```

The cabinet sits in front with a higher stacking order, so the lower part of the page is hidden behind it and only the emerged portion shows above the slot. The `page` runs the `feed` animation, sliding up from behind the cabinet to fully out and back, and the status `led` blinks with a stepped animation to signal activity.

### Why is it useful?

Office, export, and document workflows use a printer. This builds a printing printer with pure CSS shapes and animation, no images, with a reduced motion fallback.
