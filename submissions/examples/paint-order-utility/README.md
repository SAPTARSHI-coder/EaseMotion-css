## Paint-Order Utility

**What does this do?**  
Provides utility classes for the CSS `paint-order` property, which controls the order in which fill, stroke, and markers are painted for SVG elements and text. By default, fill is drawn first, then stroke. Reversing this creates outlined text effects.

**How is it used?**  
Add a class to any text or SVG element to control paint ordering:

```html
<h1 class="paint-order-stroke">Outlined Text Effect</h1>
<svg><text class="paint-order-stroke">SVG Text</text></svg>
```

**Why is it useful?**  
Creating outlined (stroke-first) text typically requires SVG or complex workarounds. The `paint-order` property makes it trivial with a single CSS declaration — ideal for headings, logos, badges, and decorative typography.
