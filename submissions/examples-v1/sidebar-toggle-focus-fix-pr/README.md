# Sidebar Toggle Focus-Visible Fix

## What does this do?

Adds a `:focus-visible` outline to the `.ease-sidebar-toggle` button so keyboard users can see which element is focused when navigating the sidebar.

## How is it used?

No new classes. This is a **bug fix** — the rule should be added inside the existing `@layer easemotion-components` in `components/sidebar.css`:

```css
.ease-sidebar-toggle:focus-visible {
  outline: 2px solid var(--ease-color-primary, #6c63ff);
  outline-offset: 3px;
  border-radius: var(--ease-radius-sm, 0.25rem);
}
```

## Why is it useful?

The `.ease-sidebar-toggle` is an interactive `<button>` element that keyboard users need to reach via Tab navigation. Without a `:focus-visible` rule, there is **no visible focus indicator**, making it impossible for keyboard-only users to know when the toggle is focused.

Every other interactive component in EaseMotion CSS already provides a `:focus-visible` style:

| Component | Has `:focus-visible`? |
|-----------|----------------------|
| `.ease-btn` (buttons.css) | ✅ Yes |
| `.ease-modal-close` (modals.css) | ✅ Yes |
| `.ease-navbar-item` (navbar.css) | ✅ Yes |
| `.ease-chip` (chip.css) | ✅ Yes |
| `.ease-tab` (tabs.css) | ✅ Yes |
| `.ease-card-hover` (cards.css) | ✅ Yes |
| `.ease-marquee` (ease-marquee.css) | ✅ Yes |
| **`.ease-sidebar-toggle`** (sidebar.css) | **❌ Missing** |

This fix follows the exact same pattern (`outline: 2px solid var(--ease-color-primary); outline-offset: 3px`) used across the entire framework, ensuring visual consistency and WCAG 2.1 SC 2.4.7 (Focus Visible) compliance.
