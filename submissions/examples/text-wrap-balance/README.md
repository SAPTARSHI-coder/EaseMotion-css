# CSS text-wrap: balance &amp; pretty

## What does this do?

Compares CSS `text-wrap: normal`, `text-wrap: balance`, and `text-wrap: pretty` side by side. A resizable container lets you see how each mode re-wraps the same content at different widths.

## How is it used?

```css
.wrap-normal  { text-wrap: normal; }   /* default */
.wrap-balance { text-wrap: balance; }   /* equalises line lengths */
.wrap-pretty  { text-wrap: pretty; }    /* prevents orphans */
```

A range slider updates the container width, and the three columns reflow in real time. A mobile breakstack stacks the columns vertically on small screens.

## Why is it useful?

Default text-wrapping often leaves ragged right edges with awkward orphaned words. `text-wrap: balance` creates visually even lines ideal for headings, while `text-wrap: pretty` polishes the last line of paragraphs by avoiding single-word orphans. Both properties improve typographic quality with a single CSS declaration — no JavaScript line-counting needed.
