# Form Progress Steps

A multi-step progress indicator with animated transitions between steps.

## Features
- Step circles with color transitions (inactive → active → completed)
- Active step pulsing animation
- Completed steps show checkmark
- Connecting line fills progressively
- Previous / Next navigation

## Usage
Include `style.css` and `demo.js`. Steps are defined in the HTML with `data-step` attributes.

## Custom Properties
| Property | Default | Description |
|---|---|---|
| `--form-prog-duration` | `0.4s` | Transition duration |
| `--fp-step-inactive` | `#d1d5db` | Inactive step color |
| `--fp-step-active` | `#3b82f6` | Active step color |
| `--fp-step-completed` | `#22c55e` | Completed step color |
| `--fp-line-color` | `#e5e7eb` | Progress line background |
| `--fp-step-size` | `42px` | Step circle diameter |
| `--fp-radius` | `50%` | Step circle border-radius |

## Demo
Open `demo.html` and click Next / Previous to navigate the steps.
