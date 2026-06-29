# Position Utilities: Top, Right, Bottom, Left (`ease-trbl-position-utilities`)

This proposal introduces a robust set of CSS utility classes to manage spatial positioning (`top`, `right`, `bottom`, `left`), targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

These utilities provide direct control over absolute, relative, and fixed positioned elements without writing custom CSS rules. It includes basic edges, auto resets, and convenient shorthand insets.

Included classes:
- **Edges:** `.top-0`, `.right-0`, `.bottom-0`, `.left-0`
- **Auto:** `.top-auto`, `.right-auto`, `.bottom-auto`, `.left-auto`
- **Insets:** `.inset-0` (all 4 edges), `.inset-x-0` (left/right), `.inset-y-0` (top/bottom), `.inset-auto`

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

You can apply the proposed utilities to any positioned element (usually `absolute` or `fixed`):

```html
<!-- Position a notification badge in the top right corner -->
<div class="relative">
  <button>Inbox</button>
  <span class="absolute top-0 right-0">3</span>
</div>
```

*Note: As per the contributing guidelines, this proposal is implemented inside `submissions/examples/ease-trbl-position-utilities/` to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these classes to the core utility stylesheet.*

## 🔗 Related Issue
Closes Issue #16477
