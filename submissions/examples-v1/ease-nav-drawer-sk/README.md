# CSS-Only Navigation Drawer

> A pure CSS slide-out drawer triggered by a hidden checkbox. Slides from any edge — left, right, top, or bottom. Zero JavaScript required. Accessible by default.

## What does this do?

A self-contained navigation drawer component that slides in from any screen edge when a hamburger toggle is clicked. Built entirely with CSS using the hidden checkbox technique — the checkbox state controls the drawer visibility, overlay backdrop, and hamburger-to-X animation. Includes nested expandable sections, section labels, dividers, active-item indicators, and footer area.

## How is it used?

```html
<!-- 1. Hidden checkbox controls everything -->
<input type="checkbox" id="drawer-main" class="nav-drawer-toggle" />

<!-- 2. Label acts as hamburger (opens drawer) -->
<label for="drawer-main" class="nav-drawer-hamburger" aria-label="Toggle menu">
  <span class="nav-drawer-hamburger-line"></span>
  <span class="nav-drawer-hamburger-line"></span>
  <span class="nav-drawer-hamburger-line"></span>
</label>

<!-- 3. Label overlay (closes drawer when backdrop clicked) -->
<label for="drawer-main" class="nav-drawer-overlay" aria-hidden="true"></label>

<!-- 4. The drawer panel -->
<div class="nav-drawer nav-drawer-left">
  <div class="nav-drawer-header">
    <span class="nav-drawer-title">Menu</span>
    <label for="drawer-main" class="nav-drawer-close" aria-label="Close">✕</label>
  </div>
  <div class="nav-drawer-body">
    <ul class="nav-drawer-list">
      <li class="nav-drawer-item">
        <a href="/home" class="nav-drawer-link nav-drawer-link-active">Home</a>
      </li>
      <li class="nav-drawer-item">
        <a href="/about" class="nav-drawer-link">About</a>
      </li>
    </ul>
  </div>
</div>
```

### Variants

| Class | Description |
|-------|-------------|
| `nav-drawer-left` | Slides from the left edge |
| `nav-drawer-right` | Slides from the right edge (cart, settings) |
| `nav-drawer-top` | Slides down from the top (search, notifications) |
| `nav-drawer-bottom` | Slides up from the bottom (action sheet, share) |
| `nav-drawer-link-active` | Highlights the current active nav item |

### Nested Sections

```html
<input type="checkbox" id="nested-components" class="nav-drawer-nested-toggle" />
<label for="nested-components" class="nav-drawer-nested-label">
  Components
  <svg class="nav-drawer-nested-arrow">...</svg>
</label>
<div class="nav-drawer-nested-content">
  <div class="nav-drawer-nested-inner">
    <a href="#" class="nav-drawer-nested-link">Buttons</a>
    <a href="#" class="nav-drawer-nested-link">Cards</a>
  </div>
</div>
```

## Why is it useful?

The EaseMotion CSS navbar component (`navbar.css`) has no mobile menu — it's a horizontal glass navbar only. The sidebar component (`sidebar.css`) is a layout shell with no actual navigation item classes. This submission fills the **mobile navigation** gap with a complete drawer system that:

- **Needs zero JavaScript** — the hidden checkbox technique uses sibling combinators (`:checked ~ .nav-drawer`) to control state
- **Works from all 4 screen edges** — left (main nav), right (cart/settings), top (search), bottom (action sheets)
- **Hamburger animates to X** — three-line hamburger transitions smoothly to a close icon
- **Overlay backdrop** — clicking the dimmed overlay closes the drawer (via a second `<label>` pointing to the same checkbox)
- **Nested expandable sections** — secondary checkboxes provide collapsible sub-menus with animated height
- **Keyboard accessible** — `<input>` + `<label>` pairs work with Tab/Space/Enter natively
- **Full dark mode** — `prefers-color-scheme: dark` media query handles theming
- **Respects reduced motion** — all transitions disabled when `prefers-reduced-motion: reduce`

The design follows EaseMotion's philosophy: self-documenting class names, CSS custom properties for theming, zero dependency, and progressive enhancement.
