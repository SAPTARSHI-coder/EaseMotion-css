# CSS Profile Stats Row

A pure-CSS animated profile statistics row, designed for Minimalist Tech layouts (e.g., social dashboards, developer profiles). It features a responsive flexbox layout with smooth hover interactions that emphasize the underlying numeric data without requiring any JavaScript.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a horizontal row displaying standard profile statistics (Posts, Followers, Following). When a user hovers or focuses on a specific statistic block, the background slightly highlights, and the numeric value pops upwards (`transform: translateY(-2px) scale(1.05)`) while shifting to an accent color. This provides satisfying tactile feedback indicating the stat is clickable.

### 2. How is it used?

The layout relies on standard CSS Flexbox to evenly distribute the `.stat-item` elements, separated by decorative `.stat-divider` lines. The items themselves are implemented as standard `<a>` tags for accessibility and navigation.

```html
<!-- Example: Profile Stats Row Layout -->
<div class="profile-stats-row">
  
  <a href="#" class="stat-item" aria-label="142 Posts">
    <span class="stat-value">142</span>
    <span class="stat-label">Posts</span>
  </a>
  
  <div class="stat-divider" aria-hidden="true"></div>
  
  <a href="#" class="stat-item" aria-label="12.8K Followers">
    <span class="stat-value">12.8K</span>
    <span class="stat-label">Followers</span>
  </a>
  
</div>
```

**Customization via CSS Properties:**
You can adjust the animation physics and accent colors via root variables:

```css
:root {
  --hover-duration: 0.3s;
  --hover-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --accent-color: #3b82f6; /* Controls the highlighted number color */
}
```

### 3. Why is it useful?

Profile dashboards require high information density but must remain easily scannable. A horizontal stats row is a ubiquitous pattern for solving this. By adding hardware-accelerated CSS `transform` animations to the numbers on hover, you immediately communicate interactivity and draw the user's eye to the data that matters. Implementing this purely in CSS ensures optimal performance, immediate interaction response, and automatic fallback to static text if the user's OS has `prefers-reduced-motion` enabled.
