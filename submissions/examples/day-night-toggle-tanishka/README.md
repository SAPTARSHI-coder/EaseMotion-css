# Day / Night Toggle

A dependency-free scene toggle that switches a landscape between a bright sunlit day and a starry night.

## How to use

Place the scene inside a container and toggle the night state by adding or removing the `is-night` class:

```html
<div class="scene" id="scene">
  <div class="stars"></div>
  <div class="sun"></div>
  <div class="moon"></div>
  <div class="ground"></div>
</div>