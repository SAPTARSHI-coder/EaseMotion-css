# ease-glass-overlay — Custom Glassmorphism Overlay Mixins

## What does this do?

SCSS mixins for glassmorphism overlay effects — semi-transparent backgrounds with backdrop blur for frosted glass panels, modals, and navbars.

## How is it used?

```scss
@use 'mixins' as glass;

.modal { @include glass.ease-glass-overlay; }
.nav { @include glass.ease-glass-overlay-dark; }
```
