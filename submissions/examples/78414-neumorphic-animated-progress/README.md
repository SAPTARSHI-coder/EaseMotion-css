# Animated Progress Bar with Neumorphism Styling

A responsive progress bar component featuring a soft neumorphic interface,
animated progress fills, percentage indicators, and multiple visual states.

## Features

- Neumorphic visual styling
- Animated progress fills
- Percentage indicators
- Multiple progress examples
- Purple, cyan, pink, and green variants
- Smooth animated highlight
- Responsive layout
- Soft inset and outer shadows
- Semantic progressbar roles
- Accessible ARIA values
- `prefers-reduced-motion` support
- Pure HTML and Vanilla CSS
- No JavaScript or external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

The progress values can be customized by changing the corresponding
animation target values in `style.css` and the ARIA attributes in
`demo.html`.

## Technologies

- HTML5
- Vanilla CSS

## Accessibility

Each progress bar uses the `progressbar` ARIA role with
`aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes.

The component also respects the user's `prefers-reduced-motion`
preference.

## Responsive Behavior

The progress cards use multiple columns on larger screens and switch
to a stacked layout on smaller screens.

## Issue

Closes #78414