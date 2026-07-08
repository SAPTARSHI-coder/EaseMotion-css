# UI Design: Underwater Maglev Rapid Transit Operating Platform Showcase

## What does this do?
It implements a futuristic, responsive single-page Underwater Maglev Transit Operations HUD showcase featuring dynamic route maps with sliding train indicator nodes, animated velocity dials, rotating hydro-turbines, and ambient decompressing alarms.

## How is it used?
Integrate the control board and deck components into your submarine dashboard or gaming console showcase:

### 1. Dynamic Route Map (CSS Transitions)
```html
<div class="transit-map-container">
  <div class="track-line">
    <!-- Active colored line tracking train progress -->
    <div class="track-line-filled" id="trackLineFill" style="width: 10%;"></div>
    
    <!-- Station Hubs -->
    <div class="station-node station-node--1 station-node--active">
      <span class="station-tooltip">Surface Dock (0m)</span>
    </div>
    
    <!-- Train Node positioned by CSS transitions -->
    <div class="route-train-node" id="trainNode" style="left: 10%;"></div>
  </div>
</div>
```

### 2. Rotating Hydro-Turbine (CSS Rotate Keyframes)
```html
<div class="turbine-container">
  <!-- Rotates clockwise based on core flow rate -->
  <div class="turbine-blades" id="turbineBlades">
    <div class="turbine-blade turbine-blade--1"></div>
    <div class="turbine-blade turbine-blade--2"></div>
    <div class="turbine-blade turbine-blade--3"></div>
    <div class="turbine-blade turbine-blade--4"></div>
    <div class="turbine-blade turbine-blade--5"></div>
  </div>
  <div class="turbine-center"></div>
</div>
```

### 3. Velocity Dials (SVG Stroke Dash offsets)
```html
<svg width="160" height="160" viewBox="0 0 160 160">
  <circle class="gauge-track" cx="80" cy="80" r="70" fill="none" stroke-width="8"></circle>
  <!-- Control offset directly using styles or JS -->
  <circle class="gauge-fill" id="speedGaugeFill" cx="80" cy="80" r="70" fill="none" stroke-width="8"></circle>
</svg>
```

## Why is it useful?
Futuristic dashboard mockups typically depend on heavy video loops or massive canvas assets that are resource-intensive, rigid, and slow to scale across responsive screen sizes.

This component aligns with EaseMotion CSS's philosophy by using **CSS-first rendering**:
1. **60 FPS Vector Animations**: Rotations (hydro-turbine blades), transitions (speed dial fill offsets), and translations (sliding route train node) are handled by the browser's hardware-accelerated rendering engine.
2. **Dynamic State Variables**: Uses CSS properties (like `width` and `left`) to drive translations, allowing a lightweight script to set the state and let CSS handle the spring-like visual transitions.
3. **Responsive Operations Deck**: Layout uses flex and grid systems to adapt, switching from a wide three-column Abyssal cockpit layout on desktop to single diagnostic panels on mobile screens.
4. **Reduced Motion and Accessibility Compliance**: Fully supports vestibular-safe overrides under a `@media (prefers-reduced-motion: reduce)` media query that freezes all spin loops and decompressing flashes.

## Preview
Open `demo.html` directly in your browser to inspect the underwater controls interface.
