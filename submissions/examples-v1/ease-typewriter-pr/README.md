# Ease Typewriter Entrance Animation

## What does this do?
A single-run typewriter animation class that reveals text character-by-character
using `steps()` timing, with a blinking cursor created via `border-right`.

## How is it used?

```html
<h2 class="ease-typewriter">Hello, EaseMotion!</h2>
```

To loop the animation, override the custom property:

```html
<span class="ease-typewriter" style="--ease-animation-iterations: infinite;">
  Pure CSS magic...
</span>
```

## Why is it useful?
Typewriter effects add an engaging, authentic feel to hero text and headings.
Built with `steps()` for crisp character reveals, respects
`--ease-animation-iterations` for repeat control, pure CSS with no JS,
and full `prefers-reduced-motion` support.