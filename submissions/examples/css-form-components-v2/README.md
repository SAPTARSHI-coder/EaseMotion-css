# EaseMotion Simple CSS Form Components

## What does this do?

Provides a lightweight collection of animated form controls including text inputs, custom checkboxes, and custom radio buttons. Components feature smooth hover interactions, focus-visible accessibility states, micro-animations, and automatic dark mode support.

## How is it used?

Apply the provided classes to form elements:

```html
<input type="text" class="ease-input" placeholder="Enter your name" />

<label class="ease-checkbox-wrapper">
  <input type="checkbox" class="ease-checkbox-input" />
  <span class="ease-checkbox-box"></span>
  Remember me
</label>

<label class="ease-radio-wrapper">
  <input type="radio" name="plan" class="ease-radio-input" />
  <span class="ease-radio-circle"></span>
  Premium Plan
</label>
```

Available components:

- `ease-input` – animated text input
- `ease-checkbox-wrapper` + `ease-checkbox-input` + `ease-checkbox-box` – custom checkbox
- `ease-radio-wrapper` + `ease-radio-input` + `ease-radio-circle` – custom radio button
- `ease-radio-group` – radio button grouping utility
- `ease-field` – form field layout wrapper

## Why is it useful?

Native form controls often look different across browsers and operating systems. These components provide a consistent, polished appearance while maintaining accessibility and requiring no JavaScript. They are suitable for login pages, settings panels, registration forms, and other user input interfaces.

## Features

- Smooth hover and focus transitions
- Keyboard-accessible focus-visible states
- Animated checkbox checkmark
- Animated radio button selection with ripple effect
- Validation-ready input styles (`.success` and `.error`)
- CSS custom properties for easy theme customization
- Automatic dark mode support
- Zero JavaScript required

## Tech Stack

- HTML
- CSS
- CSS Custom Properties
- Pure CSS Animations

## Preview

Open `demo.html` in your browser to view the interactive form components and animations.

## Contribution Notes

- Built using the EaseMotion naming convention (`ease-*`)
- Designed to be lightweight and framework-independent
- Uses only HTML and CSS with no external dependencies
- Ready for integration into the EaseMotion component library
