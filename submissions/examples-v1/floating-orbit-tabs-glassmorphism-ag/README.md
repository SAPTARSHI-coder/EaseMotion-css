# Floating Orbit Glassmorphism Tabs (`floating-orbit-tabs-glassmorphism-ag`)

A zero-JavaScript, pure CSS tabbed navigation component featuring an orbital trajectory transition glider and frosted glass UI surface depth.

---

## 1. What does this do?

Provides an accessible, pure CSS tabbed interface where the active selection indicator floats and lifts along an orbital trajectory across translucent glass surfaces when switching active states.

---

## 2. How is it used?

### HTML Structure

Include hidden radio controls paired with labeled tabs and content panels:

```html
<div class="ease-orbit-tabs-container">
  <!-- Zero-JS State Controls -->
  <input
    type="radio"
    name="ease-orbit-group"
    id="tab-1"
    class="ease-orbit-radio"
    checked
  />
  <input
    type="radio"
    name="ease-orbit-group"
    id="tab-2"
    class="ease-orbit-radio"
  />

  <!-- Navigation Bar -->
  <div class="ease-orbit-tab-list" role="tablist" aria-label="Tab navigation">
    <label for="tab-1" class="ease-orbit-tab" role="tab">Overview</label>
    <label for="tab-2" class="ease-orbit-tab" role="tab">Analytics</label>

    <!-- Floating Glider -->
    <div class="ease-orbit-pill-glider" aria-hidden="true">
      <div class="ease-orbit-pill-halo"></div>
    </div>
  </div>

  <!-- Content Panels -->
  <div class="ease-orbit-panels">
    <section class="ease-orbit-panel" id="panel-1" role="tabpanel">...</section>
    <section class="ease-orbit-panel" id="panel-2" role="tabpanel">...</section>
  </div>
</div>
```

### CSS Customization Properties

Customize animation mechanics and visual glass surface properties via standard CSS variables:

```css
:root {
  /* Motion & Orbit Parameters */
  --orbit-duration: 450ms;
  --orbit-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
  --orbit-scale: 1.08;
  --orbit-lift: -5px;
  --orbit-glow: rgba(108, 99, 255, 0.45);

  /* Glassmorphism Surfaces */
  --glass-bg: rgba(15, 23, 42, 0.65);
  --glass-surface: rgba(255, 255, 255, 0.06);
  --glass-border: rgba(255, 255, 255, 0.14);
  --glass-blur: 16px;
}
```

---

## 3. Why is it useful?

1. **Zero JavaScript**: Operates entirely with pure CSS radio input state management and sibling selectors.
2. **Orbital Motion Dynamics**: Elevates basic tab indicators with subtle scale, lift, and orbital halo physics that feel premium.
3. **Glassmorphism Integration**: Built-in backdrop filters and translucent borders integrate seamlessly into modern dark/glass interfaces.
4. **Accessible & Responsive**: Fully accessible via keyboard controls (`:focus-visible`), responsive on all screen sizes, and respects `@media (prefers-reduced-motion: reduce)`.
