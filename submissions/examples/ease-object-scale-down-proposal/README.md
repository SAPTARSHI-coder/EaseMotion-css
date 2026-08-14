# Object Scale Down Utility (`ease-object-scale-down`)

This proposal introduces a simple but essential image layout utility class, targeted for `core/utilities/object-fit.css`.

## 📌 Feature Overview

When dealing with images or media of unknown sizes, layout breaks frequently occur. While `object-fit: contain` ensures the entire image fits within the container, it will stretch small images up to fill the container size, causing pixelation. 

The CSS property `object-fit: scale-down` acts like `none` or `contain`, whichever results in a smaller concrete object size. This prevents small images from being stretched when placed in a large container.

Included class:
- `.ease-object-scale-down`

## ⚙️ How to Use

To test this feature locally, open the `demo.html` file in your web browser. The styles are contained in `style.css`.

Example structure:

```html
<!-- The image fits the container but never scales past its natural dimensions -->
<img class="ease-object-scale-down" src="small-icon.png" alt="Icon">
```

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ease-object-scale-down-proposal/` directory to avoid directly modifying core files and causing zero deletions.*

## 🔗 Related Issue
Closes Issue #15110
