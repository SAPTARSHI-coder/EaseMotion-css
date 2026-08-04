# Feature Comparison Table

This is a self-contained example demonstrating how to create a modern, responsive feature comparison table with sticky headers, highlighted columns, hover effects, and mobile card view using pure CSS, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 📊 **Comparison Table:** Full-featured comparison matrix with multiple plans.
- 📌 **Sticky Headers:** Table headers remain visible while scrolling.
- ⭐ **Highlighted Column:** "Most Popular" plan with visual emphasis.
- ✓ **Check/Cross Icons:** Animated icons for feature availability.
- 🎨 **Hover Effects:** Row highlighting and icon scaling on hover.
- 📱 **Mobile Card View:** Automatic switch to card layout on mobile devices.
- 🎯 **Section Grouping:** Features organized into logical sections.
- ✨ **Smooth Animations:** Transitions for hover states and badge glow.
- ♿ **Fully Accessible:** Respects `prefers-reduced-motion` and semantic HTML.
- 🚫 **Zero JavaScript:** Entirely built with HTML and CSS.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Copy the comparison table HTML structure.
4. Customize plan names, prices, and features.
5. Add or remove feature rows as needed.

## HTML Structure

### Desktop Table
```html
<div class="comparison-table-wrapper">
  <div class="comparison-table">
    <!-- Header with plan columns -->
    <div class="comparison-table__header">
      <div class="comparison-table__feature-col">
        <h3>Features</h3>
      </div>
      <div class="comparison-table__plan-col">
        <!-- Plan header with name, price, button -->
      </div>
      <!-- More plan columns -->
    </div>
    
    <!-- Body with feature rows -->
    <div class="comparison-table__body">
      <div class="comparison-section">
        <div class="comparison-section__header">
          <h5>Section Name</h5>
        </div>
        <div class="comparison-row">
          <div class="comparison-row__feature">
            <span class="feature-name">Feature Name</span>
          </div>
          <div class="comparison-row__value">Value or Icon</div>
          <!-- More values -->
        </div>
      </div>
    </div>
  </div>
</div>