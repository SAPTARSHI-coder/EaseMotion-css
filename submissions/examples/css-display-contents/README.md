# CSS `display: contents` Layout Example

This is a self-contained example demonstrating how the CSS `display: contents` property acts on layout engines (like Flexbox or Grid).

## How It Works
The `display: contents` property makes the container disappear structurally from the rendering layout tree. The browser acts as if the element's children are direct children of the next level up in the DOM tree.

## Structure
- `demo.html`: Houses a semantic `<article>` wrapper which wraps around 3 items inside a parent flexbox.
- `style.css`: Uses `display: contents;` on the wrapper, preventing it from breaking the flex alignment.

## Use Case
This property is highly useful when you want to group layout items semantically for screen readers, SEO, or structural accessibility without introducing unnecessary visual formatting constraints.
