# Stepper / Wizard Component — EaseMotion CSS

**Issue:** [#22089 — Add stepper/wizard component for multi-step form progress](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/22089)

A multi-step form progress indicator for checkout flows, onboarding wizards, setup processes, and multi-page forms.

## Structure

```
submissions/core_changes-issue-22089/
├── demo.html       # Live demo page showing all variants
├── style.css       # Component styles
└── README.md       # This file
```

## Variants

| Variant        | Class                      | Description                        |
| -------------- | -------------------------- | ---------------------------------- |
| **Horizontal** | `.ease-stepper-horizontal` | Horizontal step indicator          |
| **Vertical**   | `.ease-stepper-vertical`   | Vertical stepper with body content |
| **Numbered**   | (default)                  | Step numbers in circle indicators  |
| **Dot**        | `.ease-stepper-dots`       | Compact dot-style indicators       |
| **Icon**       | `.ease-stepper-icons`      | Emoji/icon step markers            |
| **Completed**  | `.ease-stepper-completed`  | Filled primary color indicator     |
| **Active**     | `.ease-stepper-active`     | Primary border with glow           |
| **Upcoming**   | `.ease-stepper-upcoming`   | Muted/unfilled indicator           |
| **Error**      | `.ease-stepper-error`      | Red border for error state         |

## Usage

```html
<link rel="stylesheet" href="path/to/style.css" />

<div class="ease-stepper ease-stepper-horizontal">
  <div class="ease-stepper-step ease-stepper-completed">
    <div class="ease-stepper-indicator">1</div>
    <div class="ease-stepper-label">Cart</div>
  </div>
  <div class="ease-stepper-step ease-stepper-active">
    <div class="ease-stepper-indicator">2</div>
    <div class="ease-stepper-label">Payment</div>
  </div>
  <div class="ease-stepper-step ease-stepper-upcoming">
    <div class="ease-stepper-indicator">3</div>
    <div class="ease-stepper-label">Confirm</div>
  </div>
</div>
```

## Features

- Horizontal and vertical orientations
- Connecting line between steps via `::after` pseudo-element
- Connector line color transitions through completed/active states
- Four step states: completed, active, upcoming, error
- Numbered, dot, and icon indicator variants
- Responsive — vertical for mobile, horizontal for desktop
- `@layer easemotion-components` for proper cascade ordering
- Dark mode, reduced motion, and forced-colors support
