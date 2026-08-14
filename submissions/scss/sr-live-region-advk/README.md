# aria-live region Sass mixins

Sass mixins for aria-live regions: a visually-hidden clip-based variant (not `display:none`, which some screen readers skip announcing) for announce-only status text, plus a visible variant for status toasts that should also be seen.

## What it does
- `sr-only-live` — visually hides a live region while keeping it announceable (clip-based, not `display:none`).
- `visible-live($bg, $fg, $duration)` — visible toast styling with a polite enter animation and reduced-motion guard.

## Files
- `_sr-live-region.scss` — the mixin partial

## Usage
```scss
@use "./sr-live-region" as *;

.sr-status { @include sr-only-live; }
.toast     { @include visible-live(#1e293b, #f1f5f9); }
```

```html
<p class="sr-status" role="status" aria-live="polite">Saved.</p>
<div class="toast" role="status" aria-live="polite">Saved.</div>
```

## Why clip, not display:none
Some screen readers do not announce content inside `display:none` elements. A clip-based hide keeps the text in the accessibility tree so the live region fires.

Closes #75557
