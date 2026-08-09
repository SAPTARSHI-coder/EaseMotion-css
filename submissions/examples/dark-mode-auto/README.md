# Auto Dark Mode

Resolves #57936

## What it does
Adds a `prefers-color-scheme: dark` media query that swaps core color
tokens (background, surface, text, border, shadow) to a dark palette
automatically, based on the user's OS/browser setting — no extra class
or JS required.

## How it composes with existing theming
This layers on top of the existing `:root` override pattern described
in the README. Anyone already overriding `--ease-color-*` manually is
unaffected, since their own `:root` rule wins over the media query.

## Suggested integration
Maintainer can fold the dark values into `core/variables.css` by adding
a `@media (prefers-color-scheme: dark)` block around the existing
`--ease-color-*` custom properties, using the same token names already
defined there.

## Try it
Open `demo.html` in a browser and toggle your system theme between
light and dark.
