# Fix: Broken Button Markup in docs/demo.html

This submission demonstrates a bug in `docs/demo.html` where an unclosed style attribute swallows the button label and breaks the subsequent button's markup.

### 1. What does this do?
It provides a visual side-by-side comparison of the broken HTML markup currently present in `docs/demo.html` and the corrected markup.

### 2. How is it used?
The maintainer can review `demo.html` to clearly see the parsing issue caused by the missing `"` and `>`. To fix the core framework, the maintainer should apply the following change in `docs/demo.html`:

```diff
- <button class="ease-btn ease-btn-outline ease-btn-hover" style="border-color:rgba(255,255,255,0.3); color: var(--page-text);Hover me 🚀</button>
+ <button class="ease-btn ease-btn-outline ease-btn-hover" style="border-color:rgba(255,255,255,0.3); color: var(--page-text);">Hover me 🚀</button>
```

### 3. Why is it useful?
Because contributors are restricted from editing files in `core/` or `docs/` directly, this submission in `submissions/docs/` strictly follows the contribution guidelines while providing the exact solution to fix the bug.
