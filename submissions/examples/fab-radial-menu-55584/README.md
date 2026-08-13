# Floating Action Button (FAB) with Menu Reveal

## What does this do?
Provides a CSS-only Floating Action Button that stays fixed at the bottom right of the screen. When hovered, the main button rotates into a close icon (`+` to `x`), and smoothly reveals a vertical menu of secondary action buttons cascading upwards.

## How is it used?
```html
<div class="ease-fab-container">
    <button class="ease-fab-main">+</button>
    <div class="ease-fab-menu">
        <button class="ease-fab-item">A</button>
        <button class="ease-fab-item">B</button>
    </div>
</div>
```

## Why does it fit EaseMotion CSS?
Floating Action Buttons (FABs) are a staple of modern web applications. This implementation relies entirely on CSS hover states and `cubic-bezier` transitions to create an organic, bouncy reveal effect without any JavaScript state management.

## Tech Stack
- HTML
- CSS (No JavaScript)
