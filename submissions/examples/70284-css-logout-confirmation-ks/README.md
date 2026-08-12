# CSS Logout Confirmation

An animated logout confirmation component built with pure HTML and CSS. It provides a clean confirmation dialog with a logout icon, countdown indicator, and responsive action buttons.

## Overview

This component demonstrates a CSS-based logout confirmation prompt that can be used in dashboards, web applications, and account interfaces.

The design includes a visual countdown animation to indicate the logout process while giving the user the option to cancel or continue.

## Features

- Pure HTML and CSS
- Animated logout confirmation card
- Animated logout icon
- CSS countdown indicator
- Cancel and Logout action buttons
- Smooth entrance animations
- Responsive design
- Keyboard-focusable buttons
- Visible focus states
- Touch-friendly controls
- Reduced-motion support
- No JavaScript
- No external dependencies

## How It Works

The component uses CSS animations to create the visual countdown effect.

The countdown bar gradually shrinks over five seconds using a CSS `@keyframes` animation.

The confirmation card and logout icon also use CSS animations when the component loads.

The buttons are provided as UI controls for demonstration purposes. Actual logout functionality can be connected separately by the application using JavaScript or a backend system.

## Accessibility

- Uses semantic HTML elements.
- Provides a clear confirmation message.
- Uses buttons for user actions.
- Includes visible keyboard focus indicators.
- Uses `aria-hidden` for decorative elements.
- Includes `aria-live` on the countdown area.
- Supports reduced-motion preferences.

## Responsive Design

The component adapts to different screen sizes.

On smaller screens:

- Card spacing is reduced.
- Typography scales appropriately.
- Action buttons stack vertically when necessary.
- The layout remains easy to use on touch devices.

## Technologies Used

- HTML5
- CSS3
- CSS Flexbox
- CSS Media Queries
- CSS Transitions
- CSS Keyframe Animations
- CSS Custom Properties

## File Structure

    70284-css-logout-confirmation-ks/
    ├── demo.html
    ├── style.css
    └── README.md

## Testing

Tested locally in a web browser.

Verified:

- Logout confirmation card displays correctly
- Logout icon animation works
- Countdown animation works
- Cancel button displays correctly
- Logout button displays correctly
- Hover states work
- Keyboard focus states work
- Responsive layout works
- Reduced-motion support works
- No JavaScript is required

## Dependencies

None.

The component uses only HTML and CSS.

## Submission

Created for EaseMotion CSS Issue **#70284 — CSS Logout Confirmation**.