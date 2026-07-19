# Sticky CTA Bar

### What does this do?

It shows a sticky bottom call to action bar pinned to the foot of the page with a message, a price, an action button, and a dismiss button that slides it away. It works with no JavaScript by using a checkbox.

### How is it used?

```html
<input type="checkbox" id="cta-close" class="cta-close" />
<div class="cta-bar">
  <div class="cta-text"><b>Pro plan</b> $19/mo<small>Billed yearly</small></div>
  <a class="cta-btn" href="#">Start free trial</a>
  <label class="cta-x" for="cta-close" aria-label="Dismiss">✕</label>
</div>
```

Keep the checkbox before the bar so the sibling selector can slide it out. When checked, the bar translates down out of view.

### Why is it useful?

Product and pricing pages keep a persistent bottom bar so the main action is always in reach. This builds a fixed bottom CTA bar with a dismiss control using only a checkbox and CSS. The slide transition is removed under reduced motion.
