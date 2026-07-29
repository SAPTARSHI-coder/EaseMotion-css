# CSS-only Command Palette UI Component

A modern, responsive, and purely CSS-driven Command Palette component inspired by interfaces in VS Code, Notion, and Linear.

## Features

- **Pure HTML/CSS:** No JavaScript required for the layout and presentation.
- **Light & Dark Mode:** Adapts automatically based on `prefers-color-scheme`.
- **Keyboard Shortcut Styling:** Semantic `<kbd>` elements with MacOS/Windows style hints.
- **Hover & Focus States:** Interactive and accessible active states.
- **Responsive:** Adjusts to mobile screens (hides keyboard hints on small devices).
- **Empty State Design:** Provides an elegant "no results" layout.
- **Customizable:** Uses CSS custom properties (variables) for easy theming.

## Usage

Simply copy the HTML structure and link the `style.css` file. The CSS variables defined in `:root` can be easily modified to match your existing brand colors.

## File Structure

- `demo.html`: Contains the example markup for standard state and empty state.
- `style.css`: The stylesheet driving the presentation and responsive behavior.
