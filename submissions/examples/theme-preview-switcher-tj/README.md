# Interactive Documentation Theme Preview Switcher

## What does this do?
Adds a Light / Dark / System theme switcher for the documentation preview, letting visitors instantly see how components, buttons, forms, and animations look across themes, with the choice remembered via `localStorage`.

## How is it used?
```html
<div class="theme-preview-switcher" role="group" aria-label="Theme switcher">
  <button data-theme="light" class="theme-btn">☀️ Light</button>
  <button data-theme="dark" class="theme-btn">🌙 Dark</button>
  <button data-theme="system" class="theme-btn">💻 System</button>
</div>
```
Each button sets a `data-doc-theme` attribute (`light` or `dark`) on `<html>`. Selecting `system` follows `prefers-color-scheme` and updates live if the OS setting changes. The selection is saved to `localStorage` under the key `easemotion-doc-theme` and restored on page load, with a safe fallback to `system` if storage is unavailable (e.g. private browsing).

All demo components (buttons, card, form inputs, animation box) are built entirely on CSS custom properties (`--doc-bg`, `--doc-surface`, `--doc-text`, `--doc-accent`, etc.) that get reassigned per theme, so no component markup needs to change when the theme switches.

## Why is it useful?
EaseMotion CSS already ships dark-mode-capable CSS variables, but there was no quick way to preview that support while browsing the docs. This switcher:
- Lets contributors and users verify component appearance in both themes instantly, without changing OS settings.
- Demonstrates EaseMotion's theming approach in a concrete, interactive way (rather than just documenting it in prose).
- Persists the user's preferred docs appearance across visits, improving the browsing experience.
- Is scoped entirely to the documentation preview — it doesn't alter any core animation classes or generated component HTML.