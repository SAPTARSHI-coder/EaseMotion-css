# Animated Avatar Stack

## Description
A modern, interactive avatar stack component that displays overlapping circular avatars which smoothly spread out on hover. It supports both initial-based avatars with gradient backgrounds and image-based avatars. Each avatar features smooth scale and lift animations, tooltips on hover, and a "+X more" indicator for additional members. Built entirely with pure CSS using transforms and transitions, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains two examples - one with initial-based avatars and one with image-based avatars.
- `style.css`: Contains the overlapping layout, hover spread animations, tooltip effects, and responsive design.

## How to use
1. Open `demo.html` in your browser and hover over the avatar stacks to see the spread effect.
2. Copy the HTML and CSS into your project.
3. Wrap your avatars in a `.avatar-stack-qn` container.
4. **For Initial-Based Avatars:**
   - Use `.avatar-qn` with a gradient background
   - Add `.avatar-initials-qn` span with the user's initials
   - Optionally add `data-name="Full Name"` for tooltips
5. **For Image-Based Avatars:**
   - Use `.avatar-qn.avatar-image-qn` with `background-image` set
6. **Customization:**
   - **Overlap Amount:** Change `margin-left: -15px` in `.avatar-qn` to adjust overlap (more negative = more overlap).
   - **Spread Distance:** Modify `margin-left: 10px` in `.avatar-stack-qn:hover .avatar-qn` to change how far they spread.
   - **Size:** Adjust `width` and `height` in `.avatar-qn` (currently 60px).
   - **Border:** Change the `border: 3px solid #ffffff` to match your design.
   - **Animation Speed:** Modify the `0.4s` transition duration for faster or slower animations.

## Features
- **Overlapping Layout:** Avatars overlap with negative margins for a compact display
- **Hover Spread:** Avatars smoothly spread out when hovering the stack
- **Lift & Scale:** Individual avatars lift up and scale on hover
- **Tooltips:** Optional tooltips appear below avatars on hover
- **Staggered Entrance:** Avatars fade in with staggered delays
- **Two Variants:** Supports both initial-based and image-based avatars
- **More Indicator:** Optional "+X" badge for additional members
- **Fully Responsive:** Adapts to smaller screens
- **Accessibility:** Respects `prefers-reduced-motion` user preference

## Adding Tooltips
To add tooltips, include the `data-name` attribute on each avatar:
```html
<div class="avatar-qn" data-name="John Doe" style="background: ...">
    <span class="avatar-initials-qn">JD</span>
</div>