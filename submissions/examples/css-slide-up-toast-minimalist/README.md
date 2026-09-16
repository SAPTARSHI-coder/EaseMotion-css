# CSS Slide-Up Toast for Minimalist Tech Layouts

This is a modern, lightweight, pure CSS slide-up toast notification designed for minimalist and tech-focused interfaces.

## Usage

Include the HTML structure and link the CSS file. The animation is triggered via CSS `:active` or `:focus` on the preceding button in this demo, but can also be applied by toggling a class with JavaScript.

```html
<button class="trigger-btn">Show Toast</button>
<div class="toast-container">
    <div class="toast ease-slide-up">
        <div class="toast-icon">
            <!-- SVG Icon -->
        </div>
        <div class="toast-content">
            <span class="toast-title">Action Successful</span>
            <span class="toast-message">Your changes have been saved successfully.</span>
        </div>
    </div>
</div>
```

## Why is it useful?

It provides a smooth, elegant, and non-intrusive way to display momentary notifications, leveraging hardware-accelerated CSS animations (`transform` and `opacity`) for optimal performance, fully aligning with EaseMotion's philosophy of lightweight, high-performance interactions.
