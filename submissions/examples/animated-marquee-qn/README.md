# Animated Marquee/Infinite Scroll

## Description
A modern, seamless infinite scroll marquee component that creates a continuous horizontal scrolling effect. Perfect for showcasing client logos, technology stacks, testimonials, or announcements. It features smooth animations, fade edges for a polished look, pause-on-hover functionality, and support for both left-to-right and right-to-left directions. Built entirely with pure CSS using `@keyframes` and `transform`, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains two marquee examples - one with logo placeholders and one with technology badges.
- `style.css`: Contains the infinite scroll animation, fade effects, hover interactions, and responsive design.

## How to use
1. Open `demo.html` in your browser to see the smooth infinite scrolling effect.
2. Copy the HTML and CSS into your project.
3. **Structure:**
   - Wrap everything in a `.marquee-wrapper-qn` container
   - Add fade edges with `.marquee-fade-qn` (optional but recommended)
   - Create a `.marquee-track-qn` div containing all your items
   - **IMPORTANT:** Duplicate your items to create a seamless loop
4. **Customization:**
   - **Speed:** Adjust the `30s` duration in the animation to make it faster or slower.
   - **Direction:** Add `.marquee-reverse-qn` class to the wrapper for right-to-left scrolling.
   - **Gap:** Change the `gap: 40px` in `.marquee-track-qn` to adjust spacing between items.
   - **Fade Intensity:** Modify the `mask-image` gradient to change the fade effect.
   - **Pause on Hover:** Remove the `:hover` rule if you don't want it to pause.

## Features
- **Seamless Loop:** Duplicated content creates an infinite scroll effect
- **Smooth Animation:** Hardware-accelerated `transform: translateX()` for performance
- **Fade Edges:** Gradient masks create a polished, professional look
- **Pause on Hover:** Users can pause the animation to examine items
- **Two Directions:** Support for both left-to-right and right-to-left scrolling
- **Hover Effects:** Individual items can have their own hover interactions
- **Fully Responsive:** Adapts to mobile screens
- **Accessibility:** Respects `prefers-reduced-motion` user preference

## Technical Details
- Uses `transform: translateX()` for smooth, GPU-accelerated animation
- The `calc(-50% - 20px)` ensures the animation loops seamlessly
- CSS `mask-image` creates the fade effect on edges
- `width: fit-content` allows the track to size to its content
- `flex-shrink: 0` prevents items from compressing

## Important: Duplicating Content
For the seamless loop to work, you **must** duplicate your content:
```html
<div class="marquee-track-qn">
    <!-- Original items -->
    <div class="marquee-item-qn">Item 1</div>
    <div class="marquee-item-qn">Item 2</div>
    <div class="marquee-item-qn">Item 3</div>
    
    <!-- Duplicate the same items -->
    <div class="marquee-item-qn">Item 1</div>
    <div class="marquee-item-qn">Item 2</div>
    <div class="marquee-item-qn">Item 3</div>
</div>