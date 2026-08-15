# Fix ease-avatar Reduced Motion Support

## Description
Implements the `prefers-reduced-motion` media query to disable animations and transformations for the `avatar` component when users have OS-level motion sensitivities.

## Usage
Include the component as usual. The new CSS handles accessibility automatically.

## Accessibility Compliance
Ensures compliance with WCAG 2.1 Success Criterion 2.3.3 (Animation from Interactions).
Fixes: #37907
