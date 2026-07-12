# ease-modal (submission)

Animated modal dialog with a fading backdrop and a scale-in dialog box.
Submitted as a raw, unprefixed component per the EaseMotion CSS
[submission workflow](../../README.md) — the maintainer will convert the
class names to `ease-*` and integrate it into `components/` if accepted.

## What it does

- Shows a dimmed, full-screen backdrop (`.modal-backdrop`) with a centered
  dialog box (`.modal`).
- **Open:** backdrop fades in, dialog scales up from `0.9` and slides/fades
  into place.
- **Close:** the same transition runs in reverse instead of the modal
  disappearing instantly.
- Closes via:
  - clicking the backdrop (outside the dialog box)
  - pressing `Esc`
  - the `×` close button
- Background page scroll is locked while a modal is open.
- Respects `prefers-reduced-motion` — transitions are removed and the modal
  just appears/disappears instantly for users who prefer that.

## Files

| File        | Purpose                                              |
|-------------|-------------------------------------------------------|
| `demo.html` | Two working demo modals (basic + confirm dialog)      |
| `style.css` | All component styles (unprefixed, see note above)      |
| `modal.js`  | Minimal helper — only toggles a class, no animation logic |

## Usage

```html
<button onclick="openModal('myModal')">Open Modal</button>

<div class="modal-backdrop" id="myModal">
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="myModalTitle">
    <div class="modal-header">
      <h3 id="myModalTitle">Title</h3>
      <button class="modal-close" onclick="closeModal('myModal')">&times;</button>
    </div>
    <div class="modal-body">
      <p>Your content here.</p>
    </div>
    <div class="modal-footer">
      <button onclick="closeModal('myModal')">Close</button>
    </div>
  </div>
</div>
```

```js
openModal('myModal');   // opens with animation
closeModal('myModal');  // closes with animation
```

## Design notes / why it's built this way

- **CSS drives all animation.** `modal.js` only adds/removes the `is-open`
  class — it never touches `opacity`, `transform`, or timing directly. This
  keeps the effect swappable/themeable purely through CSS, consistent with
  how `ease-hover-*` utilities work elsewhere in the framework.
- **Accessibility basics included:** `role="dialog"`, `aria-modal="true"`,
  and `aria-labelledby` are set on the dialog; `Esc` closes it; a visible
  close button is always present. Focus-trapping inside the modal was left
  out intentionally to keep this submission scoped — happy to open a
  follow-up issue for that if useful.
- **No new CSS variables were introduced.** Colors/spacing use plain values
  here since this is the raw submission stage; the maintainer can map these
  onto existing `--ease-color-*` / `--ease-speed-*` tokens during
  standardization, or ask for specific ones to be added.

## Checklist

- [x] Does not duplicate an existing EaseMotion CSS class
- [x] Naming left unprefixed for maintainer standardization
- [x] Submitted inside `submissions/` only — no edits to `core/` or `components/`