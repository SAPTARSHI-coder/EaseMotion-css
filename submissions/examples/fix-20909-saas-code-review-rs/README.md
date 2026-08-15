# SaaS Code Review Automation

## Issue
**Issue #20909**: Advanced: SaaS Landing — Code Review Automation

## Description
This submission provides a landing page section for an AI-powered Code Review SaaS. It includes a custom mock IDE window that illustrates a diff animation: simulating the typing of new code over deleted code, followed by a playful AI comment popping in to explain the refactor.

## Implementation Details
- **HTML (`demo.html`)**: Semantic markup with a two-column grid. The code window includes `Fira Code` for a realistic IDE feel.
- **CSS (`style.css`)**: 
  - CSS Grid layout for responsiveness.
  - A typewriter effect (`@keyframes typing`) implemented using CSS `steps()` to animate the added line of code.
  - A `cubic-bezier` pop-in animation (`@keyframes popIn`) for the AI suggestion box, delayed until the typing animation concludes.

## Verification
Open `demo.html` in your browser. You will immediately see the old code highlighted in red. After 1 second, the new code will "type" itself out in green. Once typing finishes, the AI comment will pop in smoothly below it.
