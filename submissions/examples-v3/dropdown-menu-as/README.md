# Animated Dropdown Menu

### What does this do?

It turns a button into a dropdown menu of links that reveals with a smooth fade and slide. It uses the native `details` and `summary` elements, so it opens on click and stays keyboard operable with no JavaScript.

### How is it used?

```html
<details class="dropdown">
  <summary>Menu</summary>
  <ul class="dropdown-panel">
    <li><a href="#">Profile</a></li>
    <li><a href="#">Settings</a></li>
  </ul>
</details>
```

The `[open]` state animates the panel in and rotates the caret. Remove `open` from the demo to see it start closed.

### Why is it useful?

Dropdown menus appear in nearly every navigation bar. This animates a native disclosure into a polished menu while keeping it accessible. The caret flips on open and every link shows a focus style.
