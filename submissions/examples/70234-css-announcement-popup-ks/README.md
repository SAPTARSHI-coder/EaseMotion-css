# CSS Announcement Popup

A lightweight and responsive announcement popup component built entirely with HTML and CSS.

## Overview

This component demonstrates a modern announcement popup with an animated entrance, announcement ribbon, accessible close control, and a smooth CSS-only dismissal effect.

It is designed for the EaseMotion CSS library and requires no JavaScript or external dependencies.

## Features

- Pure HTML and CSS
- No JavaScript
- Animated popup entrance
- Announcement ribbon
- Clear announcement icon
- CSS-only close interaction
- Smooth dismissal transition
- Responsive design
- Keyboard-accessible close control
- Visible keyboard focus state
- Reduced-motion support
- No external dependencies

## Components

The popup contains:

- **Announcement Ribbon** — Highlights the popup as an announcement.
- **Announcement Icon** — Provides a visual indicator for the message.
- **Title and Description** — Displays the announcement content.
- **Close Button** — Dismisses the popup using a CSS-only state controller.
- **Dismissed State** — Displays a confirmation message after the popup is closed.

## How It Works

The component uses a hidden checkbox as a CSS state controller.

When the close button is activated, the checkbox becomes checked and CSS uses the `:checked` selector to hide the announcement popup and reveal the dismissed state.

No JavaScript is required for the interaction.

## Accessibility

- Uses semantic HTML elements.
- Provides an accessible heading for the announcement.
- Includes an accessible label for the close control.
- Provides a visible `:focus-visible` state.
- Supports keyboard navigation.
- Includes `prefers-reduced-motion` support.

## Responsive Design

The popup adapts to different screen sizes using CSS media queries.

On smaller screens:

- The popup adjusts to the available width.
- The announcement content changes to a vertical layout.
- Text remains readable and centered.
- The close button remains accessible.

## Technologies Used

- HTML5
- CSS3
- CSS Animations
- CSS Transitions
- CSS Media Queries
- CSS `:checked` selector
- CSS `:focus-visible`

## File Structure

    70234-css-announcement-popup-ks/
    ├── demo.html
    ├── style.css
    └── README.md

## Testing

The component was tested locally in a web browser.

Verified:

- Popup entrance animation
- Close button interaction
- Dismissed state
- Hover interaction
- Keyboard focus
- Responsive layout
- Mobile layout
- Reduced-motion behavior
- No JavaScript or external dependencies

## Browser Compatibility

Works with modern browsers supporting standard HTML5 and CSS3 features, including:

- CSS Flexbox
- CSS Media Queries
- CSS Animations
- CSS Transitions
- `:checked`
- `:focus-visible`
- `prefers-reduced-motion`

## Dependencies

None.

The component uses only HTML and CSS.

## Submission

Created for EaseMotion CSS Issue **#70234 — CSS Announcement Popup**.