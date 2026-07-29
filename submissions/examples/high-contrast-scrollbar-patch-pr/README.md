# High Contrast Scrollbar Patch (-pr)

This submission resolves a critical accessibility (WCAG) violation in the core utility classes regarding scrollbar visibility in High Contrast modes.

## What does this do?
It implements a `@media (forced-colors: active)` query specifically for `.ease-scrollbar-thin` and `.ease-scrollbar-auto`. It overrides the hardcoded hex colors with semantic CSS system colors (`Canvas`, `ButtonText`, `Highlight`) when the user's operating system is in High Contrast Mode.

## How is it used?
It works automatically! Just include this CSS and the existing `.ease-scrollbar-thin` class becomes fully WCAG compliant.

## Why is it useful?
In `core/utilities.css`, the `.ease-scrollbar-thin` class hardcodes `--ease-scrollbar-track: #f1f5f9;`. For visually impaired users relying on Windows High Contrast Black, this forces a nearly white scrollbar track onto their screen, rendering it invisible or highly distracting. This patch provides the exact CSS the maintainer needs to fix this accessibility flaw globally!
