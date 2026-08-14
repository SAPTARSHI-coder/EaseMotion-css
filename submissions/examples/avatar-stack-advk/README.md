# Avatar Stack

## What does this do?

Overlapping participant avatars that fan apart on hover or keyboard focus, each
revealing a name label.

## How is it used?

```html
<ul class="avs" role="list">
  <li class="avs-i" style="--i:0">
    <span class="avs-face">AD</span>
    <span class="avs-name">Advik</span>
  </li>
  <li class="avs-i avs-i--more" style="--i:4"><span class="avs-face">+7</span></li>
</ul>
```

`--i` drives each avatar's generated hue, so a stack needs no per-item colours.

## Why is it useful?

Avatar stacks appear in every collaborative product, and the overlap that makes
them compact is exactly what makes them unusable — faces are obscured and there
is no way to tell who is in the list.

Fanning on hover solves that, but the common implementation animates a
`transform: translateX()` on each item, which requires a per-item value that has
to be regenerated whenever the count changes and leaves the items overlapping
their own hit areas. Animating the flex `margin-left` instead moves every item
with one rule on the container, and because margin participates in layout the
avatars genuinely separate rather than sliding over each other — so each has its
own hover target once fanned.

Driving the background from `hsl(calc(var(--i) * 58 + 210) ...)` gives every
participant a distinct, evenly-spaced hue with no palette to maintain. The 58
degree step is chosen so adjacent avatars never land on neighbouring hues.

`:focus-within` mirrors every hover rule, so a keyboard user tabbing into the
stack gets the same fan and the same name labels.
