# Notification Panel

### What does this do?

It shows a bell button with an unread count badge that opens a panel listing recent notifications. Unread items are marked with a dot. It uses the native `details` and `summary` elements, so it opens on click and stays keyboard operable with no JavaScript.

### How is it used?

```html
<details class="notif">
  <summary>
    <svg>...</svg>
    <span class="badge">3</span>
  </summary>
  <div class="notif-panel">
    <div class="notif-head">Notifications</div>
    <a class="notif-item is-unread" href="#">New comment<small>2m ago</small></a>
    <a class="notif-item" href="#">Weekly summary<small>Yesterday</small></a>
  </div>
</details>
```

Add `is-unread` to rows that need the dot marker. Remove `open` from the demo to see the panel start closed.

### Why is it useful?

A notification panel sits in the header of most apps. This combines a badge, a disclosure, and a list into a compact panel using only CSS and inline SVG. The panel animates in on open and the animation is removed under reduced motion.
