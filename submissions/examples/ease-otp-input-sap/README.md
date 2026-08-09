# ease-otp-input-sap

An animated OTP/PIN entry field group — auto-advances between boxes, supports paste-to-fill, backspace-to-go-back, and success/error animation states.

## Usage
1. Include `style.css`.
2. Add markup: a row of single-character `<input>` boxes inside `.otp-input-sap`.
3. Attach the input/keydown/paste listeners from `demo.html`.

## Customization
- Number of inputs: add/remove `<input>` elements — JS logic works with any count.
- `.filled`/`.error` classes: trigger success pop or error shake animation states.
- Box size/border/focus ring colors.

## Notes
- Auto-advance on digit entry and auto-back on backspace are handled via array indexing over the input group, not hardcoded per-box.
- Paste support splits clipboard text into individual digits and distributes them across boxes starting from index 0.
- `inputmode="numeric"` brings up the numeric keyboard on mobile without restricting the underlying input type.
- Respects `prefers-reduced-motion`: pop and shake animations are disabled entirely; focus/fill state still communicated via border color change.