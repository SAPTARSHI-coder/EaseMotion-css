## Font-Variant-Ligatures Utility

**What does this do?**  
Provides utility classes for the CSS `font-variant-ligatures` property, which controls how ligatures (joined character forms) are rendered in text. Supports common, discretionary, historical, and contextual ligatures.

**How is it used?**  
Add a class to any text element to enable or disable specific ligature types:

```html
<p class="font-variant-ligatures-discretionary">ff fi ffi</p>
<p class="font-variant-ligatures-none">ff fi ffi (no ligatures)</p>
```

**Why is it useful?**  
Ligatures affect readability, aesthetics, and accessibility. Code blocks commonly disable ligatures. Decorative headings may want discretionary ligatures for a more elegant look. These utilities give simple, declarative control over OpenType ligature features.
