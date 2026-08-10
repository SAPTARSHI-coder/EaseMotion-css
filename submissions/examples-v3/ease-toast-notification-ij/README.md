# Toast Notification

An animated toast notification with slide-in from the right and auto-dismiss. Show state via `--ts-show` (0 or 1). Supports success, error, and info types with distinct colors.

## Features

- Slide-in from right animation
- Auto-dismiss after 3 seconds
- Show state via `--ts-show` CSS variable
- Success, error, and info variants
- Bounce cubic-bezier transition

## Usage

Set `--ts-show` (0 or 1) on `.toast` to control visibility. CSS translates and fades the toast. Add `.toast-success`, `.toast-error`, or `.toast-info` for coloring.
