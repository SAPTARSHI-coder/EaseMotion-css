# Hyphens Layout Utilities (`ease-hyphens-layout-utilities`)

This proposal introduces a robust set of CSS utility classes to manage text hyphenation, targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

These utilities provide developers with direct control over how text breaks across lines, preventing extremely long words from overflowing their containers.
Included classes:
- `.hyphens-none`
- `.hyphens-manual`
- `.hyphens-auto`

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

You can apply the proposed utilities to any text container (ensure the `lang` attribute is set on your HTML element for `auto` to work properly):

```html
<article class="hyphens-auto" lang="en">
  Supercalifragilisticexpialidocious
</article>
```

*Note: As per the contributing guidelines, this proposal is implemented inside `submissions/examples/ease-hyphens-layout-utilities/` to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these classes to the core utility stylesheet.*

## 🔗 Related Issue
Closes Issue #19131
