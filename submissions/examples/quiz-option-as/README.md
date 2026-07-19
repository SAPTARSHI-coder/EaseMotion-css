# Quiz Option

### What does this do?

It shows a multiple choice quiz question where the options are radio buttons styled as answer cards. When the quiz is answered, the correct option shows a green check and the chosen wrong option shows a red cross. It works with no JavaScript.

### How is it used?

```html
<fieldset class="quiz answered">
  <legend>Which CSS property distributes space in flexbox?</legend>
  <div class="q-list">
    <label class="q-opt is-correct"><input type="radio" name="q" /><span class="q-key">A</span><span class="q-text">justify-content</span><span class="q-mark"><svg>...</svg></span></label>
    <label class="q-opt is-wrong"><input type="radio" name="q" checked /><span class="q-key">B</span><span class="q-text">text-align</span><span class="q-mark"><svg>...</svg></span></label>
  </div>
</fieldset>
```

Before answering, options highlight on selection. Adding `answered` to the fieldset reveals the marks: `is-correct` turns green with a check, and a chosen `is-wrong` turns red with a cross.

### Why is it useful?

Quizzes and courses show answer options with a correct and wrong reveal. This styles radio options as answer cards with selected, correct, and wrong states, using only CSS. Options are keyboard operable with a focus ring and transitions are removed under reduced motion.
