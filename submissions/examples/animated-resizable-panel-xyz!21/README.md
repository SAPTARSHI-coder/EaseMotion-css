# Animated Resizable Panel (`ease-resizable-panel-xyz`)

A zero-dependency, CSS-only animated resizable panel component designed for the **EaseMotion CSS** framework. Perfect for IDEs, dashboards, and complex applications with smooth resize animations and responsive layouts.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using flexbox and CSS transitions.
- **Animation-First**: Smooth resize animations, handle hover effects, and panel transitions using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Horizontal Split**: Left/right panel layout with vertical drag handle.
- **Vertical Split**: Top/bottom panel layout with horizontal drag handle.
- **Three Panel Layout**: Support for multiple resizable panels in sequence.
- **Nested Splits**: Complex layouts with nested horizontal and vertical splits.
- **Collapsible Panels**: Optional collapsible sidebar with toggle functionality.
- **Handle Hover Effects**: Visual feedback with color changes and grip indicators.
- **Responsive**: Automatically stacks panels on mobile devices.
- **Accessible**: Proper semantic HTML and reduced motion support.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Horizontal Split (Left/Right)
```html
<div class="ease-resizable-xyz ease-resizable-xyz-horizontal" style="height: 400px;">
  <div class="ease-resizable-xyz-panel ease-resizable-xyz-left" style="flex: 0 0 30%;">
    <!-- Left panel content -->
  </div>
  <div class="ease-resizable-xyz-handle"></div>
  <div class="ease-resizable-xyz-panel ease-resizable-xyz-right">
    <!-- Right panel content -->
  </div>
</div>