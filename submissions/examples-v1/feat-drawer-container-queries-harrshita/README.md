# Drawer CSS Container Queries

## Description
This PR adds CSS Container Query support to the `drawer` component. Unlike media queries that react to the viewport width, container queries allow the component to react to the size of its own parent container. This makes the component truly reusable in any context: sidebars, grids, modals, or full-width layouts all get an optimally adapted layout without extra CSS.

## Key Properties Used
- `container-type: inline-size`: Establishes the containment context.
- `container-name`: Gives the container a queryable identifier.
- `@container (min-width: N)`: Applies styles when container is at least N wide.

## Changes
- `style.css`: 80+ lines with base styles and two `@container` breakpoints.
- `demo.html`: Side-by-side narrow/wide container demo showing automatic layout adaptation.
- `README.md`: Describes the feature and key CSS properties.
\nFixes #55423\n