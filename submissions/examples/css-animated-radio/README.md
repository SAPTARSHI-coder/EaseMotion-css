# CSS Animated Radio Buttons

A radio button group with custom, animated selection
indicators — a bouncy dot pops in with a spring easing when an
option is selected, no JavaScript required.

## What it does

Each radio option shows a custom circular indicator instead of
the browser default. Selecting an option animates a small dot
into the indicator with a springy, bouncy easing curve, and the
selected option's card gets a highlighted border and background.

## How to use it

```html
<fieldset class="radio-group">
  <legend class="radio-group-legend">Choose a plan</legend>

  <label class="radio-option">
    <input type="radio" name="plan" class="radio-input" value="basic" checked>
    <span class="radio-indicator"></span>
    <span class="radio-label">Basic</span>
  </label>

  <label class="radio-option">
    <input type="radio" name="plan" class="radio-input" value="pro">
    <span class="radio-indicator"></span>
    <span class="radio-label">Pro</span>
  </label>
</fieldset>
```

Group multiple `.radio-option` labels inside a `.radio-group`
fieldset, giving each `.radio-input` the same `name` attribute
so they behave as a single radio group.

## Why it fits EaseMotion CSS

- **Pure CSS, zero dependencies** — the animated selection state
  is driven entirely by the `:checked` pseudo-class and CSS
  transitions, no JavaScript.
- **Accessible** — built on real `<input type="radio">` elements
  inside a `<fieldset>`/`<legend>`, so keyboard navigation,
  screen readers, and form semantics all work exactly as
  expected out of the box. Focus is visible via
  `:focus-visible`.
- **Respects motion preferences** — a `prefers-reduced-motion`
  media query removes the dot's spring transition for users who
  prefer reduced motion.
- **Readable, semantic class names** — `radio-option`,
  `radio-indicator`, `radio-group-legend`, etc.

## Notes

The highlighted card border/background on the selected option
uses the CSS `:has()` selector. This is well-supported in
current Chrome, Edge, Safari, and Firefox 121+, but is a
progressive enhancement — on older browsers without `:has()`
support, the radio buttons remain fully functional and the dot
indicator still animates correctly; only the extra card
highlight is skipped.
