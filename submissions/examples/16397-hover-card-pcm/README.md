# Rich Hover Card / Preview Popover

1. What does this do? Shows a rich preview popover when hovering over a trigger element (like GitHub/social media profile previews, link previews, or product cards), with auto-positioning (top/bottom/left/right), smart arrow, 300ms show delay, 100ms hide delay, fade+scale animation, and Escape dismiss.

2. How is it used? Add `.hover-card-trigger` with `data-hover-card="id"` to any element, and create a `.hover-card` div with matching id containing `.hover-card-content` and an optional `.hover-card-arrow` with `data-placement` attribute.

```html
<span class="hover-card-trigger" data-hover-card="card-1">Hover me</span>

<div id="card-1" class="hover-card" role="tooltip">
  <div class="hover-card-arrow" data-placement="top"></div>
  <div class="hover-card-content">
    <img class="hover-card-avatar" src="avatar.jpg" alt="">
    <div>
      <h4 class="hover-card-title">User Name</h4>
      <p class="hover-card-desc">Bio text here</p>
    </div>
  </div>
</div>
```

3. Why is it useful? Rich hover cards are a standard UX pattern used by GitHub, Twitter, and product sites to show context without navigation; this component provides a lightweight, accessible, auto-positioning implementation with configurable delays that fits EaseMotion CSS's philosophy of composable interaction utilities.

Fixes #16397
