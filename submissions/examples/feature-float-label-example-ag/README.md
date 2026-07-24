# Float Label Example

Resolves #54680

A pure CSS-only implementation of floating labels on form inputs using placeholder styling hacks.

## What does this do?
When text inputs receive focus or are populated, their descriptive placeholder label floats upward and scales down cleanly, avoiding text overlaps.

## How is it used?
```html
<div class="float-input-group-ag">
  <input type="text" id="username" class="float-input-ag" placeholder=" " required>
  <label for="username" class="float-label-ag">Username</label>
</div>
```

## Why is it useful?
It provides a premium user experience on inputs without requiring bulky Javascript listeners, keeping files lightweight and performant.