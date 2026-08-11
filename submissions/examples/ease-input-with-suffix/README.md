# Ease Input with Animated Suffix

A reusable input component with built-in animated suffix support, clear controls, and accessible state variations.

## Features

- Animated suffix inside the input for text or icon suffixes
- Focus interaction with suffix highlight, scale, and smooth input ring
- Clear button appears only when the field contains text
- Accessible labels, focus-visible support, and keyboard-friendly controls
- Success, error, and disabled examples included
- Optional copy domain action for the website example

## Files

- `demo.html` — demo page with interactive examples
- `style.css` — component styling and responsive layout
- `script.js` — modular vanilla JavaScript for suffix and clear behavior
- `README.md` — project overview and usage details

## Folder Structure

```
submissions/examples/ease-input-with-suffix/
├── demo.html
├── script.js
├── style.css
└── README.md
```

## Installation

Open `demo.html` in a browser. No build step required.

## Usage

1. Type into the website or search field.
2. The suffix animates when the input receives focus.
3. A clear button appears when there is text.
4. Click "Copy domain" to copy the website input value.

## Accessibility

- Labels are associated with each input.
- `aria-label` and `aria-describedby` are used for contextual guidance.
- Clear button is keyboard+navigable and focus-visible.
- Suffix elements are hidden from assistive technology using `aria-hidden="true"`.

## Browser Compatibility

Tested in modern browsers supporting:

- CSS custom properties
- CSS transitions
- `position: absolute`
- `navigator.clipboard.writeText`

## Customization

- Update `--ease-suffix-color` in `style.css` to change suffix highlight color.
- Adjust the suffix text inside `.suffix` elements.
- Add more input variants by duplicating the `.suffix-input-group` structure.
