# Pure CSS Sliding Glassmorphic Tabs (`ease-tabs`)

A pure HTML and CSS tab component designed with a state-of-the-art glassmorphic aesthetic. The component is fully functional without requiring any JavaScript, utilizing radio inputs and CSS sibling selectors for active state tracking and tab-switching animation.

---

## Feature Overview

The Sliding Glassmorphic Tabs (`ease-tabs`) component is a lightweight, responsive navigation element suitable for modern dashboard panels, settings dialogs, or workspace headers. It implements high-fidelity frosted glass rendering (`backdrop-filter`) with custom fluid sliding transitions (`cubic-bezier`), bringing premium operating system style layouts directly to native web interfaces.

---

## Features

- **Pure CSS logic**: No JavaScript overhead. Handles inputs, selection, transitions, and panels entirely with native CSS features.
- **Glassmorphism Theme**: Employs frosted glass backdrop filters, thin translucent high-contrast borders, and soft shadows that blend with active backgrounds.
- **Sliding Glider (Pill) Animation**: Uses CSS transformations with specialized cubic-bezier curves for fluid transitions when moving between tabs.
- **Accessible & SEO-Friendly**: Retains hidden native radio inputs to support screen reader configurations and standard keyboard arrow navigation.
- **Responsive Layout**: Adapts layout, padding, font-scale, and icon bounds for mobile viewports using media queries.
- **Micro-interactions**: Subtle active scaling and unique accent color schemes for icons based on selection state.

---

## Folder Structure

```text
submissions/examples/ease-tabs/
├── demo.html        # Interactive component structure & showcase layout
├── style.css        # Core glassmorphic rules, positioning, transitions & animations
└── README.md        # Comprehensive implementation & reference documentation
```

---

## Usage Instructions

To include the sliding glassmorphic tabs component in your project:

1. Copy the markup in the **HTML Example** below into your body file.
2. Link the core `style.css` (or adapt the rules into your design tokens file).
3. Ensure parent containers have descriptive background images or colorful linear gradients to showcase the backdrop blur effect.

---

## HTML Example

```html
<div class="ease-tabs-container">
  
  <!-- Visually Hidden inputs for selection logic -->
  <input type="radio" id="tab-dashboard" name="ease-tabs" class="ease-tab-input" checked>
  <input type="radio" id="tab-analytics" name="ease-tabs" class="ease-tab-input">
  <input type="radio" id="tab-settings" name="ease-tabs" class="ease-tab-input">

  <!-- Accessible Tab Navigation list -->
  <nav class="ease-tabs-nav" role="tablist" aria-label="Settings configuration">
    
    <label for="tab-dashboard" class="ease-tab-label label-dashboard" role="tab">
      <span>Dashboard</span>
    </label>
    
    <label for="tab-analytics" class="ease-tab-label label-analytics" role="tab">
      <span>Analytics</span>
    </label>
    
    <label for="tab-settings" class="ease-tab-label label-settings" role="tab">
      <span>Settings</span>
    </label>

    <!-- Animated Glass Slider -->
    <div class="ease-tab-glider" aria-hidden="true"></div>

  </nav>

  <!-- Content Panels -->
  <div class="ease-tabs-content">
    <article id="panel-dashboard" class="ease-tab-panel panel-dashboard" role="tabpanel">
      <!-- Content for Dashboard goes here -->
    </article>
    
    <article id="panel-analytics" class="ease-tab-panel panel-analytics" role="tabpanel">
      <!-- Content for Analytics goes here -->
    </article>
    
    <article id="panel-settings" class="ease-tab-panel panel-settings" role="tabpanel">
      <!-- Content for Settings goes here -->
    </article>
  </div>

</div>
```

---

## CSS Highlights

### Dynamic Glider Scaling
The glider width and translation matrix are mathematically calculated to remain fluid regardless of container resizing:

```css
.ease-tab-glider {
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  width: calc((100% - 20px) / 3); /* Accounts for paddings and margins */
  transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1);
}

/* Sibling selection positions glider */
#tab-dashboard:checked ~ .ease-tabs-nav .ease-tab-glider {
  transform: translateX(0);
}
#tab-analytics:checked ~ .ease-tabs-nav .ease-tab-glider {
  transform: translateX(calc(100% + 4px)); /* 100% glider width + 4px flex gap */
}
#tab-settings:checked ~ .ease-tabs-nav .ease-tab-glider {
  transform: translateX(calc(200% + 8px)); /* 200% glider width + 8px flex gaps */
}
```

### Frosted Backdrop Layout
Provides the characteristic glassmorphic light diffusion and crisp borders:

```css
.ease-tabs-nav {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 
    0 4px 30px rgba(0, 0, 0, 0.3),
    inset 0 1px 1px rgba(255, 255, 255, 0.05);
}
```

---

## Browser Support

| Browser | Supported | Features Utilized |
| :--- | :--- | :--- |
| **Google Chrome** | Yes (76+) | Backdrop blur, flexbox, transforms |
| **Mozilla Firefox** | Yes (70+) | Backdrop blur, flexbox, transforms |
| **Apple Safari** | Yes (13+) | `-webkit-backdrop-filter` prefixes |
| **Microsoft Edge** | Yes (79+) | Backdrop blur, flexbox, transforms |

---

## Screenshots

*Place screenshot assets or live mockups illustrating the dark-theme layout with sliding interactions here.*

---

## Contribution Notes

- **Naming Convention**: Classes are structured with the `ease-*` suffix for simple, self-contained integration.
- **Styling Standards**: Custom style overrides should avoid hardcoded device dimensions. Use fluid values like percentages, `em`/`rem` scopes, and flex bounds.
- **Zero JavaScript Rule**: Any upgrades to this structure must respect pure HTML+CSS architecture, utilizing native pseudo-classes and selectors.
