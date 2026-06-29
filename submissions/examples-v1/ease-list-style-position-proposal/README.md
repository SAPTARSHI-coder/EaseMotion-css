# List Style Position Utilities (`ease-list-style-position-proposal`)

This proposal introduces a set of CSS utility classes to manage the `list-style-position` property, targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

These utilities provide developers with direct control over how list markers (bullets or numbers) behave in relation to the list item's content box, particularly when text spans multiple lines.
Included classes:
- `.list-inside` (Marker is placed inside the content box, text wraps under the marker)
- `.list-outside` (Marker is placed outside the content box, text wraps aligned with the first line)

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

You can apply the proposed utilities to any `<ul>` or `<ol>` element:

```html
<!-- Create a compact list where bullets sit inside the text block -->
<ul class="list-inside">
  <li>First item that has a lot of text so it wraps...</li>
  <li>Second item</li>
</ul>
```

*Note: As per the contributing guidelines, this proposal is implemented inside `submissions/examples/ease-list-style-position-proposal/` to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these classes to the core utility stylesheet.*

## 🔗 Related Issue
Closes Issue #16441
