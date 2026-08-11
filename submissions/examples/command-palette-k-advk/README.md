# Command Palette

## What does this do?

A Cmd/Ctrl-K command palette built on the native `<dialog>` element with
`showModal()`.

## How is it used?

```html
<dialog class="cmp" id="pal" aria-label="Command palette">
  <input class="cmp-i" aria-label="Search commands" autofocus />
  <ul class="cmp-list" role="listbox" aria-label="Commands">
    <li role="option" aria-selected="true">Run build</li>
  </ul>
</dialog>
```

```js
document.getElementById('pal').showModal();
```

## Why is it useful?

`components/command-palette.css` exists, but the hard parts of a palette are
behavioural, not visual: trapping focus inside it, making the page behind inert,
closing on Escape, and rendering above every other stacking context.

`showModal()` provides all four from the platform. The dialog is promoted to the
browser's top layer, so it cannot be clipped by an ancestor's `overflow` or
out-stacked by some other `z-index` — a failure mode that hand-rolled palettes hit
constantly inside transformed or scrolled containers. Focus is trapped and
restored automatically, and Escape works with no key handler.

`::backdrop` replaces the usual overlay div, so there is no extra element and no
risk of the overlay and the dialog disagreeing about stacking.

The remaining work is genuinely small: a keydown listener for the Cmd/Ctrl-K
shortcut, and `preventDefault()` so the browser's own find-links shortcut does not
also fire. Everything else is markup and styling.
