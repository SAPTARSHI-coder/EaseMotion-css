# Right-Click Context Menu

## What does this do?

A custom context menu triggered by right-click (`contextmenu` event),
positioned at the click location and clamped so it never renders partially
off-screen near the viewport's right or bottom edge.

## How is it used?

```html
<div class="cmr-target" oncontextmenu="cmrOpen(event)">Right-click here</div>
<ul class="cmr-menu" id="cmr-menu" role="menu" hidden>
  <li role="none"><button role="menuitem" class="cmr-item" onclick="cmrClose()">Rename</button></li>
</ul>
```

`cmrOpen` calls `event.preventDefault()` to suppress the browser's native
context menu, computes a clamped `x`/`y` from `event.clientX`/`clientY`
against `window.innerWidth`/`innerHeight`, and moves focus to the menu's
first item.

## Why is it useful?

A context menu positioned directly at the raw click coordinates
(`left: event.clientX; top: event.clientY`) looks correct for most clicks
but breaks the moment the user right-clicks near the edge of the browser
window — the menu renders partially or fully off-screen, with no way to
reach the cut-off items. Clamping both coordinates against the viewport
dimensions (minus the menu's own width/height) keeps the menu fully visible
regardless of where in the viewport the click landed, which a
CSS-only `position: fixed` with static coordinates can't do on its own
since CSS has no way to read the click position or the viewport bounds at
declaration time.

The menu closes on both an outside click and `Escape`, and moves focus to
its first `role="menuitem"` on open — closing behavior alone (without the
focus move) leaves a keyboard user's focus stuck on whatever element they
right-clicked, with no way to reach the newly-opened menu without first
tabbing away and back. `role="menu"`/`role="menuitem"` mark the structure
for assistive technology as an actual menu widget, not just a styled list.
