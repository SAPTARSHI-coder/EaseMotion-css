# Elastic Spring Pop

CSS spring-style pop animation using transform and opacity.

## Utility

```scss
@mixin elastic-spring-pop($duration:1s,$timing:ease-out){
  animation:ease-elastic-spring-pop $duration $timing both;
}