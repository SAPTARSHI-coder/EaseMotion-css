# ease-animated-copy-clipboard-sap

A copy-to-clipboard button where the icon morphs from a clipboard glyph to a checkmark (rotate + scale swap) on successful copy, then reverts after a short delay. Uses the Clipboard API.

## Usage
1. Copy `style.css` into your project.
2. Copy the `.copy-clipboard-sap` markup from `demo.html`, setting `data-copy="text to copy"`.
3. Include the click handler script — clipboard writing requires JS (`navigator.clipboard.writeText`); CSS handles the icon morph animation.

## Customization
- Change the `1800`ms `setTimeout` to adjust how long "Copied!" stays visible.
- Swap the copy/check glyphs for SVG icons.
- Adjust the `cubic-bezier(0.34, 1.56, 0.64, 1)` on the check icon for a bouncier/subtler pop-in.

## Accessibility
Update the button's `aria-live` region or `aria-label` alongside the label text swap so screen readers announce the copy success.

## Browser support
Clipboard API requires a secure context (HTTPS/localhost); falls back silently (no crash) if unavailable.