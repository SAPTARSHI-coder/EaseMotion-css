# Shimmer Sweep Tabs - Neumorphic Soft Layouts

A pure CSS animated tab component utilizing a highly tactile "Shimmer Sweep" interaction transition. This component adapts the sweeping effect into a soft light sheen, perfectly styled for the popular Neumorphic (soft UI) design trend.

## Features

- **Pure CSS Interaction:** State management is driven entirely by the CSS hidden radio button pattern (`:checked` paired with `~` sibling selectors), eliminating the need for JavaScript state tracking.
- **Neumorphic Soft Sheen Sweep:** When a tab is activated, it smoothly transitions from an "extruded" state (outer shadow) to a "pressed" state (inset shadow). Synchronized with this press, a soft white sheen (the shimmer sweep) passes across the inset surface, simulating a reflection on the indented material. The active tab maintains a slow, periodic 5-second reflection loop.
- **Neumorphic Soft Styling:** Built on a classic soft gray-blue palette (`#e0e5ec`). All elements (containers, buttons, dials) are styled using meticulously layered `box-shadows` to create the illusion of physical, 3D extruded shapes illuminated by a top-left light source. Features the rounded, friendly `Nunito` typeface.
- **Smart Home App Mockup:** The HTML demo wraps the tabs in a realistic Smart Home mobile application interface. The mock panels demonstrate how to apply neumorphism to complex UI elements like large temperature dials, sliding toggles, volume-style sliders, and active/inactive state cards.
- **Fully Responsive & Accessible:** Navigates smoothly on mobile by stacking the tabs within the pill container. Hidden `sr-only` inputs ensure complete keyboard accessibility and visible focus outlines.

## Customization

You can effortlessly tune the component's neumorphic depth and lighting by editing the CSS variables found at the top of `style.css`:

```css
:root {
  /* Neumorphic Soft Palette */
  --bg-base: #e0e5ec; 
  
  /* The core of Neumorphism: Shadows */
  --shadow-light: rgba(255, 255, 255, 0.9); /* Top-left highlight */
  --shadow-dark: rgba(163, 177, 198, 0.6); /* Bottom-right shadow */
  
  /* Soft Accent */
  --primary-color: #7a9be3; /* Soft violet blue */
  
  /* Typography */
  --font-soft: 'Nunito', sans-serif;
  
  /* Animation Timings */
  --sweep-speed: 0.5s;
  --sweep-ease: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## How to Use

1. Copy the HTML structure from `demo.html`, ensuring the radio inputs (`.tab-input`) sit at the same level as `.nav-wrapper` and `.tabs-content`.
2. Include the `style.css` stylesheet in your project.
3. Replace the mock Smart Home UI content within the `.tab-panel` wrappers with your actual application views.

```html
<!-- Core Structure Example -->
<div class="tabs-container">
    <input type="radio" id="tab-climate" name="neu-tabs" class="tab-input sr-only" checked>
    <input type="radio" id="tab-lighting" name="neu-tabs" class="tab-input sr-only">
    
    <div class="nav-wrapper">
        <nav class="tabs-nav" aria-label="Home Controls">
            <label for="tab-climate" class="tab-label">Climate</label>
            <label for="tab-lighting" class="tab-label">Lighting</label>
        </nav>
    </div>
    
    <div class="tabs-content">
        <div class="tab-panel panel-climate">...</div>
        <div class="tab-panel panel-lighting">...</div>
    </div>
</div>
```
