# VS Code IntelliSense Extension Proposal

## Description
This documentation package serves as an official architectural proposal and implementation guide for Issue #56791. Because the GSSoC bot restricts contributors from initializing new internal projects in the repository root, this structural proposal is submitted via the `submissions/docs/` directory.

## Implementation Guide for Core Maintainers

To compete with top-tier CSS frameworks, EaseMotion should distribute a VS Code extension that provides HTML class autocomplete and CSS variable linting.

### 1. Repository Structure
Create a new directory in the root called `packages/vscode-extension`.

### 2. Initialize the Extension
Run this inside `packages/vscode-extension`:
```bash
npx yo code
# Select: New Extension (TypeScript)
# Name: easemotion-intellisense
```

### 3. Setup the Language Server (`package.json`)
Replace the generated `package.json` with this configuration, which hooks into VS Code's autocomplete engine for HTML, React (JSX), and Vue files:

```json
{
  "name": "easemotion-intellisense",
  "displayName": "EaseMotion IntelliSense",
  "description": "Intelligent autocomplete and hover previews for the EaseMotion CSS framework.",
  "version": "1.0.0",
  "publisher": "SAPTARSHI-coder",
  "engines": {
    "vscode": "^1.80.0"
  },
  "categories": [
    "Formatters",
    "Snippets"
  ],
  "activationEvents": [
    "onLanguage:html",
    "onLanguage:javascriptreact",
    "onLanguage:typescriptreact",
    "onLanguage:vue"
  ],
  "main": "./out/extension.js",
  "contributes": {
    "configuration": {
      "type": "object",
      "title": "EaseMotion",
      "properties": {
        "easemotion.enableAutocomplete": {
          "type": "boolean",
          "default": true,
          "description": "Enable HTML class autocomplete for EaseMotion."
        }
      }
    }
  },
  "scripts": {
    "vscode:prepublish": "npm run compile",
    "compile": "tsc -p ./",
    "watch": "tsc -watch -p ./"
  },
  "devDependencies": {
    "@types/vscode": "^1.80.0",
    "typescript": "^5.1.3"
  }
}
```

### 4. Implement the Completion Provider (`src/extension.ts`)
The core logic will use `vscode.languages.registerCompletionItemProvider` to parse the compiled `easemotion.css` from the user's `node_modules` and inject the class names into the editor's suggestion widget.

## Files Provided
- `demo.html` - A visual presentation of this proposal.
- `style.css` - Custom styling for the proposal documentation.
- `README.md` - This guide.
