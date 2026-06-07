# ease-dropdown

## What does this do?

Provides a floating dropdown menu that opens on `:focus-within` — no JavaScript required. The panel fades in while scaling from its top edge, giving a natural top-down unfold. It closes automatically when focus leaves the trigger.

## How is it used?

```html
<!-- Wrap a trigger and a panel together -->
<div class="dropdown">

  <!-- Any element works as the trigger -->
  <button class="ease-btn ease-btn-primary dropdown-trigger"
          aria-haspopup="menu" type="button">
    Options
    <span class="dropdown-chevron" aria-hidden="true"></span>
  </button>

  <!-- The floating panel -->
  <ul class="dropdown-menu" role="menu">
    <li role="none"><a class="dropdown-item" href="#" role="menuitem" tabindex="-1">Edit</a></li>
    <li role="none"><a class="dropdown-item" href="#" role="menuitem" tabindex="-1">Duplicate</a></li>
    <li class="dropdown-divider" role="separator"></li>
    <li role="none"><a class="dropdown-item dropdown-item-danger" href="#" role="menuitem" tabindex="-1">Delete</a></li>
  </ul>

</div>
```

### Available classes

| Class | Purpose |
|---|---|
| `.dropdown` | Required wrapper — carries `:focus-within` state |
| `.dropdown-trigger` | Applied to the button/link that opens the panel |
| `.dropdown-chevron` | CSS-drawn rotating arrow icon inside the trigger |
| `.dropdown-menu` | The floating panel |
| `.dropdown-item` | A single menu item (`<a>` or `<button>`) |
| `.dropdown-item-danger` | Red destructive variant |
| `.dropdown-item-muted` | Visually disabled, non-interactive item |
| `.dropdown-item-icon` | Optional icon slot inside an item |
| `.dropdown-divider` | Horizontal separator (`<li>` or `<hr>`) |
| `.dropdown-section-label` | Non-interactive group label inside the panel |
| `.dropdown--right` | Align panel to the right edge of the trigger |
| `.dropdown--up` | Open panel upward instead of downward |
| `.dropdown--wide` | Set panel `min-width` to 240 px |

## Why is it useful?

EaseMotion CSS has buttons, cards, badges, an accordion, and a stepper — but no floating/overlay navigation component. `ease-dropdown` fills this gap:

- **Distinct from `ease-accordion`**: the accordion expands *inline* and pushes content down; the dropdown floats *above* the document via `position: absolute`, making it suited for navigation bars, action menus, and context menus.
- **Aligned with the roadmap**: VISION.md lists "Navigation components (navbar, sidebar)" as Planned v1.3. A dropdown is the atomic building block all navigation patterns depend on.
- **Zero JavaScript**: open/close state is driven entirely by `:focus-within`. The browser manages focus automatically — clicking outside dismisses the panel without any event listeners.
- **Token-driven**: every colour, spacing, shadow, radius, timing value, and z-index references a `--ease-*` custom property from `core/variables.css`, with raw fallback literals so the file also works standalone.
- **Accessible**: trigger uses `aria-haspopup="menu"`, panel uses `role="menu"`, items use `role="menuitem"`, dividers use `role="separator"`, and disabled items carry `aria-disabled="true"`. Keyboard focus ring is visible on all interactive items via `:focus-visible`. `prefers-reduced-motion` disables transitions to a 1 ms duration.
- **Composable**: the trigger is decoration-free — it works with `.ease-btn-primary`, `.ease-btn-ghost`, `.ease-btn-outline`, or any custom trigger element. No wrapper styles bleed onto the trigger.