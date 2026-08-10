# 🎯 Animated Stepper / Progress Steps Component

A lightweight, accessible, and responsive stepper component built with pure HTML and CSS for the EaseMotion CSS library.

---

## 1. What does this do?
The Animated Stepper provides a visually polished, responsive, and accessible way to track and animate step-by-step progress workflows in both horizontal and vertical orientations, featuring self-drawing checkmarks and pulsing active states without any JavaScript runtime dependency.

---

## 2. How is it used?

### Basic HTML Structure

```html
<!-- Horizontal Stepper -->
<nav aria-label="Progress Tracker">
  <div class="ease-stepper">
    <!-- Completed Step -->
    <div class="ease-step ease-step-completed">
      <div class="step-marker">
        <span class="marker-default-icon">1</span>
        <span class="marker-completed-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
      </div>
      <div class="step-label">
        <span class="step-title">Account Setup</span>
      </div>
    </div>

    <!-- Active Step -->
    <div class="ease-step ease-step-active" aria-current="step">
      <div class="step-marker">2</div>
      <div class="step-label">
        <span class="step-title">Verification</span>
      </div>
    </div>

    <!-- Upcoming Step -->
    <div class="ease-step">
      <div class="step-marker">3</div>
      <div class="step-label">
        <span class="step-title">Confirmation</span>
      </div>
    </div>
  </div>
</nav>
```

To switch to a **vertical layout**, simply add the modifier class `.ease-step-vertical` (or `.ease-stepper-vertical`) to the container:

```html
<!-- Vertical Stepper -->
<div class="ease-stepper ease-step-vertical">
  <!-- Steps go here -->
</div>
```

### CSS Classes Reference

| Class Name | Target Element | Description |
| :--- | :--- | :--- |
| `.ease-stepper` | Outer Container | Main flex container. Adapts to horizontal (default) layout. |
| `.ease-step-vertical` / `.ease-stepper-vertical` | Outer Container | Modifier that switches the stepper to a vertical column layout. |
| `.ease-step` | Individual Step | Wrapper representing a single milestone. Focusable for accessibility. |
| `.ease-step-active` | Individual Step | Highlights current active step with a breathing pulse glow animation. |
| `.ease-step-completed` | Individual Step | Highlights completed steps with success colors and triggers pop checkmark animations. |
| `.step-marker` | Icon/Number Wrapper | The visual circle indicator. Centered in horizontal; left-aligned in vertical. |
| `.step-label` | Text Wrapper | Contains the label titles and optional descriptions. |
| `.step-title` | Text Header | Title label for the step. |
| `.step-desc` | Text Detail | Description subtitle (highly recommended for vertical layouts). |

### Customization via CSS Variables

Customize components globally or locally by overriding variables in your CSS stylesheet:

```css
:root {
  --ease-stepper-primary: #6366f1;       /* Highlight color for active step */
  --ease-stepper-completed: #10b981;     /* Success color for completed steps */
  --ease-stepper-inactive: #cbd5e1;      /* Neutral color for upcoming steps & track line */
  --ease-stepper-marker-size: 40px;      /* Step circle dimensions */
  --ease-stepper-line-height: 4px;       /* Line connector height */
  --ease-stepper-transition-duration: 0.4s; /* Animation speeds */
}
```

---

## 3. Why is it useful?

It matches the performance-first philosophy of EaseMotion CSS by utilizing a **pure CSS-only progress line engine** where each step builds its own connector segment. This resolves common stepper challenges:
- **No JavaScript Overhead:** Line segments draw and scale automatically using CSS transforms, meaning zero JS computations are needed for layouts, responsive wrapping, or dynamic state updates.
- **Micro-interactions & Aesthetics:** Provides high-end micro-animations including self-drawing SVG checkmarks (`stroke-dashoffset` keyframes), interactive hover scales, and breathing ripple pulses for the current focus.
- **Adaptive Layouts:** Fully responsive with automatic mobile stacking, built-in prefers-contrast and high contrast configurations, keyboard focus states, and native dark mode variables.
