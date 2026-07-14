# Pure CSS Swing Step Indicator Component

A responsive, Cyberpunk-inspired multi-step progress indicator built entirely with CSS for EaseMotion CSS. The active step performs a smooth swing animation while completed and upcoming steps remain visually distinct, making it ideal for checkout flows, onboarding, and multi-step forms.

## Features

- **Pure CSS:** No JavaScript required.
- **EaseMotion Ready:** Integrates seamlessly with EaseMotion CSS utility classes.
- **Swing Animation:** Active step swings naturally before settling into place.
- **Responsive Layout:** Displays horizontally on desktop and stacks vertically on smaller screens.
- **Accessible Markup:** Uses semantic navigation with `aria-label` and `aria-current="step"`.
- **Modern Styling:** Cyberpunk-inspired glow effects with glassmorphism elements.

## Configuration Parameters

The component can be customized by modifying the following CSS custom properties:

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--primary` | Primary accent color for the active step | `#00f5ff` |
| `--success` | Color for completed steps | `#00e676` |
| `--bg` | Page background color | `#09111f` |
| `--card` | Demo card background | `rgba(18, 27, 44, 0.9)` |
| `--text` | Primary text color | `#ffffff` |
| `--muted` | Secondary text color | `#94a3b8` |
| `--inactive` | Color for pending steps and connectors | `#334155` |
| `--radius` | Card border radius | `18px` |
| `--shadow` | Glow shadow intensity | `0 0 24px rgba(0, 245, 255, 0.35)` |

## How to Run Locally

1. Clone your fork of the repository.
2. Navigate to `submissions/examples/swing-step-indicator-amna/`.
3. Open `demo.html` in any modern web browser to view the component.