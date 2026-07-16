# Pin Code Input

A 4-digit PIN code input with individual digit boxes, auto-focus advancement, and CSS transitions driven by `--box-active` and `--box-focus` custom properties.

## Features

- Individual digit input boxes with auto-focus to next
- Backspace navigation to previous box
- Focus highlight with border color and shadow transition
- Active digit styling via `--box-active` custom property
- Complete state hint with color change

## Usage

Include `style.css` and structure four `<input>` elements with `maxlength="1"` inside `.pin-inputs`. JS sets `--box-active` on input and handles focus advancement.
