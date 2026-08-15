# Bouncing Spring Rating

A lightweight, accessible five-star rating component built with pure HTML
and vanilla CSS.

The component uses a spring-inspired animation to make rating selection
feel responsive and tactile.

## Features

- Pure HTML and CSS
- No JavaScript or external dependencies
- Five-star rating input
- Hover rating preview
- Selected rating fills all stars up to the selected value
- Spring-style hover animation
- Spring animation when selecting a rating
- Keyboard accessible
- Visible keyboard focus state
- Reset button
- Responsive layout
- Reduced-motion support
- Transform-based animations

## Demo

The component starts with an empty rating:

☆ ☆ ☆ ☆ ☆

Hovering over a star previews the rating.

For example, hovering over the third star displays:

★ ★ ★ ☆ ☆

Selecting a rating keeps all stars up to that value active.

For example:

★ ★ ★ ☆ ☆

3 / 5 · Good

The Reset button clears the selected rating and returns the component
to its initial state.

## How It Works

The component uses native radio inputs for the rating options. The radio
inputs are visually hidden while their associated labels display the
stars.

CSS `:has()` selectors are used to:

- Preview the rating on hover
- Fill stars up to the hovered value
- Keep stars up to the selected value active
- Display feedback for the selected rating

The Bouncing Spring effect is created using CSS keyframe animations
with `transform`, `translateY()` and `scale()`.

## Accessibility

The rating uses native radio inputs grouped inside a `fieldset` with a
descriptive `legend`.

Each rating option has an accessible label such as:

- 1 out of 5
- 2 out of 5
- 3 out of 5
- 4 out of 5
- 5 out of 5

Keyboard users can navigate the rating using the native radio controls.
A visible focus indicator is provided using `:focus-visible`.

The component also respects the user's reduced-motion preference using
`prefers-reduced-motion`.

## Responsive Design

The rating adapts to smaller screens using CSS media queries so that
the stars remain usable on mobile-sized viewports.

## Dependencies

None.

## Files

The component contains three files:

- `demo.html` — Demo markup and rating controls
- `style.css` — Rating styles and spring animations
- `README.md` — Component documentation

## License

This contribution is provided under the license of the EaseMotion-css
repository.