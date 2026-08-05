# Error Pages Collection (404, 500, 403)

This is a self-contained example demonstrating how to create modern, animated error pages with creative illustrations, smooth transitions, and helpful CTAs using pure CSS animations and minimal JavaScript, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 🎨 **Three Error Pages:** 404 (Not Found), 500 (Server Error), and 403 (Access Denied).
- 🚀 **Animated Illustrations:** CSS-only animations for astronaut, server rack, and vault door.
- 🎬 **Smooth Transitions:** Page switching with fade and slide animations.
- ✨ **Interactive Elements:** Hover effects on buttons and animated status indicators.
- 🎯 **Helpful CTAs:** Clear action buttons to guide users back.
- 🌈 **Gradient Effects:** Beautiful gradient text and backgrounds.
- ♿ **Fully Accessible:** Respects `prefers-reduced-motion` and semantic HTML.
- 📱 **Responsive Design:** Adapts from desktop two-column to mobile single-column layout.
- 🎭 **Creative Themes:** Space theme for 404, server theme for 500, security theme for 403.
- 🚫 **Minimal JavaScript:** Only for page navigation switching.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Copy the error page HTML structure you need.
4. Customize error messages, illustrations, and CTAs.
5. Include the JavaScript for page switching (optional).

## HTML Structure

### Error Page Container
```html
<div class="error-container">
  <div class="error-page error-page--active" data-error="404">
    <div class="error-page__content">
      <!-- Illustration -->
      <div class="error-illustration error-illustration--404">
        <!-- Animated elements -->
      </div>
      
      <!-- Error Info -->
      <div class="error-info">
        <h1 class="error-code">404</h1>
        <h2 class="error-title">Page Not Found</h2>
        <p class="error-description">Description text</p>
        <div class="error-actions">
          <button class="error-btn error-btn--primary">Action</button>
        </div>
      </div>
    </div>
  </div>
</div>