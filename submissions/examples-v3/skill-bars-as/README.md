# Skill Proficiency Bars

### What does this do?

It shows a list of labelled skill bars that fill to their percentage on load with a staggered delay.

### How is it used?

```html
<div class="skill">
  <div class="skill-head"><span>CSS</span><span>90%</span></div>
  <div class="skill-track"><span class="skill-fill" style="--level: 90%"></span></div>
</div>
```

Set `--level` on each `.skill-fill` to the percentage. The bar scales from zero to its level on load, and several bars stagger their fills.

### Why is it useful?

Skill and proficiency bars are common on portfolios, resumes, and profile pages. This fills each bar to a level driven by a custom property and staggers them, using only CSS with no JavaScript. Under `prefers-reduced-motion: reduce` the bars show their level without animating.
