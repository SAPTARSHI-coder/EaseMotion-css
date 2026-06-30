# Pulsing Dot Indicator (cv variant)

## What does this do?
A small animated dot indicator with a pulsing ring effect, perfect for showing status (online/offline), live broadcasts, notifications, and real-time activity. Comes with 5 color variants and 3 size variants.

## How is it used?

### Basic Usage:
```html
<span class="ease-pulse-dot-cv ease-pulse-dot-cv-success"></span>

<!-- Success (Green) - Online, Active -->
<span class="ease-pulse-dot-cv ease-pulse-dot-cv-success"></span>

<!-- Danger (Red) - Live, Recording, Error -->
<span class="ease-pulse-dot-cv ease-pulse-dot-cv-danger"></span>

<!-- Warning (Yellow) - Pending, Away -->
<span class="ease-pulse-dot-cv ease-pulse-dot-cv-warning"></span>

<!-- Info (Blue) - Information, Notification -->
<span class="ease-pulse-dot-cv ease-pulse-dot-cv-info"></span>

<!-- Neutral (Gray) - Offline, Inactive -->
<span class="ease-pulse-dot-cv ease-pulse-dot-cv-neutral"></span>

<!-- Small (8px) -->
<span class="ease-pulse-dot-cv ease-pulse-dot-cv-success ease-pulse-dot-cv-sm"></span>

<!-- Medium (12px - default) -->
<span class="ease-pulse-dot-cv ease-pulse-dot-cv-success"></span>

<!-- Large (16px) -->
<span class="ease-pulse-dot-cv ease-pulse-dot-cv-success ease-pulse-dot-cv-lg"></span>

<!-- Online status -->
<div>
    <span class="ease-pulse-dot-cv ease-pulse-dot-cv-success"></span>
    John Doe is online
</div>

<!-- Live broadcast -->
<div>
    <span class="ease-pulse-dot-cv ease-pulse-dot-cv-danger"></span>
    LIVE — Recording in progress
</div>

<!-- New notifications -->
<div>
    <span class="ease-pulse-dot-cv ease-pulse-dot-cv-info"></span>
    New message in inbox
</div>