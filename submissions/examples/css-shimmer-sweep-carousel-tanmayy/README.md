# CSS Shimmer-Sweep Carousel

A pure-CSS animated horizontal carousel utilizing a Shimmer-Sweep interaction aesthetic, designed specifically for Cyberpunk and Sci-Fi themed interfaces (like Data Archives or Scanner UIs). It features smooth `transform: translateX` slide transitions, followed immediately by a dynamic gradient "scanner" sweep across the active slide, achieved entirely without JavaScript.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a fully functional horizontal carousel. When a user selects a navigation option, the carousel track smoothly slides to reveal the selected panel. Once the panel is in position, a bright, angled gradient (`.shimmer-sweep`) rapidly sweeps across the content from left to right, simulating a data-scan or decryption effect typical in cyberpunk UIs.

### 2. How is it used?

The component is built using standard CSS radio buttons to manage the active state. A `.carousel-track` wrapper holds the slides side-by-side (e.g., 300% width for 3 slides). The `.shimmer-sweep` element is an absolutely positioned gradient placed inside each `.slide-content`. The sweep animation is triggered exclusively when the parent slide's corresponding radio button becomes `:checked`.

```html
<!-- Example: Cyberpunk Carousel Layout -->
<div class="carousel-container">
  
  <!-- Hidden Radio State Controllers -->
  <input type="radio" name="cyber_carousel" id="slide-1" checked>
  <input type="radio" name="cyber_carousel" id="slide-2">
  
  <!-- Sliding Track -->
  <div class="carousel-track">
    
    <div class="carousel-slide slide-1">
      <div class="slide-content">
        <div class="shimmer-sweep"></div>
        <!-- Content... -->
      </div>
    </div>
    
    <!-- More slides... -->
  </div>
  
  <!-- Navigation Controls -->
  <div class="carousel-nav">
    <label for="slide-1">01</label>
    <label for="slide-2">02</label>
  </div>
  
</div>
```

**Customization via CSS Properties:**
You can adjust the animation physics via root variables:

```css
:root {
  --carousel-transition: 0.6s cubic-bezier(0.25, 1, 0.5, 1); /* Slide speed */
  --shimmer-duration: 1.5s; /* Speed of the scanner sweep */
  
  --neon-red: #ff003c;
  --neon-blue: #00e5ff;
}
```

### 3. Why is it useful?

Adding secondary animations (like the shimmer sweep) *after* a primary transition (like the slide) usually requires JavaScript timeout logic or complex React `useEffect` chains to orchestrate. By linking the shimmer `@keyframes` animation directly to the CSS `:checked` state of the radio button and utilizing `animation-delay` (or just letting the CSS engine handle the trigger), we can chain these effects purely in CSS. This ensures maximum performance, zero JavaScript bundle size, and automatic compliance with `prefers-reduced-motion` settings.
