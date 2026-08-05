# CSS Scale-Hover Deploy Project Modal (ease-modal-scale-hover-tt)

A premium, production-grade, pure CSS modal component designed for the **EaseMotion CSS** library.

This component simulates a Vercel-inspired **"Deploy Project"** confirmation dialog. It does not require any JavaScript for overlays, transitions, backdrop dismisses, or status pulse animations.

---

## Features

- **Zero JS Dependency**: Toggle state, close icons, cancel anchors, and light-dismiss backdrop interactions are managed purely via CSS target selections.
- **Premium Spring Animations**: Entry transition zoom scales from `0.92` to `1` using a custom bounce cubic-bezier curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Git & Build Metrics Grid**: Designed specifically as a production tool, displaying read-only branch tags, commit hash logs, click-to-preview URLs, environment labels, and clock timings.
- **Status Pulse Dot**: Features a looping CSS animation (`statusPulse`) simulating an active deployment environment listener.
- **Mobile Bottom Sheet**: Seamlessly transitions to a bottom sheet layout sliding up from the bottom of the viewport on devices below `640px`.
- **Zero-Jump Hash Navigation**: Dismiss actions map to a non-existent anchor `#close-deploy-modal`, removing targeted states without page scroll jumps.
- **Scoped Namespace**: All classes are prefixed with `ease-deploy-` and defined under `@layer easemotion-components` to prevent style bleed.

---

## CSS Custom Variables

Exposed variables under the component namespace:

| Variable Name                   | Default Value (Light)               | Default Value (Dark)                | Description                                        |
| ------------------------------- | ----------------------------------- | ----------------------------------- | -------------------------------------------------- |
| `--ease-deploy-duration`        | `0.35s`                             | `0.35s`                             | Transition duration for overlay and modal.         |
| `--ease-deploy-easing`          | `cubic-bezier(0.34, 1.56, 0.64, 1)` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Timing easing function (Spring curve with bounce). |
| `--ease-deploy-easing-fallback` | `cubic-bezier(0.25, 1, 0.5, 1)`     | `cubic-bezier(0.25, 1, 0.5, 1)`     | Fallback curve (out-quad) for legacy renderers.    |
| `--ease-deploy-scale-start`     | `0.92`                              | `0.92`                              | Starting transform scale parameter.                |
| `--ease-deploy-radius`          | `1rem`                              | `1rem`                              | Border radius. Pinned to top corners on mobile.    |
| `--ease-deploy-width`           | `500px`                             | `500px`                             | Max width of the modal on tablet/desktop.          |
| `--ease-deploy-blur`            | `10px`                              | `10px`                              | Glassmorphic backdrop-filter blur radius.          |
| `--ease-deploy-bg`              | `hsla(240, 5%, 100%, 0.85)`         | `hsla(240, 10%, 10%, 0.7)`          | Modal container surface base color.                |
| `--ease-deploy-border`          | `hsla(240, 6%, 90%, 0.8)`           | `hsla(0, 0%, 100%, 0.08)`           | Modal container border.                            |
| `--ease-deploy-overlay-bg`      | `rgba(9, 9, 11, 0.5)`               | `rgba(9, 9, 11, 0.75)`              | Color/opacity of full-screen overlay backdrop.     |
| `--ease-deploy-brand`           | `hsl(150, 84%, 39%)`                | `hsl(150, 84%, 39%)`                | Brand primary color (Emerald).                     |
| `--ease-deploy-text`            | `hsl(240, 10%, 10%)`                | `hsl(240, 5%, 96%)`                 | Main body/title text color (Zinc).                 |
| `--ease-deploy-text-muted`      | `hsl(240, 5%, 45%)`                 | `hsl(240, 5%, 65%)`                 | Subtitle and label text color.                     |

---

## Customization Examples

To customize the modal colors to match other SaaS platforms (e.g., Netlify/Teal or Stripe/Indigo), override variables in your stylesheet:

```css
/* Custom Indigo Theme Override (Stripe style) */
#ease-deploy-modal {
  --ease-deploy-brand: hsl(225, 84%, 49%); /* Indigo */
  --ease-deploy-brand-hover: hsl(225, 84%, 42%);
  --ease-deploy-brand-alpha: rgba(99, 102, 241, 0.15);
}

/* Custom Teal Theme Override (Netlify style) */
#ease-deploy-modal {
  --ease-deploy-brand: hsl(180, 80%, 40%); /* Teal */
  --ease-deploy-brand-hover: hsl(180, 80%, 33%);
  --ease-deploy-brand-alpha: rgba(20, 184, 166, 0.15);
}
```

---

## Accessibility Notes & Inherent CSS Limitations

### Core Accessibility Features Implemented

1. **Focus Redirection**: The overlay wrapper is targeted directly by `#ease-deploy-modal` and has `tabindex="-1"`. Upon launch, browser focus lands on the modal wrapper, ensuring the next tab keyboard stroke enters the dialog.
2. **Semantic Attributes**: Layout includes `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and `aria-describedby` configurations for screen readers.
3. **Natively Focusable Controls**: Toggling actions are linked to standard anchor links (`<a>`), which are natively keyboard-tabbable and triggerable via `Enter`.
4. **Bypass Link Protection**: The backdrop close overlay uses `tabindex="-1"` to prevent screen readers and keyboard users from cluttering their tab navigation path with dismiss links.
5. **Visible Focus**: Clear `:focus-visible` focus outlines are defined for key interactive elements.
6. **Reduced Motion**: Disables transforms, slides, and limits speeds using `prefers-reduced-motion: reduce` query hooks.

### Inherent CSS-Only Limitations

- **No Keyboard Focus Trap**: Standard dialog requirements demand focus be locked inside the open modal. Since CSS cannot intercept tab loops, users will eventually navigate focus out of the modal container into the background page.
- **No Escape Key Closing**: Sighted or screen-reader users cannot press the physical `Esc` key on keyboards to close this modal, as CSS has no mechanism for capturing standard keyboard layout events.
- **No Focus Restore**: Focus is not automatically restored to the launch button once dismissed; it is moved depending on browser anchor behavior.

---

## Responsive Layouts

- **Desktop / Tablet (`>640px`)**: Modal container is centered both vertically and horizontally, scaling smoothly up from `var(--ease-deploy-scale-start)` with spring bounce curve.
- **Mobile (`<=640px`)**: Container transforms into a modern mobile bottom-sheet drawer sliding upwards from `translateY(100%)` to cover up to `80vh` height.

---

## Browser Support

- **Baseline Support**: Compatible with all modern user-agents.
- **Backdrop Filter Fallback**: Older Safari and chromium agents lacking support for `backdrop-filter: blur(...)` gracefully degrade to a semi-opaque solid color fallback background overlay.
- **Spring Curve Clamping**: Some older legacy renderers clamp Bezier parameters greater than `1.0`. We build a fallback `transition-timing-function: var(--ease-deploy-easing, var(--ease-deploy-easing-fallback));` that defaults to a safe ease-out curve in unsupported renderers.
