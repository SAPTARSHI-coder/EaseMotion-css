# Developer Command Palette

A developer-focused command palette component inspired by modern tools like VS Code and Raycast.

## Features

- Dark modern interface
- Search field with focus glow
- Command list with hover lift and active highlight
- Keyboard shortcut badges (`kbd`)
- Fade-in entrance animation
- Responsive layout
- Keyboard accessible with `focus-visible` outlines
- `prefers-reduced-motion` support
- Pure HTML + CSS — no JavaScript

## Files

- `demo.html` — standalone demo page
- `style.css` — complete styling

## Usage

1. Copy `demo.html` and `style.css` into your project.
2. Open `demo.html` directly in a browser — no build step or server required.

```html
<div class="cp-wrapper">
  <div class="cp-header">
    <input
      type="text"
      class="cp-input"
      placeholder="Type a command..."
      aria-label="Command Search"
    />
  </div>
  <div class="cp-list">
    <button class="cp-item active">
      <span class="cp-left">
        <span class="cp-icon">⌘</span> Open Dashboard
      </span>
      <kbd class="cp-kbd">↵</kbd>
    </button>
  </div>
</div>
```

## Use Cases

- Developer dashboards
- SaaS applications
- Admin panels
- Documentation tools
- Productivity apps

## Why it fits EaseMotion CSS

- **Reusable component** — self-contained with the `cp-` class prefix
- **Animation-first** — fade-in entrance, hover transitions, and focus effects
- **Human-readable classes** — `cp-wrapper`, `cp-item`, `cp-kbd` are self-documenting
- **Developer-focused aesthetic** — dark monospace interface that resonates with EaseMotion's audience
