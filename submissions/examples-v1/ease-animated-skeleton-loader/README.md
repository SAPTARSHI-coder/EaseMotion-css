# Animated Skeleton Loader

A modern, highly customizable skeleton loading placeholder card that uses a smooth CSS background gradient animation to simulate a shimmering loading state. 

## Features
- **Smooth Shimmer**: Utilizes `background-position` and CSS linear gradients to create a continuous shimmer effect without expensive layout repaints.
- **Realistic Layout**: Mimics a standard user profile card or article snippet with an avatar, title lines, and a call-to-action button.
- **Easy Customization**: The linear-gradient colors can easily be swapped out for dark mode loading states.

## How to use

```html
<div class="ease-skeleton-card">
    <div class="ease-skeleton-header">
        <div class="ease-skeleton-avatar"></div>
        <div class="ease-skeleton-title-group">
            <div class="ease-skeleton-line ease-skeleton-title"></div>
            <div class="ease-skeleton-line ease-skeleton-subtitle"></div>
        </div>
    </div>
    <!-- ... -->
</div>
```
