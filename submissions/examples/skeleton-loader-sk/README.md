# Minimalist Skeleton Loading State

A pulsing "placeholder" state commonly used while content is fetching, simulating the structure of an article or profile card.

## Files
- `demo.html`: The HTML structure of the skeleton card (avatar, title, body lines).
- `style.css`: The CSS that generates the shimmering background effect.
- `README.md`: This file.

## Features
- **Shimmer Animation:** Uses a linear-gradient background that is much wider than the element, animated seamlessly using `@keyframes` and `background-position` to create a realistic loading "shimmer".
- **Composability:** The `.skeleton` class can be applied to any shape (circles for avatars, rounded rectangles for text lines).
- **Lightweight:** Entirely CSS-based, providing an instant visual cue before heavy JavaScript or images load.

## Usage
Add the `.skeleton` class to any placeholder `div` element. Structure your placeholders to match the layout of the final content that will replace them.
