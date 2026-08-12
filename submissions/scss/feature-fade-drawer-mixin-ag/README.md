# Fade Drawer Mixin (SCSS)

## Description
A reusable SCSS mixin for a "Fade" Drawer (Interactive State). It provides a smooth opacity and visibility transition to reveal a drawer when it receives an `.is-open-ag` class or `:target` pseudo-class.

## Files
- `_fade-drawer.scss`: Contains the `@mixin ease-fade-drawer-mixin-ag`.

## Usage
```scss
@use 'fade-drawer' as *;

.my-drawer-ag {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background: #fff;
  box-shadow: -5px 0 15px rgba(0,0,0,0.1);
  
  /* Apply the mixin */
  @include ease-fade-drawer-mixin-ag(0.4s);
}
```
```html
<!-- The drawer, add 'is-open-ag' via JS to trigger the fade -->
<div class="my-drawer-ag is-open-ag">
  <h2>Settings</h2>
</div>
```

## Accessibility
- Uses `visibility: hidden` so that screen readers and keyboard focus ignore the drawer when it is faded out.
- **Reduced Motion**: Disables the long fade transition. It snaps instantly (`0.01s`) between visible and hidden states for users who prefer reduced motion, providing immediate interface updates.
