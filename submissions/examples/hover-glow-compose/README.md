# Hover Glow Compose
Fix #3903: `.ease-hover-glow` `box-shadow: none` overrides composed shadow classes.

## Issue
`core/animations.css` `.ease-hover-glow:hover` sets `box-shadow: none`, which clobbers
any `box-shadow` from composed classes like `.ease-shadow-lg`, `.ease-shadow-xl`.

## Workaround (for users / maintainer reference)
Users can avoid composing `.ease-hover-glow` with shadow utilities, or override
the hover rule with higher specificity:

```css
/* Option 1: Don't compose shadow classes with ease-hover-glow */
/* Option 2: Override with higher specificity */
.my-element.ease-hover-glow:hover {
  box-shadow: var(--ease-shadow-lg) !important;
  filter: drop-shadow(0 0 8px rgba(108,99,255,0.45));
}
```

## Permanent Core Fix (for maintainer)
Remove `box-shadow: none` from `.ease-hover-glow:hover` or scope it to only
reset the glow-related box-shadow (e.g. using a CSS custom property).

## Files
- `demo.html`
- `style.css`
- `README.md`
