# Transform Origin Utilities (`ease-transform-origins-proposal`)

This proposal introduces a robust set of CSS utility classes to manage the `transform-origin` property, targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

When utilizing standard CSS transforms (`rotate()`, `scale()`, etc.), the transform always occurs relative to the center of the element by default. These utility classes allow developers to change the anchor/pivot point of the transformation without writing custom CSS.
Included classes:
- `.origin-center` (default)
- `.origin-top`
- `.origin-top-right`
- `.origin-right`
- `.origin-bottom-right`
- `.origin-bottom`
- `.origin-bottom-left`
- `.origin-left`
- `.origin-top-left`

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

You can apply the proposed utilities to any element that has a `transform` applied to it. For example, to make a dropdown menu scale out from the top-right corner instead of the center:

```html
<div class="dropdown-menu origin-top-right" style="transform: scale(0.5);">
  <!-- Menu content -->
</div>
```

*Note: As per the contributing guidelines, this proposal is implemented inside `submissions/examples/ease-transform-origins-proposal/` to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these classes to the core utility stylesheet.*

## 🔗 Related Issue
Closes Issue #16481
