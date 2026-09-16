# Foucault Pendulum Swing Hover

A pure HTML and Vanilla CSS hover effect inspired by the graceful swinging motion of a Foucault pendulum.

## Features

- Pure HTML and CSS
- No JavaScript
- Pendulum-inspired swing animation
- CSS keyframe animation
- Smooth hover interaction
- Responsive design
- Dark mode support
- Hardware-friendly transforms
- Reduced-motion accessibility support

## How It Works

The pendulum is built using simple HTML elements:

- A pivot point
- A vertical rod
- A spherical pendulum bob

When the card is hovered, CSS keyframes rotate the pendulum around its top transform origin, creating a natural-looking swing.

## Technologies

- HTML5
- CSS3
- CSS Transforms
- CSS Keyframes
- CSS Media Queries

## Usage

Open `demo.html` in a modern browser.

No dependencies or JavaScript are required.

## Accessibility

The animation respects the user's motion preference through:

```css
@media (prefers-reduced-motion: reduce)