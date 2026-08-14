````md
# Multi-Step Animated Progress Stepper Wizard

A modern high-contrast multi-step progress stepper/wizard component with animated transitions, interactive navigation, and accessibility-focused styling.

## ✨ Features

- Four-step progress indicator
- Animated step transitions
- Previous and Continue navigation
- Completed-step check indicators
- Animated progress lines
- High-contrast color palette
- Responsive design
- Keyboard focus states
- Form controls
- `prefers-reduced-motion` support
- No external libraries or dependencies

## 📁 Files

```text
ease-layout-multi-step-animated-progress-stepper-wizard-component-159/
├── demo.html
├── style.css
├── script.js
└── README.md
````

## 🚀 Usage

Navigate to the component directory:

```bash
cd submissions/examples/ease-layout-multi-step-animated-progress-stepper-wizard-component-159
```

Open `demo.html` in a modern web browser.

No installation or build process is required.

## 🧭 How It Works

The wizard contains four steps:

1. Account
2. Profile
3. Preferences
4. Complete

Use the **Continue** button to move forward and the **Previous** button to return to an earlier step.

Completed steps are visually marked with a check icon.

## 🎨 Customization

The primary colors are defined using CSS variables:

```css
:root {
  --background: #050505;
  --accent: #00e5ff;
  --success: #39ff88;
  --text: #ffffff;
}
```

Change these variables to create a different visual theme.

## ♿ Accessibility

The component includes:

* High color contrast
* Visible keyboard focus states
* Semantic navigation
* `aria-label`
* `aria-labelledby`
* `aria-live` progress updates
* Reduced-motion support

Users who prefer reduced motion will have animations and transitions minimized.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 📱 Responsive Design

The stepper and wizard card adapt to tablet and mobile screen sizes.

On smaller screens, the stepper can scroll horizontally while the form changes to a single-column layout.

## 📜 License

This component is intended for use within the EaseMotion CSS project and follows the repository's licensing terms.

```
```
