## What does this do?

Provides utility classes for `display: table`, `table-cell`, `table-row`, and `table-caption`.

## How is it used?

```html
<div class="display-table" style="height:200px">
  <div class="display-table-cell" style="vertical-align:middle">
    Vertically centered content without flexbox
  </div>
</div>
```

## Why is it useful?

Classic table display layout is still the best way to vertically center content in older browsers. These utilities offer that pattern without a full flexbox dependency. Missing from EaseMotion core.
