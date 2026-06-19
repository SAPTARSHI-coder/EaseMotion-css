# Floating Action Button (FAB) with Speed Dial

A floating action button component with a speed dial variant for dashboards, content-heavy pages, and apps that need a fixed-position primary action.

## Features

- **`.ease-fab`** — fixed-position circular button at bottom-right, 3.5rem size with primary color and shadow
- **`.ease-fab-sm`** — small variant at 2.5rem
- **Position modifiers** — `.ease-fab-bottom-left`, `.ease-fab-top-right`, `.ease-fab-top-left`
- **`.ease-fab-speed-dial`** — container that holds the main FAB and expandable action buttons
- **`.ease-fab-actions`** — action buttons wrapper (hidden by default, fades in on hover/open)
- **`.ease-fab-action`** — individual speed dial action button (2.5rem, circular)
- **Staggered animation** — each action button gets a progressive delay for a cascading reveal effect
- **Hover + click support** — speed dial opens on hover by default, also supports `.open` class toggle for click interaction

## Files

- `style.css` — all FAB and speed dial styles
- `demo.html` — working demo with both standalone FAB and speed dial
- `README.md` — this file

## Usage

```html
<!-- Simple FAB -->
<button class="ease-fab" aria-label="Add">+</button>

<!-- Speed Dial -->
<div class="ease-fab-speed-dial">
  <div class="ease-fab-actions">
    <button class="ease-fab-action" title="Edit">✏️</button>
    <button class="ease-fab-action" title="Share">📤</button>
  </div>
  <button class="ease-fab" aria-label="More">⋯</button>
</div>

<!-- Position modifier -->
<div class="ease-fab-speed-dial ease-fab-top-right">...</div>
```
