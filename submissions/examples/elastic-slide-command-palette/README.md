# Elastic Slide Command Palette (Command Palette Layouts)

A zero-JavaScript, highly performant command palette interface featuring a custom elastic slide animation. Designed for modern command palette layouts, the animation delivers a smooth spring-like entrance while maintaining responsiveness and accessibility.

## Features

- **Pure CSS Execution:** Zero runtime overhead and no JavaScript dependencies.
- **Elastic Slide Animation:** Smooth spring-inspired entrance using CSS keyframes and a custom cubic-bezier easing curve.
- **Parametric Architecture:** Core animation timing, spacing, and visual styling are configurable through CSS custom properties (`:root`).
- **Responsive Design:** Adapts cleanly across desktop and mobile layouts.
- **Accessibility Ready:** Respects the `prefers-reduced-motion` media query to reduce motion for users who request it.

## Parameters for Adjustment

You can customize the animation and appearance by modifying the variables inside the `:root` selector in `style.css`.

| CSS Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--palette-duration` | `700ms` | Duration of the elastic slide animation |
| `--palette-easing` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Easing function controlling the elastic motion |
| `--slide-distance` | `-40px` | Initial vertical offset before the palette slides into view |
| `--bg-page` | `#0f172a` | Demo page background color |
| `--bg-palette` | `#1e293b` | Command palette background color |
| `--border-palette` | `#334155` | Command palette border color |
| `--accent-blue` | `#38bdf8` | Accent color used for headings and highlights |
| `--shadow-palette` | `0 12px 30px rgba(0, 0, 0, 0.35)` | Shadow applied to the command palette |

## Usage

```html
<div class="command-palette">
  <div class="palette-header">
    <span>⌘ Command Palette</span>
  </div>

  <input
    class="palette-search"
    type="text"
    placeholder="Search commands..."
  >

  <ul class="command-list">
    <li><span>⚙️</span> Open Settings</li>
    <li><span>📄</span> New File</li>
    <li><span>🗂️</span> Toggle Sidebar</li>
    <li><span>🚀</span> Deploy Project</li>
  </ul>
</div>
```

## Accessibility

- Supports the `prefers-reduced-motion` media query.
- Uses semantic HTML elements for improved readability and maintainability.
- Responsive layout suitable for modern desktop and mobile interfaces.