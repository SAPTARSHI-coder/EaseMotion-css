# Component: ease-orbit-diff-viewer

This submission implements the `ease-orbit-diff-viewer` component for GSSOC issue **#41423**.

## Description

A diff viewer component with orbital animation effect. Features code highlighting for added/removed lines and a spinning orbit indicator.

## Usage

```html
<div class="ease-orbit-diff">
  <div class="diff-container">
    <div class="diff-header">
      <span class="diff-badge diff-added">+</span>
      <span class="diff-file">filename.js</span>
    </div>
    <div class="diff-lines">
      <div class="diff-line diff-unchanged">
        <span class="line-number">1</span>
        <span class="line-content">// Unchanged code</span>
      </div>
      <div class="diff-line diff-added">
        <span class="line-number">2</span>
        <span class="line-content">+ Added line</span>
      </div>
      <div class="diff-line diff-removed">
        <span class="line-number">3</span>
        <span class="line-content">- Removed line</span>
      </div>
    </div>
    <div class="orbit-path">
      <div class="orbit-ball"></div>
    </div>
  </div>
</div>
```

### Color Variants

```html
<div class="ease-orbit-diff ease-orbit-primary">Primary</div>
<div class="ease-orbit-diff ease-orbit-success">Success (Green)</div>
<div class="ease-orbit-diff ease-orbit-warning">Warning (Yellow)</div>
<div class="ease-orbit-diff ease-orbit-danger">Danger (Red)</div>
```

### Size Variants

```html
<div class="ease-orbit-diff ease-orbit-sm">Small</div>
<div class="ease-orbit-diff ease-orbit-lg">Large</div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--diff-accent` | `#3b82f6` | Accent color |
| `--diff-width` | `350px` | Container width |
| `--diff-radius` | `12px` | Border radius |

## Acceptance Criteria

- ✅ Uses EaseMotion CSS variables
- ✅ Orbital spinning indicator
- ✅ Code syntax highlighting
- ✅ Line-by-line fade-in animation
- ✅ Live demo in demo.html
- ✅ README.md with usage instructions
- ✅ `prefers-reduced-motion` support
