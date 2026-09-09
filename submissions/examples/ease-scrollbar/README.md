# ease-scrollbar — Custom Scrollbar Styling Utility

1. What does this do? Natively customizes scrollbars across WebKit/Blink (Chrome, Safari, Edge) and Gecko (Firefox) engines using custom properties.
2. How is it used? Apply `.ease-scrollbar-thin`, `.ease-scrollbar-none`, or `.ease-scrollbar-auto` to a scrollable container.
3. Why is it useful? Unifies scrollbar appearance across different browsers and matches the app's theme without bulky JS libraries.

## API Tokens & Classes

| Property | Default | Description |
|---|---|---|
| `--ease-scrollbar-track` | `#f1f5f9` (light) / `#1e293b` (dark) | Color of the scrollbar track background |
| `--ease-scrollbar-thumb` | `#cbd5e1` (light) / `#334155` (dark) | Color of the scrollbar sliding thumb |
| `--ease-scrollbar-thumb-hover` | `#94a3b8` (light) / `#475569` (dark) | Color of the scrollbar thumb in hovered state |
| `--ease-scrollbar-radius` | `9999px` | Corner curves radius for track and thumb segments |

## Classes

- `.ease-scrollbar-thin` — Restricts scrollbar thickness to `6px`.
- `.ease-scrollbar-auto` — Applies custom styles using standard `12px` scroll width.
- `.ease-scrollbar-none` — Hides the scrollbar visually while preserving native touch and keyboard navigation.
