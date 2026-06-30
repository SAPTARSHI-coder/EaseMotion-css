# Holographic Glass Ticket Component

1. **What does this do?**
Creates a highly interactive, glassmorphic ticket component that tilts in 3D and triggers an animated multi-colored holographic gradient reflection sweep on hover, entirely without JavaScript.

2. **How is it used?**
Wrap your ticket markup inside a `.glass-ticket-wrapper`. Inside, add your `.glass-ticket` structure with a `.holographic-shimmer` overlay, ticket cutout elements, and an ambient `.glow-backplate`.

```html
<div class="glass-ticket-wrapper">
  <div class="glass-ticket">
    <div class="holographic-shimmer"></div>
    
    <div class="ticket-cutout cutout-left"></div>
    <div class="ticket-cutout cutout-right"></div>
    <div class="ticket-divider-line"></div>

    <div class="ticket-header">
      <span class="ticket-logo">VIP Logo</span>
      <span class="ticket-badge">VIP Pass</span>
    </div>
    
    <div class="ticket-body">
      <h2 class="ticket-event">Event Name</h2>
    </div>
    
    <div class="ticket-footer">
      <div class="ticket-barcode"></div>
      <span class="ticket-serial">NO. 00000</span>
    </div>
  </div>
  
  <div class="glow-backplate"></div>
</div>
```

To use a custom themed variant, append `.ticket-vip` or `.ticket-cyber` to the `.glass-ticket` element.

3. **Why is it useful?**
It showcases how standard CSS properties (`backdrop-filter` for glassmorphism, `mix-blend-mode: color-dodge` for realistic holographic light blending, and multi-axis transforms) can be combined to build stunning premium UI elements with **zero JavaScript**. It is fully responsive, lightweight, and supports accessibility features through `prefers-reduced-motion` settings.
