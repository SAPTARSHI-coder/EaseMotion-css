# [BUG FIX] .ease-bounce missing animation-timing-function in keyframe

## What does this do?

Resolves bounce timing function issues by defining explicit base timing configurations on bounce utility definitions.

## How is it used?

```html
<div class="ease-bounce">Bouncing Element</div>
```

## Why is it useful?

Ensures that looping bounce animations retain their springy motion profile across all browsers.

## Fixes

Fixes #10929
