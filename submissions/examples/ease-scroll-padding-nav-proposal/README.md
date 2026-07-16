# CSS Scroll-Padding Anchor Navigation (`ease-scroll-padding-nav-proposal`)

This proposal demonstrates an elegant, pure CSS approach to handling anchor link navigation with fixed headers using `scroll-padding` and `scroll-behavior: smooth`.

## 📌 Feature Overview

When navigating to a hash/anchor link on a page with a fixed header (like a sticky navbar), browsers natively scroll the element to the very top of the viewport. This often results in the fixed header visually obscuring the top of the content (like the section title).

Historically, this required JavaScript scroll calculations or pseudo-element hacks (`::before` with negative margins). We can solve this elegantly with one modern CSS property: `scroll-padding-top`.

Features:
- `scroll-behavior: smooth` on `html` for native smooth scrolling.
- `scroll-padding-top` on `html` to offset the native scroll position by the height of the fixed header plus extra padding.
- Zero JavaScript required.
- Dark mode compatible.

## ⚙️ How to Use

To test this feature locally, open the `demo.html` file in your web browser. Click on the navigation links in the fixed header to see the smooth, properly aligned scrolling behavior. The styles are contained in `style.css`.

Example usage on your core `html` or `body`:

```css
html {
  scroll-behavior: smooth;
  /* Adjust this to match your fixed header height */
  scroll-padding-top: 6rem; 
}
```

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ease-scroll-padding-nav-proposal/` directory to avoid directly modifying core files and causing zero deletions.*

## 🔗 Related Issue
Closes Issue #15572
