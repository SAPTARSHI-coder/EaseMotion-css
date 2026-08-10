# Quote Fade In

A testimonial quote with author that fades in and expands a left accent border on reveal.

## Features

- Fade-in opacity transition for the quote card
- Left border expansion via CSS transition (height: 0 → 100%)
- Optional `@keyframes qfi-border` animation

## CSS Custom Properties

| Property                    | Default   | Description              |
| --------------------------- | --------- | ------------------------ |
| `--qfi-transition-duration` | `0.6s`    | Duration of animations   |
| `--qfi-accent-color`        | `#6c63ff` | Accent / author color    |
| `--qfi-border-color`        | `#d1d5db` | Border color (reserved)  |

## Usage

Add class `.qfi-visible` to the `<blockquote>` element on load or scroll to trigger.
