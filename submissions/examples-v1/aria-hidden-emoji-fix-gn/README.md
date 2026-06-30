# Fix: aria-hidden on Decorative Emoji in docs/index.html

1. **What does this do?** Adds `aria-hidden="true"` to the decorative 💡 emoji in the docs-info callout box so screen readers skip it and only announce the meaningful text.

2. **How is it used?**

```html
<!-- Before -->
<span class="docs-info-icon">💡</span>

<!-- After -->
<span class="docs-info-icon" aria-hidden="true">💡</span>
```

3. **Why is it useful?** Prevents screen readers from announcing "Electric light bulb" before the callout text, improving accessibility for visually impaired users — aligns EaseMotion CSS with WCAG 2.1 accessibility standards.
