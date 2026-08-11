# Emoji Mood Rating

### What does this do?

It shows a row of five emoji faces that act as a mood rating. The user picks one, and the chosen face grows and turns full color while the rest stay grayscale. It works without JavaScript.

### How is it used?

```html
<fieldset class="mood">
  <legend>How was it?</legend>
  <div class="mood-row">
    <label><input type="radio" name="mood" /><span>😞</span></label>
    <label><input type="radio" name="mood" checked /><span>😄</span></label>
  </div>
</fieldset>
```

Give every `input` the same `name` so only one can be chosen. The `:has(:checked)` selector highlights the selected face.

### Why is it useful?

Mood and satisfaction pickers are common in feedback widgets. This builds a single choice control with only radio inputs and CSS. The radios stay keyboard operable and a focus ring shows the active face.
