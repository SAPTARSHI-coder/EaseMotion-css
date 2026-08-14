# focus-ring-advk

SCSS mixins for a consistent focus indicator that survives Windows High Contrast
mode.

## Configuration

```scss
@use "focus-ring-advk" as f with (
  $ring-color: #7048e8,
  $ring-width: 2px,
  $ring-offset: 4px
);
```

## Mixins

| Mixin | Use when |
|---|---|
| `focus-ring($color, $width, $offset)` | Default; standalone controls. |
| `focus-ring-inset($color, $width)` | Control sits flush inside a container. |
| `focus-ring-shadow($color, $width, $offset)` | An ancestor has `overflow: hidden` that would clip an outline. |
| `focus-ring-within($color, $width, $offset)` | Composite widget whose parent should show focus. |

## Usage

```scss
@use "focus-ring-advk" as f;

.btn { @include f.focus-ring; }
.tab { @include f.focus-ring-inset; }
.chip { @include f.focus-ring-shadow; }
.field-group { @include f.focus-ring-within; }
```

## Why it fits EaseMotion CSS

A grep for `forced-colors` across `core/`, `components/` and `easemotion/`
returns nothing, so every focus style in the framework currently depends on
author colours that High Contrast mode replaces. The result is focus rings that
range from low-contrast to invisible for exactly the users most dependent on
them.

Each mixin here pairs its normal declaration with a `forced-colors` block using
the `Highlight` system keyword, so the ring is always drawn in the colour the
user's own theme reserves for selection.

`focus-ring-shadow` is the important one. Reaching for `box-shadow` is the
standard workaround when an ancestor's `overflow: hidden` clips an outline — but
`box-shadow` is not painted at all in forced-colors mode, so that workaround
silently deletes the focus indicator. This mixin is the only one that sets
`outline: none`, and it immediately restores a real outline under
`forced-colors`, which is what makes the trade-off safe.

Using `:focus-visible` rather than `:focus` throughout means rings appear for
keyboard and programmatic focus without firing on mouse clicks.
