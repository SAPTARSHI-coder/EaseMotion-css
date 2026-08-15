# Skill Bar

A dependency-free stacked skill bar component with percentage labels and interactive hover animations.

## Features

- Stacked skill bars
- Skill labels and percentages
- Animated fill expansion on hover
- Smooth hover transitions
- Responsive layout
- Reduced-motion support
- No external libraries or dependencies

## Files

- `demo.html` — semantic markup for the skill bars
- `style.css` — component styling, hover effects, transitions, and responsive behavior

## Interaction

Each skill bar begins slightly reduced from its full width.

Hovering over a skill expands the fill to its actual percentage width and highlights the percentage label.

## Accessibility

Each skill uses the `progressbar` role with:

- `aria-label`
- `aria-valuemin`
- `aria-valuemax`
- `aria-valuenow`

The example also supports `prefers-reduced-motion`.

## Technologies

- HTML5
- CSS3
- CSS Custom Properties
- CSS Transitions
- CSS Animations

## Preview

Open `demo.html` in a modern browser to view the component.