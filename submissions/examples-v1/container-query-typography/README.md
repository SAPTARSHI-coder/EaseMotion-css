# Container Query Typography

## What

Demonstrates responsive typography inside cards using CSS Container Queries. Cards resize based on a slider, and their font sizes, padding, and badge styles adapt at container breakpoints (300px, 450px).

## How

Each card has `container-type: inline-size` set. `@container` queries target different width ranges (`min-width: 300px`, `min-width: 450px`) to scale headings, body text, and spacing. The `cqw` unit is used for the badge font size. JavaScript adjusts each card's `width` via an inline style bound to a range slider.

## Why

Container Queries allow components to be truly self-contained and responsive without depending on the viewport. This is essential for design systems and reusable components that must work in any layout context.
