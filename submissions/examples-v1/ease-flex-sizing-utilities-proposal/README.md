# Flex Sizing Utilities (`ease-flex-sizing-utilities-proposal`)

This proposal introduces a set of CSS utility classes to manage the `flex-grow` and `flex-shrink` properties, targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

These utilities provide developers with direct control over how child elements behave within a flexbox layout—specifically, whether they should expand to fill empty space, or compress to prevent layout overflow.
Included classes:

- `.flex-grow` (Element expands to fill available space)
- `.flex-grow-0` (Element prevents expanding)
- `.flex-shrink` (Element compresses to prevent overflow)
- `.flex-shrink-0` (Element prevents compressing, maintaining its original size)
- `.flex-none` (Shorthand to prevent both growing and shrinking)

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`.

You can apply the proposed utilities to any child element inside a `display: flex` container:

```html
<!-- An input bar that expands, next to a button that stays its original size -->
<div class="flex">
  <input type="text" class="flex-grow" placeholder="Search..." />
  <button class="flex-shrink-0">Submit</button>
</div>
```

_Note: As per the contributing guidelines, this proposal is implemented inside `submissions/examples/ease-flex-sizing-utilities-proposal/` to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these classes to the core utility stylesheet._

## 🔗 Related Issue

Closes Issue #16430
