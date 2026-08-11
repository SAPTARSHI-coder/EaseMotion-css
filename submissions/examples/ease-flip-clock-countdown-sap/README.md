# ease-flip-clock-countdown-sap

A countdown timer to a target date/time, displayed in split-flap style digit boxes across days/hours/minutes/seconds.

## Usage
1. Include `style.css`.
2. Add markup: 4 `.countdown-unit` groups (days/hours/minutes/seconds) with `.countdown-digits` containers.
3. Set a `target` date in JS (see `demo.html`) and the countdown auto-updates every second.

## Customization
- `target` date/time (JS) — set to any future Date.
- Digit box size/colors.
- Which units to display — remove a `.countdown-unit` (e.g. drop "Days") and its corresponding JS entry for a shorter countdown display.

## Notes
- Diff is calculated once per tick from `target - new Date()`, clamped to never go negative once the countdown reaches zero.
- Only re-renders a unit's digit boxes when its value actually changes from the previous tick, avoiding unnecessary DOM churn every second for unchanged units.
- The `::after` horizontal crease line on each digit box visually mimics a physical split-flap display.
- Respects `prefers-reduced-motion`: since digits update via full re-render (not a CSS flip transform in this simplified version), there's no motion to gate beyond a defensive `transition: none` rule for any future added transition.