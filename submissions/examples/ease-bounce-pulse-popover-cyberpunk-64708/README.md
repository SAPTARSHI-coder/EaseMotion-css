# Cyberpunk Neon Bounce-Pulse Popover

A pure CSS, JavaScript-free popover with a cyberpunk aesthetic. It features a bounce-pulse entrance animation, dynamic neon box-shadows, and a responsive layout that adheres to accessibility standards (including `prefers-reduced-motion`).

## Usage

Simply copy the HTML structure and CSS styles. The popover is activated via `:hover` and `:focus-within` on the `.popover-wrapper`.

```html
<div class="popover-wrapper" tabindex="0">
    <button class="cyber-btn" aria-haspopup="true">
        <span class="btn-text">ACCESS_MAINFRAME</span>
        <span class="btn-glitch" aria-hidden="true">_</span>
    </button>
    <div class="cyber-popover" role="tooltip">
        <!-- Popover content goes here -->
    </div>
</div>
```

## Features

*   **Pure CSS/HTML**: No JavaScript required for interactions. Utilizes `:hover` and `:focus-within` for full accessibility.
*   **Cyberpunk Aesthetic**: Uses neon glow (`box-shadow`), sharp clipped corners (`clip-path`), and terminal-like fonts.
*   **Bounce-Pulse Animation**: A custom `@keyframes` entrance that bounces in, then transitions to a subtle pulsing glow.
*   **Accessible**: Supports `prefers-reduced-motion: reduce` by disabling animations for users who prefer static elements.
*   **Responsive**: Works across all standard device sizes.

## CSS Custom Properties

You can easily theme the popover by overriding these variables in the `:root` scope:

```css
:root {
    --cyber-bg: #0a0a0c;
    --cyber-primary: #00ffcc;
    --cyber-secondary: #ff00ff;
    --cyber-accent: #fcee0a;
    --cyber-text: #e0e0e0;
    --popover-bg: rgba(10, 10, 12, 0.95);
    --popover-border: 1px solid var(--cyber-primary);
}
```
