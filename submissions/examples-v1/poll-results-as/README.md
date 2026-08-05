# Poll Results

### What does this do?

It shows poll results where each option is a bar that fills to its vote percent from a custom property, with the label and percent on top. The leading option is highlighted and marked with a check, and a total votes line sits below.

### How is it used?

```html
<div class="poll">
  <h2>Which do you prefer?</h2>
  <div class="poll-opt is-lead" style="--val: 52%">
    <span class="poll-fill"></span>
    <span class="poll-check"><svg>...</svg></span>
    <span class="poll-label">Pure CSS</span>
    <span class="poll-pct">52%</span>
  </div>
  <div class="poll-total">1,284 votes</div>
</div>
```

Set each bar with the `--val` custom property and add `is-lead` to the winning option to accent it and show the check. The fill sits behind the label so the text stays readable.

### Why is it useful?

Surveys and social posts show poll results as filled bars. This renders poll option bars driven by a custom property with a highlighted winner, using only CSS. The bars animate in and hold still under reduced motion.
