# Mobile Sidebar Snap Fix (Smooth Transitions)

This submission resolves the bug where the mobile sidebar layout drawer snaps open instantly, ignoring the defined transition.

## The Bug

In `components/sidebar.css`, the mobile overlay panel toggles from `display: none` to `display: block` in the same rendering frame as `transform: translateX(0)`:

```css
.ease-sidebar {
  display: none;
  transform: translateX(-100%);
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.ease-sidebar-layout.ease-sidebar-open .ease-sidebar {
  display: block;
  transform: translateX(0);
}
```

Because the element is added to the layout flow (from `none` to `block`) at the exact same moment the coordinate transforms are changed, the browser fails to register the starting state (`-100%`) for the CSS transition. The transition is skipped, and the sidebar snaps open instantly.

## The Fix

This fix swaps `display: none` for `visibility: hidden` and `pointer-events: none`. Keeping the element in the DOM tree allows the browser to calculate the starting state and animate the transitions smoothly.

```css
@media (max-width: 768px) {
  .ease-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 100;
    width: var(--ease-sidebar-width, 260px);

    /* Smooth Transition Fixes */
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    transform: translateX(-100%);

    transition:
      transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
      opacity 0.3s ease,
      visibility 0.6s ease,
      box-shadow 0.3s ease;
  }

  .ease-sidebar-layout.ease-sidebar-open .ease-sidebar {
    visibility: visible;
    pointer-events: auto;
    opacity: 1;
    transform: translateX(0);
    box-shadow: 12px 0 36px rgba(0, 0, 0, 0.15);
  }
}
```

## How to Verify

1. Open `demo.html` in a web browser.
2. Open developer tools and emulate a mobile viewport width (e.g. `375px` or `414px`).
3. Click the hamburger toggle button in the topbar.
4. Verify that the sidebar panel slides in smoothly from the left.
