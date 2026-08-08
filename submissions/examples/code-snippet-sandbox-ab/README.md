# Code Snippet Sandbox with Copy Ripple & Language Switcher

A feature-rich developer documentation code block component featuring tabbed multi-language switching (JavaScript, Python, cURL, Rust), a sliding active indicator pill, copy-to-clipboard with ripple checkmark feedback, line highlights, custom scrollbar styling, and 4 swappable syntax color themes.

## Features

- 🗂️ **Tabbed Language Switcher**: Switch between JS, Python, cURL, and Rust with a smooth `left`-transitioning sliding underline indicator pill.
- 📋 **Copy Ripple Feedback**: Clipboard API integration (`navigator.clipboard.writeText`) with a radial ripple burst animation and 2-second "Copied!" checkmark state.
- 🔦 **Line Highlights**: `.highlight-line` class renders a left-border accent with a subtle background tint on marked lines.
- 🎨 **4 Syntax Themes**: One Dark Pro, Dracula, Nord Frost, and Cyberpunk Neon — all swappable at runtime using CSS custom property overrides.
- 🔢 **Line Numbers**: Gutter sidebar with per-block line count that updates dynamically on tab switch.
- ♿ **Accessibility**: `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`, `role="tabpanel"`, Arrow key navigation, and focus-visible outlines.

## File Structure

```text
submissions/examples/code-snippet-sandbox-ab/
├── demo.html    # Interactive demo page
├── index.html   # Main entry demo page
├── style.css    # Design tokens, syntax themes, tab animations, copy ripple
├── script.js    # Tab switching, sliding indicator, clipboard, theme controls
└── README.md    # Documentation and customization guide
```

## Quick Start

### 1. HTML Structure

```html
<div class="code-card-container theme-onedark" id="code-card">
  <!-- Terminal Header -->
  <div class="code-card-header">
    <div class="window-dots">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
    </div>

    <!-- Language Tabs -->
    <div class="language-tabs" role="tablist">
      <button class="tab-btn active" role="tab" aria-selected="true"
              aria-controls="code-js" data-filename="api.js">JavaScript</button>
      <button class="tab-btn" role="tab" aria-selected="false"
              aria-controls="code-py" data-filename="api.py">Python</button>
      <div class="tab-indicator" id="tab-indicator"></div>
    </div>

    <!-- Copy Button -->
    <button id="btn-copy" class="btn-copy">
      <span class="btn-copy-ripple"></span>
      <span class="icon-copy"><!-- SVG --></span>
      <span class="icon-check"><!-- SVG --></span>
      Copy
    </button>
  </div>

  <!-- Code Viewport -->
  <div class="code-viewport">
    <div class="line-numbers" id="line-numbers"></div>
    <div class="code-panels">
      <pre id="code-js" class="code-block active" role="tabpanel"><code>
        <span class="line"><span class="token-keyword">const</span> x = <span class="token-number">42</span>;</span>
        <span class="line highlight-line"><span class="token-comment">// Highlighted line</span></span>
      </code></pre>
    </div>
  </div>
</div>
```

### 2. Include CSS & JavaScript

```html
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
```

## CSS Custom Properties

### Syntax Token Colors (per theme)

| Variable | Purpose |
| :--- | :--- |
| `--token-keyword` | Language keywords (`const`, `function`, `def`, `pub`) |
| `--token-string` | String literals and template literals |
| `--token-function` | Function names and method calls |
| `--token-variable` | Variable names and identifiers |
| `--token-comment` | Code comments (rendered italic) |
| `--token-param` | Function parameters and annotations |
| `--token-number` | Numeric literals |
| `--token-plain` | Default unclassified tokens |

### Layout & Animation Tokens

| Variable | Default | Purpose |
| :--- | :--- | :--- |
| `--code-bg` | `#282c34` | Code area background |
| `--code-header-bg` | `#21252b` | Terminal titlebar background |
| `--highlight-line-bg` | `rgba(255,255,255,0.06)` | Highlighted line tint |
| `--highlight-line-border` | `#61afef` | Left accent border on highlighted lines |
| `--tab-indicator-color` | `#61afef` | Sliding indicator pill color |

## Syntax Themes

Switch themes by replacing the class on `.code-card-container`:

| Class | Theme Name |
| :--- | :--- |
| `theme-onedark` | One Dark Pro (default) |
| `theme-dracula` | Dracula |
| `theme-nord` | Nord Frost |
| `theme-cyberpunk` | Cyberpunk Neon |
