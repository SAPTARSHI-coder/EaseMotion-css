# text-orientation-demo

## What

A visual exploration of vertical text layout using the CSS properties `writing-mode` (vertical-rl, vertical-lr), `text-orientation` (mixed, upright, sideways), and `text-combine-upright` (for digits and short runs of text within vertical layouts). Each combination is shown side by side with labelled sample content.

## How

A grid of cards, each applying a different combination of `writing-mode` and `text-orientation` on a container with a fixed height. The sample text includes CJK characters, Latin script, and numbers. A separate section demonstrates `text-combine-upright` applied to date strings and numeric ranges, showing how digits are compressed into a single upright character space.

## Why

Vertical text is essential for CJK (Chinese/Japanese/Korean) typography and increasingly used in editorial and creative web design for headings, sidebars, and navigation. Understanding the interaction between `writing-mode`, `text-orientation`, and `text-combine-upright` is key to producing readable, culturally appropriate vertical layouts. This demo provides a side-by-side reference for developers exploring vertical CSS typography.
