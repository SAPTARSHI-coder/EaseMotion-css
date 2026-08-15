# CSS Dropdown Menu

## What does this do?
A CSS-only hover-triggered dropdown navigation menu with multi-level submenu support.

## How is it used?
Add the dropdown markup to any navigation:

    <ul class="dropdown-menu">
      <li class="dropdown-item dropdown-has-sub">
        <a href="#">Parent</a>
        <ul class="dropdown-sub">
          <li class="dropdown-item"><a href="#">Child</a></li>
        </ul>
      </li>
    </ul>

## Why is it useful?
Provides accessible, lightweight navigation dropdowns without JavaScript, with smooth hover animations and multi-level nesting.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
