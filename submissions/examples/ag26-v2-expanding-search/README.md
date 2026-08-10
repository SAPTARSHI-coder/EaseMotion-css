# Expanding Search Bar

A minimal search component that consists of just an icon until hovered or focused, expanding into a full text input.

## Preview
Open `demo.html` in your browser. Hover over the circular search icon, or click on it. It will slide open to reveal an input field.

## Implementation
- The `.search-input` element starts with `width: 0` and no padding, effectively hiding it.
- When the parent `.search-box` is `:hover`ed, or when the `.search-input` is in `:focus`, a CSS rule changes the width to `200px` and adds padding.
- A `transition` on the `width` and `padding` animates the opening and closing of the text box.
