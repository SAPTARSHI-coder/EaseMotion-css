# Scrollbar Styling

## What does this do?

Two scrollbar treatments — thin and bold — declared with the standard properties
first and WebKit pseudo-elements as an enhancement.

## How is it used?

```css
.panel {
  scrollbar-width: thin;
  scrollbar-color: #b9c2d4 transparent;
}

.panel::-webkit-scrollbar { width: 8px; }
.panel::-webkit-scrollbar-thumb { background-color: #b9c2d4; border-radius: 999px; }
```

## Why is it useful?

Custom scrollbars are usually written with only `::-webkit-scrollbar`, which means
Firefox users get the default and the design silently differs across browsers.
`scrollbar-width` and `scrollbar-color` are the standardised properties and now
have broad support — declaring them first makes the standard path primary and the
vendor pseudo-elements a progressive refinement rather than the whole
implementation.

The `border: 2px solid transparent` with `background-clip: padding-box` on the
thumb is worth knowing: it insets the visible thumb from the track edge for a
lighter look while the full track width remains a valid drag target. Achieving the
same inset by narrowing the scrollbar shrinks the hit area, which matters for
motor-impaired users and is a WCAG target-size concern.

The bold variant exists for exactly that reason — a hairline scrollbar is
attractive and hard to grab. Offering both makes the trade explicit rather than
defaulting everything to the thinnest possible bar.

Under `forced-colors` the custom colours are reset to `auto`, handing scrollbars
back to the system theme where the user's own contrast settings apply.
