# CSS Animated Password Show

A responsive password field with an animated show and hide interaction created entirely with HTML and CSS.

## Overview

This component demonstrates a CSS-only password visibility toggle with an animated eye icon.

Users can click the eye icon to switch between the hidden and visible password states without using JavaScript.

## Features

- Pure HTML and CSS
- No JavaScript
- Animated eye icon transition
- Show and hide password states
- Smooth visual transitions
- Responsive design
- Keyboard-accessible toggle control
- Visible keyboard focus state
- Touch-friendly interaction area
- Reduced-motion support
- No external dependencies

## How It Works

The component uses a hidden checkbox as the state controller.

When the checkbox is unchecked, the password is displayed in its hidden state.

When the checkbox is checked, CSS uses the `:checked` selector to:

- Reveal the password text
- Hide the closed-eye icon
- Display the open-eye icon
- Animate the eye transition

This provides the interaction without JavaScript.

## Accessibility

- Includes a descriptive password label.
- Provides an accessible label for the visibility toggle.
- Uses a large clickable eye control for easier interaction.
- Includes a visible `:focus-visible` indicator.
- Supports keyboard focus.
- Includes reduced-motion support through `prefers-reduced-motion`.

## Responsive Design

The password field adapts to different screen sizes using CSS media queries.

On smaller screens:

- The card width adjusts to the available space.
- The password field remains easy to interact with.
- The eye control remains accessible.
- Padding and typography are adjusted for mobile devices.

## Technologies Used

- HTML5
- CSS3
- CSS Transitions
- CSS Animations
- CSS Media Queries
- CSS `:checked` selector
- CSS `:focus-visible`

## File Structure

    70066-css-animated-password-show-ks/
    ├── demo.html
    ├── style.css
    └── README.md

## Testing

The component was tested locally in a web browser.

Verified:

- Password hidden state
- Password visible state
- Eye icon animation
- Toggle interaction
- Keyboard focus
- Responsive layout
- Touch-friendly interaction
- Reduced-motion behavior
- No JavaScript
- No external dependencies

## Browser Compatibility

Works with modern browsers supporting standard HTML5 and CSS3 features, including:

- CSS Flexbox
- CSS Media Queries
- CSS Transitions
- CSS Animations
- `:checked`
- `:focus-visible`
- `prefers-reduced-motion`

## Dependencies

None.

The component uses only HTML and CSS.

## Submission

Created for EaseMotion CSS Issue **#70066 — CSS Animated Password Show**.