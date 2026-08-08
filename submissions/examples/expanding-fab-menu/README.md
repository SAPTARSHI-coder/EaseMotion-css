# CSS-Only Expanding FAB Menu

A Floating Action Button (FAB) that expands to reveal a menu of secondary actions on hover or focus, using zero JavaScript.

## 🚀 Features

- **Zero JavaScript**: Pure CSS implementation using `:hover` and `:focus-within` state management.
- **Accessible**: Works with keyboard navigation (Tab key).
- **Smooth Animations**: Staggered `transform: translateY()` and `opacity` transitions for an elegant "pop" effect.
- **Customizable**: Easy to change colors, icons, directions, and animation timings.

## 📋 Structure

- `demo.html` - A complete working example featuring the FAB component.
- `style.css` - The core CSS for the expanding menu.

## 🛠 Usage

1. Create a container element `.ease-fab-container`.
2. Place `.ease-fab-menu` (holding your `.ease-fab-item` buttons) and the `.ease-fab-main` button inside the container.
3. The CSS handles the visibility and staggered animations automatically when the container is hovered or focused within.

## 🎨 Modifying Animations

You can easily reverse the direction by changing `transform: translateY(20px)` to `translateY(-20px)` or switch it to a horizontal menu by adjusting the flex direction and translate axis.
