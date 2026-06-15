# CSS Nesting (&) Demo

## What

A component-based page demonstrating CSS Nesting (the `&` selector) for cleaner, more maintainable styles. Includes card, button, and list components built entirely with nested selectors, featuring BEM-style concatenation (`&__title`, `&--featured`), hover/focus states, and nested `@media` queries.

## How

The `.card` block nests `&__img`, `&__body`, `&__title`, `&__text`, `&__btn`, and modifier variants like `&--featured` and `&--outline` inside the parent rule. Buttons use `&--primary`, `&--danger`, `&--ghost`, `&--sm`, and `&--lg` concatenations. The `.list` component nests `&__item` with `&--done` and `&--active` sub-variants. Media queries are nested inside component blocks to keep responsive overrides co-located with the component styles.

## Why

CSS Nesting reduces repetition, keeps related styles grouped together, and makes the relationship between parent, element, and modifier visually obvious. It mirrors how developers think about component hierarchies and is especially valuable in projects that use BEM or similar naming conventions. No preprocessor is needed — this is native CSS.
