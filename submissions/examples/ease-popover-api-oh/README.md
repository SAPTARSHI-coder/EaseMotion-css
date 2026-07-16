# Popover API + EaseMotion Entrance Combo

This submission implements the Popover API + EaseMotion Entrance Combo for GSSoC issue **#44489**.

## Description

A demonstration of native Popover API tooltips and menus paired with EaseMotion entrance transitions.

## Features

### 5 Popover Patterns

1. **Tooltip with Fade-In** - Hover/click tooltip with ease-fade-in animation
2. **Menu with Zoom-In** - Dropdown menu with ease-zoom-in animation
3. **Confirmation Dialog** - Modal dialog with ease-slide-up animation
4. **Notification Toast** - Toast notification with ease-bounce-in animation
5. **Animation Comparison** - Side-by-side comparison of different animations

### Animations Available

- `ease-fade-in` - Smooth fade in effect
- `ease-zoom-in` - Scale up with bounce
- `ease-slide-up` - Slide up entrance
- `ease-scale-pop` - Pop with overshoot
- `ease-bounce-in` - Bounce entrance

## Usage

### Tooltip
```html
<button popovertarget="tooltip1">Hover for Tooltip</button>
<div id="tooltip1" popover class="popover ease-fade-in">
  <p>Tooltip content here...</p>
</div>
```

### Menu
```html
<button popovertarget="menu1">Open Menu ▼</button>
<div id="menu1" popover class="popover menu-popover ease-zoom-in">
  <button class="menu-item">Profile</button>
  <button class="menu-item">Settings</button>
</div>
```

### Dialog
```html
<button popovertarget="dialog1">Delete Item</button>
<div id="dialog1" popover class="popover dialog-popover ease-slide-up">
  <h3>Confirm Deletion</h3>
  <p>Are you sure?</p>
  <button popovertarget="dialog1">Cancel</button>
  <button>Delete</button>
</div>
```

## Key Benefits

| Feature | Description |
|---------|-------------|
| Native API | No JavaScript libraries needed |
| Accessibility | Keyboard navigation built-in |
| Light Dismiss | Click outside to close |
| Escape Key | Press Escape to close |
| Smooth Animations | EaseMotion entrance effects |

## Browser Support

The Popover API is supported in modern browsers:
- Chrome 114+
- Edge 114+
- Safari 17+
- Firefox 125+

## Acceptance Criteria

- ✅ Native Popover API tooltip with ease-fade-in
- ✅ Native Popover API menu with ease-zoom-in
- ✅ popovertarget attribute usage
- ✅ Entrance animations on popover show
- ✅ Light dismiss and Escape key behavior
- ✅ Copy-ready HTML snippets
- ✅ Educational notes on integration
- ✅ Responsive design
- ✅ `prefers-reduced-motion` support
