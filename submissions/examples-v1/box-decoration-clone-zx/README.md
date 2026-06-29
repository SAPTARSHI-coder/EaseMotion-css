# Box-Decoration-Break: Clone Utility

**What does this do?**  
Demonstrates the `box-decoration-break: clone` CSS property, which makes inline elements render their padding, border, and background independently on each line fragment when text wraps.

**How is it used?**

```html
<span class="box-decoration-clone"
  >Text that wraps gets full styling on every line</span
>
```

**Why is it useful?**  
By default, inline elements with padding, border, or background use `box-decoration-break: slice`, which clips the styling at line breaks. The `clone` value gives each line its own complete box decoration, which is useful for highlighted inline text, code badges, callouts, and inline tags that span multiple lines.
