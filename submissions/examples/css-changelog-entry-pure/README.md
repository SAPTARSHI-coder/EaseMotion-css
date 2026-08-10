# CSS Changelog Entry

A pure CSS timeline-style changelog component featuring version tags, semantic release dates, and categorized update lists with custom list-style markers, built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript or image assets required).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI with adjusted tag contrast and timeline colors.
- **Component Architecture (Documented in Code)**: 
  - **Timeline Architecture**: The vertical timeline is created efficiently by applying a `border-left` to the main `.changelog-container`. Each individual `.changelog-entry` then uses an absolutely positioned `::before` pseudo-element to draw a circular dot directly overlapping the border, creating the classic timeline look.
  - **First-Child Highlighting**: The most recent changelog entry is automatically highlighted using the `:first-child` pseudo-class, which applies a thicker, colored border to its timeline dot (no extra HTML classes required).
  - **Custom List Markers**: Instead of standard HTML bullets, the categorized update lists (`<ul>`) have their default `list-style` removed. We use `::before` pseudo-elements on the `<li>` items to draw custom circular dots that perfectly match the color of their respective category tags (e.g., blue dots for features, green for improvements).
- Fully accessible semantic structure. Uses `<article>` for individual entries with `aria-labelledby` pointing to the version tag. Dates use the semantic `<time datetime="...">` element. Update lists use proper `<ul>` and `<li>` structure for screen reader compatibility.

## Usage
Open `demo.html` in your browser. Resize the window to see the responsive layout adapt cleanly to smaller screens. 

## Files
- `demo.html`: The HTML structure containing the semantic articles, time elements, and categorized lists.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented pseudo-element architecture.
