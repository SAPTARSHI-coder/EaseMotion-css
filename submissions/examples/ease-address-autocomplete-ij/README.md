# Ease: Address Autocomplete

An address input component with an autocomplete dropdown that slides and fades in. Selecting a suggestion fills multiple fields with an animated highlight.

## Features

- Autocomplete dropdown with scale + opacity entrance
- Hover highlight on suggestion items with animated padding
- Synchronized multi-field fill (street, city, state, ZIP)
- Success feedback animation on selection
- Custom properties for theming

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--aa-duration` | `0.25s` | Transition duration |
| `--aa-input-bg` | `#ffffff` | Input background color |
| `--aa-dropdown-bg` | `#ffffff` | Dropdown background color |
| `--aa-highlight-color` | `#4f46e5` | Highlight/accent color |
| `--aa-radius` | `8px` | Input and dropdown border radius |

## Usage

```html
<div class="autocomplete-wrapper">
  <input type="text" id="street" placeholder="Street Address">
  <ul class="dropdown" id="dropdown"></ul>
</div>
```

Populate the dropdown with `<li>` items. Add `.visible` to show. Import `style.css` and ensure Inter font is available.