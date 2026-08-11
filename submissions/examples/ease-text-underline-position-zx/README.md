# Text Underline Position Utilities

**What does this do?**  
Demonstrates the `text-underline-position` CSS property with three utility classes: `underline-auto`, `underline-under`, and `underline-from-font`.

**How is it used?**

```html
<p class="underline-auto">Underline on the alphabetic baseline</p>
<p class="underline-under">Underline below all descenders</p>
<p class="underline-from-font">Underline at font's preferred position</p>
```

**Why is it useful?**  
The `underline-auto` position can cause descenders (g, j, p, q, y) to collide with the underline, harming readability. The `under` value moves the underline below all descenders for cleaner text. The `from-font` value respects the typeface designer's intent. A small but impactful typography utility for EaseMotion.
