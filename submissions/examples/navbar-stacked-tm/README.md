# Navbar — Stacked Layout

## What does this do?
Adds `.ease-navbar-stacked` — a navbar variant that arranges
brand and menu on separate vertical rows for tall or hero
headers.

## How is it used?
Apply the variant alongside `.ease-navbar-glass`:

    <nav class="ease-navbar-glass ease-navbar-stacked">
      <div class="ease-navbar-brand">Brand</div>
      <div class="ease-navbar-menu">
        <a class="ease-navbar-item" href="#">Link 1</a>
        <a class="ease-navbar-item" href="#">Link 2</a>
      </div>
    </nav>

## Why is it useful?
The default navbar is a single horizontal row. Some hero-style
headers (like the framework's own docs) stack the brand on top
and the menu below. Currently this requires custom CSS.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` to see the stacked layout.

## Contribution Notes
- Pure CSS addition
- Composes with the existing search and bottom variants
