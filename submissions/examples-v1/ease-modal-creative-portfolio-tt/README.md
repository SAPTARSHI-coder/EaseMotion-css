# CSS Scale-Hover Creative Portfolio Modal (ease-modal-creative-portfolio-tt)

A premium, production-grade, pure CSS case study modal designed for **EaseMotion CSS** creative portfolio showcases.

This component features an editorial designer portfolio showcase layout. It does not require any JavaScript for overlays, transitions, hover zoom-lifts, or backdrop dismiss actions.

---

## Features

- **Zero JS Dependency**: Toggle state, close buttons, cancel anchors, and light-dismiss backdrop interactions are managed purely via CSS target selections.
- **Premium Spring Animations**: Entry transition zoom scales from `0.90` to `1` using a custom bounce cubic-bezier curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Creative Editorial Content**: Displays case study sections including categories, clients, project details, designer notes, and color palette swatches.
- **Card Scale-Hover Lifts**: The featured project card hovers smoothly (`transform: translateY(-6px) scale(1.02)`) with a drop-shadow increase and internal SVG artwork zoom (`scale(1.06)`).
- **Mobile Bottom Sheet**: Seamlessly transitions to a bottom sheet layout sliding up from the bottom of the viewport on devices below `640px`.
- **Zero-Jump Hash Navigation**: Dismiss actions map to a non-existent anchor `#close-project-modal`, removing targeted states without page scroll jumps.
- **Scoped Namespace**: All classes are prefixed with `ease-project-` and defined under `@layer easemotion-components` to prevent style leaks.
- **Completely Self-Contained**: No external image links (uses CSS gradients and inline SVG artwork) and no external navigation urls (uses relative hash pointers).

---

## CSS Custom Variables

Exposed variables under the component namespace:

| Variable Name                     | Default Value (Light)               | Default Value (Dark)                | Description                                        |
| --------------------------------- | ----------------------------------- | ----------------------------------- | -------------------------------------------------- |
| `--ease-project-duration`         | `0.4s`                              | `0.4s`                              | Transition duration for overlay and modal.         |
| `--ease-project-easing`           | `cubic-bezier(0.34, 1.56, 0.64, 1)` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Timing easing function (Spring curve with bounce). |
| `--ease-project-easing-fallback`  | `cubic-bezier(0.25, 1, 0.5, 1)`     | `cubic-bezier(0.25, 1, 0.5, 1)`     | Fallback curve (out-quad) for legacy renderers.    |
| `--ease-project-scale-start`      | `0.9`                               | `0.9`                               | Starting transform scale parameter.                |
| `--ease-project-radius`           | `1.25rem`                           | `1.25rem`                           | Border radius. Pinned to top corners on mobile.    |
| `--ease-project-width`            | `680px`                             | `680px`                             | Max width of the modal on tablet/desktop.          |
| `--ease-project-blur`             | `16px`                              | `16px`                              | Glassmorphic backdrop-filter blur radius.          |
| `--ease-project-accent`           | `hsl(325, 85%, 55%)`                | `hsl(325, 85%, 55%)`                | Rose Pink brand color.                             |
| `--ease-project-accent-secondary` | `hsl(270, 75%, 60%)`                | `hsl(270, 75%, 60%)`                | Purple brand color.                                |
| `--ease-project-overlay`          | `rgba(15, 12, 20, 0.6)`             | `rgba(10, 8, 15, 0.85)`             | Color/opacity of full-screen overlay backdrop.     |
| `--ease-project-bg`               | `hsla(240, 15%, 98%, 0.85)`         | `hsla(240, 15%, 8%, 0.7)`           | Modal container surface base color.                |
| `--ease-project-border`           | `hsla(240, 10%, 90%, 0.5)`          | `hsla(0, 0%, 100%, 0.08)`           | Modal container border.                            |
| `--ease-project-text`             | `hsl(240, 15%, 12%)`                | `hsl(240, 10%, 96%)`                | Main body/title text color (Zinc).                 |
| `--ease-project-text-muted`       | `hsl(240, 8%, 45%)`                 | `hsl(240, 5%, 65%)`                 | Subtitle and label text color.                     |

---

## Customization Examples

To customize the modal colors to match other design styles, override variables in your custom stylesheet:

```css
/* Custom Sunset Orange Theme Override */
#ease-project-modal {
  --ease-project-accent: hsl(15, 95%, 55%); /* Orange */
  --ease-project-accent-secondary: hsl(350, 85%, 50%); /* Crimson Red */
}

/* Custom Emerald/Teal Creative Studio Override */
#ease-project-modal {
  --ease-project-accent: hsl(160, 84%, 39%); /* Emerald */
  --ease-project-accent-secondary: hsl(180, 75%, 40%); /* Teal */
}
```

---

## Accessibility Notes & Inherent CSS Limitations

### Core Accessibility Features Implemented

1. **Focus Redirection**: The overlay wrapper is targeted directly by `#ease-project-modal` and has `tabindex="-1"`. Upon launch, browser focus lands on the modal wrapper, ensuring the next tab keyboard stroke enters the dialog.
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

## Responsive Layouts

- **Desktop / Tablet (`>640px`)**: Modal container is centered both vertically and horizontally, scaling smoothly up from `var(--ease-project-scale-start)` with spring bounce curve.
- **Mobile (`<=640px`)**: Container transforms into a modern mobile bottom-sheet drawer sliding upwards from `translateY(100%)` to cover up to `80vh` height.

---

## Browser Support

- **Baseline Support**: Compatible with all modern user-agents.
- **Backdrop Filter Fallback**: Older Safari and chromium agents lacking support for `backdrop-filter: blur(...)` gracefully degrade to a semi-opaque solid color fallback background overlay.
- **Spring Curve Clamping**: Some older legacy renderers clamp Bezier parameters greater than `1.0`. We build a fallback `transition-timing-function: var(--ease-project-easing, var(--ease-project-easing-fallback));` that defaults to a safe ease-out curve in unsupported renderers.
