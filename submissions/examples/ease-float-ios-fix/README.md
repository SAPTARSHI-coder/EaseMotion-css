# Ease-Float iOS Safari Fix

A demonstration of the fix for the iOS Safari page jumping issue with the floating animation.

## Features
- Fixes page jumping on iOS Safari by pre-promoting elements to GPU compositing layers
- Uses `translateZ(0)` to prevent mid-animation layer promotion
- Includes `backface-visibility: hidden` to prevent flicker on older Safari versions
- Adds vendor-prefixed keyframes for WebKit compatibility
- Uses `will-change: transform` for optimal performance

## Why It Works

### translateZ(0)
Pre-promotes the element to a GPU compositing layer upfront. Without this, WebKit may promote the element to a layer mid-animation, causing layout shifts and page jumping.

### backface-visibility: hidden
Prevents visual flicker on older Safari versions during layer changes.

### -webkit-overflow-scrolling
Note that this property only applies to actual scroll containers, not animated elements. It has no effect on floating animations.

## Usage
```html
<div class="ease-float-fixed">
  Floating content
</div>
```

## Browser Support
- All modern browsers (Chrome, Firefox, Safari, Edge)
- Optimized specifically for iOS Safari 10+

## Tech Stack
- HTML + CSS only, no JavaScript
