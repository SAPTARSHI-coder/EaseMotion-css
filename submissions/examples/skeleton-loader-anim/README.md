# Micro-Animated Skeleton Loading Screen

## Overview
This submission provides a sleek, modern **Skeleton Loader Component** utilizing a smooth continuous shimmer gradient animation (`shimmerPulse`). It gracefully simulates asynchronous content loading states while adhering to EaseMotion's animation-first design philosophy.

## Usage
Add the following HTML structure to your project alongside the styling sheet:

```html
<div class="skeleton-card">
    <div class="skeleton-avatar skeleton-shimmer"></div>
    <div class="skeleton-info">
        <div class="skeleton-line skeleton-shimmer title-line"></div>
        <div class="skeleton-line skeleton-shimmer"></div>
        <div class="skeleton-line skeleton-shimmer short-line"></div>
    </div>
</div>
```
## Why it fits EaseMotion CSS
Animation-First: Integrates motion directly into loading indicators to make perceived waiting times feel fluid and delightful.
Zero Dependencies: Pure HTML and CSS architecture requiring no heavy JavaScript generation or framework libraries.
Composability: Seamlessly fits into any card, grid, or dashboard container layout.