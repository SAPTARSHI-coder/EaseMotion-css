# Neon Glow Tabs - E-Commerce Checkout Showcase

A pure CSS animated tab component featuring a futuristic, glowing neon pill slider transition. Designed specifically to elevate high-end E-Commerce checkout interfaces, cyber-stores, and modern product purchase portals.

## Features

- **Pure CSS State & Animation:** State management is handled completely by the CSS "radio hack" (`:checked` paired with the general sibling combinator `~`), requiring zero JavaScript for logic or transitions.
- **Neon Glow Pill Slider:** An animated glowing pill smoothly translates behind the active checkout step, featuring customizable cubic-bezier easing, dynamic scaling, and multi-layered glowing box shadows.
- **E-Commerce Checkout Aesthetics:** Includes a complete 3-step checkout layout (Shipping Details, Payment Method, Order Review) complete with interactive delivery radio options, a futuristic cyberpunk credit card mockup, and cost breakdown tables.
- **Responsive & Accessible:** Adaptively shifts the tab navigation from a horizontal bar to a vertical stack on small mobile screens. Fully keyboard accessible with custom neon focus outlines. (Note: A tiny 10-line script is included in the HTML *solely* to map Enter and Spacebar keys on `<label role="tab">` to check the corresponding radio inputs for robust accessibility).
- **Customizable Parameters:** Exposes standard CSS Custom Properties on `:root` for effortless theming, timing control, scaling factors, and color adjustments.

## Customization

The component exposes comprehensive CSS variables on the `:root` pseudo-class for seamless customization:

```css
:root {
    /* Animation & Timing Parameters */
    --tab-transition-time: 0.5s;
    --tab-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
    --tab-scale: 1.02;
    --panel-fade-time: 0.55s;
    --panel-fade-easing: cubic-bezier(0.16, 1, 0.3, 1);
    
    /* Neon Glow & Color Palette */
    --neon-primary: #00f2fe;     /* Electric Cyan */
    --neon-secondary: #4facfe;   /* Vibrant Blue */
    --neon-accent: #00ff87;      /* Secure Emerald / Success */
    --neon-purple: #a855f7;      /* Cyber Purple */
    --neon-glow-primary: 0 0 20px rgba(0, 242, 254, 0.4), 0 0 40px rgba(79, 172, 254, 0.2);
    --neon-glow-accent: 0 0 20px rgba(0, 255, 135, 0.4), 0 0 40px rgba(0, 255, 135, 0.25);
    
    /* E-Commerce Theme Palette */
    --bg-main: #040711;
    --bg-container: rgba(13, 18, 30, 0.75);
    --bg-surface: rgba(255, 255, 255, 0.03);
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    /* ... see style.css for all variables */
}
```

## How to Use

1. Copy the core HTML structure from `demo.html`, ensuring the hidden `<input type="radio">` elements remain as siblings to `.tabs-header` and `.tabs-panels`.
2. Include the styles from `style.css`.
3. Place your checkout step forms and content inside the respective `.tab-content` containers.

```html
<!-- Core Structure Example -->
<div class="tabs-wrapper">
    <input type="radio" id="tab-shipping" name="checkout-tabs" class="tab-input" checked>
    <input type="radio" id="tab-payment" name="checkout-tabs" class="tab-input">
    <input type="radio" id="tab-review" name="checkout-tabs" class="tab-input">
    
    <div class="tabs-header" role="tablist">
        <label for="tab-shipping" class="tab-label" role="tab" tabindex="0">1. Shipping</label>
        <label for="tab-payment" class="tab-label" role="tab" tabindex="0">2. Payment</label>
        <label for="tab-review" class="tab-label" role="tab" tabindex="0">3. Review</label>
        <div class="tab-slider"></div>
    </div>
    
    <div class="tabs-panels">
        <div id="panel-shipping" class="tab-content content-shipping" role="tabpanel">...</div>
        <div id="panel-payment" class="tab-content content-payment" role="tabpanel">...</div>
        <div id="panel-review" class="tab-content content-review" role="tabpanel">...</div>
    </div>
</div>
```
