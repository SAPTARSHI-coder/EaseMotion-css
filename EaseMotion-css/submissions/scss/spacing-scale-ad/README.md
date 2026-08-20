# Spacing Scale function

> Issue: [#63803](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63803)

Named spacing steps with build-time validation, replacing scattered magic rem values.

## Functions

### `space($step)` → `Number`

```scss
.card { padding: space(md); gap: space(sm); }
```

Steps: `0` · `3xs` · `2xs` · `xs` · `sm` · `md` · `lg` · `xl` · `2xl` · `3xl` · `4xl` · `5xl`

### `space-pair($block, $inline)` → block + inline shorthand
### `space-between($from, $to)` → the gap between two steps
### `has-space($step)` → `Bool`, non-throwing

## Mixins

### `space-vars($prefix, $selector)` → `--space-md: 1rem` etc.
### `space-utilities($prefix, $props)` → `.u-p-md`, `.u-pi-lg`, `.u-g-sm` etc.
### `flow-space($step)` → vertical rhythm via `> * + *`
### `register-space($name, $value)`

## Configuration

```scss
@use "spacing-scale" with ($spacing-scale: ("sm": 8px, "md": 16px, "lg": 24px));
```

## Why it fits EaseMotion

**The failure this prevents is drift, not error.** Nothing breaks when someone writes `padding: 0.9rem` next to a component using `1rem` — it just looks slightly off, nobody can articulate why, and over a few hundred commits the codebase accumulates a dozen near-identical values that no longer form a system. Naming the steps makes an off-scale value a deliberate act rather than an accident.

`@error` on an unknown step matters because the alternative is silent. A typo'd Sass variable resolves to `null`, which emits an invalid length, which the browser **discards** — so the padding simply does not apply, with nothing in the build to say so.

**`flow-space` uses the owl selector `> * + *` rather than a margin on every child.** A margin on all children puts a stray top margin on the first one, which then has to be reset with `:first-child { margin-top: 0 }` — and that reset is itself the bug, because it breaks the moment the container gains a wrapper or the first child is conditionally rendered. Spacing only *between* siblings has no first-child case at all.

The scale grows non-linearly at the top: large spacings need bigger jumps to read as distinct, so `4xl` is 6rem rather than continuing a fixed increment.

Utilities and `flow-space` both use logical properties (`padding-inline`, `margin-block-start`), so they mirror correctly in RTL without a second stylesheet.
