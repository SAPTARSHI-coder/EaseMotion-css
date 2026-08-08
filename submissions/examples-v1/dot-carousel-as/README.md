# Dot Carousel

### What does this do?

It shows a slide carousel with clickable dot indicators below it. Selecting a dot slides the track to that slide and stretches its dot into a pill. It works with no JavaScript by using radio inputs and the checked state.

### How is it used?

```html
<div class="dotc">
  <input type="radio" name="dc" id="d1" checked />
  <input type="radio" name="dc" id="d2" />
  <div class="dotc-window">
    <div class="dotc-track">
      <div class="dotc-slide">1</div>
      <div class="dotc-slide">2</div>
    </div>
  </div>
  <div class="dotc-dots">
    <label for="d1" aria-label="Go to slide 1"></label>
    <label for="d2" aria-label="Go to slide 2"></label>
  </div>
</div>
```

Keep the radios first so the sibling selectors can move the track and fill the active dot. Each dot label points at the radio for its slide.

### Why is it useful?

Hero sliders and galleries pair slides with dot indicators for direct navigation. This drives a sliding track and an active dot from the same radio, using only CSS. Dots are keyboard operable with a focus ring and the slide transition is removed under reduced motion.
