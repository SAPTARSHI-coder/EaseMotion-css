# Tab — Vertical and Pill Variants

## What does this do?
Adds two orientation variants to the tab component:
- `.ease-tabs-vertical` — labels stack on the left, panels on the right
- `.ease-tabs-pill` — labels use a pill shape instead of an underline

## How is it used?
Apply the variant alongside `.ease-tabs`:

    <div class="ease-tabs ease-tabs-vertical">
      <input class="ease-tab-input" type="radio" name="v" id="v1" checked>
      ...
    </div>

    <div class="ease-tabs ease-tabs-pill">
      <input class="ease-tab-input" type="radio" name="p" id="p1" checked>
      ...
    </div>

## Why is this useful?
The existing tab component is horizontal-only with an underline
indicator. Vertical tabs are common in settings pages and sidebars,
and pill tabs are common in modern filter UIs.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` in your browser to see both new variants.

## Contribution Notes
- Pure CSS addition
- The existing nth-of-type rules for focus-visible and checked
  state continue to work since the radio inputs are unchanged
- For vertical, the underline indicator is replaced with a left
  border on the active label
