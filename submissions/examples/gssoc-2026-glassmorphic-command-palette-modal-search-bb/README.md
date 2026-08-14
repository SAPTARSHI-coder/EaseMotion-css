# Glassmorphic Command Palette Modal

An accessible, translucent command palette search dialog with keyboard-focused item highlights and backdrop blur elevation.

## 1. What does this do?
This component presents a macOS SpotLight and Raycast-inspired search command palette modal built with glassmorphism backdrop filters and micro-interactions.

## 2. How is it used?
Include `style.css` in your project and render the modal inside a top-level container:

```html
<link rel="stylesheet" href="style.css">

<div class="cmd-backdrop">
  <div class="cmd-palette">
    <div class="cmd-header">
      <input type="text" class="cmd-input" placeholder="Search..." />
    </div>
  </div>
</div>
```

## 3. Why is it useful?
It enables web platforms, developer documentation portals, and SaaS tools to offer modern, accessible quick-search command interfaces without relying on bloated JS framework dialog components.
