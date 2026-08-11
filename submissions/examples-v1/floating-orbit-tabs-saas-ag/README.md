# Floating Orbit Animated Tabs — Modern SaaS

A pure CSS animated Tabs component featuring a smooth **Floating Orbit interaction transition** with continuous orbital satellite halos and Modern SaaS visual styling.

## 1. What does this do?
Provides a zero-JavaScript, pure CSS tabbed navigation component with floating orbital indicator transitions, dual orbiting satellite particles, responsive layout adaptivity, and full keyboard accessibility.

## 2. How is it used?
```html
<div class="ease-orbit-tabs-wrapper">
  <input type="radio" name="saas-tabs" id="tab-1" class="orbit-radio-input" checked />
  <input type="radio" name="saas-tabs" id="tab-2" class="orbit-radio-input" />

  <div class="orbit-tab-track" role="tablist">
    <label for="tab-1" class="orbit-tab-label">Overview</label>
    <label for="tab-2" class="orbit-tab-label">Analytics</label>

    <div class="orbit-active-indicator" aria-hidden="true">
      <div class="orbit-pill-core">
        <span class="orbit-satellite satellite-alpha"></span>
        <span class="orbit-satellite satellite-beta"></span>
        <span class="orbit-halo-ring"></span>
      </div>
    </div>
  </div>

  <div class="orbit-tab-panels">
    <section id="panel-1" class="orbit-tab-panel">...</section>
    <section id="panel-2" class="orbit-tab-panel">...</section>
  </div>
</div>
```

## 3. Customizable CSS Properties
```css
:root {
  --orbit-duration: 480ms;
  --orbit-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
  --orbit-scale: 1.06;
  --orbit-float-y: -6px;
  --orbit-glow: rgba(99, 102, 241, 0.45);
  --orbit-accent-glow: rgba(6, 182, 212, 0.5);
  --tab-count: 4;
}
```

## 4. Why is it useful?
It demonstrates how complex orbital motion, depth layers, and zero-JS interactive state management can be built using standard CSS radio selectors, CSS transforms, and CSS custom variables without relying on heavy JavaScript libraries.
