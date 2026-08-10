# CSS Dialog Modal with @starting-style & ::backdrop

## What does this do?

A fully accessible modal dialog using the native `<dialog>` HTML element with pure CSS open/close animations powered by `@starting-style`, `::backdrop`, and `transition-behavior: allow-discrete`. The only JavaScript is `dialog.showModal()` and `dialog.close()` — all animation logic lives in CSS.

## How is it used?

```html
<button onclick="document.getElementById('my-dialog').showModal()" aria-haspopup="dialog">
  Open Dialog
</button>

<dialog id="my-dialog" class="dialog-modal" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Confirm Action</h2>
  <p>Are you sure you want to proceed?</p>
  <button onclick="document.getElementById('my-dialog').close()">Cancel</button>
  <button onclick="document.getElementById('my-dialog').close()">Confirm</button>
</dialog>
```

The CSS handles:
- **Enter animation** — `@starting-style` defines the initial state, `[open]` defines the target
- **Exit animation** — `:not([open])` fades out the dialog and backdrop
- **Backdrop** — `::backdrop` with blur and fade transitions
- **Discrete transitions** — `transition-behavior: allow-discrete` enables `display`/`overlay` to animate

Three variants are included: confirm (success icon), delete (danger icon), and info (info icon).

## Why is it useful?

The native `<dialog>` element provides built-in focus trapping, `Esc` to close, and proper accessibility semantics. Before `@starting-style` and `transition-behavior: allow-discrete`, animating dialogs required complex JavaScript. Now it's pure CSS:

- **Accessible by default** — screen readers, keyboard navigation, focus management handled natively
- **Single source of truth** — no JS animation libraries, no state management
- **Perceptually smooth** — `cubic-bezier(0.4, 0, 0.2, 1)` easing, `scale` + `translateY` transforms
- **Respects preferences** — `prefers-reduced-motion`, `prefers-color-scheme`, `prefers-contrast`, `forced-colors`
- **Zero dependencies** — everything ships as plain HTML + CSS

This fits EaseMotion's philosophy: use what the platform gives you, write readable code, and let CSS handle the rest.
