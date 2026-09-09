# ease-animated-vote-arrows-sap

Reddit-style up/down vote arrows where the active direction highlights and the count pops on every change, toggling cleanly between up/down/neutral states.

## Usage
1. Include `style.css`.
2. Add markup: `.vote-btn.up` + `.vote-count` + `.vote-btn.down` inside `.vote-arrows-sap`.
3. Attach the toggle logic from `demo.html`, which tracks a single `state` (-1/0/1) so only one direction can be active at a time.

## Notes
- `state` is a single tri-value variable rather than two independent booleans, which is what guarantees up/down are mutually exclusive — clicking down while up is active correctly swings the count by 2 in one step.
- The count's pop animation is re-triggered on every change via a forced reflow (`void count.offsetWidth`) after resetting `animation: none`.
- Respects `prefers-reduced-motion`: button press scale and count pop are both disabled; active-state background color changes remain.