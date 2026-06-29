# Hyphenation Control Example (`ease-hyphenation-proposal`)

This proposal introduces a set of CSS utility classes to manage the `hyphens` typography property, targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

These utilities provide developers with direct control over how text breaks across lines. This is critical for preventing awkward layout shifts or horizontal scrolling when dealing with long words (like URLs or technical terms) inside narrow containers (like sidebars or mobile screens).
Included classes:
- `.hyphens-none` (Never hyphenate, even if it overflows)
- `.hyphens-manual` (Only hyphenate where soft-hyphens `&shy;` are placed)
- `.hyphens-auto` (Automatically insert hyphens based on the browser's dictionary)

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

You can apply the proposed utilities to any text container:

```html
<!-- Automatically break words in a narrow mobile card -->
<div class="hyphens-auto w-64" lang="en">
  A very long scientific word like Pneumonoultramicroscopicsilicovolcanoconiosis will now break gracefully.
</div>
```

*Tip: `hyphens-auto` relies on the browser knowing the language of the text. Always ensure your HTML or container has a `lang` attribute (e.g., `lang="en"`).*

*Note: As per the contributing guidelines, this proposal is implemented inside `submissions/examples/ease-hyphenation-proposal/` to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these classes to the core utility stylesheet.*

## 🔗 Related Issue
Closes Issue #15569
