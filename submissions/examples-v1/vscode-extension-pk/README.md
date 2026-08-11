# EaseMotion — VS Code Extension

IntelliSense, hover documentation, and autocomplete for all `ease-*` classes and `--ease-*` custom properties.

## Features

| Feature | Description |
|---------|-------------|
| 🔮 Autocomplete | IntelliSense for all `ease-*` classes in HTML, JSX, Vue, Svelte, and CSS |
| 📖 Hover Docs | Description, keyframe values, and usage example on hover |
| 🎨 CSS Variable Autocomplete | `--ease-*` variables with type info and current value |
| ⚡ Insert Animation Command | Command palette: `EaseMotion: Insert Animation` opens picker |

## Files

| File | Purpose |
|------|---------|
| `demo.html` | VS Code mockup with autocomplete popup, features grid, extension source files |
| `style.css` | VS Code editor preview, completion popup, file tree |

## Extension Structure

```
easemotion-vscode/
├── package.json
├── tsconfig.json
├── src/
│   ├── extension.ts          # Activation + registration
│   ├── completions.ts        # CompletionItemProvider
│   ├── hover.ts              # HoverProvider
│   └── animation-data.ts     # Data loading + types
├── scripts/
│   └── generate-data.js      # Scrape CSS for class data
└── README.md
```

## Key Source

### `src/extension.ts`

Registers completion and hover providers for HTML, JS, TS, Vue, Svelte, and CSS. Also registers the `EaseMotion: Insert Animation` command.

### `src/completions.ts`

Provides `CompletionItem`s for every `ease-*` class when the user types `ease-`. Each item shows description and source file location.

### `scripts/generate-data.js`

Scans `core/**/*.css` and `components/**/*.css` for `.ease-*` class definitions and `@keyframes`, extracting class name, file, and leading comment. Outputs `data/animation-data.json`.

## Publishing

```bash
npm install -g @vscode/vsce
vsce package
vsce publish
```

Or install locally:

```bash
code --install-extension easemotion-css-intellisense-1.0.0.vsix
```
