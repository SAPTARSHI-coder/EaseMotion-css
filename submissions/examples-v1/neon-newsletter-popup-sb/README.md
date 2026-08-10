# 💡 Neon Newsletter Popup

A minimalist newsletter popup with a vibrant neon glow effect, inspired by Minimalist design patterns.

## Features
- Continuous neon pulse animation (cyan ↔ magenta)
- Smooth scale-in/scale-out transitions
- Email input with focus glow effect
- Form submission with validation
- Close button with rotation hover effect
- Click outside to close
- Keyboard support (Escape to close)
- Responsive design
- Uses EaseMotion CSS variables

## Usage
```html
<!-- Trigger Button -->
<button id="showPopup">Subscribe Now</button>

<!-- Popup -->
<div class="ease-popup-overlay" id="popupOverlay">
    <div class="ease-popup ease-popup-visible">
        <button class="ease-popup-close">×</button>
        <div class="ease-popup-content">
            <h2 class="ease-popup-title">Stay in the Loop</h2>
            <form class="ease-popup-form">
                <input type="email" class="ease-popup-input" placeholder="Enter your email" />
                <button type="submit" class="ease-popup-submit">Subscribe</button>
            </form>
        </div>
    </div>
</div>