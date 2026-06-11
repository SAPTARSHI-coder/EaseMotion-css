# Terminal Status Loader

A terminal-inspired loading component with typewriter animation and blinking cursor effect.

## Files
- 📄 [demo.html](demo.html) - Interactive demo
- 🎨 [style.css](style.css) - Component styles
- 📖 [README.md](README.md) - Documentation

## Variants

| Class | Use Case |
|-------|----------|
| `.terminal-loader` | General loading |
| `.terminal-deploy` | Deployment screens |
| `.terminal-processing` | Data processing |
| `.terminal-ai` | AI applications |
| `.terminal-dark` | Dark mode |
| `.terminal-success` | Completion |
| `.terminal-error` | Errors |

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="terminal-loader">
    <div class="terminal-header">
        <span class="terminal-title">Status</span>
        <div class="terminal-controls">
            <span class="terminal-control close"></span>
            <span class="terminal-control minimize"></span>
            <span class="terminal-control maximize"></span>
        </div>
    </div>
    <div class="terminal-text">Loading...</div>
</div>