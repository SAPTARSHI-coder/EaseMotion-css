# Footer Font Size Bug Demo

## What does this do?

Demonstrates that the footer component in `components/footer.css` uses hardcoded `font-size` values (0.875rem, 0.9rem, 0.8rem) instead of the `--ease-text-*` token system.

## How is it used?

Open `demo.html` in a browser. Click the override buttons to change `--ease-text-sm` and `--ease-text-xs` — the footer text sizes won't respond because they don't reference these tokens.

## Why is it useful?

Users who customize typography via `--ease-text-sm`, `--ease-text-xs`, etc. will find the footer unresponsive. Every other component (buttons.css, cards.css, forms.css) uses text token variables.

The fix should be applied to `components/footer.css`:
```css
font-size: var(--ease-text-sm, 0.875rem);   /* line 14 */
font-size: var(--ease-text-base, 1rem);       /* line 30 */
font-size: var(--ease-text-xs, 0.75rem);      /* line 151 */
```
