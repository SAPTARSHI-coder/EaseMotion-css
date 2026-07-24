# Slide Up Profile Card (Real Estate Theme)

A pure CSS profile card component featuring an elegant slide-up animation. Designed with a premium Real Estate aesthetic, it displays a background image and an agent's name, revealing their full bio and contact information smoothly when hovered.

## Features

- **Pure CSS Slide Up**: Uses `transform: translateY()` to hide the extended content below the fold. On `:hover`, the card slides the content up to reveal it natively without JavaScript.
- **Cascading Opacity**: The hidden content (bio, contact info, buttons) uses a slight `transition-delay` so that it fades in *after* the sliding motion begins, creating a highly polished, staggered animation.
- **Premium Theming**: Employs a luxurious color palette (Navy Blue `#1a365d` and Gold `#c5a880`), deep backdrop blurs (`backdrop-filter`), and sophisticated typography (`Playfair Display` for headers).
- **Subtle Background Scaling**: The background image scales up slightly (`transform: scale(1.05)`) when the card is hovered, adding depth to the interaction.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML identically to `demo.html`.
3. (Optional) Import the *Playfair Display* font from Google Fonts for the best aesthetic match.

## Usage Example

```html
<div class="ease-slide-up-card">
  <!-- Background Image Layer -->
  <div class="ease-card-image" style="background-image: url('agent.jpg');"></div>
  
  <!-- Content Overlay -->
  <div class="ease-card-content">
    
    <!-- Always Visible Header -->
    <div class="ease-card-header">
      <h3 class="ease-agent-name">James Sterling</h3>
      <p class="ease-agent-title">Luxury Property Specialist</p>
    </div>
    
    <!-- Hidden Content (Slides Up) -->
    <div class="ease-card-slide-content">
      <p class="ease-agent-bio">Over 15 years in luxury real estate.</p>
      
      <div class="ease-contact-info">
        <span>📞 +1 (555) 123-4567</span>
      </div>
      
      <button class="ease-action-btn">View Listings</button>
    </div>
    
  </div>
</div>
```

## Why it fits EaseMotion CSS

- **Spatial Mechanics**: Relying on `transform: translateY()` rather than animating `height` ensures that the browser uses the GPU to render the animation, preventing layout recalculation lag.
- **Polished Choreography**: Showcases how combining a `transform` on a container with a delayed `opacity` fade on its children produces a "premium" feel often sought after in high-end web design.
