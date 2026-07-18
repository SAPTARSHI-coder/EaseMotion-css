# Overscroll Behavior Utilities (`ease-overscroll-behavior`)

This proposal introduces a robust set of CSS utility classes to manage overscroll behavior, targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

These utilities provide developers with direct control over the browser's scroll boundary behavior (scroll chaining and pull-to-refresh).
Included classes:
- `.overscroll-auto`
- `.overscroll-contain`
- `.overscroll-none`
- Axis-specific variants: `.overscroll-x-*` and `.overscroll-y-*`

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

You can apply the proposed utilities to any element with a scrollable overflow:

```html
<div class="scrollable-modal overscroll-contain" style="overflow-y: scroll;">
  <!-- Inner content -->
</div>
```

*Note: As per the contributing guidelines, this proposal is implemented inside `submissions/examples/ease-overscroll-behavior/` to avoid directly modifying core files. The maintainer can safely migrate these classes to the core utility stylesheet.*

## 🔗 Related Issue
Closes Issue #19132
