## What

This example demonstrates the `writing-mode` property with `vertical-rl` and `vertical-lr` values, combined with `text-orientation` (`upright` vs `mixed`). It shows how to create vertical Japanese-style text layout, how Latin characters behave differently under each orientation mode, and how horizontal inline snippets can be embedded within vertical text.

## How

Six sections cover: `vertical-rl` (right-to-left, traditional East Asian), `vertical-lr` (left-to-right, Mongolian-style), `text-orientation: upright` (Latin characters remain unrotated), `text-orientation: mixed` (Latin rotated 90°, CJK upright), mixed vertical/horizontal content using `writing-mode: horizontal-tb` on inner spans, and a side-by-side comparison of upright vs mixed. The vertical containers use a flex display to allow multiple paragraphs side by side.

## Why

Vertical text layout is essential for East Asian typography, especially Japanese and traditional Chinese. The `writing-mode` property enables this on the web without images or complex workarounds. Understanding the interaction between `writing-mode` and `text-orientation` is crucial for proper multilingual typesetting, where CJK characters, Latin text, and numerals each have different orientation conventions.
