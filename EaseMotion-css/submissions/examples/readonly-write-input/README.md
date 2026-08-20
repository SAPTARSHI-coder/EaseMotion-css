# :read-only / :read-write

## Description
Compares `:read-write` and `:read-only` pseudo-classes for styling editable versus non-editable fields. Editable `<input>` and `<textarea>` elements (plus a `contenteditable` div) use a blue border theme with hover and focus highlights. Read-only fields show muted colors, reduced opacity, and a `not-allowed` cursor to indicate non-interactivity.

## Usage
Open `demo.html`. The Username and Biography fields are editable — they display blue borders and respond to hover/focus. The Email and Role fields are read-only — they appear dimmed and unresponsive. The "Admin Notes" div uses `contenteditable` for a third editable pattern.

## Browser Support
`:read-write` and `:read-only` are supported in Chrome 26+, Firefox 78+, Safari 6.1+, Edge 79+, and Opera 15+. They apply to `<input>`, `<textarea>`, and `contenteditable` elements. The `prefers-reduced-motion` media query disables all transitions for accessibility.
