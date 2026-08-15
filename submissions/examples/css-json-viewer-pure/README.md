# CSS JSON Viewer

A pure CSS, JavaScript-free JSON tree viewer. Utilizes native HTML `<details>` elements for collapsibility and CSS pseudo-elements for structural formatting and indentation guides.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **Native Collapsibility**: By leveraging the native HTML `<details>` and `<summary>` elements, we achieve full click-to-toggle functionality for nested JSON objects and arrays entirely without JavaScript event listeners. The browser handles the state automatically.
  - **Syntax Highlighting**: Structural spans (`<span class="key">`, `<span class="string">`, etc.) are styled with a modern dark-theme syntax highlighting palette, making the raw data highly legible.
  - **Indentation Guides**: A dashed left border (`border-left: 1px dashed`) is applied to the `.json-body` class to visually connect nested children to their parent keys, significantly improving readability for deeply nested JSON structures.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a deep slate IDE-style aesthetic.
- Fully accessible semantic structure. Because it relies on the native `<details>` element, keyboard navigation (`Tab` to focus, `Space`/`Enter` to toggle) and screen reader state announcements ("collapsed"/"expanded") work out of the box with zero custom ARIA mapping required.

## Usage
Open `demo.html` in your browser. Click on any line containing a parent key (e.g., `"features": [` or `"metadata": {`) or use your keyboard to expand and collapse the nested JSON blocks.

## Files
- `demo.html`: The semantic HTML structure demonstrating the `details/summary` nesting.
- `style.css`: The styling, custom arrow pseudo-elements, and the syntax highlighting color palette.
