# Motion Engine Parser Token Collision Analysis & Demo (Issue #89069)

This submission provides an interactive technical breakdown and demonstration of the `bounce` token collision inside `easemotion/engine/parser.js`.

> Part of GSSoC 2026 contributions. Fixes/Resolves Issue [#89069](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/89069).

## Problem Analysis & Resolution
In the EaseMotion CSS Motion Engine parser:
1. `'bounce'` is registered inside `ANIMATION_NAMES` (keyframe animation).
2. `'bounce'` was also registered inside `EASING_MAP` as an alias for `cubic-bezier(0.34, 1.56, 0.64, 1)`.

Because the parser loops tokens and checks `ANIMATION_NAMES.has(token)` first, any token named `"bounce"` is parsed as an animation name, leaving the easing map alias unreachable.

### Recommended Token Mapping
To specify the bounce/spring easing curve, developers should use the canonical `'spring'` easing token:

```html
<!-- Uses spring easing curve -->
<div em="fade-in 500ms spring">...</div>

<!-- Uses bounce keyframe animation -->
<div em="bounce 600ms">...</div>
```

## Structure
```
submissions/examples/89069-parser-bounce-easing-fix/
├── demo.html
├── style.css
└── README.md
```

## Tech Stack
- HTML5
- CSS3 (Keyframe Animations, Spring Bezier Curves, Custom Properties)
