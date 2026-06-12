# ease-drawer — Slide-In Side Panel

## What does this do?

A slide-in side panel (drawer) that opens from any edge of the viewport — left, right, top, or bottom. Includes backdrop overlay, smooth animation, header with close button, and scrollable content body.

## Variants

| Variant | Class                  | Description                     |
| ------- | ---------------------- | ------------------------------- |
| Left    | `.ease-drawer--left`   | Slides from left edge (default) |
| Right   | `.ease-drawer--right`  | Slides from right edge          |
| Top     | `.ease-drawer--top`    | Slides down from top            |
| Bottom  | `.ease-drawer--bottom` | Slides up from bottom           |
| Small   | `.ease-drawer--sm`     | 240px width / 200px height      |
| Default | _(none)_               | 320px width / 300px height      |
| Large   | `.ease-drawer--lg`     | 480px width / 450px height      |
| Full    | `.ease-drawer--full`   | 100% width or height            |

## How is it used?

```html
<div class="ease-drawer ease-drawer--left" id="my-drawer">
  <div class="ease-drawer__backdrop"></div>
  <div class="ease-drawer__panel">
    <div class="ease-drawer__header">
      <span>Title</span>
      <button class="ease-drawer__close" aria-label="Close">&times;</button>
    </div>
    <div class="ease-drawer__body">
      <!-- Scrollable content -->
    </div>
  </div>
</div>
```

Toggle via `.ease-drawer--open` class on the container:

```js
document.getElementById("my-drawer").classList.add("ease-drawer--open");
```

## JavaScript dependency

Minimal JS handles: open/close toggle, backdrop click to close, Escape key to close, body scroll lock, and focus trapping. CSS manages all transitions, positioning, and sizing.

## Why is it useful?

Drawers are a fundamental UI pattern for navigation menus, filter panels, detail views, and settings screens. They offer more space than a modal without leaving the current page context.

## Tech Stack

- HTML
- CSS (transitions, flexbox)
- JavaScript (minimal — open/close, backdrop, Escape, scroll lock)

## Preview

Open `demo.html` directly in your browser to see all directions and sizes in action.

## Contribution Notes

- Class naming follows EaseMotion BEM convention (`ease-drawer__*`)
- Maintainer may adjust naming before merging
