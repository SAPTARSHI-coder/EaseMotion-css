# Weekday Picker

### What does this do?

It shows a row of seven day pills where the user can toggle any number of weekdays on. Each pill fills in accent color when its checkbox is checked. It uses checkboxes and CSS only, so it is a real multi select that is keyboard operable with no JavaScript.

### How is it used?

```html
<fieldset class="weekdays">
  <legend>Repeat on</legend>
  <div class="wd-row">
    <label><input type="checkbox" checked aria-label="Monday" /><span>M</span></label>
    <label><input type="checkbox" aria-label="Tuesday" /><span>T</span></label>
  </div>
</fieldset>
```

Each day is its own checkbox, so more than one can be on at a time. The `:has(:checked)` selector fills the pill of any checked day. Give each input an `aria-label` with the full day name.

### Why is it useful?

Repeat schedules and reminder settings need a quick weekday chooser. This builds a multi select of day pills where each checked box fills its pill, using only checkboxes and CSS. Pills have hover and focus states and the scale is removed under reduced motion.
