# Navbar — Bottom and Search Variants

## What does this do?
Adds two navbar variants:
- `.ease-navbar-bottom` — fixed to the bottom of the viewport,
  used as mobile-style tab bar or action bar
- `.ease-navbar-search` — adds a prominent search input as the
  center of the navbar

## How is it used?
Apply the variant alongside `.ease-navbar-glass`:

    <nav class="ease-navbar-glass ease-navbar-bottom">...</nav>
    <nav class="ease-navbar-glass ease-navbar-search">
      <input class="ease-input" placeholder="Search...">
    </nav>

## Why is it useful?
The default `.ease-navbar-glass` is a top-of-page bar. Bottom
navbars are common in mobile-style layouts, and search-heavy
navbars (GitHub, Algolia) are common in app shells. Both currently
require custom CSS.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` in your browser to see both variants.

## Contribution Notes
- Pure CSS addition
- Bottom variant respects safe-area-inset for mobile
