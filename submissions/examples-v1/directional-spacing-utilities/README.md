# Directional Spacing Utilities (pt / pb / pl / pr / mt / mb / ml / mr / mx / my)

### What does this do?

Expands the directional padding and margin utility classes in `core/utilities.css`
to cover `space-2`, `space-3`, `space-6`, and `space-8` — in addition to the
`space-4` variants that already exist.

### The gap

`core/utilities.css` currently defines individual-direction utilities **only for
`--ease-space-4` (1rem)**:

```
.ease-pt-4   .ease-pr-4   .ease-pb-4   .ease-pl-4
.ease-mt-4   .ease-mr-4   .ease-mb-4   .ease-ml-4
.ease-px-4   .ease-py-4   .ease-px-8   .ease-py-8
.ease-my-4   .ease-my-8
```

There are no `.ease-pt-2`, `.ease-pb-6`, `.ease-mt-8`, `.ease-mx-4`, etc.
The full-shorthand utilities (`.ease-padding-*`, `.ease-margin-*`) and gap
utilities (`.ease-gap-*`) already cover all spacing sizes — this expansion
brings directional utilities to the same level of coverage.

### The fix (maintainer action on `core/utilities.css`)

Append the block from `style.css` after the existing directional utility section
(around line 131). All values use the existing CSS custom property tokens.

### How is it used?

```html
<!-- Top padding only at space-6 -->
<section class="ease-pt-6">…</section>

<!-- Horizontal margin auto-centre with vertical breathing room -->
<div class="ease-mx-auto ease-my-6 ease-container">…</div>

<!-- Asymmetric card padding: more top/bottom, less left/right -->
<div class="ease-card ease-py-8 ease-px-4">…</div>

<!-- Bottom margin on heading to create rhythm -->
<h2 class="ease-mb-2">Section title</h2>
<p class="ease-mb-6">Body text</p>
```

### Why is it useful?

Directional spacing control is the single most common CSS layout task. Having
the full scale available for every axis lets developers compose spacing
entirely from utilities — no custom CSS needed for the most basic operations.
The expansion is purely additive, zero risk of regression.
