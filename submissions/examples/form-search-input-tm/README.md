# Form — Search Input

## What does this do?
Adds `.ease-input-search` — a search input with a built-in clear
button (rendered via `::-webkit-search-cancel-button` and a
fallback pseudo-button).

## How is it used?
Apply the class to an input:

    <input type="search" class="ease-input ease-input-search" placeholder="Search...">

## Why is it useful?
The native `type="search"` already gives users a clear button in
most browsers, but the styling doesn't match the framework's
`.ease-input` style and lacks dark mode polish. This wrapper
class unifies the visual treatment.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` to see the search input.

## Contribution Notes
- Pure CSS addition
- Uses `appearance: none` and a custom clear button styled via
  the `::-webkit-search-cancel-button` pseudo-element
