# Confetti Toggle Switch (#41922)

A clean, high-performance, and accessible dark-mode party switch component that launches a radial confetti burst completely in pure CSS.

### How to use
Add the switch markup directly into your document:

```html
<div class="party-switch">
    <input type="checkbox" id="party-trigger" class="native-input">
    <label for="party-trigger" class="custom-track">
        <span class="custom-knob">
            <i class="burst-dot" style="--angle: 45deg; --dist: 50px; --color: #00ffcc;"></i>
        </span>
    </label>
</div>