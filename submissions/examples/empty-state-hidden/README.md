# :empty State Hidden

## Description
Uses the `:empty` pseudo-class to hide elements that contain no content. Three demonstrations: content boxes (Box 2 and 4 are empty and hidden), a task list with an empty-state placeholder that toggles visibility, and a comment feed where blank comments are suppressed. A small JavaScript snippet provides interactive "Clear All" and "Reset" buttons for the task list.

## Usage
Open `demo.html`. Observe that empty boxes and comments are hidden. Click "Clear All Tasks" to empty the task list — the empty-state message appears automatically. Click "Reset Tasks" to restore items and hide the empty-state message. All hiding logic uses CSS `:empty` and adjacent sibling selectors.

## Browser Support
`:empty` is supported in Chrome 1+, Firefox 1+, Safari 3.1+, Edge 12+, and Opera 9.5+. It matches elements that have no child nodes (including text nodes). Be aware that whitespace-only elements are not considered empty. The `prefers-reduced-motion` query disables all transitions.
