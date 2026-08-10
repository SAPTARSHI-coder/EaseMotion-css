# Padding Block Logical Utilities

## What does this do?

This adds logical, flow-relative padding-block utilities to EaseMotion CSS. In contrast to physical padding (such as top/bottom), logical block properties adapt automatically depending on the component's text direction and writing mode.

## How is it used?

Apply these logical utility classes on any layout container:

```html
<div class="ease-padding-block-6">
  <p>Padded relative to the block axis direction.</p>
</div>
```

Available classes:

- `.ease-padding-block`: Maps to `--ease-space-4` block padding.
- `.ease-padding-block-0`: Maps to `0` block padding.
- `.ease-padding-block-1`: Maps to `--ease-space-1` block padding.
- `.ease-padding-block-2`: Maps to `--ease-space-2` block padding.
- `.ease-padding-block-3`: Maps to `--ease-space-3` block padding.
- `.ease-padding-block-4`: Maps to `--ease-space-4` block padding.
- `.ease-padding-block-6`: Maps to `--ease-space-6` block padding.
- `.ease-padding-block-8`: Maps to `--ease-space-8` block padding.
- `.ease-padding-block-10`: Maps to `--ease-space-10` block padding.
- `.ease-padding-block-12`: Maps to `--ease-space-12` block padding.
- `.ease-padding-block-16`: Maps to `--ease-space-16` block padding.

## Why is it useful?

It provides standardized, internationalization-friendly spacing logic that works across vertical and horizontal text orientations seamlessly.
