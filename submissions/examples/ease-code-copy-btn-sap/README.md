# ease-code-copy-btn-sap

A code block with a copy button that swaps its icon to a checkmark and turns green momentarily after a successful copy.

## Usage
1. Include `style.css`.
2. Add markup: `<pre>` code block + button containing two SVG icons (copy + check).
3. Attach the `navigator.clipboard.writeText()` click handler from `demo.html`.

## Customization
- `setTimeout(..., 1600)`: how long the "copied" state stays visible before reverting.
- Icon swap via `.copy-icon`/`.check-icon` display toggling.
- Code block background/font for theming.

## Notes
- Uses the native `navigator.clipboard` API (async, promise-based) rather than the deprecated `document.execCommand('copy')`.
- Both icons exist in the DOM simultaneously; only `display` is toggled via the `.copied` class, avoiding any icon-swap flash or reflow.
- Respects `prefers-reduced-motion`: the button's scale-up on copy is removed, leaving only the background color change and icon swap as feedback.