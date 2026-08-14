# Wizard Step Form

An interactive multi-step form wizard with animated panel transitions and a visual progress indicator.

## Features

- Step-by-step navigation with Previous / Next / Submit buttons
- Numbered step indicators in a sidebar with active and complete states
- Content panels slide horizontally with translateX and opacity transitions
- Progress bar showing overall completion
- Custom CSS properties via `:root` for easy theming

## CSS Custom Properties

| Property               | Default  | Description            |
|------------------------|----------|------------------------|
| `--wsf-duration`       | 0.35s    | Transition duration    |
| `--wsf-step-color`     | #d1d5db  | Inactive step color    |
| `--wsf-active-color`   | #6366f1  | Active step color      |
| `--wsf-complete-color` | #22c55e  | Completed step color   |
| `--wsf-content-bg`     | #ffffff  | Content panel background |
| `--wsf-radius`         | 12px     | Container border radius |

## Usage

Open `demo.html` in any modern browser.
