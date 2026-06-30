# 12850-color-scheme-dark-mode

This submission implements and demonstrates the browser's native `color-scheme` adaptation to prevent light-flashes during initial load and adapt OS-level components (such as native scrollbars, dropdown select elements, datepickers, and checkbox widgets) when dark mode themes are active or toggled.

## Features Showcase

- **White Flash Mitigation**: Declaring `color-scheme: light dark` on `:root` informs the browser layout engine before stylesheets are completely loaded.
- **Scrollbar Styling**: Dynamic adaptation of browser-provided scrollbars.
- **Native Forms**: Checkboxes, date inputs, color pickers, and select elements natively adapting their styles.

## Implementation Details

1. **Core Variables Updated**: Modified `core/variables.css` to add `color-scheme` specifications for `:root`, `@media (prefers-color-scheme: dark)`, `[data-theme="dark"]`, and `[data-theme="light"]`.
2. **Built-in Toggling**: Interactive dashboard allows changing programmatic preferences and watching the browser natively switch the layout scheme.
