# Animated Command Palette (`ease-command-palette-xyz`)

A zero-dependency, CSS-only animated command palette component designed for the **EaseMotion CSS** framework. Perfect for modern applications with smooth modal transitions, search interfaces, and keyboard navigation highlights.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using checkbox hack for toggle functionality.
- **Animation-First**: Smooth modal scale/fade, backdrop blur, item stagger, and hover transitions using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Modal Transition**: Smooth scale and fade animation on open/close.
- **Backdrop Blur**: Frosted glass effect behind the modal.
- **Search Interface**: Clean search input with icon and keyboard shortcut hint.
- **Grouped Commands**: Organized sections with titles (Navigation, Actions, Recent).
- **Keyboard Shortcuts**: Visual display of keyboard shortcuts for each command.
- **Selected State**: Highlighted selected item with distinct styling.
- **Hover Effects**: Smooth background transitions on hover.
- **Item Animations**: Staggered fade-in for command items.
- **Footer Hints**: Keyboard navigation instructions at the bottom.
- **Compact Variant**: Smaller modal for quick searches.
- **Accessible**: Proper focus states and keyboard navigation support.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Toggle Button
```html
<input type="checkbox" id="palette-toggle" class="ease-palette-xyz-toggle">
<label for="palette-toggle" class="ease-btn-xyz ease-btn-xyz-primary">
  Open Command Palette
</label>