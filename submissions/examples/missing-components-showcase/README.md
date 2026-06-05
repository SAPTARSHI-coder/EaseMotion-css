# Missing Components Showcase

## What does this do?

This submission showcases the four components (`chip.css`, `footer.css`, `scroll-progress.css`, and `sidebar.css`) that are currently missing from the main `easemotion.css` entry file and compiled bundles.

## How is it used?

To see all components in action:

1. Ensure all component styles are imported:
   ```css
   @import "../../components/chip.css";
   @import "../../components/footer.css";
   @import "../../components/scroll-progress.css";
   @import "../../components/sidebar.css";
   ```
2. Insert the HTML structures for Chip groups, Footers, Scroll progress bars, and Sidebar layouts as demonstrated in the `demo.html` file.

## Why is it useful?

These files provide a robust verification suite and showcase layout for components that are currently omitted from the main CSS release bundle. By merging this showcase and referencing these components, we ensure complete feature coverage.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open demo.html directly in your browser to see the interactive layout.
