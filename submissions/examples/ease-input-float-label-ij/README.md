# Input Float Label

An input with a label that floats up when focused or filled. Float state via `--fl-filled` (0 or 1). CSS handles label translateY, scale, and color transitions. An underline bar animates on focus.

## Features

- Label floats up on focus/fill
- Float state via `--fl-filled` CSS variable
- Animated underline bar on focus
- Scale and color transition on label
- Bounce cubic-bezier for label motion

## Usage

Set `--fl-filled` (0 or 1) on `.fl-field`. CSS floats the label up when focused or filled. The underline bar expands on focus.
