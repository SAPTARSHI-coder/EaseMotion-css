# CSS Morph-Glow Carousel

A pure-CSS animated carousel utilizing a Morph-Glow interaction aesthetic, designed to complement Fintech and Web3 dashboard layouts. It features a completely JavaScript-free slide transition system and a complex, organic morphing glow behind the active card.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a fully functional image/card carousel (e.g., for swiping between virtual credit cards or crypto wallets) without requiring any JavaScript. When a card is active, it scales up to full size, and a highly stylized glowing aura appears behind it. This aura smoothly morphs its shape (via complex `border-radius` keyframes) and rotates, creating an organic, premium Web3/Fintech feel. 

### 2. How is it used?

The carousel is driven by a hidden radio button group. The state of the radio buttons (`:checked`) dictates the `translateX` position of the `.carousel-track`.

```html
<div class="carousel-container">
  <!-- Hidden Radio State Controllers -->
  <input type="radio" name="wallet_carousel" id="wallet-1" checked>
  <input type="radio" name="wallet_carousel" id="wallet-2">
  
  <!-- Carousel Track -->
  <div class="carousel-track">
    <div class="carousel-slide">
      <div class="morph-glow glow-primary"></div>
      <div class="wallet-card">...</div>
    </div>
    <!-- more slides... -->
  </div>
  
  <!-- Navigation Controls -->
  <div class="carousel-nav">
    <label for="wallet-1" class="nav-dot"></label>
    <label for="wallet-2" class="nav-dot"></label>
  </div>
</div>
```

**Customization via CSS Properties:**
You can adjust the animation physics and themes via root variables:

```css
:root {
  --carousel-transition: 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  --glow-animation-speed: 8s; /* Controls how fast the organic shape morphs/rotates */
  
  --color-primary: #10b981;
  --color-primary-dark: #047857;
}
```

### 3. Why is it useful?

Carousels are notoriously heavy components, often requiring bulky JavaScript libraries (like Swiper or Slick) just to handle basic dot-navigation and slide transitions. By utilizing the CSS radio-button hack, developers can implement a lightweight, ultra-performant slider natively. Furthermore, complex organic animations (like the morphing glow) are hardware-accelerated in modern browsers. This component proves that high-end, Dribbble-style Fintech aesthetics are entirely possible using only semantic HTML and CSS, fully respecting `prefers-reduced-motion` for accessibility.
