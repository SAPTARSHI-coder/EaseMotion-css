# Navbar Link Wrapping Fix

A responsive CSS solution that prevents navigation links from wrapping onto multiple lines on smaller screen sizes.

## 1. What does this do?

This showcase demonstrates how to prevent navbar links from wrapping when the available width becomes limited. The fixed implementation keeps all navigation items on a single line by using a non-wrapping flex container with horizontal scrolling when necessary.

## 2. How is it used?

Open `demo.html` directly in any modern browser—no build step or server is required.

The page includes two examples:

- **Broken:** A navbar that allows links to wrap onto multiple lines on narrow viewports, causing layout inconsistencies.
- **Fixed:** A navbar using `flex-wrap: nowrap`, `overflow-x: auto`, and `white-space: nowrap` so navigation links remain on a single line while staying accessible on smaller screens.

To apply the solution in your own project, configure the navbar as a flex container with wrapping disabled and enable horizontal scrolling when required.

## 3. Why is it useful?

Navigation bars should remain consistent and easy to use across different screen sizes. Preventing link wrapping preserves the visual structure of the navigation, improves usability on mobile devices, and provides a cleaner responsive experience without hiding navigation items.

Fixes #55663.
