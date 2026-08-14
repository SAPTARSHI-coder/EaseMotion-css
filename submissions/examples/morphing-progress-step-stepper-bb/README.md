# Morphing Progress Step Stepper Component

A multi-step checkout progress indicator UI featuring spring physics morphing nodes and animated track fills.

## 1. What does this do?
Displays multi-step onboarding or wizard progress with active pulsing step nodes (`.step-node`) and animated connecting line fill transitions.

## 2. How is it used?
1. Link `style.css` in your HTML `<head>` file.
2. Structure steps using `.stepper-list` and `.step-item`.
3. Add `.completed` or `.active` classes to indicate step progress states and update CSS custom property `--progress-width`.

## 3. Why is it useful?
- **Spring Physics Node Transitions**: Active step node scales smoothly via spring cubic-bezier curves.
- **Visual Progress Feedback**: Glowing node pulse rings (`@keyframes pulse-ring`) provide immediate visual feedback.
- **Fully Accessible**: Implements `aria-current="step"` and focusable card boundaries for screen reader navigation.
