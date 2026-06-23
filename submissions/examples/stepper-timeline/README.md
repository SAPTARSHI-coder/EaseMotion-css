# Pure CSS Multi-Step Form Stepper Timeline (`ease-stepper-timeline`)

A high-end structural interaction component featuring a horizontal sequence of milestones linked via a progress bar connector, driving active bubble scales, state fills, and sliding form panels purely via CSS.

## What does this do?

This component anchors a progress timeline and milestones, showing completed step indicators (emerald green with checkmarks), active steps (glowing, scaled bubbles), and sliding wizard forms that transition smoothly as steps change—all operating under a **100% zero-JavaScript** philosophy.

## How is it used?

Link the component style to your page and structure your markup using radio inputs at the root level followed by step nodes and panels.

### HTML Structure:

```html
<div class="ease-stepper-timeline">
  <!-- Inputs must come first in the DOM -->
  <input
    type="radio"
    name="ease-step"
    id="step-1"
    class="ease-step-input"
    checked
  />
  <input type="radio" name="ease-step" id="step-2" class="ease-step-input" />
  <input type="radio" name="ease-step" id="step-3" class="ease-step-input" />
  <input type="radio" name="ease-step" id="step-4" class="ease-step-input" />

  <!-- Header with Timeline and Labels -->
  <div class="ease-stepper-header">
    <div class="ease-progress-bar">
      <div class="ease-progress-bar-fill"></div>
    </div>

    <div class="ease-steps-container">
      <label for="step-1" class="ease-step-node step-1-node">
        <span class="ease-step-bubble">
          <span class="ease-step-number">1</span>
          <span class="ease-step-check">✓</span>
        </span>
        <span class="ease-step-label">Account Info</span>
      </label>
      <!-- Repeat label nodes for step 2, 3, 4 -->
    </div>
  </div>

  <!-- Sliding Form Content Panels -->
  <div class="ease-step-content-container">
    <div class="ease-step-panel step-1-panel">
      <!-- Step 1 Form Fields -->
      <div class="ease-form-actions">
        <label for="step-2" class="ease-btn ease-btn-primary">Next Step</label>
      </div>
    </div>
    <!-- Repeat panels for step 2, 3, 4 -->
  </div>
</div>
```

## Why is it useful?

- **Zero-JavaScript Performance:** Extremely lightweight, no third-party framework overhead, and instant rendering on the CSS layer.
- **SaaS & E-Commerce Essential:** Ideal for checkout pipelines, onboarding surveys, shipping milestone tracking, and configuration wizard dashboards.
- **Fluid Layout Transitions:** Uses CSS Grid overlays and transform/opacity transitions to animate panels in from the right when moving forward, and from the left when moving backward.
- **Accessibility Friendly:** Supports standard HTML focus outline highlights on step bubbles during keyboard navigation.

## Tech Stack

- HTML5
- CSS3 (Vanilla transitions, CSS Grid, custom variables, and subsequent-sibling combinators)
