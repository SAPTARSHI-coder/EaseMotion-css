# Code Editor Card

A CSS-only code editor card inspired by modern IDEs such as VS Code, Cursor, and Windsurf. It brings a polished file-tab experience, line numbers, syntax-color cues, and responsive layouts to developer-focused sections without JavaScript.

## Features

- VS Code-inspired interface
- File tab system
- Line numbers
- Syntax highlighting examples
- Window control buttons
- Responsive design
- Smooth hover animations
- Customizable CSS variables
- Accessible focus states and reduced-motion support

## Available classes

- `.ease-editor`
- `.ease-editor-header`
- `.ease-editor-tabs`
- `.ease-editor-tab`
- `.ease-editor-body`
- `.ease-editor-line`
- `.ease-editor-gutter`
- `.ease-editor-content`

## Variants

- `.ease-editor-dark`
- `.ease-editor-glass`
- `.ease-editor-hover`
- `.ease-editor-compact`

## Customization

The component uses these CSS variables:

- `--ease-editor-bg`
- `--ease-editor-header-bg`
- `--ease-editor-color`
- `--ease-editor-border`
- `--ease-editor-radius`
- `--ease-editor-shadow`
- `--ease-editor-padding`
- `--ease-editor-transition`
- `--ease-editor-tab-bg`
- `--ease-editor-tab-active`

## Example usage

```html
<div class="ease-editor" role="region" aria-label="Editor preview">
  <div class="ease-editor-header">
    <div class="ease-editor-tabs">
      <button class="ease-editor-tab ease-editor-tab-active">app.js</button>
    </div>
    <div class="ease-editor-controls" aria-hidden="true">
      <span></span><span></span><span></span>
    </div>
  </div>
  <div class="ease-editor-body">
    <div class="ease-editor-gutter">
      <div class="ease-editor-line">1</div>
    </div>
    <div class="ease-editor-content">
      <div class="ease-editor-line">const app = 'EaseMotion';</div>
    </div>
  </div>
</div>
```

## Accessibility

- Strong contrast across themes keeps text readable.
- The tab buttons support keyboard focus and hover states.
- Reduced-motion media queries disable non-essential transitions.

## Browser compatibility

This component uses standard CSS and works well in modern browsers including Chrome, Edge, Firefox, and Safari.
