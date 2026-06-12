# --ease-space-7 Design Token (1.75rem / 28px)

### What does this do?

Adds the missing `--ease-space-7` spacing token to `core/variables.css` and
the corresponding utility classes to `core/utilities.css`, closing the gap
between `--ease-space-6` (1.5rem / 24px) and `--ease-space-8` (2rem / 32px).

### The gap

The EaseMotion CSS spacing scale currently reads:

```
--ease-space-6:  1.5rem   (24px)
                           ← 8px gap, no token
--ease-space-8:  2rem     (32px)
```

Every other adjacent pair in the scale is separated by 4–8px. The jump from
`space-6` to `space-8` skips `1.75rem` (28px) — a commonly needed value for
section padding and component rhythm. Without the token, developers hardcode
`1.75rem`, bypassing the design system entirely.

### The fix (maintainer action)

**`core/variables.css`** — add after `--ease-space-6`:

```css
--ease-space-7: 1.75rem; /* 28px */
```

**`core/utilities.css`** — add the corresponding utility classes:

```css
.ease-gap-7 {
  gap: var(--ease-space-7);
}
.ease-padding-7 {
  padding: var(--ease-space-7);
}
.ease-margin-7 {
  margin: var(--ease-space-7);
}
.ease-pt-7 {
  padding-top: var(--ease-space-7);
}
.ease-pb-7 {
  padding-bottom: var(--ease-space-7);
}
.ease-pl-7 {
  padding-left: var(--ease-space-7);
}
.ease-pr-7 {
  padding-right: var(--ease-space-7);
}
.ease-px-7 {
  padding-left: var(--ease-space-7);
  padding-right: var(--ease-space-7);
}
.ease-py-7 {
  padding-top: var(--ease-space-7);
  padding-bottom: var(--ease-space-7);
}
.ease-mt-7 {
  margin-top: var(--ease-space-7);
}
.ease-mb-7 {
  margin-bottom: var(--ease-space-7);
}
.ease-mx-7 {
  margin-left: var(--ease-space-7);
  margin-right: var(--ease-space-7);
}
.ease-my-7 {
  margin-top: var(--ease-space-7);
  margin-bottom: var(--ease-space-7);
}
```

### How is it used?

```html
<section class="ease-padding-7">
  <div class="ease-grid ease-grid-cols-3 ease-gap-7">
    <div class="ease-card">Card 1</div>
    <div class="ease-card">Card 2</div>
    <div class="ease-card">Card 3</div>
  </div>
</section>

<h2 class="ease-mb-7">Section heading with 28px bottom space</h2>
```

### Why is it useful?

EaseMotion CSS is a token-first framework — all spacing should come from
`--ease-space-*` variables. A gap in the scale forces magic number usage for
one of the most common layout spacings. Adding `--ease-space-7` completes the
numeric sequence from `space-1` through `space-8` with no gaps.
