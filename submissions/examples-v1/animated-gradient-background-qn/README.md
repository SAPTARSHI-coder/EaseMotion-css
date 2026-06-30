# Animated Gradient Background

## Description

A stunning, full-page animated gradient background that continuously flows through multiple vibrant colors. This creates a dynamic, living backdrop perfect for hero sections, landing pages, and modern web applications. The effect is achieved purely with CSS using `@keyframes` to animate the `background-position` of a multi-color gradient. Includes a glassmorphism-style button with backdrop blur. Requires absolutely zero JavaScript.

## Files

- `demo.html`: Contains the HTML structure for the gradient background and content overlay with hero text and button.
- `style.css`: Contains the gradient setup, animation keyframes, glassmorphism button styling, and responsive adjustments.

## How to use

1. Open `demo.html` in your browser to see the flowing gradient background with animated content.
2. Copy the HTML and CSS into your project.
3. Add the `.gradient-bg-qn` div as the first child of your `<body>` to create the background.
4. **Customization:**
   - **Colors:** Change the gradient colors in the `linear-gradient` property. The first and last colors should match for a seamless loop (currently `#ee7752`).
   - **Animation Speed:** Adjust the `15s` duration in the `animation` property to make the gradient flow faster or slower.
   - **Gradient Angle:** Change the `-45deg` angle to alter the direction of the gradient (e.g., `90deg` for horizontal, `180deg` for vertical).
   - **Background Size:** Modify `background-size: 400% 400%` to control how much the gradient stretches (larger values = more dramatic movement).

## Creating Different Moods

- **Sunset Theme:** `#ff6b6b, #feca57, #ff9ff3, #48dbfb, #ff6b6b`
- **Ocean Theme:** `#0063b5, #00d4ff, #0099ff, #0063b5`
- **Forest Theme:** `#134e5e, #71b280, #134e5e`
- **Purple Haze:** `#667eea, #764ba2, #f093fb, #667eea`

## Performance Note

This animation uses `background-position` which is generally well-optimized in modern browsers. However, on very low-end devices, you may want to reduce the animation speed or use a simpler gradient with fewer colors.
