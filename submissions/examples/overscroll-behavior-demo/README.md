## What

A two-panel layout (sidebar + main content) demonstrating `overscroll-behavior: contain` on the sidebar. When the sidebar's scroll reaches its boundary, the property prevents scroll chaining to the main page. A toggle button switches between `contain` and `auto` for side-by-side comparison.

## How

Set `overscroll-behavior: contain` on the scrollable sidebar container. JavaScript toggles it to `auto` (or removes the style) when the user unchecks the toggle. The main content area scrolls normally. Adding more items to the sidebar makes it scrollable so the effect can be felt — scrolling past the bottom of the sidebar either stops (contain) or scrolls the page behind it (auto).

## Why

Scroll chaining creates a confusing UX in interfaces with nested scroll areas — drawers, modals, chat sidebars, and code editors. `overscroll-behavior: contain` gives developers a clean, declarative way to isolate scroll boundaries without intercepting and blocking scroll events in JavaScript.
