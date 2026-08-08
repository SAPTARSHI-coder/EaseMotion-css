# Dark Tokens mixin

> Issue: [#63802](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63802)

Emits light and dark custom-property sets from one token map, with the cascade ordering that makes a manual override actually win.

## Mixins

### `theme-tokens($light, $dark, $attr, $prefix)`

```scss
@include theme-tokens(
  (bg: #ffffff, fg: #0b1120),
  (bg: #0b1120, fg: #f1f5f9)
);
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$light` / `$dark` | `Map` | — | Token maps. Every dark key must exist in light, or the build fails. |
| `$attr` | `String` | `data-theme` | Attribute used for the manual override. |
| `$prefix` | `String` | `''` | Optional custom-property prefix. |

### `color-scheme-hint($attr)`

### `theme-transition($duration, $selector)`

### `dark-only($attr)` / `light-only($attr)` — `@content` blocks scoped to one theme

## Why it fits EaseMotion

**The point of this mixin is a cascade ordering bug**, not dark mode itself. The naive implementation looks complete:

```scss
:root { --bg: white; }
@media (prefers-color-scheme: dark) { :root { --bg: black; } }
[data-theme="dark"] { --bg: black; }
[data-theme="light"] { --bg: white; }   /* ← loses */
```

A user whose OS is dark, who then picks "light" in the app, still gets dark. `[data-theme="light"]` and the media-query `:root` have comparable weight, so source order decides — and the media query is a `:root` rule that can come later. **The manual choice loses to the OS**, which is exactly backwards.

The fix is to nest the explicit-light override *inside* the dark media query, so it always comes later in the cascade than the rule it has to beat. That ordering is the entire reason this is a mixin rather than four hand-written blocks.

**Token maps are validated against each other.** A key present in `$dark` but missing from `$light` would silently fall back to an unset value in light mode — the token resolves to nothing and the element inherits. That fails the build with a message naming the key.

`color-scheme-hint` matters more than it looks: without `color-scheme`, a dark page still renders white scrollbars and light-styled checkboxes, because the UA does not know the page changed.

`theme-transition` lists the properties that actually change rather than using `transition: all` — a global transition makes every unrelated hover on the page sluggish for its duration. It is also disabled entirely under `prefers-reduced-motion`, since a full-page colour cross-fade is a large and unavoidable motion event.
