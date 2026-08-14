# CSS Kanban Board Card

A pure CSS task card component designed for Kanban boards, featuring priority badges, assignee avatars, a tagging system, and interactive hover/focus states, built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties across the board (cards, columns, tags, badges). Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating properly contrasted, semi-transparent badges and tags for dark mode.
- **Component Architecture**: 
  - **Grid/Flexbox Layouts**: The card uses semantic HTML and standard flexbox alignments for robust, flexible layouts that won't break if content wraps.
  - **Text Truncation**: Features a pure CSS multi-line text truncation (`-webkit-line-clamp: 2`) to ensure long task descriptions don't blow out the card height.
  - **Stacked Avatars**: Uses a neat CSS trick (`flex-direction: row-reverse;` combined with negative `margin-left`) to create overlapping, stacked user avatars for multiple assignees.
- Fully accessible. The card utilizes a `tabindex="0"` and `role="article"` along with `:focus-within` styling to ensure keyboard navigators can interact with and trigger the hover-lift states. The `prefers-reduced-motion` standard disables the translation lifts for motion-sensitive users.

## Usage
Open `demo.html` in your browser to see a sample Kanban column containing two fully-styled task cards. Hover or tab through them to see the interactive states.

## Files
- `demo.html`: The HTML structure containing the column, the cards, SVG metric icons, and the assignee avatars.
- `style.css`: The styling, robust CSS Custom Property theming blocks, and the layout architecture.
