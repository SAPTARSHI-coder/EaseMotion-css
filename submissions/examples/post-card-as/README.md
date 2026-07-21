# Social Post Card

### What does this do?

It shows a social feed post card with an author row, post text, a gradient media area, and an action bar for like, comment, and share. The like button toggles red with a checkbox, so the liked state is real and keyboard operable.

### How is it used?

```html
<article class="post">
  <header class="post-head">
    <span class="post-avatar">AL</span>
    <span class="post-who"><span class="post-name">Ada</span><span class="post-handle">@ada · 2h</span></span>
  </header>
  <p class="post-text">Shipped a pure CSS component today.</p>
  <div class="post-media"></div>
  <div class="post-actions">
    <label class="post-like"><input type="checkbox" /><svg>...</svg><span class="post-like-count">128</span></label>
    <button class="post-act"><svg>...</svg>24</button>
  </div>
</article>
```

The like is a label wrapping a checkbox; the checked state fills the heart. The media area is a gradient, so there are no external images.

### Why is it useful?

Feeds are the core surface of social apps. This lays out a post card with header, media, and an action bar including a real toggle like, using only CSS and an initials avatar. The like animation is removed under reduced motion.
