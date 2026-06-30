# Ease Progress Stepper Component

## What does this do?
A modern, state-driven **Progress Stepper Component** designed to render checkout workflows, onboarding guides, multi-step registration forms, or system wizards. It supports horizontal and vertical flow alignments, numbered/icon nodes, 5 distinct step states (Completed, Active, Upcoming, Disabled, and Error), and 6 design variants.

## How is it used?

Include `style.css` in your project and structure your HTML following these classes:

### 1. Horizontal Numbered Stepper
Declare the list with the base class `ease-stepper` and modifier `ease-stepper-horizontal`:
```html
<nav aria-label="Progress">
  <ol class="ease-stepper ease-stepper-horizontal">
    <!-- Completed Step -->
    <li class="ease-step ease-step-completed">
      <span class="ease-step-node">1</span>
      <span class="ease-step-label">Account Info</span>
    </li>
    
    <!-- Active Step -->
    <li class="ease-step ease-step-active">
      <span class="ease-step-node">2</span>
      <span class="ease-step-label">Personal Address</span>
    </li>
    
    <!-- Upcoming Step -->
    <li class="ease-step ease-step-upcoming">
      <span class="ease-step-node">3</span>
      <span class="ease-step-label">Payment Detail</span>
    </li>
  </ol>
</nav>
```

### 2. Vertical Description Stepper
Use `ease-stepper-vertical` and add structured content (title, description) inside the steps:
```html
<ol class="ease-stepper ease-stepper-vertical">
  <li class="ease-step ease-step-completed">
    <div class="ease-step-left">
      <span class="ease-step-node">1</span>
    </div>
    <div class="ease-step-content">
      <span class="ease-step-title">Submit Application</span>
      <p class="ease-step-desc">Fill out your profile details and submit documents.</p>
    </div>
  </li>
  <li class="ease-step ease-step-active">
    <div class="ease-step-left">
      <span class="ease-step-node">2</span>
    </div>
    <div class="ease-step-content">
      <span class="ease-step-title">Technical Review</span>
      <p class="ease-step-desc">Wait for credentials verification check by the support team.</p>
    </div>
  </li>
</ol>
```

### 3. Step States
Modifiers can be applied to individual `.ease-step` items:
- `.ease-step-completed` (Emerald background, checks next connector line)
- `.ease-step-active` (Indigo outline with dynamic pulsing ring animation)
- `.ease-step-upcoming` (Muted upcoming text and outline)
- `.ease-step-disabled` (Dimmed opacity with disabled interactions)
- `.ease-step-error` (Red warning indicator outline)

### 4. Color Theme Variants
Apply modifiers to the container `<ol>` class:
- `.ease-stepper-primary` (Indigo theme focus)
- `.ease-stepper-success` (Emerald theme focus)
- `.ease-stepper-outline` (Thick border outline indicators)
- `.ease-stepper-minimal` (Tiny bullet points, hiding numerical text)
- `.ease-stepper-gradient` (Purple-pink linear gradient connectors and nodes)

## Features

- **Direction Flex**: Support for vertical sidebar roadmaps and horizontal header steppers.
- **Pulsing Rings**: Dynamic outline ring pulse keyframe animations highlight active items.
- **Smart Connectors**: Connecting lines use parent state modifiers to switch from muted gray to emerald green/linear gradients dynamically.
- **Responsive Pruning**: In horizontal mode, detailed text labels collapse on small mobile devices to fit circle nodes cleanly without wrapping.
- **Gradient Borders**: Circular active gradient nodes are built using double-background clip overlays.

## Tech Stack
- HTML
- CSS (Flexbox layout, keyframe pulse rings, background-clip overlays, absolute position connectors)

## Preview
Open `demo.html` directly in your browser to interact with the checkout form wizard panels, check sizing transitions, and test responsive scaling!

## Contribution Notes
- Class naming was handled by the contributor.
- Maintainer will rename to ease-* convention before merging.
