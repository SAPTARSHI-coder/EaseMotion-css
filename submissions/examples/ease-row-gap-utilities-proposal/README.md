# Row Gap Utilities (`ease-row-gap-utilities-proposal`)

This proposal introduces a set of CSS utility classes to manage the `row-gap` property in Grid and Flexbox layouts, targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

While a standard `gap` utility applies spacing to both rows and columns simultaneously, developers frequently need to apply spacing *only* vertically (between rows) when building stacked lists or vertically-oriented flex/grid layouts.
Included classes:
- `.row-gap-0` (0px)
- `.row-gap-1` (4px / 0.25rem)
- `.row-gap-2` (8px / 0.5rem)
- `.row-gap-3` (12px / 0.75rem)
- `.row-gap-4` (16px / 1rem)
- `.row-gap-6` (24px / 1.5rem)
- `.row-gap-8` (32px / 2rem)

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

You can apply the proposed utilities to any `display: flex` or `display: grid` container:

```html
<!-- A flexbox column with 16px vertical spacing between items -->
<div class="flex flex-col row-gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

*Note: As per the contributing guidelines, this proposal is implemented inside `submissions/examples/ease-row-gap-utilities-proposal/` to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these classes to the core utility stylesheet.*

## 🔗 Related Issue
Closes Issue #16454
