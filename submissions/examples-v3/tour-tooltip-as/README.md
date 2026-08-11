# Product Tour Tooltip

### What does this do?

It shows a product tour step that points at a highlighted target with an arrow. The card has a step counter, a title, a description, progress dots, and back and next buttons.

### How is it used?

```html
<div class="tour">
  <span class="tour-target">Filters</span>
  <div class="tour-pop" role="dialog" aria-label="Tour step 2 of 4">
    <div class="tour-count">Step 2 of 4</div>
    <h3>Filter your results</h3>
    <p>Narrow the list by status, owner, or date.</p>
    <div class="tour-foot">
      <div class="tour-dots"><span></span><span class="is-active"></span></div>
      <div class="tour-nav"><button>Back</button><button class="primary">Next</button></div>
    </div>
  </div>
</div>
```

The highlighted target uses a ring shadow, and the card draws its arrow with a bordered pseudo element. Mark the current dot with `is-active`.

### Why is it useful?

Onboarding tours walk new users through features with step callouts. This presents a tour tooltip anchored to a target with an arrow, a step counter, and navigation, using only CSS. The active dot stretches into a pill and the transitions are removed under reduced motion.
