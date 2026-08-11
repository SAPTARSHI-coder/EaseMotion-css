# Word Break Utilities

Demonstrates word-break, overflow-wrap, and hyphens utilities for handling long words and URLs in constrained containers, using EaseMotion's spacing and color tokens for clean, readable text.

## Features

- `word-break: break-all` with `overflow-wrap: anywhere` for URLs, code strings, and long identifiers
- `word-break: break-word` with `overflow-wrap: break-word` for natural prose (preferred for readable content)
- `hyphens: auto` with `lang="en"` for language-aware word breaking
- Notification feed layout demonstrating word-break in real UI components
- URL boxes with `--ease-font-mono` for code and link display
- Dark mode support via `prefers-color-scheme: dark`
- Reduced motion support via `prefers-reduced-motion: reduce`
- Uses `--ease-color-*` tokens for consistent color theming

## Usage

```html
<!-- Break anywhere (for URLs) -->
<div class="break-all">https://very-long-url-string...</div>

<!-- Break naturally (for prose) -->
<div class="break-word">supercalifragilisticexpialidocious...</div>

<!-- Auto hyphens -->
<div class="hyphens-auto" lang="en">Long English text here...</div>
```

## Why is it useful?

Long words, URLs, and code strings are common in web applications. Without `word-break`, they cause horizontal overflow and broken layouts. Using `break-word` for prose (which preserves readability) and `break-all` for code/URLs is the standard best practice. The `--ease-font-mono` token ensures monospace fonts are used consistently for technical content.
