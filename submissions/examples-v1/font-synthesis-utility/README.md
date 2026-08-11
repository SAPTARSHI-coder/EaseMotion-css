## Font-Synthesis Utility

**What does this do?**  
Utility classes for the CSS `font-synthesis` property, controlling whether the browser may synthesize bold, italic, or small-caps font faces when they are not available in the font family.

**How is it used?**  
Add `font-synthesis-none`, `font-synthesis-weight`, `font-synthesis-style`, or `font-synthesis-weight-style` to any text element:

```html
<p class="font-synthesis-none">No synthesized faces</p>
```

**Why is it useful?**  
Some fonts intentionally lack bold or italic variants. By default browsers will approximate missing faces by algorithmically transforming the regular face. `font-synthesis` lets developers opt out of this behavior to preserve a designer's intended typeface appearance, particularly important for brand typography and custom fonts.
