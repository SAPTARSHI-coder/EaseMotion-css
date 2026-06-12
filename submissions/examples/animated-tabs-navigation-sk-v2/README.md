# Animated Tabs Navigation Component

 feature/animated-file-upload
A modern, highly performant SaaS dashboard tabs navigation component built using **pure HTML and CSS**. It utilizes the CSS checkbox/radio hack for state switching and includes an animated sliding underline indicator, dynamic content panel transitions, staggered element entrances, and full responsive support (horizontal swipe scroll on mobile inputs) without any external libraries or JavaScript.

## 1. What does this do?

This component provides a fully interactive dashboard horizontal tab deck featuring five functional views:
- **Overview**: Stat cards with metric gains, SVG icons, and a recent activities log.
- **Analytics**: A CSS-based vertical bar chart displaying weekly performance that scales up when selected.
- **Team**: List of team members with status indicator overlays, badge designations, and custom icon actions.
- **Settings**: A complete profile form with responsive grid controls and custom-styled toggles.
- **Billing**: Active plan card pricing details and a billing invoice list table.

### Animation Details
1. **Sliding Underline**: Toggling inputs triggers translations of a single horizontal line that moves exactly under the selected tab.
2. **Tab Hover Effects**: Active backgrounds transition via scale transformations, and icons nudge upwards.
3. **Fade & Slide-Up Entrances**: Selecting a tab shifts the target panel opacity from 0 to 1 and moves it up along the Y-axis.
4. **Staggered Panel Items**: Stat grids and lists use sequential CSS transition-delays to stagger items, making the UI feel alive.

---

## 2. How is it used?

### HTML Setup
To include the tabs deck, create radio inputs before the navbar and associate them using labels:

```html
<div class="ease-tabs-card">
  <!-- Radio Inputs -->
  <input type="radio" id="tab-overview" name="tabs" class="ease-tab-input" checked>
  <input type="radio" id="tab-analytics" name="tabs" class="ease-tab-input">
  <!-- add other inputs... -->

  <!-- Navigation Headers -->
  <div class="ease-tabs-nav" role="tablist">
    <label for="tab-overview" class="ease-tab-label" role="tab">
      <svg class="tab-icon">...</svg>
      <span>Overview</span>
    </label>
    <label for="tab-analytics" class="ease-tab-label" role="tab">
      <svg class="tab-icon">...</svg>
      <span>Analytics</span>
    </label>
    <!-- Add other labels... -->
    
    <!-- Underline Indicator -->
    <span class="ease-tab-indicator"></span>
  </div>

  <!-- Content Panels -->
  <div class="ease-tabs-content">
    <div class="ease-tab-panel panel-overview" role="tabpanel">...</div>
    <div class="ease-tab-panel panel-analytics" role="tabpanel">...</div>
    <!-- Add other panels... -->
  </div>
</div>
```

### CSS Controls
The sliding indicator shifts based on sibling inputs checked selector states. The desktop translation layout:

```css
#tab-overview:checked ~ .ease-tabs-nav .ease-tab-indicator { transform: translateX(0%); }
#tab-analytics:checked ~ .ease-tabs-nav .ease-tab-indicator { transform: translateX(100%); }
#tab-team:checked ~ .ease-tabs-nav .ease-tab-indicator { transform: translateX(200%); }
#tab-settings:checked ~ .ease-tabs-nav .ease-tab-indicator { transform: translateX(300%); }
#tab-billing:checked ~ .ease-tabs-nav .ease-tab-indicator { transform: translateX(400%); }
```

Active panel selection transitions use the checked state to toggle visibility:

```css
.ease-tab-panel {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  height: 0;
  overflow: hidden;
  transition: opacity 0.4s var(--transition-smooth), transform 0.4s var(--transition-smooth);
}

#tab-overview:checked ~ .ease-tabs-content .panel-overview {
  opacity: 1;
  visibility: visible;
  position: relative;
  height: auto;
}
```

---

## 3. Why is it useful?

1. **Zero JavaScript & Low Overhead**: Because it runs on raw CSS state bindings, there are no scripts to download, execute, or block rendering. It operates instantly upon page load.
2. **Dynamic Height Compatibility**: Using absolute positioning for inactive tabs and reverting active ones to `relative` makes the parent card wrap the exact height of the selected view naturally.
3. **Smooth Mobile Swipe Scrolling**: On narrower viewports, the tab list shrinks labels to `120px` and enables an overflow container. Underline indicator shifts continue to line up perfectly.
4. **Accessibility Friendly**: Labels map directly to their corresponding hidden radio states, making them fully keyboard navigable (using Space/Enter or arrow keys to switch) and screen-reader descriptive through standard tab, tablist, and tabpanel role definitions.
=======
## What does this do?

This component creates a responsive animated tabs navigation interface using only HTML and CSS.

## How is it used?

Add radio inputs, matching tab labels, and content panels:

```html
<div class="tabs">
  <input type="radio" name="tabs" id="tab-one" checked>
  <label for="tab-one" class="tab-label">Overview</label>

  <section class="tab-panel">
    Tab content here
  </section>
</div>
 main
