# CSS Grid Auto Gallery (`ease-grid-responsive-gallery-proposal`)

This proposal introduces a "holy grail" responsive grid utility, targeted for integration into `core/layout.css`.

## 📌 Feature Overview

Creating responsive card grids or image galleries historically requires writing multiple `@media` query breakpoints to adjust column counts (`grid-template-columns: 1fr`, then `1fr 1fr`, then `1fr 1fr 1fr`). 

This utility leverages the power of modern CSS Grid's `auto-fit` and `minmax()` functions to create a completely fluid layout that automatically calculates the perfect number of columns based on the screen width, with zero media queries needed.

Included classes:
- `.grid-auto-gallery` (Fluid responsive grid container)

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

Apply the utility class to any parent wrapper, and watch its children magically align into responsive columns:

```html
<div class="grid-auto-gallery">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
  <div class="card">Item 3</div>
  <div class="card">Item 4</div>
</div>
```

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ease-grid-responsive-gallery-proposal/` directory to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate this utility to the core layout stylesheet.*

## 🔗 Related Issue
Closes Issue #15548
