# Segmented Control (`ease-segmented-control`)

A horizontally connected button group where one option is always selected. Commonly used for view toggles (grid/list, day/week/month), filter tabs, and small option sets where a radio button group would be too heavy.

---

## Features

- **CSS-only**: No JavaScript required for styling. Use your preferred JS to toggle the `--active` class.
- **Four variants**: Default, Small (`--sm`), Large (`--lg`), Pills (`--pills`), Outline (`--outline`)
- **Auto width**: `.ease-segmented-control--auto` for content-based sizing instead of equal flex
- **Disabled state**: `.ease-segmented-control__option--disabled` for individual disabled options
- **Accessible**: `role="radiogroup"` on container, `role="radio"` + `aria-checked` on options
- **Dark mode**: Automatic via `prefers-color-scheme: dark`

---

## Usage

```html
<div class="ease-segmented-control" role="radiogroup" aria-label="View options">
  <button
    class="ease-segmented-control__option ease-segmented-control__option--active"
    role="radio"
    aria-checked="true"
  >
    Day
  </button>
  <button
    class="ease-segmented-control__option"
    role="radio"
    aria-checked="false"
  >
    Week
  </button>
  <button
    class="ease-segmented-control__option"
    role="radio"
    aria-checked="false"
  >
    Month
  </button>
</div>
```

### Variants

```html
<!-- Small -->
<div
  class="ease-segmented-control ease-segmented-control--sm"
  role="radiogroup"
>
  ...
</div>

<!-- Large -->
<div
  class="ease-segmented-control ease-segmented-control--lg"
  role="radiogroup"
>
  ...
</div>

<!-- Pills (fully rounded) -->
<div
  class="ease-segmented-control ease-segmented-control--pills"
  role="radiogroup"
>
  ...
</div>

<!-- Outline (underline indicator instead of filled) -->
<div
  class="ease-segmented-control ease-segmented-control--outline"
  role="radiogroup"
>
  ...
</div>

<!-- Auto width (content-based sizing) -->
<div
  class="ease-segmented-control ease-segmented-control--auto"
  role="radiogroup"
>
  ...
</div>
```

### Disabled option

```html
<button
  class="ease-segmented-control__option ease-segmented-control__option--disabled"
  role="radio"
  aria-checked="false"
  disabled
>
  Pro
</button>
```

---

## Browser Support

| Browser | Supported |
| ------- | --------- |
| Chrome  | Yes       |
| Firefox | Yes       |
| Safari  | Yes       |
| Edge    | Yes       |

---

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

---

## Preview

Open `demo.html` directly in your browser to see the component.

---

## Contribution Notes

- Class naming follows the `ease-*` BEM convention
- Active state is managed by the `--active` modifier class — wire it to your JS framework of choice
- Maintainer can integrate into `components/` after review
