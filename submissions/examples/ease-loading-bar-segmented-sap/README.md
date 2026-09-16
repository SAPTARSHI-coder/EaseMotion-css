# ease-loading-bar-segmented-sap

A multi-segment progress bar where each segment fills in sequence, like a multi-step upload/onboarding progress indicator.

## Usage
1. Include `style.css`.
2. Add markup: `.segment` blocks each containing a `span` fill element.

## Notes
- Each segment fills independently in sequence via a JS `setTimeout` chain, rather than one continuous bar — useful for representing discrete steps rather than a smooth percentage.
- Respects `prefers-reduced-motion`: fill width transition is disabled, so segments snap to full instantly instead of animating.