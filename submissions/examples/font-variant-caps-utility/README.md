## Font-Variant-Caps Utility

**What does this do?**  
Provides utility classes for the CSS `font-variant-caps` property, which controls the use of alternate capital letter forms — including small caps, petite caps, unicase, and titling caps — as defined by the font.

**How is it used?**  
Add a class to any text element to change its capital letter rendering:

```html
<p class="font-variant-caps-small">The quick brown fox</p>
<p class="font-variant-caps-all-small">ALL SMALL CAPS</p>
```

**Why is it useful?**  
Small caps and other capital variants add typographic sophistication to headings, acronyms, and abbreviations. Browser-rendered small caps (via `font-size` + `text-transform`) look artificial; font-native small caps use properly-designed glyphs with matching stroke weights.
