# Cascade Fix for Core Animation Utilities

## What does this do?

This submission proposes a structural refactor to the core framework to remove the overuse of `!important` tags from animation utilities (e.g., `fade.css`, `slide.css`, `misc.css`, etc.).

## How is it used?

Developers apply standard `ease-*` animation classes. With the `!important` tags removed from the core utilities, developers can now easily apply their own utility classes (like `.custom-slow-animation`) to cleanly override `animation-duration` or `transform` properties without needing specificity hacks.

## Why is it useful?

The core animation files heavily rely on `!important` in their media queries and conflict resolution blocks. This completely breaks the standard CSS cascade. By removing them, the framework becomes truly un-opinionated and highly customizable while still respecting `prefers-reduced-motion` at a standard specificity level.
