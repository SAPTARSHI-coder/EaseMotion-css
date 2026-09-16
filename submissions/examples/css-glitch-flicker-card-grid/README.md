# CSS Glitch-Flicker Card Grid

A pure-CSS animated card grid utilizing a Glitch-Flicker interaction aesthetic, designed to complement Cyberpunk or Sci-Fi E-Commerce Checkout interface layouts. It features a playful, dynamic animation for the active step indicator that flashes and glitches into view.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a selectable grid of cards (e.g., for choosing a payment method during an e-commerce checkout). When a user selects a card, a highly stylized "glitch and flicker" animation runs instantly, utilizing `clip-path`, `text-shadow`, and `transform` keyframes. It uses a pure CSS mechanism (hidden radio buttons) to toggle the active state across the grid without requiring any JavaScript.

### 2. How is it used?

The component uses a pure CSS radio button group hidden inside `<label>` tags. The glitch effect is achieved via a dedicated `.glitch-overlay` absolute element and pseudoelements `::before`/`::after` on text to duplicate and slice the content.

```html
<div class="card-grid glitch-flicker-grid">
  <!-- Card -->
  <label class="grid-card-label" tabindex="0">
    <!-- Hidden Radio Button controls state -->
    <input type="radio" name="payment_method" class="card-radio" value="credit" checked>
    
    <!-- Card Content -->
    <div class="card-content">
      <!-- The animated glitch overlay -->
      <div class="glitch-overlay"></div>
      
      <div class="card-text">
        <h3 class="card-title">FIAT_CREDIT</h3>
      </div>
    </div>
  </label>
</div>
```

**Customization via CSS Properties:**
You can adjust the animation physics and aesthetics via the root variables:

```css
:root {
  --glitch-color-1: #0ff; /* Cyan neon glow */
  --glitch-color-2: #f0f; /* Magenta neon glow */
  --glitch-bg-default: #0a0a0c;
  
  --glitch-anim-speed: 0.3s;
}
```

### 3. Why is it useful?

Checkout flows don't have to be boring. In niche markets (like gaming, Web3, or tech apparel), providing a highly thematic checkout experience builds brand identity. The glitch-flicker effect adds a raw, digital, and futuristic aesthetic. By relying entirely on CSS keyframes and radio states for interaction, developers achieve complex visual effects while keeping the codebase lightweight and performant. Additionally, all animations fallback to standard static states if a user enables `prefers-reduced-motion`, ensuring full accessibility compliance.
