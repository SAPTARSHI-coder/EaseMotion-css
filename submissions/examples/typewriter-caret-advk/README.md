# Typewriter Caret

## What does this do?

Types a line of text out character by character with a blinking caret, using
only a `width` animation and a `steps()` timing function.

## How is it used?

```html
<p class="twc-line" style="--chars: 27; --dur: 2.4s">Animation you can actually read</p>
```

`--chars` must equal the character count of the string; `--dur` sets the total
type time. Chain lines by giving later ones an `animation-delay`.

## Why is it useful?

Typewriter effects are usually done in JavaScript by appending one character per
`setInterval` tick, which forces a text-node mutation and a layout pass on every
character and leaves the element empty in the DOM until the animation finishes —
bad for screen readers and worse for anyone who reads the page with JS disabled.

The CSS approach keeps the complete string in the markup from the start, so
assistive technology and search crawlers see the full sentence immediately while
sighted users get the reveal. `steps(var(--chars), end)` quantises the width
animation so each frame lands exactly on a glyph boundary rather than clipping
mid-character, which is what separates this from a plain width transition.

This suits EaseMotion's no-build promise: the effect is two keyframes and one
declaration, configured entirely through custom properties in the markup. Under
reduced motion the line is shown complete with a steady caret — the blink is
removed outright, since a repeating flash is itself a motion trigger.
