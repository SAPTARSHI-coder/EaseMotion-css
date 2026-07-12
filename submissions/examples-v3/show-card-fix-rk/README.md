# Shadow Card Fix

## What does this do?
Fixes the Shadow Card so it shows a clear, layered elevation effect instead of looking almost identical to the Base Card, with light/medium/strong intensity variants and a hover state that deepens the shadow.

## How is it used?
```html
<!-- Base card: no elevation -->
<div class="card card-base">...</div>

<!-- Shadow card: default (medium) elevation -->
<div class="card card-shadow">...</div>

<!-- Intensity variants -->
<div class="card card-shadow card-shadow--light">...</div>
<div class="card card-shadow card-shadow--medium">...</div>
<div class="card card-shadow card-shadow--strong">...</div>

<!-- With hover elevation increase -->
<div class="card card-shadow card-shadow--hover" tabindex="0">...</div>
```
Open `demo.html` directly in a browser — no server or build step required.

## Why is it useful?
The current Shadow Card doesn't visually communicate elevation, which undermines EaseMotion CSS's principle that a class name should describe its behavior — `card-shadow` should look shadowed. This submission demonstrates a soft, layered `box-shadow` scale (light/medium/strong) plus a hover state, giving the maintainer a working reference to standardize into `ease-card-shadow` (and related intensity/hover modifiers) in `components/cards.css`. It only touches this submission folder — no framework source files are modified.