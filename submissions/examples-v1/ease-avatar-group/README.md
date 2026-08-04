# Ease Avatar Group

A CSS-only animated avatar group (avatar stack) component for displaying multiple user profiles in a compact, overlapping layout. Perfect for team pages, chat headers, and collaboration tools.

## Key Features
- **Overlapping Stack**: Clean overlapping avatars using negative margins and border rings for separation.
- **Micro-interactions**: Avatars elevate on hover to reveal themselves without breaking the stack.
- **Overflow Indicator**: Built-in support for showing remaining user counts (`+N`).
- **Configurable Overlap**: Easily adjust the overlap amount using the `--ease-avatar-overlap` CSS variable.
- **Responsive & Lightweight**: Pure CSS implementation with zero dependencies.

## How to Use
1. Include `easemotion.css` in your project.
2. Use the `.ease-avatar-group` container with `.ease-avatar-group-item` for each avatar.
3. Add an `.ease-avatar-group-count` at the end for overflow indicators.

```html
<div class="ease-avatar-group">
  <img class="ease-avatar-group-item" src="user1.jpg" alt="User 1">
  <img class="ease-avatar-group-item" src="user2.jpg" alt="User 2">
  <div class="ease-avatar-group-count">+3</div>
</div>
```

## Directory Structure
- `demo.html`: Interactive showcase of different avatar group variants.
- `style.css`: Core styles for the stack layout and animations.
