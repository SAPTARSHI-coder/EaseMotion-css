# :not() Exclude Selectors

## What does this do?
Demonstrates the `:not()` negation pseudo-class for excluding specific items from styling. Shows complex `:not()` chains and practical exclusion patterns.

## How is it used?
Apply `:not()` to selectors to exclude certain elements from a rule:

    .list-item:not(.disabled) { opacity: 1; }
    .card:not(:first-child):not(:last-child) { border-radius: 0; }

## Why is it useful?
`:not()` keeps CSS declarative and avoids having to override styles. It is essential for "everything except" patterns in navigation, lists, cards, and form validation.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
