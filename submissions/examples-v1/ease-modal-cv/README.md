# Pure CSS Modal (cv variant)

## What does this do?
A fully functional modal component built with pure CSS using the `:target` pseudo-selector. Opens and closes with anchor links — **no JavaScript required!** Features 3 style variants, 3 sizes, backdrop blur, and smooth animations.

## How is it used?

### Basic Usage:

```html
<!-- Trigger button -->
<a href="#my-modal" class="btn">Open Modal</a>

<!-- Modal structure -->
<div class="ease-modal-cv ease-modal-cv-classic" id="my-modal">
    <a href="#" class="ease-modal-cv-backdrop"></a>
    <div class="ease-modal-cv-content">
        <a href="#" class="ease-modal-cv-close" aria-label="Close">×</a>
        <div class="ease-modal-cv-header">
            <h2>Modal Title</h2>
        </div>
        <div class="ease-modal-cv-body">
            <p>Your content here</p>
        </div>
        <div class="ease-modal-cv-footer">
            <a href="#" class="ease-modal-cv-btn ease-modal-cv-btn-secondary">Cancel</a>
            <a href="#" class="ease-modal-cv-btn ease-modal-cv-btn-primary">Confirm</a>
        </div>
    </div>
</div>

<!-- Classic (default) -->
<div class="ease-modal-cv ease-modal-cv-classic">...</div>

<!-- Glass (glassmorphism) -->
<div class="ease-modal-cv ease-modal-cv-glass">...</div>

<!-- Gradient (animated border) -->
<div class="ease-modal-cv ease-modal-cv-gradient">...</div>

<!-- Small (400px) -->
<div class="ease-modal-cv ease-modal-cv-classic ease-modal-cv-sm">...</div>

<!-- Medium (600px - default) -->
<div class="ease-modal-cv ease-modal-cv-classic">...</div>

<!-- Large (800px) -->
<div class="ease-modal-cv ease-modal-cv-classic ease-modal-cv-lg">...</div>