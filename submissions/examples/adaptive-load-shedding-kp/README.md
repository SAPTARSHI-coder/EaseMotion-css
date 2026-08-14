# Adaptive Load Shedding Console

A CSS-only operations console that visualizes how priority-aware admission
control keeps a service inside its healthy capacity envelope during a traffic
surge.

## What it demonstrates

- A semantic checkbox switches between unprotected and guarded states.
- Critical, standard, and deferrable traffic receive separate admission lanes.
- Capacity, queue, latency, connection, and error indicators transition
  together.
- The shed path returns excess work before it occupies service connections.
- The layout changes from a horizontal topology to a vertical mobile flow.
- Motion respects the user's reduced-motion preference.

## Run locally

Open `demo.html` in a browser. Enable **Adaptive guard** in the top-right corner
to compare the overload state with the protected state.

## Implementation

The interaction uses the sibling selector from the hidden
`#protection-mode` checkbox to coordinate every visual state. No JavaScript,
framework, image dependency, or build step is required.

The example uses only:

- `demo.html` for semantic structure and accessible state labels
- `style.css` for responsive layout, data visualization, and motion
- `README.md` for usage and implementation notes

## Accessibility

The guard control is keyboard focusable and exposes an accessible name.
Important state changes are represented with text as well as color, and the
layout remains usable from 320px wide viewports.
