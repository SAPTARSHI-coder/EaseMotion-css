# Float Label Example

Resolves #54680

A pure CSS-only implementation of floating labels on form inputs using placeholder styling hacks.

## What does this do?
When text inputs receive focus or are populated, their descriptive placeholder label floats upward and scales down cleanly, avoiding text overlaps.

## How is it used?
```html
<div class="float-input-group-rb">
  <input type="text" id="username" class="float-input-rb" placeholder=" " required>
  <label for="username" class="float-label-rb">Username</label>
</div>
```

## Why is it useful?
It provides a premium user experience on inputs without requiring bulky Javascript listeners, keeping files lightweight and performant.
