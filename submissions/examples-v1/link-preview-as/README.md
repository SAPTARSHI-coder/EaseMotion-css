# Link Preview Card

### What does this do?

It shows a link preview card, the kind that unfurls when you paste a URL, with a gradient thumbnail, a domain with a favicon dot, a title, and a two line description. The whole card is a link that lifts on hover and focus.

### How is it used?

```html
<a class="link-preview" href="#">
  <div class="lp-thumb"></div>
  <div class="lp-body">
    <span class="lp-domain">example.com</span>
    <strong class="lp-title">Article title</strong>
    <p class="lp-desc">A short description.</p>
  </div>
</a>
```

The card is an anchor, so it is one focusable target. The description clamps to two lines, and the domain shows a small gradient favicon block.

### Why is it useful?

Chat and social apps unfurl pasted links into preview cards. This lays out a horizontal link preview with a thumbnail, domain, title, and description, using only CSS with no external image. The hover lift is removed under reduced motion.
