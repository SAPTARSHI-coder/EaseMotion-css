# Fix Tooltip prefers-reduced-motion

## What does this do?

Adds a `@media (prefers-reduced-motion: reduce)` block to `.ease-tooltip` so
the scale and translate animation is disabled for users who have enabled
**Reduce Motion** in their OS accessibility settings.

## How is it used?

```html
<span class="ease-tooltip" data-tooltip="Helpful hint text">
  Hover me
</span>
```

No change to the HTML API. The fix is CSS-only and activates automatically
when the user's OS reports `prefers-reduced-motion: reduce`.

## Why is it useful?

CSS animations involving `scale()` and `translateY()` can trigger vestibular
symptoms (dizziness, nausea) in users with vestibular disorders. WCAG 2.1
Success Criterion 2.3.3 (Animation from Interactions, AAA) requires that
motion animation triggered by interaction can be disabled.

The fix removes the `scale` + `translateY` transform entirely under
`prefers-reduced-motion: reduce`, keeping only a short opacity crossfade
(which is considered acceptable per WCAG guidance since it does not involve
spatial movement).

Fixes: #35724
