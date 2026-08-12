# CSS Orbit Satellite Loader

**What does this do?**
It displays an animated loading spinner consisting of a central planet with satellites orbiting around it.

**How is it used?**
```html
<div class="orbit-loader" role="status" aria-label="Loading">
    <div class="planet"></div>
    <div class="orbit">
        <div class="satellite"></div>
    </div>
    <div class="orbit orbit-2">
        <div class="satellite satellite-2"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>
```

**Why is it useful?**
This component provides a visually engaging, purely CSS-based loading indicator that avoids JavaScript overhead while ensuring accessibility, seamlessly aligning with EaseMotion's focus on lightweight, smooth, and easily integrated animations.
