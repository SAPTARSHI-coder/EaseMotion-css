# Tab — Card Surface Variant

## What does this do?
Adds `.ease-tabs-card` — a tab style where each label sits inside
its own card-like surface, with the active card lifted.

## How is it used?
Apply the variant alongside `.ease-tabs`:

    <div class="ease-tabs ease-tabs-card">
      <input class="ease-tab-input" type="radio" name="c" id="c1" checked>
      <input class="ease-tab-input" type="radio" name="c" id="c2">
      ...
    </div>

## Why is it useful?
The existing tab component is a single connected bar with a
sliding underline. The card variant gives each label its own
discrete surface, useful in dashboards where tabs feel like
discrete filters.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` to see the card-style tabs.

## Contribution Notes
- Pure CSS addition
- Composes with the existing vertical and pill variants
