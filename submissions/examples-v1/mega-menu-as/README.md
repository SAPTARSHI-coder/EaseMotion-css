# Mega Menu

### What does this do?

It shows a mega menu where a nav item opens a wide panel of links across two columns, each with an icon, a title, and a short description. It uses the native `details` and `summary` elements, so it opens on click and stays keyboard operable with no JavaScript.

### How is it used?

```html
<details class="mega">
  <summary>Products</summary>
  <div class="mega-panel">
    <a class="mega-item" href="#">
      <span class="mega-ic"><svg>...</svg></span>
      <div><strong>Analytics</strong><small>Track usage</small></div>
    </a>
  </div>
</details>
```

The panel is a two column grid of items. The caret in the summary flips when the menu is open. Remove `open` from the demo to see it start closed.

### Why is it useful?

Product sites use a mega menu to show many destinations in one panel. This opens a wide multi column menu from a nav item with icons and descriptions, using only the details element and CSS. Items have hover and focus styles and the open animation is removed under reduced motion.
