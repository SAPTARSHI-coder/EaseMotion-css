#!/usr/bin/env bash

# Script to create five advanced issues for the EaseMotion-css repository using the GitHub CLI (gh).
# Ensure you have the GitHub CLI installed and authenticated (gh auth login).
# Repository: SAPTARSHI-coder/EaseMotion-css
# Run this script from the repository root: ./scripts/raise_advanced_issues.sh

set -euo pipefail

REPO="harrshita123/EaseMotion-css"

# Issue 1: Drag‑and‑Drop Reordering for Accordion Items
gh issue create \
  --repo "$REPO" \
  --title "Implement Drag‑and‑Drop Reordering for Accordion Items" \
  --body "Create a way for users to reorder accordion sections via drag‑and‑drop, preserving the open/close state and animating transitions smoothly.

**Suggested Implementation:**
- Add a new component `EaseAccordionReorder.jsx` under `submissions/react/react-accordion-reorder-harrshita-new/`.
- Use the HTML5 Drag‑and‑Drop API or a lightweight library like `react-beautiful-dnd`.
- Update CSS to style the dragging placeholder and transition effects.
- Provide a README with usage examples and accessibility notes.
" \
  --label "enhancement,drag-drop,ui"

# Issue 2: Dark‑Mode Theming Support for All Components
gh issue create \
  --repo "$REPO" \
  --title "Dark‑Mode Theming Support for All Components" \
  --body "Introduce a global dark‑mode toggle that automatically applies appropriate CSS variables to all existing components, ensuring contrast and readability.

**Suggested Implementation:**
- Add a new SCSS file `dark-theme.scss` that defines dark‑mode color variables.
- Create a `ThemeProvider.jsx` component to manage the theme state and inject CSS variables via a CSS custom properties root.
- Update component examples to demonstrate dark‑mode usage.
- Include a README explaining how to enable dark mode and override variables.
" \
  --label "enhancement,dark-mode,theme"

# Issue 3: Accessible Keyboard Navigation for Alerts
gh issue create \
  --repo "$REPO" \
  --title "Accessible Keyboard Navigation for Alerts" \
  --body "Enhance the `EaseAlert` component to support full keyboard navigation and ARIA live region announcements, improving accessibility for screen‑reader users.

**Suggested Implementation:**
- Add `role=\"alert\"` and `aria-live=\"assertive\"` attributes.
- Implement focus management to allow users to dismiss alerts using the `Esc` key.
- Provide a `README.md` with accessibility testing steps and guidelines.
" \
  --label "accessibility,alert,keyboard"

# Issue 4: CSS‑Based 3D Flip Card Component
gh issue create \
  --repo "$REPO" \
  --title "CSS‑Based 3D Flip Card Component" \
  --body "Create a reusable 3D flip‑card component using only CSS transformations and transitions, with optional React wrapper.

**Suggested Implementation:**
- Add a new component `EaseFlipCard.jsx` and accompanying SCSS file `flip-card.scss` under a new submission folder.
- Use `perspective`, `rotateY`, and `backface-visibility` to achieve the flip effect.
- Include props for front and back content, flip trigger (hover, click), and duration.
- Provide a README with live demo code and customization options.
" \
  --label "component,3d,css"

# Issue 5: SVG Icon Animation Library
gh issue create \
  --repo "$REPO" \
  --title "SVG Icon Animation Library" \
  --body "Build a small library of animated SVG icons (e.g., loading spinner, success check, error cross) that can be easily integrated into existing components.

**Suggested Implementation:**
- Create an `icons/` directory with individual SVG files.
- Add a React wrapper `EaseIcon.jsx` that accepts `type`, `size`, and `color` props and applies CSS keyframe animations.
- Provide SCSS for animation definitions.
- Document usage and add a live preview in the README.
" \
  --label "icons,animation,svg"

echo "All issues have been created successfully."
