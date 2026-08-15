# CSS Scrollable Tab Overflow

A pure-CSS implementation of a horizontal scrollable tab navigation bar. It is designed to cleanly handle scenarios where the number of tabs exceeds the width of the parent container, providing a native, app-like horizontal scrolling experience without requiring heavy JavaScript carousels.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a responsive navigation bar. When the tabs overflow the container bounds (e.g., on mobile devices), the container allows horizontal scrolling (`overflow-x: auto`) while completely hiding the ugly native scrollbars. It utilizes CSS `scroll-snap-type` to ensure that when a user finishes swiping, the tabs snap neatly into alignment, preventing them from being cut off awkwardly in the middle of a word.

### 2. How is it used?

The structure uses the classic "Checkbox Hack" (with `type="radio"`) to manage the active tab state entirely in CSS. The tab wrapper handles the overflow and edge-fading effects.

```html
<!-- Example: Scrollable Tabs -->
<div class="tabs-wrapper">
  <nav class="scrollable-tabs">
    
    <!-- Tab 1 -->
    <input type="radio" name="tabs" id="tab-1" class="tab-radio" checked>
    <label for="tab-1" class="tab-item">Overview</label>
    
    <!-- Tab 2 -->
    <input type="radio" name="tabs" id="tab-2" class="tab-radio">
    <label for="tab-2" class="tab-item">Repositories</label>
    
    <!-- More tabs... -->
    
  </nav>
</div>
```

**Customization via CSS Properties:**
You can adjust the colors of the tabs and the active indicator via root variables:

```css
:root {
  --tab-text: #64748b;
  --tab-text-active: #0f172a;
  --tab-indicator-color: #3b82f6; /* The blue active underline */
}
```

### 3. Why is it useful?

Responsive tabs are notoriously difficult. The traditional approach is to collapse them into a "Hamburger" menu or a `<select>` dropdown on mobile. However, a horizontal scrolling row is often a vastly superior UX pattern (frequently seen in native iOS and Android apps) because it keeps the navigation context visible. By using CSS `mask-image: linear-gradient` to create faded edges, and `scroll-snap-type` for physics, this pure CSS component delivers a premium native feel without adding any JavaScript overhead or scroll event listeners.
