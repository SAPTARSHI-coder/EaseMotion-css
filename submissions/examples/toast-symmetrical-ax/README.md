# Symmetrical Toast Animation

Demonstrates a toast notification with symmetrical enter and exit distances
(both 32px), fixing the jarring asymmetric animation in the default toast
component.

## The Problem
The default `.ease-toast-enter` slides in by 32px, but `.ease-toast-leave`
slides out by 100% of the element width, causing an inconsistent, jarring
experience.

## This Solution
Both enter and exit use a `translateX()` distance of 32px. The enter animation
slides the toast in from the right by 32px, and the leave animation slides it
back out by the same distance, creating a smooth, symmetrical motion.

## EaseMotion Classes Used in Demo
- **Layout:** `ease-container`, `ease-flex`, `ease-justify-between`, `ease-items-center`, `ease-min-h-screen`
- **Background:** `ease-bg-gray-100`
- **Typography:** `ease-text-3xl`, `ease-font-bold`, `ease-text-gray-500`, `ease-text-sm`, `ease-text-gray-400`, `ease-font-semibold`, `ease-text-lg`
- **Spacing:** `ease-mb-4`, `ease-mb-8`, `ease-mt-6`, `ease-p-4`
- **Components:** `ease-btn`, `ease-btn-primary`, `ease-btn-lg`, `ease-card`, `ease-shadow-lg`
- **Hover Effects:** `ease-hover-scale-105`, `ease-hover-text-gray-600`
- **Animations:** `ease-fade-in`, `ease-delay-200`, `ease-delay-500`, `ease-transition`

## How to Use
1. Open `demo.html` in any modern browser.
2. Click "Show Toast" to see the symmetrical animation.
3. Use the `.sym-toast` class and the enter/leave logic in your own projects.