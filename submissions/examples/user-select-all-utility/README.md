# User Select All Utility

Introduces the automatic full text selection utility token (`.ease-select-all`) under issue #15149.

## Functional Mechanics

- **The Problem:** Copying specific terminal logs, configuration tokens, or package installation arguments often forces the user to drag their cursor precisely from end to end, leading to missing prefix characters or trailing whitespace leaks.
- **The Solution:** Accelerates user workflows. The `.ease-select-all` class prompts the client browser interface to capture the complete layout string automatically on a single click or double-click gesture.

## Usage Layout Structure
```html
<div class="ease-select-all">
  npm install easemotion-css
</div>
```

Closes #15149
