# Keyboard Focus Shape Preservation

Fixes issue #1221 where keyboard focus deforms rounded buttons and cards.

## What does this do?

Preserves each component's intended `border-radius` when it receives keyboard focus, so pill buttons stay fully rounded and cards keep their corner radius.

## How is it used?

Load `style.css` after EaseMotion CSS. The overrides restore shape on focus for pill buttons and cards:

```html
<link rel="stylesheet" href="easemotion.css">
<link rel="stylesheet" href="style.css">

<button class="ease-btn ease-btn-primary ease-btn-pill">Focus Me</button>

<div class="ease-card ease-card-shadow" tabindex="0">
  <div class="ease-card-body">Card content</div>
</div>
```

## Why is it useful?

EaseMotion CSS is animation-first and accessibility-minded. A visible focus ring should not change a component's shape. The bug comes from `core/base.css` forcing `border-radius: var(--ease-radius-sm)` on unlayered `:focus-visible` rules, which overrides layered utilities like `.ease-btn-pill`.

**Recommended maintainer integration:** remove `border-radius` from the global `:focus-visible` block in `core/base.css`. The outline will follow each element's existing corners without extra overrides.

## Linked Issue

Closes #1221
