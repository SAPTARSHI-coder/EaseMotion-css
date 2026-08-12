# Text Indent Utilities (`ease-text-indent-proposal`)

This proposal introduces a robust set of CSS utility classes to manage the `text-indent` typographic property, targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

These utilities provide developers with direct control over paragraph indentation, allowing them to recreate traditional print styling or separate distinct blocks of text without needing custom CSS files.
Included classes:
- `.indent-0` (0)
- `.indent-sm` (1rem)
- `.indent-base` (2rem)
- `.indent-lg` (3rem)
- `.indent-xl` (4rem)

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

You can apply the proposed utilities to any `<p>` or text-block element to apply the indentation strictly to its first line:

```html
<p class="indent-base">
  Once upon a time in a faraway land, there lived a CSS developer who loved utility classes...
</p>
```

*Note: As per the contributing guidelines, this proposal is implemented inside `submissions/examples/ease-text-indent-proposal/` to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these classes to the core utility stylesheet.*

## 🔗 Related Issue
Closes Issue #16465
