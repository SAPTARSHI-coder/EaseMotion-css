# CSS Scale-Hover Responsive Dashboard Modal (ease-modal-dashboard-responsive-tt)

A flagship-grade, production-ready, pure CSS metrics console designed for the **EaseMotion CSS** component library.

This component showcases a complete **SaaS Analytics Monitoring Dashboard** with 8 asymmetrical widgets. Clicking the primary analytics trigger expands the layout into a detailed "Workspace Performance Insights" workspace.

---

## Features

- **Zero JS Dependency**: Toggle state, close buttons, cancel anchors, and light-dismiss backdrop interactions are managed purely via CSS target selections.
- **Premium Spring Animations**: Entry transition zoom scales from `0.92` to `1` using a custom bounce cubic-bezier curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **8-Widget Asymmetrical Grid**: Displays recurring revenue growth charts, active sessions count with status pulse indicators, API response latencies, conversion funnel tracks, database storage donuts, team avatar arrays, system alerts, and quick actions.
- **Richer CSS-only Data Visualizations**: Realized entirely in HTML and CSS, featuring a circular donut chart (using `conic-gradient` and mask overlays), latency mini-bars, growth sparklines, a commit heatmap activity grid, regional traffic indicators, and funnel progress lines.
- **Staggered Widget Entry**: Sequential loading animations fade cards in with progressive delays to build a premium loading experience.
- **Mobile Bottom Sheet**: Seamlessly transitions to a bottom sheet layout sliding up from the bottom of the viewport on devices below `640px`.
- **Zero-Jump Hash Navigation**: Dismiss actions map to a non-existent anchor `#close-dashboard-modal`, removing targeted states without page scroll jumps.
- **Scoped Namespace**: All classes are prefixed with `ease-dashboard-` and defined under `@layer easemotion-components` to prevent style leaks.

---

## Folder Structure

```
submissions/examples/ease-modal-dashboard-responsive-tt/
├── demo.html    # SaaS admin analytics dashboard with 8 widgets
├── style.css    # Scoped stylesheet, CSS-only chart layouts, and media overrides
└── README.md    # User guide, CSS custom variable tables, accessibility parameters
```

---

## CSS Custom Variables & Fallbacks

Exposed variables under the component namespace. Every variable property defined in style sheets includes fallback values:

| Variable Name                      | Default Value (Light)               | Default Value (Dark)                | Description                                        |
| ---------------------------------- | ----------------------------------- | ----------------------------------- | -------------------------------------------------- |
| `--ease-dashboard-duration`        | `0.35s`                             | `0.35s`                             | Transition duration for overlay and modal.         |
| `--ease-dashboard-easing`          | `cubic-bezier(0.34, 1.56, 0.64, 1)` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Timing easing function (Spring curve with bounce). |
| `--ease-dashboard-easing-fallback` | `cubic-bezier(0.25, 1, 0.5, 1)`     | `cubic-bezier(0.25, 1, 0.5, 1)`     | Fallback curve (out-quad) for legacy renderers.    |
| `--ease-dashboard-scale-start`     | `0.92`                              | `0.92`                              | Starting transform scale parameter.                |
| `--ease-dashboard-radius`          | `1rem`                              | `1rem`                              | Border radius. Pinned to top corners on mobile.    |
| `--ease-dashboard-widget-radius`   | `0.75rem`                           | `0.75rem`                           | Border radius for dashboard widgets.               |
| `--ease-dashboard-width`           | `660px`                             | `660px`                             | Max width of the modal on tablet/desktop.          |
| `--ease-dashboard-max-height`      | `58vh`                              | `58vh`                              | Max height scroll threshold.                       |
| `--ease-dashboard-blur`            | `12px`                              | `12px`                              | Glassmorphic backdrop-filter blur radius.          |
| `--ease-dashboard-bg`              | `hsl(220, 15%, 98%)`                | `hsl(222, 47%, 11%)`                | Modal container surface base color.                |
| `--ease-dashboard-card-bg`         | `rgba(255, 255, 255, 0.8)`          | `rgba(30, 41, 59, 0.45)`            | Transparent card backing.                          |
| `--ease-dashboard-border`          | `rgba(148, 163, 184, 0.15)`         | `rgba(148, 163, 184, 0.12)`         | Border color.                                      |
| `--ease-dashboard-overlay`         | `rgba(15, 23, 42, 0.5)`             | `rgba(6, 8, 12, 0.85)`              | Color/opacity of full-screen overlay backdrop.     |
| `--ease-dashboard-brand`           | `hsl(220, 85%, 55%)`                | `hsl(220, 85%, 55%)`                | Brand primary color (Royal Blue).                  |
| `--ease-dashboard-accent`          | `hsl(190, 95%, 45%)`                | `hsl(190, 95%, 45%)`                | Accent color (Cyan).                               |
| `--ease-dashboard-text`            | `hsl(220, 15%, 12%)`                | `hsl(220, 10%, 96%)`                | Main body/title text color (Slate/Zinc).           |
| `--ease-dashboard-text-muted`      | `hsl(220, 8%, 45%)`                 | `hsl(220, 5%, 68%)`                 | Subtitle and label text color.                     |

