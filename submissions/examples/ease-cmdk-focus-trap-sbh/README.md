# ease-cmdk-focus-trap

Command palette overlay with a real keyboard focus trap. Fixes the bug where `Tab` moved focus out of the palette to elements behind the backdrop, violating accessibility guidelines.

## What does this do?

- **Focus trap** — while the palette is open, `Tab` and `Shift+Tab` wrap at the palette boundary (first ↔ last focusable control), so focus can never reach the background.
- **Focusin safety net** — if focus leaves the palette for any reason (e.g. programmatic), a `focusin` listener pulls it back to the input. Belt-and-suspenders, because `aria-modal` alone is not reliably enforced by browsers.
- **Focus restoration** — the element that opened the palette is refocused when it closes.
- **Backdrop inert** — the backdrop closes on click; combined with the trap, background controls are unreachable.
- **Keyboard shortcuts** — `Ctrl`/`Cmd`+`K` toggles; `Esc` closes; `↑`/`↓` navigate the list.
- **Accessible** — `role="dialog"`, `aria-modal="true"`, `aria-label`; list items are `role="option"`.

## Why is this useful?

- **Directly fixes the issue** — the root cause was that nothing constrained Tab within the overlay; the wrap-around trap guarantees focus stays inside.
- **Not just `aria-modal`** — `aria-modal` is a hint that some browsers ignore for focus; the explicit Tab handler is the hard guarantee.
- **Restores context** — focus restoration returns the user to where they were, matching WAI-ARIA dialog best practices.

## How is it used?

```html
<link rel="stylesheet" href="style.css" />
<button id="open">Open palette</button>
<div class="ease-cmdk-backdrop" id="backdrop" hidden></div>
<div class="ease-cmdk" id="cmdk" role="dialog" aria-modal="true" aria-label="Command palette" hidden>
  <div class="ease-cmdk__head">
    <input class="ease-cmdk__input" id="cmdk-input" />
    <button class="ease-cmdk__close" id="close" aria-label="Close">esc</button>
  </div>
  <ul class="ease-cmdk__list"><!-- items --></ul>
</div>
<script>
  // open: remember document.activeElement, show palette, focus input
  // on Tab: if focus is on last -> wrap to first; Shift+Tab on first -> wrap to last
  // close: restore focus to the remembered element
</script>
```

## Files

- `demo.html` — self-contained showcase with background focusables (link/input/button) that must NOT receive focus while the palette is open. No CDNs/frameworks.
- `style.css` — backdrop, palette dialog, entrance animation, reduced-motion.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions.
