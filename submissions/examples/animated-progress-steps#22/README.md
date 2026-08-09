# Animated Progress Steps

A modern animated progress steps component built with pure HTML and CSS. It is useful for checkout flows, onboarding processes, forms, and multi-step UI sections.

## Features

- Pure HTML and CSS implementation.
- Animated progress line.
- Completed, active, and upcoming step states.
- Pulsing active step indicator.
- Responsive layout for desktop and mobile.
- Supports `prefers-reduced-motion`.

## Usage

Copy the HTML structure from `demo.html` and link `style.css`.

```html
<ol class="progress-steps" style="--progress: 42%;">
  <li class="step completed">
    <span class="step-indicator">✓</span>
    <span class="step-content">
      <span class="step-label">Account</span>
      <span class="step-desc">Create your account</span>
    </span>
  </li>

  <li class="step active" aria-current="step">
    <span class="step-indicator">2</span>
    <span class="step-content">
      <span class="step-label">Profile</span>
      <span class="step-desc">Complete profile details</span>
    </span>
  </li>
</ol>