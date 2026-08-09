# Code Line Highlight

## What does this do?

Marks added and removed lines in a documentation code block, sweeping a highlight
across new lines once before settling into a static tint.

## How is it used?

```html
<pre class="clh"><code><span class="clh-l">unchanged line</span>
<span class="clh-l clh-l--add" style="--i:0">added line</span>
<span class="clh-l clh-l--del">removed line</span></code></pre>
```

## Why is it useful?

Docs that show "add these lines" usually rely on a static background tint, which
readers skip past, or on an infinite pulse, which makes the code genuinely hard
to read — the one thing a code sample must not be.

A single finite sweep resolves the tension. It fires once on load to draw the eye
to what changed, staggered by `--i` so multi-line additions read in order, and
then stops permanently, leaving a calm tint that marks the lines without
competing with them.

The `+` and `−` gutter markers are pseudo-element `content` rather than characters
in the code, so the sample can still be copied and pasted without picking up diff
punctuation — a common annoyance with hand-written diff blocks.

Because the markers are decorative and the tint carries meaning, the
`forced-colors` block replaces both the background and the inset shadow with a
real `border-left`: `box-shadow` is dropped entirely in High Contrast mode, so a
shadow-only gutter would leave added and removed lines indistinguishable.
