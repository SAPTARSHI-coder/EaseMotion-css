# Virtual List Skeleton Component (`ease-virtual-list-skeleton`)

This submission resolves issue #19909 by introducing a reusable skeleton placeholder specifically designed for virtualized lists or highly dynamic data grids.

## Overview
When loading data into a virtual list (where DOM nodes are recycled), a smooth, performant skeleton state is required. This pure CSS implementation uses an infinite shimmering gradient to indicate loading activity without causing layout shifts or relying on heavy SVGs.

## Features
- **Pure CSS Shimmer:** Utilizes `linear-gradient` and `background-position` animation to create a smooth, GPU-accelerated wave effect.
- **Virtualized List Ready:** Built with flexbox to easily mimic list items, avatars, and text rows, ensuring a 1:1 structural match with the final rendered content (preventing CLS - Cumulative Layout Shift).
- **CSS Variables:** Customizable base colors, highlight colors, and animation speeds via CSS variables.
- **Accessibility (a11y):** Uses `aria-busy="true"` and `aria-hidden="true"` where appropriate in the demo to demonstrate best practices for screen readers during a loading state.

## Files
- `demo.html`: A functional layout showcasing a virtualized list in its loading state.
- `style.css`: The styling logic for the `.ease-skeleton` classes and the shimmer `@keyframes`.
