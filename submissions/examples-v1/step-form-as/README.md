# Multi Step Form

### What does this do?

It shows a multi step form that reveals one step at a time. Next and back buttons switch steps, and a row of progress dots fills up to the current step. It works with no JavaScript by using radio inputs and the checked state.

### How is it used?

```html
<form class="stepper">
  <input type="radio" name="step" id="s1" checked />
  <input type="radio" name="step" id="s2" />
  <input type="radio" name="step" id="s3" />
  <div class="dots"><span></span><span></span><span></span></div>
  <fieldset class="step">... <label class="next" for="s2">Next</label></fieldset>
  <fieldset class="step"><label class="back" for="s1">Back</label> ...</fieldset>
</form>
```

Keep the radios first so the sibling selectors can reveal the matching step and fill the dots. Next and back labels point at the radio for the step to show.

### Why is it useful?

Onboarding and checkout flows split a long form into steps. This switches between steps using radios and labels styled as buttons, revealing only the active step and filling the progress dots, using only CSS. The dot transition is removed under reduced motion.
