# Wave Text

## What does this do?

Animates a word letter by letter as a travelling wave, using a single keyframe
block and per-letter phase offsets.

## How is it used?

```html
<span class="wvt" aria-label="EaseMotion">
  <span aria-hidden="true" style="--i:0">E</span>
  <span aria-hidden="true" style="--i:1">a</span>
</span>
```

## Why is it useful?

The naive way to build a wave is a separate `@keyframes` block per letter, or a
`:nth-child` rule per position — both of which cap the word length and bloat the
stylesheet.

A negative `animation-delay` is the trick worth knowing. Unlike a positive delay,
which postpones the start, a negative one begins the animation already partway
through its cycle. Giving each letter `calc(var(--i) * -0.12s)` means every letter
runs the same loop but enters at a different phase, so the wave appears
immediately on load with no ramp-up and works for any word length from one rule.

The accessibility handling is the part that is usually missed. Splitting a word
into per-character elements makes screen readers announce it letter by letter —
"E, a, s, e" — or insert pauses that render it unintelligible. Marking each span
`aria-hidden="true"` and putting the real string in `aria-label` on the wrapper
means assistive technology reads "EaseMotion" as one word while the visual split
remains.

Under reduced motion the animation is removed entirely; a continuously bobbing
heading is decorative and has no reduced-motion equivalent worth substituting.
