# Background Attachment Utilities

**What does this do?**  
Demonstrates the `background-attachment` CSS property with three utility classes: `bg-fixed`, `bg-scroll`, and `bg-local`.

**How is it used?**

```html
<div class="bg-fixed">Background stays fixed while content scrolls</div>
<div class="bg-scroll">Background scrolls with the content</div>
<div class="bg-local">Background scrolls with the element's content</div>
```

**Why is it useful?**  
Background attachment controls whether a background image or gradient moves with the content or stays fixed. This enables parallax-like effects (`bg-fixed`), standard behavior (`bg-scroll`), and scrollable panels where the background tracks internal scrolling (`bg-local`). A foundational CSS utility that fills a gap in EaseMotion's current offering.
