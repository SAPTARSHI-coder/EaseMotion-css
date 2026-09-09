## What

A side-by-side comparison of `scrollbar-gutter: stable` versus the default `scrollbar-gutter: auto`. Two identically-sized panels start with minimal content; clicking "Add line" fills them until a scrollbar appears. The stable panel always reserves space for the scrollbar, so its content never shifts.

## How

Set `scrollbar-gutter: stable` on the overflow container to reserve the scrollbar track width (typically 16–17px) on the inline-end edge, whether or not a scrollbar is actually visible. The default panel uses `scrollbar-gutter: auto`, which only reserves space when overflow triggers a scrollbar. Buttons add/remove content lines to trigger the visual comparison.

## Why

Layout shift from appearing/disappearing scrollbars degrades user experience, especially in modals, sidebars, and datatables where `overflow: auto` is common. `scrollbar-gutter: stable` eliminates this reflow with a single CSS declaration — no more measuring scrollbar width in JavaScript or forcing overlay scrollbars.
