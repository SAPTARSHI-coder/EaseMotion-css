# Announcement Bar

### What does this do?

It shows a top of page announcement bar with a message, an inline call to action link, and a dismiss button. Pressing the close button collapses the bar smoothly. It uses a hidden checkbox for dismissal, so it needs no JavaScript.

### How is it used?

```html
<input type="checkbox" id="ann-close" class="ann-close" />
<div class="announce">
  <p>New release is live. <a href="#">See what changed</a></p>
  <label class="ann-x" for="ann-close" aria-label="Dismiss">✕</label>
</div>
```

Keep the checkbox before the bar so the sibling selector can collapse it. The close label points at the checkbox, so pressing it hides the bar by animating its height and opacity to zero.

### Why is it useful?

Sites use a slim top bar to promote a sale, a launch, or a notice. This builds a dismissible announcement bar with a call to action and a smooth collapse using only a checkbox and CSS. The collapse transition is removed under reduced motion.
