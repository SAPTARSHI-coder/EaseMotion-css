# Slide Modal Mixin (SCSS)

## Description
A reusable SCSS mixin for a "Slide Modal" (or Popover) Hover Effect. When a user hovers over (or focuses within) a trigger container, the modal/popover smoothly slides up and fades into view with a slight bouncy easing.

## Files
- `_slide-modal.scss`: Contains the `@mixin ease-slide-modal-mixin-ag`.

## Usage
```scss
@use 'slide-modal' as *;

.my-popover-modal-ag {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  margin-top: 0.5rem;
  
  /* Apply the mixin to the modal element */
  @include ease-slide-modal-mixin-ag(0.4s);
}

.hover-trigger-ag {
  position: relative;
  display: inline-block;
}
```
```html
<div class="hover-trigger-ag">
  <button>Hover for Profile Info</button>
  <div class="my-popover-modal-ag">
    <h4>User Profile</h4>
    <p>Details slide in here.</p>
  </div>
</div>
```

## Accessibility
- Uses `:focus-within` on the parent trigger so the modal slides in when keyboard users tab to the trigger button.
- Uses `visibility: hidden` to completely hide the modal content from screen readers when it is not triggered.
- **Reduced Motion**: Disables the `translateY` sliding motion and the bouncy easing. The modal simply fades in linearly (`transition: opacity 0.2s`) to prevent motion discomfort.
