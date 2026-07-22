# Flash Menu Component (React)

## Description
A React component demonstrating a "Flash" animation on menu items. When a user hovers over or focuses on a menu item, a white overlay rapidly flashes and fades out, drawing immediate attention to the selected item.

## Files
- `FlashMenuAG.jsx`: Renders an accessible list of button menu items.
- `style.css`: Implements the `@keyframes flash-overlay-ag` on a pseudo-element triggered by `:hover` and `:focus-visible`.

## Usage
```jsx
const menuItems = [
  { label: 'Profile' },
  { label: 'Settings' },
  { label: 'Logout' }
];

<FlashMenuAG items={menuItems} onSelect={(item) => console.log(item.label)} />
```

## Accessibility
- Uses correct ARIA roles for menus: `role="menu"`, `role="none"`, and `role="menuitem"`.
- Buttons are natively focusable and responsive to keyboard activation.
- **Reduced Motion**: Disables the rapid `flash-overlay-ag` animation entirely. Replaces the effect with a standard, safe background color transition on hover/focus to prevent triggering photosensitive reactions.
