# :focus-within Group

## Description
Demonstrates the `:focus-within` pseudo-class across three common UI patterns: form groups (blue border highlight when any input is focused), pricing cards (purple lift-and-glow effect), and table rows (green outline when a link inside is focused). The parent container changes appearance based on child focus state.

## Usage
Open `demo.html` and use <kbd>Tab</kbd> to navigate through form inputs, card links, and table action links. Each parent container — `.form-group`, `.card`, or `.table-row-focus` — highlights when any of its focusable children receives focus.

## Browser Support
`:focus-within` is supported in Chrome 60+, Firefox 52+, Safari 10.1+, Edge 79+, and Opera 47+. It is a reliable pseudo-class for grouping focus styles without JavaScript. The `prefers-reduced-motion` query disables transitions and the card lift effect for accessibility.
