# Expand-on-Hover Search Bar

## What does this example do?
This example demonstrates a navigation bar containing a search component that starts as a compact circular icon button. When a user hovers over the container or focuses the input via keyboard, the input field smoothly animates its width to reveal itself, allowing the user to type a query.

## How is it used?
Wrap a submit button (containing a search icon) and a search input inside a `.search-bar` container form. Apply the `.ease-expand-input` utility class to the `<input>` element.

```html
<form class="search-bar">
    <button type="submit" class="search-btn">🔍</button>
    <input type="search" class="ease-expand-input" aria-label="Search">
</form>
```

The CSS utilizes `transition: width` and `opacity` triggered by the `:hover` and `:focus-within` pseudo-classes on the `.search-bar` container to smoothly reveal the input.

## Why is it useful?
In complex interfaces or mobile-friendly designs, horizontal space in navigation bars is at a premium. An expand-on-hover search bar is a standard UI pattern that saves space by hiding the text input until the user expresses intent (by hovering or tabbing to the search icon), resulting in a cleaner default state without sacrificing search discoverability.

This implementation is:
- **Accessible**: It supports both mouse (`:hover`) and keyboard navigation (`:focus-within`), includes clear focus ring styling, and utilizes semantic form and aria-labels.
- **Performant**: Uses a `cubic-bezier` timing function on a CSS `transition` for a highly polished, snappy feel.
- **Respectful**: Incorporates a `@media (prefers-reduced-motion: reduce)` query to disable the animation, allowing the input to snap open instantly for users with vestibular disorders.
