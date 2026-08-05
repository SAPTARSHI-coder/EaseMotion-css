# Bottom Sheet

### What does this do?

It shows a mobile bottom sheet that slides up from the bottom over a dimmed backdrop, with a grab handle, a title, and a list of options. Tapping the backdrop closes it. It works with no JavaScript by using a checkbox.

### How is it used?

```html
<input type="checkbox" id="sheet" class="sheet-toggle" />
<label class="sheet-open" for="sheet">Share</label>
<label class="sheet-scrim" for="sheet"></label>
<div class="sheet" role="dialog" aria-label="Share options">
  <div class="sheet-grip"></div>
  <h2>Share this page</h2>
  <ul class="sheet-list"><li><a href="#"><svg>...</svg>Copy link</a></li></ul>
</div>
```

Keep the checkbox before the scrim and sheet so the sibling selectors can slide the sheet in and show the backdrop. The open button and the scrim both point at the same checkbox.

### Why is it useful?

Mobile apps present options and share actions in a bottom sheet. This slides a sheet up from the bottom with a backdrop and a grab handle using only a checkbox and CSS. The slide is reduced under reduced motion.
