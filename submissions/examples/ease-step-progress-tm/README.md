# Step Progress Indicator

## What does this do?
A multi-step progress indicator (stepper) that visually tracks users through multi-step workflows such as checkout wizards, registration forms, and onboarding flows. Shows completed, active, and pending states with smooth transition animations.

## How is it used?
Add the class to your step indicator container:

    <div class="ease-step-progress">
      <div class="ease-step-item ease-step-complete">
        <div class="ease-step-circle">1</div>
        <span class="ease-step-label">Step One</span>
      </div>
      <div class="ease-step-connector"></div>
      <div class="ease-step-item ease-step-active">
        <div class="ease-step-circle">2</div>
        <span class="ease-step-label">Step Two</span>
      </div>
      <div class="ease-step-connector"></div>
      <div class="ease-step-item ease-step-pending">
        <div class="ease-step-circle">3</div>
        <span class="ease-step-label">Step Three</span>
      </div>
    </div>

## Why is it useful?
Step indicators are essential for long, multi-step forms and checkout flows. They reduce user anxiety by showing exactly where they are in a process and how much is left. The animated transitions between states provide clear feedback and make the workflow feel polished and modern.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the step progress indicator.

## Contribution Notes
- Uses the CSS `@keyframes ease-kf-step-complete` animation for the checkmark pop-in on completion
- Connectors animate their fill from left to right as steps complete
- Vertical layout variant supported via `.ease-step-progress-vertical`
- Reduced-motion safe: animations disabled when `prefers-reduced-motion: reduce`
