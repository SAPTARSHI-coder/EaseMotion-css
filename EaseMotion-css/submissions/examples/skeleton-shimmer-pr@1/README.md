# Skeleton Shimmer Loader (`ease-skeleton-pr`)

## Description
This submission adds a **Skeleton Shimmer Loader** utility to EaseMotion CSS. It provides a smooth, continuous shimmering animation over placeholder blocks, perfect for creating modern loading states (Skeleton UI) while data is being fetched from an API.

## Features
- ⚡ **Zero JavaScript**: 100% pure CSS performance.
- 🌊 **Smooth Shimmer**: Uses hardware-accelerated `transform: translateX` for 60fps animation.
- 🧩 **Composable**: Easily combine with width/height utilities to create avatars, text lines, or buttons.

## How to Use
Apply the `ease-skeleton-pr` class to any placeholder `div`. Add your own width/height classes to shape it.

```html
<!-- Avatar Skeleton -->
<div class="ease-skeleton-pr" style="width: 50px; height: 50px; border-radius: 50%;"></div>

<!-- Text Line Skeleton -->
<div class="ease-skeleton-pr" style="width: 80%; height: 16px; margin-bottom: 8px;"></div>