# Neo-Brutalism Modal Dialog

A stark, high-contrast modal dialog box built using the native HTML `<dialog>` element.

## Files
- `demo.html`: The HTML structure utilizing the `<dialog>` element and native HTML forms for closing.
- `style.css`: The styling to override default dialog styles and apply brutalist borders, shadows, and a stark backdrop.
- `README.md`: This file.

## Features
- **Native HTML5:** Uses the semantic `<dialog>` tag which provides built-in accessibility and a top-layer placement without complex z-index management.
- **Neo-Brutalism:** Features thick black borders, bright accents, and a rigid, unblurred drop shadow on both the modal and its buttons.
- **Backdrop Styling:** The `::backdrop` is styled as a harsh, semi-transparent black overlay, contrasting with standard soft blurs.

## Usage
Simply invoke the modal via JS using `dialogElement.showModal()`, or close it automatically using `<form method="dialog">`.
