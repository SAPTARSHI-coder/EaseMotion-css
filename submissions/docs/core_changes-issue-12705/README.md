# Interactive Playground

Adds an interactive live-editing playground to the EaseMotion CSS documentation site where users can experiment with EaseMotion classes in real-time.

## Features

- **Live HTML Editor**: Write HTML with EaseMotion classes in a textarea with syntax-friendly font and tab support
- **Live Preview**: An iframe that updates in real-time (300ms debounce) with the CDN stylesheet loaded
- **CSS Variable Controls**: Sliders and color pickers for `--ease-color-primary`, `--ease-speed-fast`, `--ease-speed-medium`, `--ease-speed-slow`
- **Class Browser**: Searchable list of all EaseMotion classes — click to insert at cursor position
- **Copy Button**: One-click copy of editor content to clipboard
- **Reset Button**: Restore the default example code
- **Resizable Panes**: Drag the divider between editor and preview
- **Persistence**: Code is saved to localStorage between sessions
- **Keyboard Shortcut**: `Ctrl+Enter` / `Cmd+Enter` to refresh preview immediately
- **Responsive**: Layout collapses to single column on mobile

## Files

| File            | Purpose                                      |
| --------------- | -------------------------------------------- |
| `demo.html`     | Playground HTML page                         |
| `playground.js` | All JavaScript logic (IIFE module pattern)   |
| `style.css`     | Playground UI styles + EaseMotion CDN import |

## Usage

1. Open `demo.html` in a browser
2. Edit the HTML in the left pane
3. See live preview update in the right pane
4. Use the controls panel to tweak CSS variables
5. Browse and click classes to insert them into the editor

## Integration

To add to the documentation site:

- Copy `demo.html`, `playground.js`, `style.css` into `docs/`
- Add a link from `docs/index.html` to the playground page

Fixes #12705
