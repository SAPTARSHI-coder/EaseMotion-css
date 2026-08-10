# Variable Text Skeleton

## What does this do?

Renders a multi-line paragraph skeleton where the final line is short, so the
placeholder resembles real prose rather than a stack of identical bars.

## How is it used?

```html
<div class="stb" aria-busy="true" aria-label="Loading article">
  <p class="stb-p" style="--lines: 5; --seed: 3"></p>
  <p class="stb-p" style="--lines: 3; --seed: 7"></p>
</div>
```

`--lines` sets the line count; `--seed` varies the ragged final line width.

## Why is it useful?

Text skeletons are normally built as one `<div>` per line, so a five-line
paragraph costs five elements and the line count has to be produced by the
template. Using a `repeating-linear-gradient` makes the whole paragraph a single
pseudo-element whose height is `calc(var(--lines) * 1.4rem)` — the count becomes
a number rather than markup.

The ragged last line matters more than it sounds. A block of equal-length bars
reads as a table or a loading bug; real paragraphs end mid-line, and reproducing
that is most of what makes a skeleton feel like text. Deriving the width from a
`--seed` lets adjacent paragraphs differ without any per-instance CSS.

`aria-busy="true"` on the container tells assistive technology the region is
loading, which is the part that purely visual skeletons omit — without it a screen
reader user encounters an empty region with no explanation.
