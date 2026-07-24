## scrollbar-width-tm-mp

**What does this do?**
Provides three utility classes to control scrollbar visibility and width on scrollable elements.

**How is it used?**
```html
<div class="scroll-box scrollbar-auto">...</div>   <!-- default browser scrollbar -->
<div class="scroll-box scrollbar-thin">...</div>   <!-- narrow scrollbar -->
<div class="scroll-box scrollbar-none">...</div>   <!-- hidden but still scrollable -->
```

**Why is it useful?**
Scrollbar styling is a common UI need with no single cross-browser solution — this utility combines the standard `scrollbar-width` property with `-webkit-scrollbar` fallbacks, making it trivially easy to apply consistent scrollbar behaviour across browsers without writing boilerplate each time.
