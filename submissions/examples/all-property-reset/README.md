## What

This example demonstrates the `all` CSS shorthand property with its three keyword values — `initial`, `unset`, and `revert` — used to isolate a component from the inherited styles of a heavily styled parent. A parent div applies extreme typography, colors, alignment, borders, and backgrounds; child cards then use each `all` value to break free from that inheritance.

## How

Five cards sit inside a parent with a chaotic style set (Comic Sans, large font, yellow text, centered alignment, dashed border, gradient background). The first card inherits everything with no reset. The remaining three apply `all: initial` (all properties to their initial values — note the div becomes inline), `all: unset` (inheritable properties inherit, non-inheritable reset), and `all: revert` (browser defaults restored). A separate comparison grid shows all four states side by side with identical content.

## Why

When building embeddable components or third-party widgets that must resist parent page styles, the `all` property provides a powerful reset mechanism. Understanding the differences between `initial`, `unset`, and `revert` is critical: `initial` can break layout (inline divs), `unset` offers a middle ground, and `revert` respects user-agent defaults. This demo makes those differences visually obvious so developers can choose the right tool for their isolation needs.
