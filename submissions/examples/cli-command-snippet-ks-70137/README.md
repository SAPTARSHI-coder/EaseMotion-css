# CLI Command Snippet

## Overview

A lightweight, modern terminal-style command component built entirely with HTML and CSS. It provides a polished presentation for CLI commands commonly used in developer documentation, including a visual structure for a copy button.

## Features

- Pure HTML/CSS
- Terminal-style design with macOS-inspired window controls
- Responsive (flex-wraps the copy button on mobile devices)
- Accessible (semantic markup, visible focus, aria-hidden decorators)
- Keyboard-friendly
- Hover/focus states
- Reduced-motion support
- CSS custom properties
- No external dependencies

## Usage

```html
<div class="command-snippet">
    <div class="terminal-header">
        <div class="terminal-dots" aria-hidden="true">
            <span class="dot dot-close"></span>
            <span class="dot dot-minimize"></span>
            <span class="dot dot-expand"></span>
        </div>
        <span class="terminal-title">bash</span>
    </div>

    <div class="command-body">
        <div class="command-text-container">
            <span class="prompt" aria-hidden="true">$</span>
            <code>npm install easemotion</code>
        </div>

        <button type="button" class="copy-button" aria-label="Copy command">
            Copy
        </button>
    </div>
</div>
```

To replace the command, simply change the text inside the `<code>` element.

## Copy Button Limitation

**IMPORTANT:**
This showcase intentionally uses CSS/HTML only. The Copy button is a visual UI element and does not access the clipboard. Actual clipboard copying requires JavaScript using the Clipboard API.

## CSS Custom Properties

| Variable | Purpose |
|----------|---------|
| `--page-bg` | Page background color |
| `--terminal-bg` | Terminal main background |
| `--terminal-border` | Terminal container border |
| `--terminal-text` | Command text color |
| `--terminal-muted` | Secondary text (title, eyebrow) |
| `--terminal-accent` | Accent color (focus ring) |
| `--button-bg` | Copy button resting background |
| `--button-text` | Copy button text color |
| `--prompt-color` | Color of the $ prompt symbol |
| `--radius` | Component border radius |
| `--shadow` | Component box shadow |
| `--transition` | Standard transition timing |

## Accessibility

- **Semantic Markup**: Structural elements like `<button>` and `<code>` are used correctly.
- **Visible Focus**: Interactive elements show a clear high-contrast outline when navigated via keyboard.
- **Keyboard Accessibility**: The copy button can be focused and activated natively.
- **Color Contrast**: Chosen colors exceed WCAG minimums against the dark backgrounds.
- **Reduced-Motion Support**: Disables hover translations and entrance animations for users who prefer reduced motion.

## Responsive Behavior

The component uses Flexbox layout. On desktop and tablet, the command and copy button sit on the same line. On mobile devices (`< 600px`), the copy button naturally drops below the command text and expands to full width to maximize tap-target size, ensuring it remains fully usable and preventing horizontal page overflow.
