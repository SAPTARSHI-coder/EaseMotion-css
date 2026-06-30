# CSS Counter Utilities (`ease-counter-styling-proposal`)

This proposal introduces utility classes to manage native CSS counters, targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

CSS counters let you adjust the appearance of content based on its location in a document, essentially acting as variables maintained by CSS. These utilities provide a standardized counter (`ease-counter`) that can be initialized and incremented via classes, completely bypassing the need for JavaScript or restricted `<ol>` HTML structures.
Included classes:

- `.counter-reset` (Initializes the counter to 0 on a parent container)
- `.counter-increment` (Increments the counter by 1 on child elements)

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`.

You can apply the proposed utilities to build highly styled ordered lists or step-by-step guides:

```html
<!-- Initialize the counter on the parent wrapper -->
<div class="counter-reset">
  <!-- Increment the counter on each item -->
  <div class="counter-increment">
    <h3>Step Title</h3>
    <!-- The counter value can be accessed in CSS via content: counter(ease-counter) -->
  </div>

  <div class="counter-increment">
    <h3>Step Title</h3>
  </div>
</div>
```

_Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ease-counter-styling-proposal/` directory to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these classes to the core utility stylesheet._

## 🔗 Related Issue

Closes Issue #15550
