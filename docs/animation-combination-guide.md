# Animation Combination Guide

## Combining Classes

### Fade In + Slide Up
```html
<div class="ease-fade-in ease-slide-up">
  I fade in while sliding up!
</div>
```

### Fade In + Slide Down
```html
<div class="ease-fade-in ease-slide-down">
  I fade in while sliding down!
</div>
```

## Staggering with ease-delay-*
Create sequential animations by adding delay to children:
```html
<ul>
  <li class="ease-fade-in ease-slide-up ease-delay-100">Item 1</li>
  <li class="ease-fade-in ease-slide-up ease-delay-200">Item 2</li>
  <li class="ease-fade-in ease-slide-up ease-delay-300">Item 3</li>
</ul>
```

## Speed Control with ease-duration-*
```html
<!-- Fast -->
<div class="ease-fade-in ease-duration-fast">Fast fade</div>

<!-- Medium (default) -->
<div class="ease-fade-in ease-duration-medium">Medium fade</div>

<!-- Slow -->
<div class="ease-fade-in ease-duration-slow">Slow fade</div>
```

## Common Mistakes

### ❌ Combining conflicting directions
```html
<!-- DON'T: ease-slide-up and ease-slide-down cancel each other -->
<div class="ease-slide-up ease-slide-down">Broken!</div>
```

### ✅ Pick one direction
```html
<!-- DO: pick one -->
<div class="ease-fade-in ease-slide-up">Correct!</div>
```

### ❌ Too many looping animations
```html
<!-- DON'T: bounce + pulse + rotate all looping = chaos -->
<div class="ease-bounce ease-pulse ease-rotate">Overwhelming!</div>
```

### ✅ One looping at a time
```html
<!-- DO: one looping animation -->
<div class="ease-pulse">Clean!</div>
```