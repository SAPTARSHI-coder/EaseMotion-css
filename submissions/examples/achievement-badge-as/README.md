# Achievement Badges

### What does this do?

It shows a grid of achievement badges where unlocked ones display a colorful medal and title, and locked ones are dimmed with a small lock overlay. Rare unlocked badges use a purple medal.

### How is it used?

```html
<div class="achievements">
  <div class="ach is-unlocked">
    <span class="ach-medal"><svg>...</svg></span>
    <span class="ach-name">First win</span>
  </div>
  <div class="ach is-unlocked rare">...</div>
  <div class="ach is-locked">...</div>
</div>
```

Use `is-unlocked` for earned badges (add `rare` for a special color) and `is-locked` for badges not yet earned, which dim and get a lock overlay.

### Why is it useful?

Learning apps and games award badges for milestones. This lays out a grid of achievement badges with unlocked, rare, and locked states driven by a class, using only CSS and inline SVG so there are no external assets.
