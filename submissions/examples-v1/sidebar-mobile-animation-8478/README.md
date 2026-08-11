# Sidebar Mobile Overlay Animation Fix — Issue #8478

**Fixes:** #8478

## What does this do?

Replaces `display:none` / `display:block` with `visibility:hidden` /
`visibility:visible` in the mobile breakpoint of `.ease-sidebar` so the
`transform: translateX` slide-in transition actually plays.

## The problem

In `components/sidebar.css`, the mobile overlay variant hides and shows
the sidebar by toggling `display`:

```css
/* Current — broken */
@media (max-width: 768px) {
  .ease-sidebar {
    display: none;
    transform: translateX(-100%);
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), ...
  }
  .ease-sidebar-layout.ease-sidebar-open .ease-sidebar {
    display: block;
    transform: translateX(0);
  }
}
```

When `display:none` is set, the element does not exist in the browser's
render tree — it has no geometry and no computed transform. When
`display:block` is applied, the browser inserts the element in a single
frame directly at its final position. The `transition` has no starting
state to animate from, so it is silently skipped every time. The sidebar
snaps into view with no animation despite a `0.6s` spring easing being
defined.

## How to reproduce

1. Open any page with `.ease-sidebar-layout` and `.ease-sidebar`.
2. Open Chrome DevTools → Device Toolbar → select a mobile preset.
3. Run in the console:
   ```js
   document.querySelector('.ease-sidebar-layout').classList.add('ease-sidebar-open');
   ```
4. The sidebar snaps to its final position instantly — no slide animation.

## The fix

Replace `display:none` with `visibility:hidden` combined with
`pointer-events:none`:

```css
/* Fixed */
@media (max-width: 768px) {
  .ease-sidebar {
    visibility: hidden;
    pointer-events: none;
    transform: translateX(-100%);
    transition:
      transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
      visibility 0.6s,
      box-shadow 0.3s ease;
  }
  .ease-sidebar-layout.ease-sidebar-open .ease-sidebar {
    visibility: visible;
    pointer-events: auto;
    transform: translateX(0);
    box-shadow: 12px 0 36px rgba(0, 0, 0, 0.15);
  }
}
```

`visibility:hidden` keeps the element in the render tree so the browser
can compute its starting `transform`. The transition fires correctly.
`pointer-events:none` prevents the hidden sidebar from blocking taps on
the page behind it.

## Why the fix works

| Property | In render tree | Transform animatable |
|---|---|---|
| `display: none` | No | No — transition skipped |
| `visibility: hidden` | Yes | Yes — transition fires |

## Behaviour after the fix

| Action | Before | After |
|---|---|---|
| Sidebar opening | Snaps in instantly | Slides in with 0.6s spring |
| Sidebar closing | Snaps away instantly | Slides out with 0.6s spring |
| Hidden sidebar blocks taps | N/A | Prevented by `pointer-events:none` |
| `prefers-reduced-motion` | Transition ignored anyway | `transition:none` override still works |
