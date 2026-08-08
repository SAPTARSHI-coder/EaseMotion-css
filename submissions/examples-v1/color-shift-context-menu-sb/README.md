# 🎨 Color Shift Context Menu

A visually stunning context menu with a continuous color-shift animation and 3D hover effects.

## Features
- Smooth color-shift animation (cycles through colors)
- 3D perspective hover effect on menu items
- Right-click or click to trigger
- Keyboard support (Escape to close)
- Responsive on mobile
- Uses EaseMotion CSS variables

## Usage
```html
<!-- Add the trigger area -->
<div id="triggerArea">Right-click here</div>

<!-- Add the context menu -->
<div class="ease-context-menu" id="contextMenu">
    <ul class="ease-menu-list">
        <li class="ease-menu-item" data-action="copy">Copy</li>
        <li class="ease-menu-item" data-action="paste">Paste</li>
    </ul>
</div>