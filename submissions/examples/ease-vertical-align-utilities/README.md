# Vertical Align Utilities (`ease-vertical-align-utilities`)

This proposal introduces a robust set of CSS utility classes to manage vertical alignment of inline, inline-block, and table-cell elements, targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

These utilities provide developers with direct control over how inline elements (like images, icons, or spans) align vertically relative to their line-height or parent box.
Included classes:
- `.align-baseline`
- `.align-top`
- `.align-middle`
- `.align-bottom`
- `.align-text-top`
- `.align-text-bottom`
- `.align-sub`
- `.align-super`

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

You can apply the proposed utilities to any inline element to quickly fix its vertical positioning alongside text:

```html
<p>
  Check out this icon: <img src="icon.svg" class="align-middle" alt="Icon">
</p>
```

*Note: As per the contributing guidelines, this proposal is implemented inside `submissions/examples/ease-vertical-align-utilities/` to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these classes to the core utility stylesheet.*

## 🔗 Related Issue
Closes Issue #16553
