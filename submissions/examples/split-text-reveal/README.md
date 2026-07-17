# Split Text Reveal

## What does this do?
Animates text characters one by one, creating a sequential reveal effect.

## How is it used?
Wrap each character in a `<span>` with class `split-char` and set `--i` to its index:

    <span class="split-char" style="--i:0">H</span>
    <span class="split-char" style="--i:1">i</span>

## Why is it useful?
Great for hero headings, title animations, and dramatic content reveals.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
