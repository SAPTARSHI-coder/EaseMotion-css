# Smooth Accordion

## What does this do?

Animates a native `<details>` element open and closed to its true content
height, using a `grid-template-rows: 0fr -> 1fr` transition.

## How is it used?

```html
<details class="acs-item">
  <summary class="acs-sum">Question</summary>
  <div class="acs-panel"><div class="acs-inner">
    <p>Answer.</p>
  </div></div>
</details>
```

The double wrapper is required: `.acs-panel` is the grid, `.acs-inner` supplies
the `overflow: hidden` that a `0fr` track does not clip on its own.

## Why is it useful?

`<details>` cannot be transitioned directly, so accordions are normally rebuilt
in JavaScript with a measured `max-height`, or given a guessed ceiling. A guessed
ceiling is wrong in both directions — too low clips long answers, too high wastes
most of the easing curve on empty space so the panel appears to snap open and
then crawl.

Transitioning a grid track avoids the guess entirely: `1fr` resolves to the
content's actual height, so the easing maps onto the real distance for any
content length, including text that reflows at narrow widths.

Keeping the native element means keyboard support, the expanded/collapsed state
exposed to assistive technology, and browser find-in-page opening the right
section all come free, rather than being reimplemented with ARIA that has to stay
in sync.
