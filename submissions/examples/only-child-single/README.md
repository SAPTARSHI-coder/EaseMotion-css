# Only Child & Single

## What does this do?
Demonstrates `:only-child` and `:only-of-type` pseudo-classes for styling solo items differently from items with siblings. Shows empty states and single-item containers.

## How is it used?
Apply to elements that should change appearance when they are the only child inside a parent:

    <div class="oc-container">
      <p class="oc-solo">The only paragraph here</p>
    </div>

## Why is it useful?
Components often need special treatment when alone versus in a group. `:only-child` eliminates conditional class logic, making layouts adapt automatically whether they contain one item or many.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
