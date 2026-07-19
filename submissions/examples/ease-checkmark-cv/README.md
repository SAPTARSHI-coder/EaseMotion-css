# Animated Checkmark (cv variant)

## What does this do?
A collection of SVG-based animated success checkmarks with 3 style variants (Classic, Bounce, Wave), 3 sizes, and 3 color options. Perfect for success states, task completion, and confirmation feedback.

## How is it used?

### Basic Usage:

```html
<div class="ease-checkmark-cv ease-checkmark-cv-classic">
    <svg viewBox="0 0 52 52">
        <circle cx="26" cy="26" r="25" fill="none"/>
        <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
    </svg>
</div>

<!-- Classic checkmark -->
<div class="ease-checkmark-cv ease-checkmark-cv-classic">...</div>

<!-- Bounce animation -->
<div class="ease-checkmark-cv ease-checkmark-cv-bounce">...</div>

<!-- Wave with expanding ring -->
<div class="ease-checkmark-cv ease-checkmark-cv-wave">
    <div class="ease-checkmark-cv-wave-ring"></div>
    <svg>...</svg>
</div>

<div class="ease-checkmark-cv ease-checkmark-cv-classic ease-checkmark-cv-sm">...</div>
<div class="ease-checkmark-cv ease-checkmark-cv-classic">...</div>
<div class="ease-checkmark-cv ease-checkmark-cv-classic ease-checkmark-cv-lg">...</div>

<div class="ease-checkmark-cv ease-checkmark-cv-classic ease-checkmark-cv-success">...</div>
<div class="ease-checkmark-cv ease-checkmark-cv-classic ease-checkmark-cv-info">...</div>
<div class="ease-checkmark-cv ease-checkmark-cv-classic ease-checkmark-cv-primary">...</div>