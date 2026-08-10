# Progress Stepper (SaaS Stepper Component)

**Category:** Navigation — Dashboard & Onboarding Components  
**Type:** Pure CSS (Zero JavaScript)  
**Folder:** `submissions/examples/ease-stepper-component/`

---

## 1. What does this do?

The **Progress Stepper** is a highly interactive, responsive multi-step wizard component designed for professional SaaS onboarding flows, checkout processes, and administrative registration panels. Built entirely in HTML and CSS with zero JavaScript, it visualizes complex process states using fluid, hardware-accelerated animations.

### Core Visual Capabilities:
- **Three Core State Indicators:**
  - **Completed (`--done`):** Displays a vibrant emerald check circle with a subtle ambient radial glow.
  - **Active / Current (`--active`):** Showcases a pulsing indigo border using a breathing timing cycle to signal "in progress."
  - **Upcoming / Pending (`--pending`):** Presents a clean, muted slate-gray outline with a locked icon to signify upcoming stages.
- **Staggered Bullet Entrances:** Bullet points pop in sequentially from left-to-right using custom cubic-bezier scaling timing delays.
- **Connector Line Progress Fills:** Segmented connector lines run between step nodes, filling dynamically on page load with a smooth linear reveal to represent completed milestones.
- **Smooth Elastic Hovers:** Hovering a step circle triggers a responsive, spring-like scale-up and accent color glow, adding a tactile physical feel.

---

## 2. How is it used?

To integrate this onboarding progress stepper inside your application, follow this markup design:

### Horizontal Stepper HTML Structure

```html
<nav class="ease-stepper" aria-label="Onboarding Timeline">

  <!-- Step 1: Done -->
  <div class="ease-stepper__step ease-stepper__step--done ease-step-wrapper--delay-0" tabindex="0">
    <div class="ease-stepper__bullet">✓</div>
    <div class="ease-stepper__label">
      <span class="ease-stepper__name">Account Setup</span>
      <span class="ease-stepper__status">Completed</span>
    </div>
  </div>

  <!-- Connector Line Segment (Completed) -->
  <div class="ease-stepper__connector ease-stepper__connector--done" aria-hidden="true"></div>

  <!-- Step 2: Active -->
  <div class="ease-stepper__step ease-stepper__step--active ease-step-wrapper--delay-1" tabindex="0" aria-current="step">
    <div class="ease-stepper__bullet">2</div>
    <div class="ease-stepper__label">
      <span class="ease-stepper__name">Billing Info</span>
      <span class="ease-stepper__status">In Progress</span>
    </div>
  </div>

  <!-- Connector Line Segment (Pending) -->
  <div class="ease-stepper__connector ease-stepper__connector" aria-hidden="true"></div>

  <!-- Step 3: Pending -->
  <div class="ease-stepper__step ease-stepper__step--pending ease-step-wrapper--delay-2" tabindex="0">
    <div class="ease-stepper__bullet">🔒</div>
    <div class="ease-stepper__label">
      <span class="ease-stepper__name">Confirm Launch</span>
      <span class="ease-stepper__status">Upcoming</span>
    </div>
  </div>

</nav>
```

---

## 3. Why is it useful?

Checkout wizards and multi-step registration forms often experience page loading hitches or disjointed status indicators during state renders.

### Key Performance & Design Advantages:

1. **GPU-Accelerated 60+ FPS Compositing:**
   Animations utilize strictly layout-stable properties (`transform`, `opacity`, `box-shadow`), keeping rendering processes highly efficient and avoiding browser paint overhead.

2. **Zero JavaScript Execution Overhead:**
   Requires 0 bytes of JavaScript. Cascades, progress line reveals, and hover lifts execute immediately on page load before scripts are parsed.

3. **Responsive Vertical Timeline Transition:**
   Below viewport widths of `768px`, the stepper automatically collapses into a vertical timeline. The horizontal connector elements hide, and vertical connector bars draw absolute-positioned under the bullets, scaling downwards sequentially.

4. **Engineered Accessibility Standards:**
   - **Reduced Motion Support:** Respects system user preferences through `@media (prefers-reduced-motion: reduce)`, instantly disabling staggered pop-ins, pulsing shadows, and line grows, rendering immediate static positions.
   - **Tabbable Keyboard Focus:** Employs explicit `tabindex="0"` elements, allowing keyboard-only users to navigate steps and activate focus state glows.
   - **Screen Reader Separation:** Decoratively visual checkmarks, lock icons, progress lines, and focus outlines are safely masked using `aria-hidden="true"`, keeping screen readers focused purely on labeled text.
