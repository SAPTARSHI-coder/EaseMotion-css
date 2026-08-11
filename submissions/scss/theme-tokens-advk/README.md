# theme-tokens-advk

A semantic colour token layer emitted as custom properties, resolving for light,
dark, manual override and forced-colors from one definition.

## Configuration

```scss
@use "theme-tokens-advk" as t with (
  $light: ("bg": #fff, "text": #111, "accent": #7048e8)
);
```

## API

- `@include theme($selector, $attr)` — emit all four resolutions.
- `token($name)` — returns `var(--t-<name>)`, erroring on unknown names.

## Usage

```scss
@use "theme-tokens-advk" as t;

@include t.theme;

.card {
  background: t.token("surface-raised");
  border: 1px solid t.token("border");
  color: t.token("text");
}
```

```html
<html data-theme="dark">
```

## Why it fits EaseMotion CSS

Nearly every submission in this repository repeats its own `prefers-color-scheme`
block with hand-picked hex values. The result is dozens of slightly different
greys and no way to restyle the framework centrally. A semantic token layer
collapses that into one definition each component references.

Naming tokens by role rather than appearance is the part that makes them durable.
`surface-raised` still means something after a rebrand; `grey-100` becomes a lie
the moment the palette shifts.

The ordering in `theme()` is deliberate and easy to get wrong. The
`[data-theme]` selectors come **after** the media query so an explicit user choice
beats the system preference — and both directions are emitted, because a site
offering a light toggle must be able to force light on a device set to dark.
Emitting only `[data-theme="dark"]` is the common bug.

`color-scheme` is set alongside each resolution so form controls, scrollbars and
the canvas background follow the theme, which custom properties alone do not
affect.

The `forced-colors` block remaps every token to a system keyword, so components
built on tokens get High Contrast support for free rather than each needing its own
override.
