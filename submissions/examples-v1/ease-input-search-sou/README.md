# ease-input-search

## 1. What does this do?

Adds a `.ease-input-search` variant for `.ease-input` that displays an inline SVG magnifying-glass icon on the left (or right) of the input via `background-image` — using the exact same approach as the existing `.ease-select` dropdown icon, requiring zero extra HTML markup.

## 2. How is it used?

Apply `.ease-input-search` alongside the base `.ease-input` class. Combine with size, position, and state modifiers as needed.

```html
<!-- Basic search input -->
<input
  type="search"
  class="ease-input ease-input-search"
  placeholder="Search…"
/>

<!-- Sizes -->
<input
  type="search"
  class="ease-input ease-input-search ease-input-search-sm"
  placeholder="Small"
/>
<input
  type="search"
  class="ease-input ease-input-search ease-input-search-lg"
  placeholder="Large"
/>

<!-- Icon on the right (RTL or alt layouts) -->
<input
  type="search"
  class="ease-input ease-input-search ease-input-search-right"
  placeholder="Search…"
/>

<!-- State variants -->
<input type="search" class="ease-input ease-input-search is-error" />
<input type="search" class="ease-input ease-input-search is-success" />
<input type="search" class="ease-input ease-input-search" disabled />

<!-- Loading state (with CSS-only spinner) -->
<div class="ease-input-wrap">
  <input
    type="search"
    class="ease-input ease-input-search is-loading"
    placeholder="Searching…"
  />
  <span class="ease-input-spinner" aria-hidden="true"></span>
</div>
```

### Class Reference

| Class                      | Purpose                                                 |
| -------------------------- | ------------------------------------------------------- |
| `.ease-input-search`       | Adds left-aligned inline SVG search icon + left padding |
| `.ease-input-search-sm`    | Smaller padding, font, and icon size                    |
| `.ease-input-search-lg`    | Larger padding, font, and icon size                     |
| `.ease-input-search-right` | Moves the icon to the right side                        |
| `.is-error`                | Red border + glow for invalid queries                   |
| `.is-success`              | Green border + glow for successful searches             |
| `.is-loading`              | Hides the icon; pair with `.ease-input-spinner` element |
| `.ease-input-wrap`         | Relative wrapper for the spinner                        |
| `.ease-input-spinner`      | CSS-only animated loading spinner                       |

## 3. Why is it useful?

A search input with an inline icon is one of the most common UI patterns on the web — every documentation site, dashboard, e-commerce store, and SaaS product needs one. Currently, EaseMotion CSS has no built-in variant for this, forcing developers to write custom CSS every time. This submission fits the framework's philosophy by being:

- **Consistent with existing patterns** — uses the exact same `background-image` + inline SVG approach as `.ease-select`
- **Pure CSS** — zero JavaScript, zero extra HTML required for the basic variant
- **Semantic** — works on native `<input type="search">` elements for full accessibility
- **Composable** — combine size, position, and state modifiers freely
- **Accessible** — proper focus rings, ARIA-friendly, `prefers-reduced-motion` support
- **Theme-aware** — includes a CSS-only light/dark toggle demonstration via `:has()`
- **Drop-in ready** — works in any project by adding the markup and stylesheet

The icon color subtly shifts to the accent color on focus, providing clear visual feedback without any JavaScript. The loading state offers a clean CSS-only spinner pattern that integrates naturally with async search interfaces.
