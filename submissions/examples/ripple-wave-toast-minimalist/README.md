# Ripple-Wave Toast for Minimalist Tech Layouts

## What does this do?
A sleek, dark-themed toast notification component featuring a continuous, subtle CSS ripple-wave effect and a smooth entrance animation, designed specifically for minimalist tech interfaces and dashboards.

## How is it used?
Include the CSS file and add the component markup to your layout.

```html
<div class="minimalist-ripple-toast">
    <div class="toast-indicator">
        <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    </div>
    <div class="toast-body">
        <h4 class="toast-heading">System Update</h4>
        <p class="toast-text">All minimalist tech dependencies have been updated to the latest versions successfully.</p>
    </div>
    <button class="toast-dismiss" aria-label="Close notification">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    </button>
</div>
```

## Why is it useful?
This component aligns perfectly with EaseMotion's philosophy by delivering complex, engaging visual feedback (the ripple wave and glassmorphism) using only pure CSS and semantic HTML. It brings a premium, high-tech aesthetic to notifications without the overhead of JavaScript libraries, while respecting accessibility preferences via `prefers-reduced-motion`.
