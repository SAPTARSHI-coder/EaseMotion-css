# Unicode Bidi Utilities (`ease-unicode-bidi-utilities`)

This proposal introduces a robust set of CSS utility classes to manage the bidirectional text algorithm (`unicode-bidi`), targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

These utilities provide fine-grained control over how text directionality is processed when mixing left-to-right (LTR) and right-to-left (RTL) languages.
Included classes:
- `.bidi-normal`
- `.bidi-embed`
- `.bidi-override`
- `.bidi-isolate`
- `.bidi-isolate-override`
- `.bidi-plaintext`

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

You can apply the proposed utilities to inline elements wrapping text that requires direction overrides:

```html
<p dir="rtl">
  هذا النص العربي يحتوي على <span class="bidi-override" dir="ltr">English Text</span>
</p>
```

*Note: As per the contributing guidelines, this proposal is implemented inside `submissions/examples/ease-unicode-bidi-utilities/` to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these classes to the core utility stylesheet.*

## 🔗 Related Issue
Closes Issue #16483
