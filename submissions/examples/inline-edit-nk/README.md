# Inline Editable Text — `inline-edit-nk`

## 1. What does this do?

An animated inline editable text component where a static label morphs into an input on click (scaleX expand), saves with a green background flash confirm, cancels with a scale bounce-back, and shakes with a red border on empty submit — all transitions driven by pure CSS keyframes off state classes toggled by a minimal JS bridge. Supports single-line inputs, email inputs, textareas, and fields with character counters.

---

## 2. How is it used?

### HTML structure

```html
<div class="ie-field" data-state="view" id="field-name">

  <!-- View mode -->
  <div class="ie-view" id="view-name">
    <span class="ie-view__text" id="text-name">Alex Johnson</span>
    <button class="ie-view__edit-btn" aria-label="Edit name">
      <!-- pencil SVG -->
    </button>
  </div>

  <!-- Edit mode -->
  <div class="ie-edit" id="edit-name" hidden>
    <input class="ie-input" type="text" id="input-name" />
    <div class="ie-actions">
      <button class="ie-btn ie-btn--save"   aria-label="Save"><!-- ✓ --></button>
      <button class="ie-btn ie-btn--cancel" aria-label="Cancel"><!-- ✗ --></button>
    </div>
  </div>

  <p class="ie-error" role="alert" aria-live="assertive"></p>
</div>
```

### State classes

| Class / Attribute | Applied to | Effect |
|---|---|---|
| `data-state="view"` | `.ie-field` | View mode active |
| `data-state="edit"` | `.ie-field` | Edit mode active |
| `ie-edit--enter` | `.ie-edit` | scaleX morph-in expand animation |
| `ie-edit--exit` | `.ie-edit` | scaleX collapse animation |
| `ie-input--error` | `.ie-input` | Red border + glow |
| `ie-input--shake` | `.ie-input` | Horizontal shake on invalid save |
| `ie-text--confirm` | `.ie-view__text` | Green background flash on save |
| `ie-text--cancel-bounce` | `.ie-view__text` | Scale bounce-back on cancel |
| `ie-char-count--warn` | `.ie-char-count` | Red color when near limit |

### JS bridge (minimal — only toggles classes and manages hidden state)

```js
// Open edit mode
editEl.classList.add('ie-edit--enter');
viewEl.hidden = true;
editEl.hidden = false;

// Save — close with confirm flash
textEl.textContent = newValue;
editEl.classList.add('ie-edit--exit');
// on animationend:
textEl.classList.add('ie-text--confirm');

// Cancel — close with bounce back
editEl.classList.add('ie-edit--exit');
// on animationend:
textEl.classList.add('ie-text--cancel-bounce');

// Validation shake
inputEl.classList.add('ie-input--error', 'ie-input--shake');
```

All visual transitions are pure CSS. The JS manages state, hidden attributes, and focus only.

---

## 3. Why is it useful?

Inline editing is one of the most common patterns in data-heavy UIs — profile pages, table cells, card titles, settings panels. Most implementations do an instant swap with no spatial sense of transition.

This component fits EaseMotion's philosophy because:

- **Motion communicates state change.** The scaleX morph-in tells users the field is now editable. The green flash says "saved." The bounce-back says "cancelled." The shake says "fix this" — each animation is a direct message, not decoration.
- **CSS does the heavy lifting.** All 6 keyframes (fade-up, morph-in, morph-out, shake, confirm-flash, cancel-bounce) are pure CSS driven by class toggles. The JS is ~90 lines managing state transitions and focus only — swap it for React `useState`, Alpine `x-bind`, or Svelte without touching the stylesheet.
- **Accessible by default.** Each field has labelled `aria-label` attributes. Error messages use `role="alert"` + `aria-live="assertive"`. A global `role="status"` live region announces every transition. Keyboard: `Enter` saves, `Escape` cancels. Pencil button is always focus-visible.
- **Zero dependencies.** Open `demo.html` directly in any modern browser — no server, no CDN, no build step.
- **Two field types.** Single-line `<input>` and multiline `<textarea>` both supported with the same CSS and JS pattern.

---

## Animations used

| Animation | Trigger | Effect |
|---|---|---|
| `ie-fade-up` | Card / hint on page load | Fade + slide up entrance |
| `ie-morph-in` | `.ie-edit--enter` on open | scaleX expand from left with bounce |
| `ie-morph-out` | `.ie-edit--exit` on close | scaleX collapse to left |
| `ie-shake` | `.ie-input--shake` on empty save | Horizontal shake (7-step) |
| `ie-confirm-flash` | `.ie-text--confirm` after save | Green background pulse fade |
| `ie-cancel-bounce` | `.ie-text--cancel-bounce` after cancel | Scale pop bounce-back |

---

## Files

```
submissions/examples/inline-edit-nk/
├── demo.html   — self-contained demo, works by opening directly in a browser
├── style.css   — all styles, keyframes, and state transitions
└── README.md   — this file
```
