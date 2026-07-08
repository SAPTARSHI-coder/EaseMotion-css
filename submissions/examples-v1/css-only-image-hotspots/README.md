# Pure CSS Interactive Image Hotspots

This submission adds an advanced, highly visual component to EaseMotion CSS: Image Hotspots. 

## Features
- **Zero JavaScript:** Built entirely with CSS absolute positioning and `:hover` / `:focus-within` triggers.
- **Pulsating Animation:** Uses a continuous `transform: scale()` keyframe animation on a pseudo-element to create an eye-catching radar pulse effect that draws user attention.
- **Animated Tooltips:** Product cards smoothly reveal themselves with a bounce animation when the user interacts with the hotspot.
- **Accessibility:** Hotspots support `tabindex="0"`, allowing keyboard users to tab through the image and reveal the tooltips automatically using the `:focus-within` selector.

## Usage
Simply define an `.ease-hotspot-container` with an image inside. Place `.ease-hotspot` items inside the container and position them absolutely using inline styles for `top` and `left` percentages.

```html
<div class="ease-hotspot-container">
  <img src="your-image.jpg" alt="Living Room">
  
  <div class="ease-hotspot" style="top: 25%; left: 35%;" tabindex="0">
    <div class="ease-hotspot-marker"></div>
    <div class="ease-hotspot-card">
      <h4>Modern Lamp</h4>
      <p>$49.99</p>
    </div>
  </div>
  
  <!-- Add .ease-tooltip-top if the dot is near the bottom of the image -->
  <div class="ease-hotspot ease-tooltip-top" style="top: 80%; left: 80%;" tabindex="0">
    <div class="ease-hotspot-marker"></div>
    <div class="ease-hotspot-card">
      <h4>Plant</h4>
      <p>$35.00</p>
    </div>
  </div>
</div>
```
