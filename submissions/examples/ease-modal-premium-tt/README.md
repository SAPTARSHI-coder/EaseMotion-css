# Pure CSS Animated Modal (ease-modal-premium-tt)

A premium, production-ready, pure CSS modal component designed for the **EaseMotion CSS** library.

This component requires **zero JavaScript** to manage transitions, overlays, backdrop clicks, or sizing. It relies entirely on HTML5 structure and CSS3 pseudo-classes.

---

## Features

- **Zero JS Dependency**: Toggle state, close icons, Cancel buttons, and light-dismiss backdrop interactions are managed purely via CSS targets.
- **Premium Animations**: Spring-like zoom scale transitions from `0.94` to `1` on desktop, matching aesthetics found in Apple, Stripe, and Linear.
- **Mobile Bottom Sheet Mode**: Automatically transforms into a mobile bottom drawer sliding up from the bottom of the screen on viewport widths below `640px`.
- **Glassmorphic Design**: Uses backdrop-filter blur parameters, subtle gradients, and soft layered shadows that automatically shift values under dark/light modes.
- **Fully Custom System**: Extends EaseMotion's variables with configurable CSS custom properties.
- **Zero-Jump Hash Navigation**: Utilizes a non-matching closing target (`#close-modal`) to dismiss the modal without triggering viewport scroll jumps.

---

## How It Works

### The `:target` Mechanic

1. The launching button is a standard anchor `<a href="#ease-premium-modal">`.
2. When clicked, the browser appends `#ease-premium-modal` to the URL hash, matching the `id` of our overlay wrapper.
3. The CSS selector `.ease-modal-overlay:target` activates, transitioning opacity and visibility.
4. Clicking close anchors redirects hash to `#close-modal` (a non-existent element id), removing target status and dismissing the modal without jumping the page scroll offset.

---

## CSS Custom Variables

Exposed variables under the component namespace:

| Variable Name              | Default Value (Light)           | Default Value (Dark)            | Description                                      |
| -------------------------- | ------------------------------- | ------------------------------- | ------------------------------------------------ |
| `--ease-modal-duration`    | `0.4s`                          | `0.4s`                          | Transition duration for modal overlay/container. |
| `--ease-modal-easing`      | `cubic-bezier(0.16, 1, 0.3, 1)` | `cubic-bezier(0.16, 1, 0.3, 1)` | Timing easing function (smooth Quintic Out).     |
| `--ease-modal-scale-start` | `0.94`                          | `0.94`                          | Starting transform scale parameter.              |
| `--ease-modal-radius`      | `1.25rem`                       | `1.25rem`                       | Border radius. Pinned to top corners on mobile.  |
| `--ease-modal-overlay-bg`  | `rgba(9, 9, 11, 0.6)`           | `rgba(3, 7, 18, 0.75)`          | Color/opacity of full-screen overlay backdrop.   |
| `--ease-modal-blur`        | `12px`                          | `12px`                          | Glassmorphic backdrop-filter blur radius.        |
| `--ease-modal-width`       | `520px`                         | `520px`                         | Max width of the modal on tablet/desktop.        |
| `--ease-modal-max-height`  | `85vh`                          | `85vh`                          | Prevents layout overflow for long content.       |
| `--ease-modal-glow-color`  | `rgba(99, 102, 241, 0.15)`      | `rgba(129, 140, 248, 0.15)`     | Brand primary shadow glow active on triggers.    |
| `--ease-modal-bg`          | `rgba(255, 255, 255, 0.7)`      | `rgba(15, 23, 42, 0.65)`        | Modal container surface base color.              |
| `--ease-modal-border`      | `rgba(255, 255, 255, 0.4)`      | `rgba(255, 255, 255, 0.08)`     | Modal container border.                          |
| `--ease-modal-text`        | `#0f172a`                       | `#f8fafc`                       | Main body/title text color.                      |
| `--ease-modal-text-muted`  | `#475569`                       | `#94a3b8`                       | Subtitle and paragraph text color.               |

---

## Customization Examples

To customize the modal behavior in your pages, override properties in your custom stylesheet:

```css
/* Custom Spring Zoom Animation */
#ease-premium-modal {
  --ease-modal-scale-start: 0.9;
  --ease-modal-duration: 0.5s;
  --ease-modal-easing: cubic-bezier(
    0.34,
    1.56,
    0.64,
    1
  ); /* Bounce spring curve */
}

/* Custom Emerald Theme Overlay */
#ease-premium-modal {
  --ease-modal-overlay-bg: rgba(6, 78, 59, 0.45);
  --ease-modal-glow-color: rgba(16, 185, 129, 0.2);
}
```

---

## Accessibility Notes & Inherent CSS Limitations

We have implemented key accessibility features, but developers must understand the constraints of a purely CSS-only overlay:

### Core Accessibility Features Implemented

1. **Focus Redirection**: The overlay wrapper is targeted directly by `#ease-premium-modal` and has `tabindex="-1"`. Upon launch, browser focus lands on the modal wrapper, ensuring the next tab keyboard stroke enters the dialog.
2. **Semantic Attributes**: Layout includes `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and `aria-describedby` configurations for screen readers.
3. **Natively Focusable Controls**: Toggling actions are linked to standard anchor links (`<a>`), which are natively keyboard-tabbable and triggerable via `Enter`.
4. **Visible Focus**: Clear `:focus-visible` focus outlines are defined for key interactive elements.
5. **Reduced Motion**: Disables transforms, slides, and limits speeds using `prefers-reduced-motion: reduce` query hooks.

### Inherent CSS-Only Limitations

- **No Keyboard Focus Trap**: Standard dialog requirements demand focus be locked inside the open modal. Since CSS cannot intercept tab loops, users will eventually navigate focus out of the modal container into the background page.
- **No Escape Key Closing**: Sighted or screen-reader users cannot press the physical `Esc` key on keyboards to close this modal, as CSS has no mechanism for capturing standard keyboard layout events.
- **No Focus Restore**: Focus is not automatically restored to the launch button once dismissed; it is moved depending on browser anchor behavior.

> [!IMPORTANT]
> If strict compliance with **WCAG 2.2** focus trapping and keyboard `Esc` key interception is a mandatory requirement for your web project, you should use JavaScript-driven modal wrappers (such as native `<dialog>` wrappers toggled via `.showModal()`).

---

## Responsive Layouts

- **Desktop / Tablet (`>640px`)**: Modal container is centered both vertically and horizontally, scaling smoothly up from `var(--ease-modal-scale-start)`.
- **Mobile (`<=640px`)**: Container transforms into a modern mobile bottom-sheet drawer sliding upwards from `translateY(100%)` to cover up to `80vh` height.

---

## Browser Support

- **Baseline Support**: Compatible with all modern user-agents.
- **Backdrop Filter Fallback**: Older Safari and chromium agents lacking support for `backdrop-filter: blur(...)` gracefully degrade to a semi-opaque solid color fallback background overlay.
