# Leaderboard

### What does this do?

It shows a leaderboard as a ranked list where each row has a rank badge, an avatar, a name and level, and a score. The top three rows use gold, silver, and bronze rank badges, and the current user row is highlighted with a You tag.

### How is it used?

```html
<ol class="board">
  <li class="board-row rank-1"><span class="br-rank">1</span><span class="br-avatar">AL</span><span class="br-name">Ada<small>Level 24</small></span><b class="br-score">2,480</b></li>
  <li class="board-row is-you"><span class="br-rank">5</span><span class="br-avatar">ME</span><span class="br-name">Margaret<small>Level 18</small></span><b class="br-score">1,640</b></li>
</ol>
```

Add `rank-1`, `rank-2`, or `rank-3` for the podium colors and `is-you` to highlight the current user, which also appends a You label.

### Why is it useful?

Games and challenges show a leaderboard of top players. This lays out a ranked list with podium colors for the top three and a highlighted you row, using only CSS and initials avatars so there are no external images.
