# Split Text Reveal Animation

A reusable typography utility that splits text into characters or words and
reveals them with a smooth, staggered animation from a configurable direction.

## Files
- `demo.html` — working demo with the auto-split JS and IntersectionObserver trigger
- `style.css` — all animation styling and CSS variables (pure CSS keyframes)

## Usage

```html
<h1 class="split-text-tay" data-split="chars" data-direction="up">
  Your Heading Here
</h1>
```

Include `style.css` and the small `splitTextTay()` script from `demo.html`
(or your own equivalent) to wrap the text content into `.split-unit-tay`
spans before the animation plays.

### Attributes
| Attribute | Values | Purpose |
|---|---|---|
| `data-split` | `chars` \| `words` | Split granularity |
| `data-direction` | `up` \| `down` \| `left` \| `right` | Direction each unit animates in from |

## Customization (CSS variables)

| Variable | Default | Purpose |
|---|---|---|
| `--split-duration-tay` | `0.6s` | Animation duration per unit |
| `--split-stagger-tay` | `0.04s` | Delay between consecutive units |
| `--split-distance-tay` | `24px` | Travel distance for the reveal |
| `--split-easing-tay` | `cubic-bezier(0.22, 1, 0.36, 1)` | Easing curve |

## Behavior
- Animation is paused until the element scrolls into view (`IntersectionObserver`,
  40% visibility threshold), then plays once and stops observing.
- Screen readers get the full original text via `aria-label` on the parent;
  the individual character/word spans are `aria-hidden="true"` so assistive
  tech doesn't read out fragmented letters.
- `prefers-reduced-motion: reduce` disables all animation — text renders
  instantly and fully visible.

## Dependency-free
No external libraries. The only JS is the text-splitting helper and a
native `IntersectionObserver` call (~25 lines).