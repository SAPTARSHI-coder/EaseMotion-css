# Tada Menu Mixin (SCSS)

## Description
A reusable SCSS mixin that applies a "Tada" effect to an element when hovered or focused. It is designed for menu items to draw attention playfully when interacted with. The animation scales the element down and rotates it slightly, then scales it up and oscillates back and forth.

## Files
- `_tada-menu.scss`: Contains the `@mixin ease-tada-menu-mixin-ag` and the associated `@keyframes tada-ag`.

## Usage
```scss
@use 'tada-menu' as *;

.my-menu-item-ag {
  color: #333;
  padding: 10px 15px;
  text-decoration: none;
  
  /* Apply the mixin */
  @include ease-tada-menu-mixin-ag(1s);
}
```
```html
<nav>
  <a href="#" class="my-menu-item-ag">Home</a>
  <a href="#" class="my-menu-item-ag">About</a>
</nav>
```

## Accessibility
- Works correctly with keyboard navigation by attaching the animation to both `:hover` and `:focus-visible`.
- **Reduced Motion**: Disables the complex rotating and scaling `tada` keyframe animation. Replaces it with a gentle, simple static `transform: scale(1.05)` to provide feedback without rapid, back-and-forth movement.
