# Animated Card Tilt/3D Hover Effect

## Description
A stunning, interactive card component that creates a parallax-like 3D tilt effect when hovered. The cards rotate in 3D space, revealing a dynamic shine/glare effect that sweeps across the surface. The icon lifts up with a depth effect, creating a premium, tactile feel. Built entirely with pure CSS using perspective transforms and 3D positioning, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure for three feature cards with icons, titles, and descriptions.
- `style.css`: Contains the 3D perspective setup, tilt transforms, shine effect, and depth animations.

## How to use
1. Open `demo.html` in your browser and hover over the cards to see the 3D tilt effect.
2. Copy the HTML and CSS into your project.
3. Wrap your card content inside a `.tilt-card-qn` div, including the `.card-shine-qn` element for the glare effect.
4. **Customization:**
   - **Tilt Intensity:** Adjust the `rotateY(-10deg) rotateX(10deg)` values in `.tilt-card-qn:hover` to change the tilt angle.
   - **Shine Effect:** Modify the gradient colors and opacity in `.card-shine-qn` to change the glare appearance.
   - **Depth Effect:** Change the `translateZ()` values to increase or decrease the 3D depth.
   - **Colors:** Update the gradient colors in `.card-icon-qn` to match your brand.
   - **Animation Speed:** Adjust the `0.4s` transition duration to make the tilt faster or slower.

## Features
- **3D Tilt Effect:** Cards rotate in 3D space on hover using perspective transforms
- **Dynamic Shine:** A light glare sweeps across the card surface on hover
- **Icon Depth:** Icons lift up with translateZ for a layered effect
- **Smooth Transitions:** Cubic-bezier easing for natural, bouncy movement
- **Staggered Load:** Cards fade in with staggered delays
- **Responsive Design:** Adapts to mobile with simplified hover effect
- **Accessibility:** Respects `prefers-reduced-motion` user preference

## Technical Details
- Uses `perspective: 1000px` on the container for 3D depth
- `transform-style: preserve-3d` allows children to exist in 3D space
- `translateZ()` creates depth layers within the card
- The shine effect uses a moving linear gradient with opacity transitions
- Hardware-accelerated transforms ensure smooth performance

## Use Cases
- Portfolio project showcases
- Product feature highlights
- Service offerings
- Team member cards
- Testimonial displays
- Pricing plan cards
- Gallery items

## Browser Support
- Full support in all modern browsers (Chrome, Firefox, Safari, Edge)
- 3D transforms are hardware-accelerated for smooth performance
- Graceful fallback for mobile devices (simplified hover effect)
- Respects user motion preferences