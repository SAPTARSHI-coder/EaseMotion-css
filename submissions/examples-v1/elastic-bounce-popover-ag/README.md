# Elastic Bounce Popover (Pure CSS)

## 1. What does this do?
The **Elastic Bounce Popover** is a pure CSS interactive popover component featuring a snappy, tactile elastic overshoot and settlement transition, designed to complement modern responsive dashboard interfaces without requiring JavaScript.

## 2. How is it used?

By wrapping the trigger button and panel in a `.ease-popover-wrapper-ag` element, CSS selectors capture hover and focus-within states (`:focus-within` and `:hover`) to reveal the popover and execute a hardware-accelerated bounce animation.

```html
<div class="ease-popover-wrapper-ag" data-position="bottom">
  <button class="ease-popover-trigger-ag" aria-haspopup="true" aria-expanded="false">
    Toggle Menu
  </button>
  <div class="ease-popover-panel-ag" role="menu">
    <div class="popover-header-ag">
      <span class="popover-user-name-ag">Profile Actions</span>
    </div>
    <div class="popover-menu-ag">
      <a href="#" class="popover-item-ag" role="menuitem">Account Settings</a>
      <div class="popover-divider-ag"></div>
      <a href="#" class="popover-item-ag destructive-ag" role="menuitem">Logout</a>
    </div>
  </div>
</div>
```

### Available Positions
Specify the popover alignment using the `data-position` attribute on the wrapper:
* `data-position="top"` (default)
* `data-position="bottom"`
* `data-position="left"`
* `data-position="right"`

## 3. Why is it useful?
This component aligns perfectly with the EaseMotion CSS philosophy by delivering high-end, responsive animations natively in CSS. By using custom bezier curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`) and direction-aware keyframes, it achieves a premium tactile experience typical of advanced JS-driven UI libraries, while keeping the client bundle size near-zero, ensuring keyboard accessibility, and respecting OS accessibility settings (`prefers-reduced-motion`).

## CSS Custom Properties (Customization)

The component parameters can be configured locally or globally using CSS Custom Properties:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-popover-duration` | `0.4s` | Entrance bounce animation duration. |
| `--ease-popover-delay` | `0s` | Delay before popover entrance. |
| `--ease-popover-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bezier timing function for spring physics. |
| `--ease-popover-scale-start` | `0.85` | Starting scale factor of the popover. |
| `--ease-popover-offset` | `8px` | Distance gap between the trigger button and panel. |
| `--ease-popover-shadow-intensity` | `var(--ease-shadow-lg)` | Box shadow applied to the popover panel. |

### Example Customization

```css
.custom-spring-popover {
  /* Customize spring physics to be slower and softer */
  --ease-popover-duration: 0.6s;
  --ease-popover-scale-start: 0.75;
  --ease-popover-offset: 12px;
  --ease-popover-easing: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

## Accessibility Notes
- **Keyboard Navigation:** Uses the native `:focus-within` selector. A user can focus on the trigger using the `Tab` key, opening the popover. They can navigate through menu items within the popover. Moving focus away from the panel automatically collapses the popover.
- **ARIA Attributes:** Trigger buttons map `aria-haspopup="true"` and popover panels use `role="menu"` or `role="dialog"` to preserve standard semantic structures.
- **Reduced Motion:** Fully supports `prefers-reduced-motion: reduce`, dropping scaling and overshoot translations for immediate fade-in states.
