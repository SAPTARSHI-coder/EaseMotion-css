## Font-Size-Adjust Utility

**What does this do?**  
Utility classes for the CSS `font-size-adjust` property, which adjusts font size to preserve x-height consistency across font fallbacks.

**How is it used?**  
Add `size-adjust-045`, `size-adjust-050`, or `size-adjust-055` to maintain consistent x-height when fallback fonts are used:

```html
<p class="size-adjust-050">Text with consistent x-height.</p>
```

**Why is it useful?**  
When fallback fonts render with a different aspect ratio, the overall text size appears inconsistent. `font-size-adjust` normalizes the rendered size by adjusting based on the x-height ratio, ensuring a uniform reading experience regardless of which font loads.
