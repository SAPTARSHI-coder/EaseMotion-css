# Pure CSS Masonry Grid (`.ease-masonry`)

## Description
This submission fulfills Issue #57088. It provides a highly requested layout component: a Pinterest-style Masonry grid that functions perfectly without requiring heavy JavaScript calculation libraries (like Masonry.js).

By leveraging native CSS Columns (`column-count`) and preventing inner column breaks (`break-inside: avoid`), we achieve a responsive masonry flow purely with CSS.

## Features
- **Zero JavaScript:** Uses CSS Columns to handle the staggered layout.
- **Responsive by Default:** Automatically shifts from 1 column on mobile, to 2 on tablets, and 3 on desktops using standard media queries.
- **Staggered Entrance Animation:** Includes an `.ease-masonry-enter` animation. Developers can pass a `--delay` custom property in the inline style of the HTML (e.g., `style="--delay: 1"`) to create a beautiful, staggered waterfall entrance effect.
- **Accessible:** The entrance animation respects the `prefers-reduced-motion` media query and will disable itself if necessary.

## Files Included
- `demo.html`: A mock gallery demonstrating items of varying heights flowing seamlessly into a masonry layout.
- `style.css`: The component CSS, ready to be integrated into the core framework.
- `README.md`: This documentation.
