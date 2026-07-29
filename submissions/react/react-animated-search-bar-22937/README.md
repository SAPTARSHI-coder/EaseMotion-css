# React Animated Search Bar Component (#22937)

An interactive, animated search bar component for React built using EaseMotion CSS utility classes.

## Features

- **Expand/Collapse**: Initially styled as a circular icon button, expands into a full search input with smooth width/box-shadow transitions.
- **Hover Glows**: Uses `.ease-hover-glow` on the search container to provide visual feedback before interaction.
- **Micro-Animations**:
  - The search status text ("Searching...") uses `.ease-pulse`.
  - The clear button ("X") and search results mount with `.ease-fade-in`.
  - The dropdown container enters with `.ease-slide-down`.
- **Staggered Results**: The list of simulated search results mounts with staggered `.ease-fade-in` delays based on their index.
- **Accessibility**: Includes `aria-label` attributes and manages `tabIndex` to prevent focusing the hidden input when collapsed.

## Structure

- `SearchBar.jsx` - The React component containing the state logic (query, results, isExpanded, isSearching) and DOM structure.
- `style.css` - Component-specific styles (CSS variables, flexbox layouts, absolute positioning for dropdowns) mapping to EaseMotion CSS classes.
- `demo.html` - The standalone entrypoint containing the React 18 CDN imports and Babel compiler.

## Usage

Simply run `demo.html` in your browser. Since it uses Babel standalone, it requires no build step.

To integrate this into an actual React project, you'll need the `easemotion.min.css` file installed and imported.
