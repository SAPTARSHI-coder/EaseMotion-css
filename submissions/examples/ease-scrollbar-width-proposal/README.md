# Scrollbar Width Utilities (`ease-scrollbar-width-proposal`)

This proposal introduces a robust set of CSS utility classes to manage the `scrollbar-width` property and its WebKit equivalents, targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

These utilities provide developers with direct control over the thickness and visibility of scrollbars. Because standard `scrollbar-width` is only supported in Firefox, this proposal bundles the necessary `::-webkit-scrollbar` pseudoelements so the utility works universally across Chrome, Edge, Safari, and Firefox.
Included classes:
- `.scrollbar-auto` (default system scrollbar)
- `.scrollbar-thin` (slim, unobtrusive modern scrollbar)
- `.scrollbar-none` (completely hides the scrollbar while keeping the element scrollable)

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

You can apply the proposed utilities to any element with `overflow: auto` or `overflow: scroll`:

```html
<div class="overflow-y-auto scrollbar-thin" style="height: 300px;">
  <!-- Long content here will have a sleek, thin scrollbar -->
</div>
```

*Note: As per the contributing guidelines, this proposal is implemented inside `submissions/examples/ease-scrollbar-width-proposal/` to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these classes to the core utility stylesheet.*

## 🔗 Related Issue
Closes Issue #16458
