# CSS 3D-Flip Accordion — Creative Portfolio

A responsive, highly interactive, and accessible **3D-Flip Accordion** built using pure HTML and CSS, customized for modern creative portfolio showcase layouts.

## Features

- **Pure HTML & CSS:** Operates cleanly using native HTML5 `<details>` and `<summary>` elements without any JavaScript dependencies.
- **3D Flip Transitions:** Utilizes CSS `perspective`, `rotateY`, and `rotateX` transform properties to create a smooth depth-rotation flip on hover, focus, and section disclosure.
- **Aesthetic Customization:** Fully configurable parameters exposed via CSS custom variables on the host component wrapper.
- **Accessibility Parameters:** Full keyboard support (focusable via `Tab` and toggleable via `Space`/`Enter`), custom `:focus-visible` states, semantic landmarks, and full motion support overrides via `prefers-reduced-motion`.

## CSS Variables

Configure visual, timing, and structural tokens directly via these exposed custom variables:

```css
:root {
  --duration: 550ms;          /* Duration speed of the flip transition */
  --easing: cubic-bezier;     /* Easing function curve */
  --flip-angle: -15deg;       /* Tilt/Rotate angle on hover and open */
  --panel-radius: 16px;       /* Corner radius scale */
  --accent-color: #10b981;    /* Primary highlight accent color */
  --shadow: rgba(...);        /* Glow/Depth box shadow properties */
  --background: #111827;      /* Panel backdrop color */
}
```

## Folder Structure

```text
css-3d-flip-accordion-creative-portfolio/
├── demo.html
├── style.css
└── README.md
```

## Accessibility Notes

- **Keyboard Focusable:** The accordion sections are keyboard focusable natively via the `<summary>` tags. Custom focus ring outline guides indicate focus clearly.
- **Prefers Reduced Motion:** Supports system settings by turning off keyframe animations and transform tilts when `@media (prefers-reduced-motion: reduce)` matches.

## Usage Instructions

Open `demo.html` in your browser. Focus the panels using **Tab**, and expand/collapse them by pressing **Space** or **Enter**. Customize layout dimensions and speeds through local CSS variables.

Created for **EaseMotion CSS – GSSoC 2026**.
