# Dark Mode Token Layer

A robust CSS variable layer that abstractions static colors into dynamic theme tokens. This allows developers to easily switch their entire EaseMotion CSS application between light and dark themes using a simple `data-theme` attribute, rather than relying exclusively on un-toggable `@media (prefers-color-scheme: dark)` queries.

## Files

- `demo.html` - Interactive demonstration featuring JavaScript theme toggle buttons.
- `style.css` - The CSS implementation defining the `--ease-theme-*` variables and the `data-theme` override selectors.

## Details

This addresses the "Dark mode token layer" requirement currently listed as "Planned" in the project Roadmap.
By wrapping colors in theme tokens, developers gain full control over the theme state, allowing for dynamic, animated theme switching without breaking the zero-dependency framework architecture.
