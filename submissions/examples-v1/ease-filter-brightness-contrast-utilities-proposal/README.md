# Filter Brightness & Contrast Utilities (`ease-filter-brightness-contrast-utilities-proposal`)

This proposal introduces a set of CSS utility classes to manage the `filter: brightness()` and `filter: contrast()` properties, targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

CSS filters allow for powerful, non-destructive visual adjustments to elements (especially images). These utilities provide instant access to adjust the brightness or contrast of any element without needing an image editor.

Included classes:
- Brightness: `.filter-brightness-[50|75|100|150|200]`
- Contrast: `.filter-contrast-[50|75|100|150|200]`

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

You can apply the proposed utilities directly to images or containers:

```html
<!-- Dim an image for a dark-mode theme -->
<img src="hero.jpg" class="filter-brightness-75">

<!-- Increase the contrast of an element on hover -->
<div class="card hover:filter-contrast-150">...</div>
```

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ease-filter-brightness-contrast-utilities-proposal/` directory to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these classes to the core utility stylesheet.*

## 🔗 Related Issue
Closes Issue #13371
