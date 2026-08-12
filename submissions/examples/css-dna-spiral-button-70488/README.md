# CSS DNA Spiral Button

A futuristic button featuring a 3D animated DNA double helix that appears and spirals continuously on hover.

## Usage

```html
<button class="dna-btn" aria-label="Synthesize Data">
  <div class="dna-helix" aria-hidden="true">
    <!-- 15 strand elements for the wave effect -->
    <div class="strand"></div>
    <div class="strand"></div>
    <div class="strand"></div>
    <div class="strand"></div>
    <div class="strand"></div>
    <div class="strand"></div>
    <div class="strand"></div>
    <div class="strand"></div>
    <div class="strand"></div>
    <div class="strand"></div>
    <div class="strand"></div>
    <div class="strand"></div>
    <div class="strand"></div>
    <div class="strand"></div>
    <div class="strand"></div>
  </div>
  <span class="btn-text">Synthesize</span>
</button>
```

## Why is this useful for EaseMotion CSS?

This component provides a complex, science/tech-themed micro-animation using only CSS transforms and `nth-child` staggering. It avoids any JavaScript or external libraries, making it a perfect addition to the framework's collection of advanced interactive UI elements.
