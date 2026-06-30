# CSS Custom Property WebKit Fallback Fix

## What does this do?

Provides graceful degradation for CSS custom properties in older WebKit browsers by wrapping variable usage inside `@supports (--c: 0)` blocks and supplying hardcoded fallback values at the base level.

## How is it used?

```html
<div class="anim-box slide-up">Hover Me</div>
```

## Why is it useful?

Older WebKit versions (Safari < 9.1, some Android WebViews) do not support CSS custom properties. Without fallbacks, animations that rely on CSS vars fail silently. This pattern ensures EaseMotion CSS classes are universally safe while still benefiting from the token system in modern browsers.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to see the effect.

## Contribution Notes

- Fixes: #9821
- Class naming was handled by the contributor
- Maintainer will rename to `ease-*` convention before merging
