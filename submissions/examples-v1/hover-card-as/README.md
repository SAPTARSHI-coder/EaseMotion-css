# Profile Hover Card

### What does this do?

It reveals a profile hover card when you hover or keyboard focus a username link. The card shows an avatar, name, bio, follower stats, and a follow button, and it fades in above the link.

### How is it used?

```html
<span class="hovercard">
  <a href="#" class="hc-trigger">@ada</a>
  <span class="hc-pop" role="dialog" aria-label="Profile preview">
    <span class="hc-top"><span class="hc-avatar">AL</span><span class="hc-name">Ada Lovelace</span></span>
    <p class="hc-bio">Mathematician and writer.</p>
    <button class="hc-follow" type="button">Follow</button>
  </span>
</span>
```

The card is hidden until the wrapper is hovered or contains focus. Because it uses `:focus-within`, tabbing to the link or its follow button also opens it.

### Why is it useful?

Social apps show a rich profile preview when you hover a mention. This reveals a positioned hover card on hover and focus, staying accessible with `:focus-within`, using only CSS. The fade and lift are reduced under reduced motion.
