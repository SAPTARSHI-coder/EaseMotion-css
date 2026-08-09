# CSS-only Accordion — `ease-accordion-mp`

A fully CSS-only accordion component using the checkbox hack. No
JavaScript, no fixed pixel heights — panel expand/collapse animates
smoothly using the `grid-template-rows: 0fr → 1fr` technique.

## What does this do?

Provides an accordion where each item independently expands/collapses on
click, with a smoothly animated height transition and a rotating chevron
icon, implemented with zero JavaScript.

## How is it used?

```html
<div class="ease-accordion-mp">
  <div class="ease-accordion-mp__item">
    <input type="checkbox" id="acc-1" class="ease-accordion-mp__toggle" />
    <label for="acc-1" class="ease-accordion-mp__header">
      <span>Question or heading text</span>
      <span class="ease-accordion-mp__icon" aria-hidden="true"></span>
    </label>
    <div class="ease-accordion-mp__panel">
      <div class="ease-accordion-mp__panel-inner">
        Panel content goes here.
      </div>
    </div>
  </div>
  <!-- repeat .ease-accordion-mp__item for each panel -->
</div>
```

Each item needs a unique `id`/`for` pair linking its checkbox and label.
Add the `checked` attribute to any checkbox you want open by default.

To make the accordion single-open (only one panel at a time), change every
`type="checkbox"` to `type="radio"` and give them all the same `name`
attribute.

## Why is it useful?

This closes a gap on EaseMotion's roadmap — a CSS-only accordion/tabs
pattern was planned but not yet implemented. It fits the framework's
animation-first, dependency-free philosophy: the entire open/close motion
is driven by native CSS transitions on `grid-template-rows`, which avoids
the common `max-height` hack's arbitrary guessed values and mistimed
transitions. Because it's checkbox-driven, it also works with zero
JavaScript and remains keyboard accessible (tab to the label, hit
Space/Enter to toggle, since labels linked to checkboxes proxy activation).

## Files in this submission

- `demo.html` — self-contained demo, opens directly in a browser
- `style.css` — `ease-accordion-mp` styles and the grid-based height animation
- `README.md` — this file
