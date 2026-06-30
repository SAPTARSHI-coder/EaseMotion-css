# ease-autofill — Issue #23959

## What

Utility classes for controlling browser autofill appearance on `<input>` elements. Browsers apply a default yellow background to autofilled fields, which often clashes with dark themes. These utilities let you remove or restyle the autofill overlay.

| Class                  | Effect                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `.ease-autofill-none`  | Removes the default autofill background using a transparent `box-shadow` trick and infinite transition hack              |
| `.ease-autofill-theme` | Replaces the autofill background with a custom color via `--ease-autofill-bg` and text color via `--ease-autofill-color` |

Custom properties:

- `--ease-autofill-bg` (default `#1e293b`) — background color for autofilled inputs
- `--ease-autofill-color` (default `#e2e8f0`) — text color for autofilled inputs

## How

Apply to any `<input>` element that may be autofilled:

```html
<input class="ease-autofill-none" autocomplete="email" />
<input
  class="ease-autofill-theme"
  autocomplete="name"
  style="--ease-autofill-bg: #1e3a5f; --ease-autofill-color: #93c5fd;"
/>
```

Override globally:

```css
:root {
  --ease-autofill-bg: #0f172a;
  --ease-autofill-color: #e2e8f0;
}
```

## Why

Browser autofill is a critical usability feature, but its default yellow background rarely fits custom dark designs. Rather than fighting the browser with JavaScript, these CSS-only utilities provide a clean, maintainable way to either strip or theme the autofill overlay. They use the well-established `-webkit-box-shadow` inset technique combined with CSS custom properties for easy theming.
