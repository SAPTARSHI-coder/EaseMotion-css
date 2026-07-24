# NPS Rating Scale

### What does this do?

It shows a net promoter score scale from 0 to 10 where the user picks one number. The chosen number highlights, and the buttons are color banded into detractor (0 to 6), passive (7 to 8), and promoter (9 to 10) ranges. It works with no JavaScript by using radio inputs.

### How is it used?

```html
<fieldset class="nps">
  <legend>How likely are you to recommend us?</legend>
  <div class="nps-row">
    <label class="det"><input type="radio" name="nps" aria-label="0" /><span>0</span></label>
    <label class="pro"><input type="radio" name="nps" aria-label="10" checked /><span>10</span></label>
  </div>
  <div class="nps-ends"><span>Not likely</span><span>Very likely</span></div>
</fieldset>
```

Give each number the band class `det`, `pas`, or `pro` for its range color, and the same `name` so only one can be chosen. Each input carries an `aria-label` with its number.

### Why is it useful?

Surveys ask how likely you are to recommend a product on a zero to ten scale. This builds an NPS scale with color banded ranges and a selected state from radios, using only CSS. Buttons are keyboard operable with a focus ring and the lift is removed under reduced motion.
