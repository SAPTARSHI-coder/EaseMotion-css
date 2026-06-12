# Expanding Search Bar

A self-contained, **pure-CSS** navbar search control that starts as a circular
icon and smoothly expands into a full text input when focused — then collapses
back to an icon when it loses focus and is empty. A common space-saving pattern
for headers and toolbars.

> This is different from `ease-search-bar-az`, which is a static, always-visible
> search bar. This example is the **expand-on-focus** interaction.

## Preview

Open `demo.html`. Click the magnifier (or press <kbd>Tab</kbd> to it) and the
field expands. Click away while it is empty and it collapses again. Type
something and it stays open.

## How it works

No JavaScript. The expand/collapse is driven entirely by CSS:

- `:focus-within` on the search container expands the input while it (or the
  icon) is focused.
- `:not(:placeholder-shown)` keeps it expanded when there is typed text.

```css
.search:focus-within .search__input,
.search__input:not(:placeholder-shown) {
  width: var(--sb-input-width);
  opacity: 1;
}
```

## Usage

```html
<form class="search" role="search">
  <label class="search__icon" for="navsearch" aria-label="Search">
    <!-- magnifier SVG -->
  </label>
  <input
    id="navsearch"
    class="search__input"
    type="search"
    name="q"
    placeholder="Search docs…"
  />
</form>
```

Adjust the expanded width with the `--sb-input-width` custom property.

## Files

```
expanding-search-bar/
├── demo.html   ← Mock navbar with the expanding search
├── style.css   ← Self-contained styles and transitions
└── README.md   ← This file
```

## Accessibility

- The input has a real, programmatic label via the `<label for="navsearch">`
  icon (`aria-label="Search"`), so it is announced to screen readers.
- Fully keyboard-operable — tabbing to the icon/input expands the field; no
  pointer required.
- Honours `prefers-reduced-motion: reduce`: the width animation is removed and
  the field is shown already expanded, so it stays usable without motion.

## Browser Support

| Browser | Supported |
| ------- | --------- |
| Chrome  | ✅        |
| Firefox | ✅        |
| Safari  | ✅        |
| Edge    | ✅        |

> Note: the "stay open when text is present" behaviour uses `:has()`, supported
> in all current evergreen browsers. The core focus-to-expand works everywhere
> via `:focus-within`.

## Why it's useful

The expanding search is one of the most common navbar space-savers. This
provides it as a lightweight, accessible, zero-JavaScript drop-in.

---

**Closes:** #3117
**Status:** Ready for review
