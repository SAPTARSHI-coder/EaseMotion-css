# Upload Dropzone

A dependency-free EaseMotion input component with a dashed file drop area,
bright hover and focus states, and a bouncing upload icon.

## Files

- `demo.html` contains the accessible file input and dropzone markup.
- `style.css` defines the dashed panel, icon animation, focus treatment,
  responsive sizing, and reduced-motion fallback.

## Accessibility

The component uses a native file input wrapped by a visible label, so keyboard
and pointer users can activate the same control. Motion is disabled for users
with `prefers-reduced-motion` enabled.
