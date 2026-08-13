# ease-animated-emoji-reaction-picker-sap

An emoji reaction bar where each emoji pops up and enlarges on hover, and the selected reaction gets a bounce confirmation animation.

## Usage
1. Include `style.css`.
2. Add markup: `.reaction-btn` elements with `data-emoji` inside `.reaction-picker-sap`.
3. Attach the single-select click handler from `demo.html`.

## Customization
- Emoji set — add/remove `.reaction-btn` buttons freely.
- Hover lift/scale intensity.
- `reaction-pop-sap` bounce curve for the selected confirmation.

## Notes
- Hover uses `scale()` + `translateY()` together so emojis visibly "pop up" out of the row rather than just growing in place, a common reaction-picker pattern (similar to Slack/Messages reaction bars).
- Selection is single-select — clicking a new emoji clears any previously selected one before applying `.selected`, re-triggering the pop confirmation each time.
- Respects `prefers-reduced-motion`: hover lift/scale and the selection bounce are both disabled, leaving only a background color change for feedback.