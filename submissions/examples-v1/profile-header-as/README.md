# Profile Header

### What does this do?

It shows a social profile header with a gradient cover banner, an avatar overlapping the banner edge, a name with a verified badge, a handle and bio, a stats row of posts, followers, and following, and a follow button.

### How is it used?

```html
<div class="profile">
  <div class="pf-cover"></div>
  <div class="pf-body">
    <div class="pf-top"><span class="pf-avatar">AL</span><button class="pf-follow">Follow</button></div>
    <div class="pf-name">Ada Lovelace <span class="pf-verified"><svg>...</svg></span></div>
    <div class="pf-handle">@ada</div>
    <p class="pf-bio">Bio text.</p>
    <div class="pf-stats"><span class="pf-stat"><b>342</b><span>Posts</span></span></div>
  </div>
</div>
```

The avatar uses a negative top margin to overlap the cover, and its border matches the card background so it reads as a cutout. The stats row is a simple flex list.

### Why is it useful?

Social and community apps open a profile with a cover, avatar, and stats. This lays out a profile header with an overlapping avatar, a stats row, and a follow action, using only CSS and an initials avatar so there are no external images.
