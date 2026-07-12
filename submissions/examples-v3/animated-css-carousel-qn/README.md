# Animated CSS-Only Carousel / Image Slider

## Description
A smooth, fully interactive image carousel built entirely with pure CSS. It features a sliding track animation, clickable navigation dots that highlight the active slide, and glassmorphism-styled image captions. It uses the "radio button hack" to handle state management and slide transitions, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure using hidden radio inputs, image slides, captions, and navigation dot labels.
- `style.css`: Contains the flexbox track layout, the `transform: translateX()` sliding transitions, and the active dot styling.

## How to use
1. Open `demo.html` in your browser and click the dots to slide between images.
2. Copy the HTML and CSS into your project.
3. **Structure:**
   - Add hidden radio inputs at the top of the container (one for each slide).
   - Wrap your slides in a `.carousel-track-qn` div inside a `.carousel-viewport-qn`.
   - Add `<label>` elements linked to the radio inputs to act as navigation dots.
4. **Customization:**
   - **Add More Slides:** Add a new radio input, a new `.carousel-slide-qn`, and a new `.carousel-dot-qn`. Then, add a new CSS rule for the `transform: translateX(-X00%)` based on the new radio `:checked` state.
   - **Animation Speed:** Adjust the `0.6s` transition duration in `.carousel-track-qn` to make the slide faster or slower.
   - **Image Height:** Change the `height: 450px` in `.carousel-slide-qn img` to adjust the carousel's vertical size.
   - **Caption Style:** Modify the `background` and `backdrop-filter` in `.slide-caption-qn` to change the glassmorphism effect.

## Features
- **Smooth Sliding:** Hardware-accelerated `transform: translateX()` for buttery smooth transitions.
- **Radio Button Hack:** Pure CSS state management without JavaScript.
- **Active Dot Indicator:** The navigation dots scale up and glow when their respective slide is active.
- **Glassmorphism Captions:** Beautiful, blurred overlay captions for each image.
- **Fully Responsive:** Adapts image heights and caption sizes for mobile devices.