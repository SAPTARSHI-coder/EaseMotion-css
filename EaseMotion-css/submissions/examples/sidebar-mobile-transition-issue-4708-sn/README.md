# Mobile Sidebar Sliding Transition (Issue #4708)

## What does this do?
Resolves a transition collision on mobile devices where discrete display toggles (`display: none` / `display: block`) bypass the transform slide-in transition animation.

## How is it used?
When `.ease-sidebar-open` is toggled on the layout container on viewport widths < 768px, the sidebar slides smoothly in or out from the left.

## Why is it useful?
It restores the intended sliding transition animation on mobile viewports, improving the UX and visual coherence of the sidebar component.

## Affected File (maintainer will copy to `components/sidebar.css`)
Modify the mobile media query block in `components/sidebar.css`:
```css
  @media (max-width: 768px) {
    .ease-sidebar {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      z-index: 100;
      width: var(--ease-sidebar-width, 260px);
      visibility: hidden;
      transform: translateX(-100%);
      transition:
        transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
        visibility 0.6s step-end,
        box-shadow 0.3s ease;
    }

    .ease-sidebar-layout.ease-sidebar-open .ease-sidebar {
      visibility: visible;
      transform: translateX(0);
      box-shadow: 12px 0 36px rgba(0, 0, 0, 0.15);
      transition:
        transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
        visibility 0s step-start,
        box-shadow 0.3s ease;
    }
  }
```
