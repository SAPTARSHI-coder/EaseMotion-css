# ease-progress-step-wizard-sap

A multi-step progress wizard indicator — completed steps fill solid, connecting lines fill in behind them, and the active step gets a highlighted scale.

## Usage
1. Include `style.css`.
2. Add markup: `.step-item` (with `.step-circle`) separated by `.step-connector` elements; mark states with `.done`/`.active`.
3. Advance state via JS toggling classes (see `demo.html`).

## Customization
- Number of steps: works with any count, connectors auto-fill based on `.done` state.
- Circle/connector colors.
- Active step scale intensity.

## Notes
- Connector fill uses `transform: scaleX()` from `transform-origin: left`, so the connecting line fills left-to-right as a step is marked done, visually linking progression to completion rather than just changing color abruptly.
- State transitions (done/active/upcoming) are all driven by simple class toggles, keeping the JS minimal — no positional math needed.
- Respects `prefers-reduced-motion`: circle scale-up and connector fill transitions are both removed; step state still updates correctly and instantly on each "Next" click.