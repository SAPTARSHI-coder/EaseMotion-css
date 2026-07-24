# CSS Zoom-In Popover for Accessible Web Layouts

A pure CSS, fully responsive, and deeply keyboard-accessible Popover component tailored for WCAG-compliant, highly accessible web interfaces (such as government portals, inclusive web apps, and educational sites).

## 🌟 Key Features

- **Accessible Zoom-In Animation**: Transitions smoothly from `scale(0.9)` to `scale(1.0)` while fading in. Crucially, it fully respects `@media (prefers-reduced-motion: reduce)` by bypassing the scale transition and providing a quick `0.1s` fade-in for users with vestibular disorders.
- **High Contrast Aesthetics**: Styled with extremely clear, high-contrast colors (e.g., `#005A9C` blue on white, solid black borders) and large `18px` base typography to ensure maximum legibility.
- **Enhanced Focus Indicators**: Utilizes standard highly-visible focus rings (a thick yellow outline wrapped in a black box-shadow) mimicking the widely praised Gov.uk accessibility standards.
- **Target Sizes**: Button trigger hit areas strictly adhere to the WCAG 2.1 SC 2.5.5 Target Size minimum of `44x44px` (using `48x48px` for icon buttons).
- **Pure CSS State Management**: Managed purely through CSS using `:focus-within` and `:hover`. No JavaScript is required.

---

## 🛠️ Custom Properties (API)

Customize the component by overriding these CSS variables on the `:root` element.

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-timing` | `0.25s` | Duration of the zoom-in animation. Automatically falls back to `0.1s` if `prefers-reduced-motion` is active. |
| `--popover-easing` | `ease-out` | Simple, predictable easing function without bouncy distractions. |
| `--popover-scale-start` | `0.9` | The starting scale factor. Falls back to `1.0` if `prefers-reduced-motion` is active. |
| `--popover-offset-x` | `0px` | Horizontal X offset for standard inline popovers. |
| `--popover-offset-y` | `8px` | Vertical gap between the trigger and the popover. |

---

## ♿ Accessibility Notes

This component prioritizes WCAG compliance:

1. **Keyboard Navigation (`:focus-within`)**: Tab into the trigger to open the popover. Tab again to focus interactive elements *inside* the popover without it closing on you. Tab away, and it safely closes.
2. **Reduced Motion**: Contains `@media (prefers-reduced-motion: reduce)` built-in.
3. **Screen Reader `aria` Attributes**: 
   - Uses `aria-haspopup="dialog"` on the triggers.
   - Popover panels use `role="dialog"` with contextual `aria-label`s.
   - Required form asterisks are marked `aria-hidden="true"` while inputs use `aria-required="true"`.
4. **Skip Links**: The demo includes a `.skip-link` for keyboard users to bypass navigation.
5. **SR-Only Focusable Elements**: Includes a hidden "Close Popover" button inside the popover that becomes visible only on keyboard focus, providing an explicit exit point for screen reader / keyboard users if needed.

---

## 📱 Responsive Behavior

On screens under `600px`, the popover smartly transitions from relative positioning to a `fixed` bottom-sheet layout. This provides a vastly superior mobile experience by pinning the popover to the bottom of the viewport, maximizing readability and touch targets.

## 💻 Usage Instructions

1. Wrap your focusable trigger (`<button>`) and the `.popover-content` inside a `.popover-container`.
2. Ensure you use semantic HTML within the popover.
3. Import `style.css` which handles all the `:focus-within` logic, focus outlines, and animations.
