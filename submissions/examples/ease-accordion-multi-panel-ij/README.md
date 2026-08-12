# Accordion Multi Panel

A lightweight multi-panel accordion component where any number of sections can remain open simultaneously. Built with CSS custom properties for easy theming.

---

## Features

- Independent panel toggling — opening one panel does not close another
- CSS custom property theming via `:root`
- Smooth `max-height` transitions for expand/collapse
- Icon rotation indicator on open state
- Hover state transitions on panel headers
- Live state label ("open" / "closed") per panel
- Respects `prefers-reduced-motion`

## Custom Properties

| Property                    | Default   | Description                      |
| --------------------------- | --------- | -------------------------------- |
| `--amp-transition-duration` | `0.35s`   | Duration of expand/collapse anim |
| `--amp-header-bg`           | `#f8fafc` | Panel header background          |
| `--amp-header-hover-bg`     | `#e2e8f0` | Panel header hover background    |
| `--amp-content-bg`          | `#ffffff` | Content panel background         |
| `--amp-border-color`        | `#cbd5e1` | Border color around each panel   |

## Verification Steps

1. Open `demo.html` in a browser.
2. Click each accordion header to toggle its panel independently.
3. Verify that multiple panels can be open at the same time.
4. Confirm the state label updates between "open" and "closed".
5. Check that the chevron icon rotates when a panel is open.
