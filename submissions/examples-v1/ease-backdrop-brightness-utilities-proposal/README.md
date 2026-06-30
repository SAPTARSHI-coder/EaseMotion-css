# Backdrop Brightness Utilities (`ease-backdrop-brightness-utilities-proposal`)

This proposal introduces a set of CSS utility classes to manage the `backdrop-filter: brightness()` property, targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

Backdrop filters apply graphical effects to the area _behind_ an element. These brightness utilities allow developers to easily dim or overexpose the content sitting behind a modal, overlay, or glassmorphism panel.
Included classes:

- `.backdrop-brightness-50` (Dims to 50%)
- `.backdrop-brightness-100` (Default, 100%)
- `.backdrop-brightness-150` (Brightens to 150%)
- `.backdrop-brightness-200` (Brightens to 200%)

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`.

You can apply the proposed utilities to any overlay or translucent container:

```html
<!-- A focus overlay that dims the page content behind it -->
<div class="absolute inset-0 bg-black/10 backdrop-brightness-50">
  <div class="modal">Please confirm this action.</div>
</div>
```

_Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ease-backdrop-brightness-utilities-proposal/` directory to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these classes to the core utility stylesheet._

## 🔗 Related Issue

Closes Issue #15081
