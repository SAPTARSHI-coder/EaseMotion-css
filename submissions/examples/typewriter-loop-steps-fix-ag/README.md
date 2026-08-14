# [BUG FIX] .ease-typewriter-loop character width step count synchronization

## What does this do?
Ensures step count inside typewriter transitions matches character length, avoiding animation jitter.

## How is it used?
```html
<div class="ease-typewriter-loop">Text</div>
```

## Why is it useful?
Aligns characters with exact grid boundaries during typewriter steps animations.

## Fixes
Fixes #10930
