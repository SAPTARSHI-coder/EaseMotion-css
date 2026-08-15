# CSS Inverted Dropdown

1. **What does this do?** Opens a dropdown menu upward when positioned near the viewport bottom.
2. **How is it used?** Apply `.dropdown` to a `<details>` element positioned near the bottom of a container.
3. **Why is it useful?** Provides pure CSS upward placement for bottom-anchored actions without JavaScript.

## Usage

```html
<details class="dropdown">
  <summary class="dropdown-trigger" aria-haspopup="menu">Actions</summary>
  <ul class="dropdown-menu" role="menu">
    <li role="none">
      <a href="#" role="menuitem" class="dropdown-item">Documentation</a>
    </li>
    <li role="none">
      <a href="#" role="menuitem" class="dropdown-item">Settings</a>
    </li>
  </ul>
</details>
```
