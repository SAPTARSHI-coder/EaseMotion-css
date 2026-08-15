# First Child & Last Child

## What does this do?
Demonstrates `:first-child` and `:last-child` pseudo-classes for list and group styling — special styles for first and last items, removing borders from the last item.

## How is it used?
Apply to container elements where the first or last child needs distinct visual treatment:

    <ul class="fc-list">
      <li>First item</li>
      <li>Middle item</li>
      <li>Last item</li>
    </ul>

## Why is it useful?
First and last child selectors eliminate the need for utility classes like "first" or "last". They create cleaner markup for navigation menus, card decks, stacked lists, and any repeated component pattern.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
