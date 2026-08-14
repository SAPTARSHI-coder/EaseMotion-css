# CSS DNA Strand Progress

### What does this do?
This component renders an animated, 3D double-helix DNA strand that fills with color from left to right based on a CSS custom property `--progress`, serving as a visually striking progress bar.

### How is it used?
Wrap two identical sets of `.dna-strand` elements (one unfilled and one filled) within a `.dna-progress-wrapper` container. Set the `--progress` CSS variable on the wrapper to control how much of the filled DNA strand is visible.

```html
<div class="dna-progress-wrapper" style="--progress: 75%;" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" tabindex="0" aria-label="DNA Replication Progress">
  <!-- Unfilled DNA Track -->
  <div class="dna-strand unfilled" aria-hidden="true">
    <div class="base-pair"></div>
    <!-- ... multiple base pairs ... -->
  </div>

  <!-- Filled DNA Track -->
  <div class="dna-strand filled" aria-hidden="true">
    <div class="base-pair"></div>
    <!-- ... multiple base pairs ... -->
  </div>
</div>
```

### Why is it useful?
It fits EaseMotion's philosophy by providing a highly complex, 3D animated data visualization using only pure CSS. It demonstrates advanced usage of `clip-path` and staggered CSS animations without relying on JavaScript or SVG, expanding the library's collection of creative, ready-to-use CSS UI patterns.
