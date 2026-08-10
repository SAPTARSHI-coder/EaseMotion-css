# Modal Dialog Overlay

A modal dialog with animated backdrop and panel. Open state via `--md-open` (0 or 1). CSS handles backdrop opacity, panel translateY + scale transitions, and pointer-events.

## Features

- Backdrop fade on open/close
- Panel slide-up + scale animation
- Open state via `--md-open` CSS variable
- Click-outside to close
- Close button and Cancel button

## Usage

Set `--md-open` to 0 (closed) or 1 (open) on `.modal-overlay`. CSS transitions the backdrop opacity and panel transform.
