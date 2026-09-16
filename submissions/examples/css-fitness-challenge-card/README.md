# CSS Fitness Challenge Card

A responsive 30-day fitness challenge tracker built with pure HTML
and CSS.

## Features

- 30-day challenge grid
- Completed, current, and upcoming day states
- Progress indicator
- CSS hover animation
- Responsive layout
- Keyboard-accessible day buttons
- Visible focus states
- ARIA labels for each challenge day
- No JavaScript
- No external dependencies

## Accessibility

Each day is implemented as a native `<button>` element, which provides
keyboard navigation and interaction without JavaScript.

Every day also includes an accessible label describing its current state.

The demo includes visible `:focus-visible` styles so keyboard users can
easily identify the focused day.

## Usage

Open `demo.html` directly in a browser.

The component can be customized by changing the day states and CSS
variables/styles in `style.css`.

## Technologies

- HTML5
- CSS3

## Why It Fits EaseMotion CSS

The example demonstrates how CSS can be used to create an interactive,
responsive UI pattern with lightweight hover and focus animations
without requiring JavaScript or external libraries.