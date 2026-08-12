# ease-snap-stop — Scroll Snap Stop Utility Classes

Utility classes for `scroll-snap-stop`, controlling whether a fast scroll/swipe/fling can skip past intermediate snap points. Existing scroll-snap utilities in `core/utilities.css` (`.ease-snap-x`/`.ease-snap-y` for `scroll-snap-type`, `.ease-snap-center`/`-start`/`-end` for `scroll-snap-align`) have no equivalent for `scroll-snap-stop`.

## Classes

| Class | `scroll-snap-stop` |
|-------|----------------------|
| `.ease-snap-stop-normal` | `normal` |
| `.ease-snap-stop-always` | `always` |

## Usage

```html
<!-- Default carousel — fast flicks may skip multiple items -->
<div class="gallery ease-snap-x ease-snap-stop-normal">...</div>

<!-- Step-by-step flow — every item must be seen -->
<div class="onboarding ease-snap-x ease-snap-stop-always">...</div>
```

## When to use each class

| Class | Best for |
|-------|----------|
| `.ease-snap-stop-normal` | Image carousels, galleries — natural fast-flick browsing |
| `.ease-snap-stop-always` | Onboarding flows, story viewers, step wizards |

## Notes

- `scroll-snap-stop` only has an effect inside an element with `scroll-snap-type` set (e.g. `.ease-snap-x`/`.ease-snap-y`)
- Supported in all modern browsers (Chrome, Firefox, Safari, Edge)
- `!important` used to match the existing `!important` convention already used by `.ease-snap-x`/`-y`/`-center`/`-start`/`-end` in `core/utilities.css`

## Why it fits EaseMotion CSS

EaseMotion CSS already ships `scroll-snap-type` and `scroll-snap-align` utilities but has no control over snap-skipping behavior. These classes complete the scroll-snap utility set.

Closes #11580
