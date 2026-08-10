# Pulse Menu Mixin

## Description
The `ease-pulse-menu-mixin-ag` is an SCSS mixin designed to apply a gentle scaling "pulse" animation to UI elements. This is commonly used in navigation menus to draw the user's attention to a specific call-to-action, such as an "Upgrade to Pro" button, a "New Feature" badge, or an unread notifications icon.

## Installation
Copy the `_pulse-menu.scss` file into your project's SCSS directory and import it where needed.

## Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$duration` | Time | `1.5s` | The duration of a single pulse cycle. |
| `$iteration`| String/Number| `infinite` | The number of times the animation should play. |

## Usage Example

```scss
@import 'path/to/pulse-menu';

.menu-item-highlight {
    background-color: #3b82f6;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    display: inline-block;
    
    // Apply the continuous pulse animation
    @include ease-pulse-menu-mixin-ag(2s, infinite);
}
```

```html
<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#" class="menu-item-highlight">Upgrade Now</a></li>
    </ul>
</nav>
```

## Accessibility Considerations
- **Reduced Motion (`prefers-reduced-motion: reduce`):** Infinite scaling animations can be highly distracting or cause dizziness for some users. The mixin includes a strict media query that disables the `@keyframes` animation completely for users who prefer reduced motion. The element will remain fully visible and styled, but static.
