## Text-Indent Utility

**What does this do?**  
Provides utility classes to control the first-line indentation of text blocks using the CSS `text-indent` property.

**How is it used?**  
Add `indent-sm`, `indent-md`, `indent-lg`, or `indent-none` to any text element:

```html
<p class="indent-md">This paragraph has a standard first-line indent.</p>
<p class="indent-none">This paragraph has no indent.</p>
```

**Why is it useful?**  
First-line indentation is a classic typographic convention for separating paragraphs in long-form content. These utilities give developers simple, composable control over indentation without writing custom CSS, making it easy to apply editorial-like styling to articles, blogs, and documentation.
