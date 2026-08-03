# Animated Tooltip Component (`ease-tooltip-xyz`)

A zero-dependency, CSS-only animated tooltip component designed for the **EaseMotion CSS** framework.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts. 

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using `:hover` and `:focus` states.
- **Animation-First**: Uses smooth `ease-ease` cubic-bezier transitions for a polished, natural feel.
- **Design Token Compatible**: Leverages EaseMotion CSS variables (`--ease-duration-fast`, `--ease-radius-sm`, `--ease-color-surface`) for seamless theming.
- **Accessible**: Triggers on both `:hover` and `:focus` (via `tabindex`), making it fully keyboard-navigable.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

1. Add the `ease-tooltip-xyz` class to any inline or inline-block element.
2. Add the `data-tooltip` attribute with your desired text.

```html
<button class="ease-btn ease-btn-primary ease-tooltip-xyz" data-tooltip="Save your changes">
  Save
</button>