# Account Menu

### What does this do?

It shows an avatar in the corner that opens an account menu with a profile header (name, plan badge, and email), a list of icon links, and a red sign out row set apart by a divider. It opens on click with no JavaScript.

### How is it used?

```html
<details class="account">
  <summary class="acc-avatar" aria-label="Account menu">AL</summary>
  <div class="acc-menu" role="menu">
    <div class="acc-head"><span class="a">AL</span><span class="who"><span class="name">Ada <span class="plan">PRO</span></span><span class="email">ada@example.com</span></span></div>
    <a class="acc-item"><svg>...</svg>Your profile</a>
    <div class="acc-sep"></div>
    <a class="acc-item is-signout"><svg>...</svg>Sign out</a>
  </div>
</details>
```

The avatar is the summary of a `details`, so clicking it toggles the menu. Use `acc-sep` for the divider and `is-signout` for the destructive sign out link.

### Why is it useful?

Apps put an account menu behind the header avatar. This opens an account dropdown from an avatar with a profile header, icon links, and a sign out action, using only the details element and CSS. Items have hover and focus styles and the open animation is removed under reduced motion.
