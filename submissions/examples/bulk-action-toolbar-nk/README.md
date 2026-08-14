# Floating Bulk-Action Toolbar — `bulk-action-toolbar-nk`

## 1. What does this do?

An animated floating bulk-action toolbar that slides up from the bottom when items are selected, shows a scale-pop count badge that animates on every change, staggers action buttons in left-to-right, and slides back down when selection is cleared — all transitions driven by pure CSS keyframes off state classes toggled by a minimal JS bridge.

---

## 2. How is it used?

### HTML structure

```html
<!-- Selectable list item -->
<li class="bat-item" data-id="1">
  <label class="bat-check-wrap">
    <input type="checkbox" class="bat-chk-input bat-item-chk" />
    <span class="bat-chk-box">
      <svg class="bat-chk-icon">...</svg>
    </span>
  </label>
  <span class="bat-item__name">design-system.fig</span>
</li>

<!-- Floating toolbar -->
<div class="bat-toolbar" role="toolbar" hidden>
  <span class="bat-count-badge">3</span>
  <span>selected</span>
  <div class="bat-toolbar__actions">
    <button class="bat-action" data-action="move">Move</button>
    <button class="bat-action" data-action="delete">Delete</button>
  </div>
  <button class="bat-deselect">✕</button>
</div>
```

### State classes

| Class | Applied to | Effect |
|---|---|---|
| `bat-item--selected` | `.bat-item` | Indigo background on selected row |
| `bat-chk-input:checked + .bat-chk-box` | `.bat-chk-box` | Scale-up + checkmark draws in |
| `bat-toolbar--in` | `.bat-toolbar` | Slide-up bounce entrance from bottom |
| `bat-toolbar--out` | `.bat-toolbar` | Slide-down fade exit |
| `bat-action--in` | `.bat-action` | Staggered fade-up per button |
| `bat-count-pop` | `.bat-count-badge` | Scale bounce pop on count change |
| `.bat-deselect:hover svg` | deselect icon | 90° rotation |

### JS bridge (minimal — only toggles classes and hidden state)

```js
// Show toolbar on first selection
toolbar.hidden = false;
toolbar.classList.add('bat-toolbar--in');

// Stagger buttons
actions.forEach((btn, i) => {
  btn.style.animationDelay = (0.08 + i * 0.055) + 's';
  btn.classList.add('bat-action--in');
});

// Pop badge on count change
countBadge.textContent = n;
countBadge.classList.add('bat-count-pop');

// Hide toolbar
toolbar.classList.add('bat-toolbar--out');
// on animationend: toolbar.hidden = true
```

All visual transitions are pure CSS. The JS manages hidden state, count updates, and focus only.

---

## 3. Why is it useful?

Bulk selection is a high-frequency action in every SaaS file manager, inbox, table view, and list UI — Gmail, Notion, Linear, Dropbox all have it. Yet it had essentially zero coverage in the EaseMotion repo.

This component fits EaseMotion's philosophy because:

- **Every state change has a motion signal.** The toolbar sliding up says "you have power over these items." The count badge popping says "one more added." The stagger entrance gives the action buttons spatial weight. The slide-down says "done."
- **CSS does the heavy lifting.** All 5 keyframes (fade-up, toolbar-in, toolbar-out, action-in, count-pop) are pure CSS. The JS is ~60 lines managing state and counts only — swap for React `useState`, Alpine `x-bind`, or plain HTMX without touching the stylesheet.
- **Accessible by default.** The toolbar uses `role="toolbar"` + `aria-label`. Each action button has an `aria-label`. A `role="status"` live region announces every state change. Checkboxes support indeterminate state for partial selection. `prefers-reduced-motion` collapses all durations.
- **Mobile-friendly.** At `< 480px`, button labels hide and only icons show — the toolbar stays usable on small screens.
- **Zero dependencies.** Open `demo.html` directly in any modern browser — no server, no CDN, no build step.

---

## Animations used

| Animation | Trigger | Effect |
|---|---|---|
| `bat-fade-up` | Page header / list on load | Fade + slide up entrance |
| `bat-toolbar-in` | `.bat-toolbar--in` | Slide-up bounce from bottom, scale from 0.94→1 |
| `bat-toolbar-out` | `.bat-toolbar--out` | Slide-down fade exit |
| `bat-action-in` | `.bat-action--in` (staggered 55ms) | Fade + slide up per button |
| `bat-count-pop` | `.bat-count-pop` on count change | Scale bounce 1→1.35→0.9→1 |
| Checkmark draw | `bat-chk-input:checked` | Stroke-dashoffset draw |
| Checkbox scale | `bat-chk-input:checked` | Scale-up 1.1× bounce |
| Deselect spin | `.bat-deselect:hover svg` | `rotate(90deg)` transition |
| Row select | `.bat-item--selected` | Indigo bg fade on selection |

---

## Files

```
submissions/examples/bulk-action-toolbar-nk/
├── demo.html   — self-contained demo, works by opening directly in a browser
├── style.css   — all styles, keyframes, and state transitions
└── README.md   — this file
```
