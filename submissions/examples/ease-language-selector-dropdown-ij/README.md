# ease-language-selector-dropdown

A smooth, pure CSS animated dropdown menu specifically styled for language selection, featuring pop-in animations and checkmarks for active states.

## Usage
Open demo.html in a browser. Wrap the structure inside `.ease-lang-selector`. It uses a hidden checkbox (`.ease-lang-toggle-input`) and a connected label (`.ease-lang-button`) to toggle the `.ease-lang-menu` dropdown without JavaScript.

## Custom Properties
| Property | Default | Description |
|---|---|---|
| --lang-bg | #ffffff | Menu background color |
| --lang-border | #e2e8f0 | Border color |
| --lang-text | #334155 | Text color |
| --lang-active-bg | #eff6ff | Active item background |
| --lang-active-text | #2563eb | Active item text color |

## Notes
The dropdown entrance is animated using `opacity`, `transform: translateY`, and `scale`. The `cubic-bezier` easing creates a subtle overshoot effect making the menu feel snappy and responsive.
