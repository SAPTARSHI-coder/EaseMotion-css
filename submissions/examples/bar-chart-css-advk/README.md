# CSS Bar Chart

## What does this do?

A grouped bar chart built from a definition list, with bars growing on load from
a single value custom property.

## How is it used?

```html
<dl class="bch" style="--max: 100">
  <div class="bch-g"><dt>fade</dt><dd style="--v:12"><span></span><b>12</b></dd></div>
  <div class="bch-g"><dt>hover</dt><dd style="--v:86"><span></span><b>86</b></dd></div>
</dl>
```

`--max` scales the axis; each `--v` is a raw value, not a percentage.

## Why is it useful?

The structural choice is the point. A `<dl>` genuinely describes this data — each
`<dt>` is a label and each `<dd>` its value — so with CSS disabled or unsupported
the chart degrades into a readable term/definition list rather than a column of
empty divs. A canvas or SVG chart degrades to nothing.

Because the value stays as text inside the `<dd>`, screen readers get the actual
numbers, which is the information a chart is conveying. Most CSS bar charts put
the value only in a `title` or omit it entirely.

Heights are `calc(var(--v) / var(--max) * 100%)`, so authors pass real values and
change the scale in one place — no pre-computing percentages in the template,
which is where these charts usually drift out of sync with their data.

Growth animates `transform: scaleY()` from a bottom origin rather than `height`,
keeping it off the layout path so a chart with many bars stays smooth.
