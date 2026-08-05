# Glass Card Token Fallback Fix

This submission resolves the issue where the `.ease-card-glass` component in dark mode was bypassing the framework's design token system.

## Changes
- Updated `core/variables.css` to define `--ease-color-text-dark`.
- Removed hardcoded fallback color from `components/cards.css`.
- Ensured consistent text color in dark mode using the token registry.

## Why this fits EaseMotion CSS
This fix ensures that users can globally override text colors through tokens, maintaining the framework's design-first philosophy.