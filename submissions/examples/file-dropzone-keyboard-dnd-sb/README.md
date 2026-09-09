# File Dropzone Keyboard Drag-and-Drop

## What does it do?
Makes a file dropzone operable from the keyboard: the zone has `role="button"` + `tabindex="0"`, Enter/Space opens the file picker, and dragging a file over the zone toggles a highlight (with depth-aware enter/leave). Drop and file-picker change events are emitted via `onFile(fn)`.

## How is it used?
```javascript
import { DropzoneKeyboard } from './script.js';
const dz = new DropzoneKeyboard(document.getElementById('dropzone'));
dz.onFile((files) => { /* handle files */ });
dz.onHighlight((on) => { /* update UI */ });
dz.openPicker(); dz.destroy();
```

## Why is it useful?
A dropzone that only responds to drag events is unusable for keyboard and screen-reader users. Exposing it as a button with Enter/Space → file picker, plus depth-aware drag highlighting, matches the expected interaction model and prevents flicker when the drag passes over nested children.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/file-dropzone-keyboard-dnd-sb/dropzone.test.js
```
- **Happy path**: role=button + tabindex + aria-label; Enter/Space opens picker; dragenter highlights, dragleave clears.
- **Edge cases**: drop emits files + clears highlight; nested enter/leave keeps highlight until depth 0; onHighlight fires; change emits files; openPicker returns false without input.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (`ease-dropzone`), JavaScript (keyboard + DnD), EaseMotion CSS.

## Preview
Open `demo.html`, focus the zone and press Enter, or drag a file onto it.

Closes #81909
