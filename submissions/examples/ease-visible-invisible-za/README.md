## What does this do?

Provides `ease-visible` and `ease-invisible` CSS visibility utility classes — unlike `display: none`, these preserve the element's layout space while hiding it visually.

## How is it used?

```html
<div class="ease-invisible-za">Hidden but space preserved</div>
<div class="ease-visible-za">Visible</div>
```

## Why is it useful?

EaseMotion already has `ease-hidden` (display: none), but there's no visibility utility. `visibility: hidden` is essential when you need to hide content without collapsing layout — for example in animated transitions, dropdown menus, or maintaining grid/flex alignment.
