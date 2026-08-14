# CSS Inline Editable Text

A responsive CSS inline-editable text component using the native `contenteditable` attribute.

## Features

- CSS-focused implementation
- Native inline text editing
- No JavaScript required
- Keyboard accessible
- Responsive design
- Focus and hover states
- Visual editing indicator
- Reduced-motion support
- Forced-colors support

## Files

- `demo.html` — Demonstration page
- `style.css` — Component styles
- `README.md` — Documentation

## Usage

Add `contenteditable="true"` to an element:

```html
<div
  class="editable"
  contenteditable="true"
  role="textbox"
  aria-label="Edit display name"
  spellcheck="false"
  tabindex="0"
>
  Richa Chauhan
</div>