 
# Page Transition Slide

Current page slides left while new page slides in from the right using View Transitions API.

## Files

- demo.html - Interactive demo
- style.css - Page transition styles
- README.md - Documentation

## How It Works

```css
::view-transition-old(root) {
    animation: slideOutLeft 0.4s ease forwards;
}

::view-transition-new(root) {
    animation: slideInRight 0.4s ease forwards;
}

@keyframes slideOutLeft {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(-100%); opacity: 0.5; }
}

@keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0.3; }
    to { transform: translateX(0); opacity: 1; }
}