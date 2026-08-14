# CSS Popover API — Native Browser Popovers

A production-ready demonstration of the **CSS Popover API** — zero JavaScript popovers, tooltips, menus, dialogs, toast notifications, cookie banners, and anchored positioning with full accessibility, dark mode, and browser fallback support.

## What is the Popover API?

The [Popover API](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover) is a native browser API that handles popover display without JavaScript. It provides:

- **`popover` attribute** (`auto` or `manual`) on any element
- **`popovertarget` attribute** on trigger buttons (connects button to popover without JS)
- **`::backdrop` pseudo-element** for overlay styling
- **`:popover-open` pseudo-class** for open-state styling
- **`@starting-style`** for entry/exit transitions
- **Light dismiss** — auto-popovers close on outside click or ESC
- **Top layer** — popovers render above all other content (like `<dialog>`)
- **Anchor positioning** integration for contextual placement

## Demo Features

This demo showcases **9 distinct popover patterns** across 5 categories:

### Auto Popovers (`popover="auto"`)
- **Tooltip** — Information popover with `role="tooltip"`
- **Dropdown Menu** — Action menu with `role="menu"` and `role="menuitem"`
- **Form Hint** — Password requirements popover with `role="note"`
- **Notification Panel** — Multi-item notification list with `role="listbox"`

### Manual Popovers (`popover="manual"`)
- **Onboarding Tour** — Step-by-step dialog with `role="dialog"`, skip/next controls
- **Rich Dialog** — Settings dialog with toggle switches, cancel/save actions
- **Cookie Banner** — Persistent consent banner with `role="alertdialog"`

### Anchor Positioning
- **Top Anchor** — Tooltip positioned above trigger using `position-area: top`
- **Right Anchor** — Tooltip positioned right of trigger using `position-area: right`
- **Anchored Select** — Dropdown positioned below trigger using `anchor()`

### Combined Patterns
- **Live Region Toasts** — Success/error/info notifications with `role="status"` and `role="alert"`
- **`:has()` Overlay** — CSS-only overlay control combining Popover + `:has(:popover-open)`

### Backdrop Styling
- **Dim** — Semi-transparent black overlay
- **Blur** — Backdrop-filter blur behind popover
- **Gradient** — Animated gradient backdrop

## Accessibility

- All interactive elements are keyboard accessible
- `:focus-visible` outlines on every focusable element
- ARIA roles: `tooltip`, `menu`, `menuitem`, `dialog`, `alertdialog`, `alert`, `status`, `listbox`, `option`, `note`, `switch`
- Live region for screen reader announcements
- Skip-to-content link
- Semantic HTML landmarks
- Scroll margin on section headings
- Minimum 44×44px touch targets

## CSS Features Used

| Feature | Usage |
|---------|-------|
| `popover` attribute | All popover elements |
| `:popover-open` | Open-state animations |
| `::backdrop` | Overlay styles (dim, blur, gradient) |
| `@starting-style` | Entry/exit transitions |
| `anchor-name` / `position-anchor` | Anchored popover placement |
| `position-area` / `inset-area` | Contextual positioning |
| `anchor()` | Position relative to anchor element |
| `position-try-fallbacks` | Fallback when no space |
| `@supports` | Feature detection for graceful degradation |
| `:has(:popover-open)` | CSS-only overlay control |
| `oklch()` | Perceptually uniform colors |
| `color-scheme` | Browser-native dark mode |
| `@media (prefers-color-scheme)` | Dark mode |
| `@media (prefers-reduced-motion)` | Motion reduction |
| `@media (prefers-contrast)` | High contrast mode |
| `@media (forced-colors)` | Forced colors / Windows High Contrast |
| `@media print` | Print stylesheet |
| CSS Custom Properties | Design tokens |
| CSS Grid / Flexbox | Responsive layouts |
| `text-wrap: balance` | Hero subtitle |

## Browser Support

The Popover API is supported in all modern browsers:

| Browser | Version |
|---------|---------|
| Chrome | 114+ |
| Edge | 114+ |
| Safari | 17+ |
| Firefox | 125+ |
| Opera | 100+ |

Anchor positioning has more limited support (Chrome 125+, Edge 125+). The demo includes `@supports` fallbacks that center popovers in unsupported browsers.

## Minimal JavaScript

The demo uses minimal JavaScript (~25 lines) only for:

1. Click handlers on `popovertarget` buttons to call `.showPopover()` for `popover="manual"` elements (auto popovers handle themselves natively)
2. Showing the cookie banner on page load

These are required because `popover="manual"` popovers don't auto-open via the `popovertarget` attribute — they must be opened with `.showPopover()`.

## Files

- `demo.html` — Semantic HTML with comprehensive popover examples
- `style.css` — Production-ready stylesheet with design tokens, dark mode, accessibility, and responsive layout
- `README.md` — This documentation

## Related Resources

- [MDN: Popover API](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover)
- [MDN: CSS Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Chrome Developers: Popover API](https://developer.chrome.com/blog/introducing-popover-api)
- [Web.dev: Popover API](https://web.dev/articles/popover-api)
