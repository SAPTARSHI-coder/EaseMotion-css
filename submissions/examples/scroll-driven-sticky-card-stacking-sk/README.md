# Scroll-Driven Sticky Card Stacking Component

A premium, pure HTML & CSS component designed to create visually stunning card decks that stack on top of each other as the user scrolls. Perfect for roadmaps, storyboards, product features, and portfolios.

## 1. What does this do?

This component creates a scroll-linked timeline or roadmap. As the user scrolls down the page:
1. Individual cards scroll into view from the bottom.
2. Once a card reaches its designated position, it sticks to the screen using `position: sticky`.
3. The subsequent cards scroll over it, stacking vertically.
4. Using CSS scroll-driven timelines (`@supports (animation-timeline: view())`), older cards under the stack automatically scale down and dim slightly as new cards stack on top of them. This creates a realistic, 3D overlapping depth effect.
5. Users can hover over any card in the stack, which triggers a smooth micro-animation that lifts, glows, and pulls that card to the front of the deck so they can easily inspect its content.
6. The timeline automatically works on desktop and mobile viewports. On devices where reduced motion is preferred, the animations and stickiness disable gracefully to provide a clean reading layout.

## 2. How is it used?

### HTML Structure
Each card is wrapped in a container tracker (`.stacking-card-wrapper`) to anchor scroll-driven animations, and uses CSS variables to configure its order index, accent color, and opacity glow:

```html
<div class="stacking-card-wrapper" id="wrapper-1">
  <div class="card" id="card-1" style="--card-index: 1; --card-accent: #818cf8; --card-accent-alpha: rgba(129, 140, 248, 0.15); --status-color: #10b981;">
    <div class="card-glow"></div>
    
    <div class="card-header">
      <span class="card-tag">Phase 1: Foundation</span>
      <span class="card-number">01</span>
    </div>
    
    <div class="card-body">
      <h2 class="card-title">Core Motion Engine</h2>
      <p class="card-description">Detailed description text...</p>
    </div>
    
    <div class="card-footer">
      <span class="card-status">Status: Released</span>
      <a href="#" class="card-action">View Specs</a>
    </div>
  </div>
</div>
```

### CSS Variables Tuning
You can easily customize the geometry of the stack by tweaking the CSS variables defined in `:root` inside `style.css`:

```css
:root {
  --card-height: 360px;       /* Fixed height of the cards */
  --card-top-offset: 120px;   /* Margin from the top of viewport where the first card sticks */
  --card-stack-gap: 50px;     /* Vertical visible overlap showing the tops of previous cards */
}
```

## 3. Why is it useful?

* **No JavaScript Required:** It leverages modern CSS native scroll-driven animations and positioning, meaning zero scripting overhead, maximum execution performance, and instant page loads.
* **Premium Storytelling Experience:** Excellent for presenting SaaS roadmaps, development timelines, project steps, or team portfolios. It commands user attention and provides an interactive element.
* **Progressive Enhancement:** It uses standard `position: sticky` logic which is supported in all modern browsers, while the advanced scaling transitions use `@supports (animation-timeline: view())` to run in browsers that support named scroll timelines, ensuring a robust fallback elsewhere.
* **Accessibility-First:** Fully responsive and includes overrides for users with `prefers-reduced-motion: reduce`, ensuring compliance with web content accessibility guidelines.
