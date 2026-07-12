# CSS Skew-Active Product Catalog Modal (skew-active-modal)

A premium, production-grade, pure CSS e-commerce catalog showcase designed for the **EaseMotion CSS** animation library.

This component features an editorial high-fidelity **Product Catalog** layout with a smooth "Skew-Active" entry transition, without requiring any JavaScript.

---

## Features

- **Zero JS Dependency**: Toggle state, close buttons, purchase actions, and light-dismiss backdrop interactions are managed purely via CSS target selections.
- **Skew-Active Entrance Transition**: The active container expands scale (`0.9 -> 1`) and adjusts skew angles (`skewX(-12deg) -> 0deg`) using a custom spring bounce curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Multi-Card Scalability**: Each product card triggers a unique targeted dialog anchor (e.g., `#ease-product-modal-1`, `#ease-product-modal-2`, etc.) to show modular reusability in massive grid setups.
- **E-Commerce Elements**: Outlines pricing details, categories, descriptions, specifications lists, and inline vector SVG wireframes for each product.
- **Interactive Card Hover Lifts**: Project cards hover smoothly (`translateY(-4px) scale(1.02)`) with a gold shadow glow, restricted via `@media (hover: hover)` queries to prevent sticky tap behavior on mobile.
- **Mobile Bottom Sheet**: Adapts to a bottom sheet layout sliding up from the bottom edge on devices below `640px` resolution, resetting skew properties for mobile layout comfort.
- **Zero-Jump Hash Navigation**: Dismiss actions map to a non-existent anchor `#close-product-modal`, removing targeted states without page scroll jumps.
- **Scoped Namespace**: All classes are prefixed with `ease-skew-` and defined under `@layer easemotion-components` to prevent style leaks.

---

## Folder Structure

```
submissions/examples/skew-active-modal/
├── demo.html    # Product catalog page with 4 cards and modals
├── style.css    # Scoped stylesheet, Skew-Active transitions, and media overrides
└── README.md    # User guide, CSS custom variable tables, accessibility parameters
```

---

## Scoped CSS Custom Variables

Unlike global variables, all CSS custom properties are scoped inside container classes to prevent document-wide variable conflicts:

| Variable Name                 | Default Value (Light)               | Default Value (Dark)                | Description                                        |
| ----------------------------- | ----------------------------------- | ----------------------------------- | -------------------------------------------------- |
| `--ease-skew-duration`        | `0.4s`                              | `0.4s`                              | Transition duration for overlay and modal.         |
| `--ease-skew-easing`          | `cubic-bezier(0.34, 1.56, 0.64, 1)` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Timing easing function (Spring curve with bounce). |
| `--ease-skew-easing-fallback` | `cubic-bezier(0.25, 1, 0.5, 1)`     | `cubic-bezier(0.25, 1, 0.5, 1)`     | Fallback curve (out-quad) for legacy renderers.    |
| `--ease-skew-scale-start`     | `0.9`                               | `0.9`                               | Starting transform scale parameter.                |
| `--ease-skew-angle-start`     | `-12deg`                            | `-12deg`                            | Starting skew angle transform boundary.            |
| `--ease-skew-radius`          | `1.25rem`                           | `1.25rem`                           | Border radius. Pinned to top corners on mobile.    |
| `--ease-skew-width`           | `720px`                             | `720px`                             | Max width of the modal on tablet/desktop.          |
| `--ease-skew-blur`            | `16px`                              | `16px`                              | Glassmorphic backdrop-filter blur radius.          |
| `--ease-skew-bg`              | `hsla(30, 20%, 98%, 0.85)`          | `hsla(240, 15%, 8%, 0.7)`           | Modal container surface base color.                |
| `--ease-skew-border`          | `hsla(30, 10%, 85%, 0.5)`           | `hsla(0, 0%, 100%, 0.08)`           | Modal container border.                            |
| `--ease-skew-overlay`         | `rgba(24, 20, 18, 0.6)`             | `rgba(12, 10, 8, 0.85)`             | Color/opacity of full-screen overlay backdrop.     |
| `--ease-skew-brand`           | `hsl(35, 95%, 55%)`                 | `hsl(35, 95%, 55%)`                 | Brand primary color (Amber Gold).                  |
| `--ease-skew-text`            | `hsl(240, 15%, 12%)`                | `hsl(240, 10%, 96%)`                | Main body/title text color (Slate/Zinc).           |
| `--ease-skew-text-muted`      | `hsl(240, 8%, 45%)`                 | `hsl(240, 5%, 65%)`                 | Subtitle and label text color.                     |

