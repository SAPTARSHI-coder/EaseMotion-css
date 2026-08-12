# Masked Input

## What does this do?

A phone-number input that inserts formatting characters — parentheses,
space, dash — as digits are typed, and shows the mask's shape in the
placeholder before any input, using `(___) ___-____`.

## How is it used?

```html
<input
  type="tel"
  inputmode="numeric"
  placeholder="(___) ___-____"
  oninput="maskApply(this, '(###) ###-####')"
/>
```

`maskApply` strips everything but digits from the current value, then
rebuilds the string against the pattern, inserting a literal character
whenever the pattern isn't `#`. Stripping first means pasting a
pre-formatted number (`555-123-4567`) re-masks correctly instead of doubling
the punctuation.

## Why is it useful?

Masking logic is usually implemented purely in JavaScript with no visual
cue for the expected format until the user starts typing, so the field's
structure is discovered by trial and error. Using underscores in the
placeholder gives the field's shape away up front, and pairing that with
`font-variant-numeric: tabular-nums` plus matched `letter-spacing` on both
the placeholder and the typed value keeps each digit landing visually under
its corresponding blank rather than drifting as proportional-width digits
shift the line.

`inputmode="numeric"` requests a numeric keyboard on mobile without
requiring `type="number"`, which would fight with the mask's literal
characters — `type="tel"` accepts the punctuation the mask inserts while
still getting the right on-screen keyboard.
