# font-smooth-antialiasing

## Overview

Compares CSS `font-smooth` and `-webkit-font-smoothing` text rendering modes: `antialiased`, `auto`, `subpixel-antialiased`, and `none`. Each section renders identical sample text so users can visually inspect rendering differences across platforms. Platform-specific notes explain how macOS, Windows, and Linux interpret each value.

## Usage

Open `demo.html` in any modern browser. View each section to compare font rendering. The platform notes section at the bottom explains expected behavior per operating system. Works best on a real display (not remote desktop) to see subpixel differences.

## Features

- Four font-smoothing modes displayed with identical text samples
- Cross-platform rendering notes for macOS, Windows, and Linux
- Dark theme with purple accent and amber section headers
- `prefers-reduced-motion` support
- Responsive design with mobile breakpoint
- Self-contained with no external dependencies
