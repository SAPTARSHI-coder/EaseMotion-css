# [BUG FIX] .ease-flip perspective rendering context resolution

## What does this do?
Resolves perspective context positioning inside active flip entrance animations.

## How is it used?
```html
<div class="ease-flip">Element</div>
```

## Why is it useful?
Aligns layout perspective behaviors across Chromium and Gecko browser engines.

## Fixes
Fixes #10937
