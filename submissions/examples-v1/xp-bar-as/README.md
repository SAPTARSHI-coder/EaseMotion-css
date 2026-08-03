# XP Level Bar

### What does this do?

It shows a gamified experience bar with a level badge, an xp progress bar that fills to a percent from a custom property, a note of how much xp is left to the next level, and the current and next level xp labels.

### How is it used?

```html
<div class="xp" style="--xp: 64%">
  <span class="xp-level">12</span>
  <div class="xp-body">
    <div class="xp-top"><span class="to-next">Level 13 in <b>720 XP</b></span><span>64%</span></div>
    <div class="xp-track" role="progressbar" aria-valuenow="64"><span class="xp-fill"></span></div>
    <div class="xp-labels"><span>1,280 XP</span><span>2,000 XP</span></div>
  </div>
</div>
```

Set the fill amount with the `--xp` custom property. The level badge shows the current level and the bar reports its value with `role="progressbar"`.

### Why is it useful?

Games and learning apps show progress to the next level with an xp bar. This renders a level badge with an xp progress bar driven by a custom property and xp labels, using only CSS. The fill animates in and holds still under reduced motion.
