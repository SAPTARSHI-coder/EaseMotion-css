# Animated Progress Steps

## What it does

A wizard-style progress stepper with animated transitions between steps. Shows current step, completed steps with checkmarks, and pending steps.

## How to use it

<div class="ease-progress-steps">
    <div class="ease-step active">
        <div class="ease-step-number">1</div>
        <div class="ease-step-label">Step 1</div>
    </div>
    <div class="ease-step">
        <div class="ease-step-number">2</div>
        <div class="ease-step-label">Step 2</div>
    </div>
</div>

## Variants

- ease-progress-steps-vertical - Vertical layout
- ease-step-pulse - Pulsing animation on active step

## States

- active - Current step (glowing gradient)
- completed - Completed step (green with checkmark)
- default - Pending step

## Why it fits EaseMotion CSS

- Pure CSS transitions
- Visual progress feedback
- Multiple layout options
- Accessible states
