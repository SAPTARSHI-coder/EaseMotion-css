# Orbit Command Palette

A banking-app style command palette — send money, pay bills, freeze a card,
that sort of thing. Opens centered with a fade + scale-in. Pure CSS, no JS,
just a checkbox hack.

## Try it

Open `demo.html`. Click "Open command palette" and watch the rows print in
one after another, like a statement ticking itself off.

## How to use it

```html
<div class="orbit-command-palette">
  <input type="checkbox" id="orbit-toggle" class="orbit-state" aria-hidden="true" />

  <label for="orbit-toggle" class="orbit-trigger" role="button" tabindex="0">
    Open command palette
  </label>

  <div class="orbit-backdrop" role="dialog" aria-modal="true" aria-label="Command palette">
    <label for="orbit-toggle" class="orbit-backdrop-close" aria-hidden="true"></label>

    <div class="orbit-panel">
      <div class="orbit-search">
        <input type="text" placeholder="Search commands…" aria-label="Search commands" />
      </div>

      <div class="orbit-list">
        <div class="orbit-group-label">Move money</div>

        <button type="button" class="orbit-item" style="--i:0">
          <span class="orbit-icon orbit-icon--move"><!-- svg --></span>
          <span class="orbit-item-copy">
            <span class="orbit-item-title">Send money</span>
            <span class="orbit-item-desc">To a saved contact or new account</span>
          </span>
          <span class="orbit-item-shortcut">S M</span>
        </button>
        <!-- more .orbit-item rows -->
      </div>

      <div class="orbit-footer">
        <div class="orbit-footer-hints">
          <span><kbd>↑↓</kbd> Navigate</span>
          <span><kbd>↵</kbd> Select</span>
        </div>
        <label for="orbit-toggle" class="orbit-esc-fallback">Esc · Close</label>
      </div>
    </div>
  </div>
</div>
```

A few things to know:

- `--i:<n>` on each `.orbit-item` is what drives the stagger. Number them 0,
  1, 2… in list order. Group labels don't need it.
- `.orbit-icon--move`, `--card`, `--track` are the three tint variants used
  in the demo — add more the same way.
- Full grouped example (Move money / Cards & security / Track & save) is in
  `demo.html`.

## Why

Command palettes get requested constantly, and this proves the pattern
doesn't need a JS runtime — just checkboxes and labels.

## The motion

| Keyframe | On | Does |
|---|---|---|
| `ease-orbit-fade-in` | backdrop | fades the scrim in |
| `ease-orbit-panel-in` | panel | fades + scales up from 0.94 → 1 |
| `ease-orbit-item-in` | each row | staggered fade + rise |
| `ease-orbit-tick-in` | each row's `::before` | draws in a brass tick right after the row lands |
| `ease-orbit-sheet-in` | panel, ≤640px | slide-up instead of scale-in |

Durations and easing live as custom properties on `.orbit-command-palette`
(`--ease-duration-*`, `--ease-standard`, `--ease-emphasized`) so they're easy
to retune without touching the keyframes.

## Behavior

- Respects `prefers-reduced-motion: reduce` — animation is cut, palette just
  snaps open.
- Click anywhere on the backdrop to close it.
- Under 640px the panel docks to the bottom as a sheet instead of floating.

## Known limitations

- **No real Esc key.** The "Esc · Close" chip in the footer is clickable,
  not a keyboard binding.
- **No focus trap.** Tab will walk out of the palette into the rest of the
  page.
- **Search doesn't filter.** The input works, but narrowing the list as you
  type needs JS.
- **Label keyboard activation isn't guaranteed.** The trigger is a
  `<label role="button">`, reliably clickable, but Enter/Space on a focused
  label behaves differently across browsers than on a real `<button>`.

A thin JS layer could add Escape handling, a focus trap, and live search on
top of this markup later without touching the CSS.

## Files

```
orbit-command-palette-bank/
├── demo.html
├── style.css
└── README.md
```
