# Device Mockup Animation Examples

## What does this do?

This submission showcases how EaseMotion CSS animation presets can be applied to realistic device mockups (Smartphones, Tablets, and Laptops) commonly used on SaaS landing pages, portfolio displays, and product marketing sections.

---

## Why It Fits EaseMotion CSS

### 1. Human-Readable Design

The class names represent clear layout configurations and presets:

- `.ease-float-active` triggers smooth continuous translation on devices.
- `.ease-hover-active` triggers an elegant scale and lift animation.
- `.entrance-active` stages entrance animation triggers cleanly.

### 2. Animation-First Philosophy

Animations are optimized using GPU-friendly CSS transitions and transforms (e.g. `translate3d`), minimizing paint cycles and avoiding visual layout stutter.

### 3. Composable Patterns

Rather than forcing rigid structures, animation properties are applied as independent utility presets, meaning floating, hover states, and staggered entrances can be combined dynamically on any mockup or grid element.

### 4. Real-World Practicality

Developers frequently need device mockups to display product screenshots. Providing optimized CSS templates with premium interactive animations enables creators to drop in screens directly into their codebase.

---

## Included Files

- **[demo.html](demo.html)**: Self-contained hero section and interactive playground.
- **[style.css](style.css)**: Stylesheet outlining variables, grid alignments, mockup designs, and responsive layouts.
- **[README.md](README.md)**: Documentation and usage guidelines.

---

## How is it used?

### Basic HTML Structure

To integrate an animated laptop mockup, construct the HTML structure and assign the animation helper classes:

```html
<!-- Laptop Mockup with continuous float and hover lift presets -->
<div class="device-mockup laptop-device ease-float-active ease-hover-active">
  <div class="laptop-lid">
    <div class="device-glare"></div>
    <div class="device-screen">
      <!-- Your custom screen mock content here -->
    </div>
  </div>
  <div class="laptop-base"></div>
</div>
```

---

## Animation Breakdown

1.  **Continuous Floating**: Uses keyframes translating elements on the Y-axis using a `sine` easing curve. Staggered timing ranges from 6s to 8s.
2.  **Hover Lift**: Translates the hovered mockup upwards (`translateY(-10px)`) and scales it slightly (`scale(1.025)`) while casting a soft shadow, raising its depth layer (`z-index`) dynamically.
3.  **Entrance Reveal**: Translates elements upwards from `translateY(40px)` with `opacity: 0` to standard alignment. The triggers use staggered inline delays (`0.1s`, `0.3s`, `0.5s`) for polished sequential loading.
4.  **Layered Hero Composition**: Organizes mockups on an overlapping canvas, layering the Laptop behind the Tablet and Smartphone to simulate modern landing layouts.

---

## Usage Ideas

- **SaaS Landing Pages**: Present complex admin dashboard mockups on a laptop.
- **Startup Showcases**: Display dynamic dashboards overlapping with high-fidelity mobile apps.
- **Creative Portfolios**: Showcase design systems across laptop, phone, and tablet frames.

---

## Accessibility & Responsive Considerations

### Accessibility Features

- **Reduced Motion Support**: Listens to `@media (prefers-reduced-motion: reduce)` to disable continuous loops, hover transitions, and load transformations.
- **Focus States**: CTA buttons and checkboxes are keyboard navigable with focus rings.

### Responsiveness

- **Desktop**: Displays the overlapping layered mockup composition.
- **Tablets/Small Screens**: Stacks the layout cleanly or formats mockups inside responsive grids depending on selected presets.
