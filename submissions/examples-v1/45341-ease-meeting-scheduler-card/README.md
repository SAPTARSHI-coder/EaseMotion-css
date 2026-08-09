# Ease Meeting Scheduler Card

A clean, modern, and highly accessible meeting scheduler card component designed for the EaseMotion CSS library.

## Features
- **Pure CSS State Management**: Both the date and time selectors utilize hidden radio buttons (`:checked`) to manage their active and highlighted states smoothly without relying on JavaScript.
- **EaseMotion Animations**: Employs an `ease-slide-up-fade` keyframe for an elegant entrance animation upon load, and utilizes `--ease-spring` and `--ease-out-expo` bezier curves for interactive micro-interactions on hover and selection.
- **Responsive Layout**: Utilizing Flexbox, the scheduler adjusts seamlessly from a stacked vertical layout on mobile devices to a spacious side-by-side date/time layout on larger screens.
- **Accessible Interactions**: Includes proper `:focus-visible` styling for keyboard navigation on all interactive elements (days, time slots, and the confirmation button). Checkboxes are scaled to cover the entire clickable area natively.
- **Custom UI Elements**: Features custom WebKit scrollbar styling for the time slot list to maintain the elegant aesthetic.

## File Structure
- `demo.html`: The HTML layout of the component, including the host profile section, the mock calendar grid, and time slots.
- `style.css`: All the styling rules, including grid definitions, hover states, CSS variables, and EaseMotion-inspired animations.

## Usage Guide
The component relies extensively on CSS custom properties (variables) defined in the `:root`, making theming and overriding extremely easy.

### Key Customization Variables
- `--primary-color`: The primary brand color for active states, borders, and buttons (default is a vibrant blue).
- `--primary-hover`: Darker variant utilized for button hover states.
- `--primary-light`: Lighter, tinted variant used for hover backgrounds on calendar days and time slots.
- `--card-bg`: Background color of the card surface.
- `--bg-main`: The outer page background color.
- `--ease-duration-normal` / `--ease-out-expo`: The primary easing utilities for the animations.
