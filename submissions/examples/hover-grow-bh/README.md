# hover-grow-bh

Accessibility enhancement for the `hover-grow` submission.

## What this adds

Adds a `prefers-reduced-motion` media query to the hover-grow effect so users who have enabled Reduce Motion in their OS settings are not shown scaling animations.

## How it works

When `prefers-reduced-motion: reduce` is detected, all `transition` and `transform` properties on hover-grow elements are disabled, while the hover effect remains functional.

## Affected elements

- `.hover-grow-card`
- `.hover-grow-btn`
- `.hover-grow-img`

## References

- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [WCAG 2.1 – 2.3.3 Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)

## Closes

Fixes #2029