---

## Customization Examples

To customize the product catalog colors to match other brand configurations (e.g. high-contrast Minimalist Black or Ocean Teal), override variables on specific modal identifiers:

```css
/* Custom Ocean Teal Theme Override */
#ease-product-modal-1 {
  --ease-skew-brand: hsl(180, 80%, 40%); /* Teal */
  --ease-skew-brand-hover: hsl(180, 80%, 33%);
}

/* Custom Minimalist Dark Obsidian Override */
#ease-product-modal-2 {
  --ease-skew-brand: hsl(0, 0%, 15%); /* Deep Charcoal */
  --ease-skew-brand-hover: hsl(0, 0%, 5%);
}
```

---

## Accessibility Notes & Inherent CSS Limitations

### Core Accessibility Features Implemented

1. **Focus Redirection**: The overlay wrapper is targeted directly by `#ease-product-modal-X` and has `tabindex="-1"`. Upon launch, browser focus lands on the modal wrapper, ensuring the next tab keyboard stroke enters the dialog.
2. **Semantic Attributes**: Layout includes `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and `aria-describedby` configurations for screen readers.
3. **Natively Focusable Controls**: Toggling actions are linked to standard anchor links (`<a>`), which are natively keyboard-tabbable and triggerable via `Enter`.
4. **Bypass Link Protection**: The backdrop close overlay uses `tabindex="-1"` to prevent screen readers and keyboard users from cluttering their tab navigation path with dismiss links.
5. **Visible Focus**: Clear `:focus-visible` focus outlines are defined for key interactive elements.
6. **Reduced Motion**: Disables transforms, slides, and limits speeds using `prefers-reduced-motion: reduce` query hooks.
7. **No Hover Sticking**: Wraps hover transformations in `@media (hover: hover)` blocks to prevent sticky tap hover states on touch screens.

### Inherent CSS-Only Limitations

- **No Keyboard Focus Trap**: Standard dialog requirements demand focus be locked inside the open modal. Since CSS cannot intercept tab loops, users will eventually navigate focus out of the modal container into the background page.
- **No Escape Key Closing**: Sighted or screen-reader users cannot press the physical `Esc` key on keyboards to close this modal, as CSS has no mechanism for capturing standard keyboard layout events.
- **No Focus Restore**: Focus is not automatically restored to the launching trigger button once dismissed; it is moved depending on browser anchor behavior.

---

## Responsive Layouts & Mobile Gestures

- **Desktop / Tablet Grid**: Re-aligns column widths across grid breakpoints (`4 columns -> 2 columns -> 1 column`).
- **Mobile Layouts**: Containers transition to mobile bottom-sheet drawers sliding up from the bottom edge. SkewX properties are reset to `0deg` to prevent visual clippings.

---

## Browser Support & Graphic Fallbacks

- **Backdrop Filter Fallback**: Older Safari and chromium agents lacking support for `backdrop-filter: blur(...)` gracefully degrade to a semi-opaque solid color fallback background overlay.
- **Variable Fallbacks**: Scoped properties include sensible inline fallbacks directly within rules (e.g. `border: 1px solid var(--ease-skew-border, rgba(0,0,0,0.15))`).
- **Skew Transformation fallback**: Standard zoom/fade animations run if `skewX(...)` transforms fail to parse.
