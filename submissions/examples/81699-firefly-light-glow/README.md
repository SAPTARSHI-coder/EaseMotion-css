# Firefly Light Glow

Pure CSS firefly-style glowing animation.

## Utility

```scss
@mixin firefly-light-glow($duration:2s,$timing:ease-in-out){
  animation:ease-firefly-light-glow $duration $timing infinite alternate;
}