---

## Customization Examples

To customize the dashboard colors to match other brand themes (e.g., Stripe/Indigo or Linear/Purple), override variables in your custom stylesheet:

```css
/* Custom Purple Theme Override (Linear style) */
#ease-dashboard-modal {
  --ease-dashboard-brand: hsl(270, 85%, 55%); /* Purple */
  --ease-dashboard-accent: hsl(290, 95%, 45%); /* Violet */
}

/* Custom Emerald Theme Override */
#ease-dashboard-modal {
  --ease-dashboard-brand: hsl(150, 84%, 39%); /* Emerald */
  --ease-dashboard-accent: hsl(175, 84%, 40%); /* Mint */
}
```

---

## Accessibility Notes & Inherent CSS Limitations

### Core Accessibility Features Implemented

1. **Focus Redirection**: The overlay wrapper is targeted directly by `#ease-dashboard-modal` and has `tabindex="-1"`. Upon launch, browser focus lands on the modal wrapper, ensuring the next tab keyboard stroke enters the dialog.
2. **Semantic Attributes**: Layout includes `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and `aria-describedby` configurations for screen readers.
3. **Natively Focusable Controls**: Toggling actions are linked to standard anchor links (`<a>`), which are natively keyboard-tabbable and triggerable via `Enter`.
4. **Bypass Link Protection**: The backdrop close overlay uses `tabindex="-1"` to prevent screen readers and keyboard users from cluttering their tab navigation path with dismiss links.
5. **Visible Focus**: Clear `:focus-visible` focus outlines are defined for key interactive elements.
6. **Reduced Motion**: Disables transforms, slides, and limits speeds using `prefers-reduced-motion: reduce` query hooks.

### Inherent CSS-Only Limitations

- **No Keyboard Focus Trap**: Standard dialog requirements demand focus be locked inside the open modal. Since CSS cannot intercept tab loops, users will eventually navigate focus out of the modal container into the background page.
- **No Escape Key Closing**: Sighted or screen-reader users cannot press the physical `Esc` key on keyboards to close this modal, as CSS has no mechanism for capturing standard keyboard layout events.
- **No Focus Restore**: Focus is not automatically restored to the launching trigger button once dismissed; it is moved depending on browser anchor behavior.

---

## Responsive Layouts & Overflow Handling

- **Desktop / Tablet Grid**: Re-aligns column widths across grid breakpoints (`3 columns -> 2 columns -> 1 column`).
- **Mobile Layouts**: Containers transition to mobile bottom-sheet drawers sliding up from the bottom edge.
- **Lock-in Headers**: Incorporates `max-height: var(--ease-dashboard-max-height, 58vh)` and `overflow-y: auto` to establish internal modal scroll zones while keeping headers and footers static.

---

## Browser Support & Graphic Fallbacks

- **Donut Chart**: Wrapped in `@supports (background: conic-gradient(red, blue))` check. For unsupported legacy browsers, a horizontal progress bar falls back.
- **Backdrop Filter Fallback**: Older Safari and chromium agents lacking support for `backdrop-filter: blur(...)` gracefully degrade to a semi-opaque solid color fallback background overlay.
- **Variable Fallbacks**: Full inline fallbacks (e.g. `var(--ease-dashboard-brand, #3b82f6)`) are coded directly within style declarations.
