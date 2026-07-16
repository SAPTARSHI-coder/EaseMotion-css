# ease-keyboard-shortcut-badge

A tactile, 3D-styled keyboard shortcut (`<kbd>`) badge that physically depresses when clicked.

## Usage
Open demo.html in a browser. Use the `.ease-kbd` class on `<kbd>` elements. Group them with separators inside a `.ease-kbd-group` container.

## Custom Properties
| Property | Default | Description |
|---|---|---|
| --kbd-bg | #f8fafc | Badge background color |
| --kbd-border | #cbd5e1 | Badge border color |
| --kbd-shadow | #94a3b8 | 3D depth shadow color |
| --kbd-text | #334155 | Text color |

## Notes
The component uses `box-shadow` to create the 3D depth. On `:active`, it uses `transform: translateY(4px)` while simultaneously reducing the `box-shadow` offset to 0, perfectly simulating a physical key press without any JavaScript.
