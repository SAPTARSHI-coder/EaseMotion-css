## What

A form UI demonstrating `field-sizing: content`, which makes `input` and `textarea` elements automatically resize their width and height to fit their content. The example includes a single-line input that grows horizontally and a textarea that grows vertically up to a `max-height` limit, alongside a fallback textarea that uses a scrollbar.

## How

Apply `field-sizing: content` to the form field, then set `min-height`/`max-height` (or `min-width`/`max-width`) to constrain growth. A `@supports (field-sizing: content)` guard applies the property only on supporting browsers. On unsupported browsers, `field-sizing: fixed` (the default) keeps the element at its specified size with `overflow-y: auto` for scrolling.

## Why

Developers have long hacked auto-growing inputs via JavaScript that observes scrollHeight or contentEditable tricks. `field-sizing: content` provides native, performant, and accessible auto-sizing directly in CSS — reducing bundle weight, eliminating layout flicker, and simplifying form UX with no JS.
