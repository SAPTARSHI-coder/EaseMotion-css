# CSS Cascading Variables

A demonstration of CSS custom property inheritance and cascading behavior.

## Features

- Pure CSS implementation
- Demonstrates variable inheritance
- Shows nested overrides
- Smooth hover effects
- Responsive design

## How It Works

Each nested card inherits CSS variables from its parent container. Specific levels override the inherited values using new custom property declarations.

## Usage

```html
<div class="theme-root">
  <div class="card level-1">
    <div class="card level-2">
      <div class="card level-3">
        Content
      </div>
    </div>
  </div>
</div>