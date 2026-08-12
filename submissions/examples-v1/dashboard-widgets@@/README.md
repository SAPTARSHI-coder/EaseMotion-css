# Dashboard Widgets Collection

This is a self-contained example demonstrating how to create modern, animated dashboard widgets including stats cards, activity feeds, quick actions, and project tables using pure CSS and minimal JavaScript, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 📊 **Animated Stats Cards:** Counter animations with trend indicators and sparkline charts.
- 📈 **Activity Feed:** Real-time activity stream with user avatars and timestamps.
- ⚡ **Quick Actions Grid:** Interactive action buttons with hover effects and icon animations.
- 📋 **Projects Table:** Responsive data table with progress bars, team avatars, and status badges.
- 🎨 **Color-Coded Widgets:** Primary, success, warning, and info color variants.
- ✨ **Smooth Animations:** Hover effects, counter animations, and progress bar transitions.
- ♿ **Fully Accessible:** Respects `prefers-reduced-motion` and includes proper semantic HTML.
- 📱 **Responsive Design:** Adapts from desktop to mobile with adjusted layouts.
- 🚫 **Minimal JavaScript:** Only for counter animations and progress bar initialization.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Copy the widget HTML structures you need.
4. Include the JavaScript for counter animations (optional).
5. Customize colors, data, and content as needed.

## Widget Types

### 1. Stats Card
```html
<div class="widget widget--stats">
  <div class="widget__header">
    <div class="widget__icon widget__icon--primary">
      <!-- Icon SVG -->
    </div>
    <span class="widget__trend widget__trend--up">+12.5%</span>
  </div>
  <div class="widget__content">
    <div class="widget__value" data-target="2847">0</div>
    <div class="widget__label">Total Users</div>
  </div>
  <div class="widget__sparkline">
    <!-- SVG sparkline -->
  </div>
</div>