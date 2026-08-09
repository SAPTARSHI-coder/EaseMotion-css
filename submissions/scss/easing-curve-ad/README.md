# Easing Curve function

> Issue: [#61719](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/61719)

A SCSS map plus accessor functions exposing EaseMotion's easing vocabulary as named tokens, with build-time validation.

## What it does

Resolves names like `spring`, `snap` and `decelerate` to their `cubic-bezier()` values, and fails the build on an unknown name.

That last part is the whole point. A typo'd easing keyword in raw CSS — `transition: transform 300ms ease-ouy` — causes the browser to discard the **entire declaration**. The transition silently does not happen, and nothing in the build output or the console tells you. Resolving easings through a function converts that silent runtime failure into a loud build failure.

Curve values mirror `EASING_MAP` in `easemotion/engine/parser.js`, so SCSS consumers and the runtime engine stay in agreement rather than drifting apart.

## Functions

### `easing-curve($name)`

```scss
.panel {
    transition: transform 320ms easing-curve(spring);
}
```

| Parameter | Type | Description |
|---|---|---|
| `$name` | `String` | Token name, quoted or unquoted. Unknown names raise a build error listing every valid token. |

Returns a `cubic-bezier()` value, or `linear`.

### `has-easing($name)` → `Bool`

Non-throwing membership test, for callers that prefer a fallback over a build failure.

```scss
$curve: if(has-easing($input), easing-curve($input), easing-curve(ease-out));
```

### `easing-names()` → `List`

Every registered token name — useful for generating docs tables or utility classes.

## Mixins

### `register-easing($name, $curve)`

Adds a project-specific easing. Refuses to overwrite an existing token, because silently shadowing `ease-out` project-wide from inside a partial is a debugging problem nobody enjoys.

```scss
@include register-easing("overshoot", cubic-bezier(0.2, 1.6, 0.4, 1));
```

### `easing-utilities($prefix: "ease-fn")`

Emits one utility class per registered token.

```scss
@include easing-utilities("ease-fn");
// → .ease-fn-spring { transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1); }
```

## Available tokens

| Token | Value |
|---|---|
| `ease` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` |
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `linear` | `linear` |
| `spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `snap` | `cubic-bezier(0.77, 0, 0.175, 1)` |
| `decelerate` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `accelerate` | `cubic-bezier(0.55, 0, 1, 0.45)` |

## Configuration

```scss
@use "easing-curve" with ($easing-curves: ("ease-out": cubic-bezier(0, 0, 0.2, 1)));
```

## Why it fits EaseMotion

EaseMotion is built on the idea that motion should be human-readable — `em="fade-in spring"` rather than a raw bezier. This brings the same vocabulary to SCSS consumers, so a stylesheet and an `em=""` attribute describing the same motion use the same word, and a mistyped word stops the build rather than silently dropping the animation.
