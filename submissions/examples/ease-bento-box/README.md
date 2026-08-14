# Bento Box Grid

A standardized CSS Grid layout template inspired by the popular "Bento Box" UI trend (often used for feature reveals on modern tech landing pages). Each grid cell smoothly lifts on hover and reveals hidden content.

### Usage
```html
<div class="ease-bento-container">
    <div class="ease-bento-cell cell-hero ease-hover-lift">
        <div class="cell-content">
            <h2>Hero Feature</h2>
            <div class="cell-hidden-reveal ease-fade-in">
                <p>Hidden text revealed on hover.</p>
            </div>
        </div>
    </div>
    <!-- Add more cells adjusting cell-medium-1, cell-small-1 etc. -->
</div>
```

### Why is it useful?
Bento box layouts require precise grid-column spanning and can look cluttered if all text is visible at once. This component combines a robust CSS Grid foundation with EaseMotion's hover utilities to create a clean, interactive discovery experience for users, progressively revealing information only when they interact with a cell.
