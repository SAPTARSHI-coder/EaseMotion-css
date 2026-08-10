# Context Menu

## What does this do?

A right-click menu that also opens from the keyboard, traps nothing, closes on
Escape, and flips back inside the viewport when it would overflow.

## How is it used?

```html
<div class="ctx-target" tabindex="0" role="button" aria-haspopup="menu" aria-expanded="false">
  Right-click here
</div>

<div class="ctx" role="menu" hidden>
  <button role="menuitem" type="button">Rename</button>
</div>
```

## Why is it useful?

Custom context menus are almost always pointer-only, which makes every action
inside them unreachable without a mouse. Keyboards have a dedicated
<kbd>Menu</kbd> key, and <kbd>Shift</kbd>+<kbd>F10</kbd> is the long-standing
equivalent — handling both, plus Enter on the focused target, makes the menu a
real control rather than a mouse affordance.

The positioning detail matters more than it sounds. Placing the menu at the raw
pointer coordinates means a right-click near the bottom or right edge opens a menu
that extends past the viewport, and on a fixed-position element there is no
scrolling to reach it — the items are simply unreachable. Clamping with
`Math.min(x, innerWidth - w - 8)` flips it back inside.

Focus moves to the first item on open so keyboard users land inside the menu, and
Escape closes it — both required by the ARIA menu pattern and both routinely
omitted.

`transform-origin: top left` makes the menu grow from the pointer rather than
from its own centre, which is the small cue that makes the placement read as
deliberate.
