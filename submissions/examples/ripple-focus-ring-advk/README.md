# Ripple Focus Ring

## What does this do?

Draws the focus indicator with a brief expanding ripple so the eye is led to
whichever control just received focus.

## How is it used?

```html
<button class="rfr-btn">Save</button>
<input class="rfr-field" type="text" aria-label="Project name" />
```

## Why is it useful?

Keyboard users tabbing through a dense form have to *find* the focus ring after
every keypress. A static outline appears with no transition, giving the eye no
motion cue about where it went — the user re-scans the layout each time. A 420ms
expansion supplies that cue at essentially no cost.

The effect is bound to `:focus-visible` rather than `:focus`, so it fires for
keyboard and programmatic focus but not on mouse click, where the user already
knows where they clicked and a ripple would be noise.

The important detail is the `forced-colors` block. This component sets
`outline: none` to replace the UA ring with a pseudo-element, and pseudo-element
borders are not a reliable focus indicator in High Contrast mode. So under
`forced-colors: active` the rule hands the outline back to the browser with
`outline: revert`. Without that, the pattern would remove the only focus
indicator some users have — the exact failure mode that makes `outline: none` a
well-known accessibility hazard.
