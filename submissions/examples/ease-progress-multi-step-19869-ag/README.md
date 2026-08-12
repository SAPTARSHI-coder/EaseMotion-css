# Multi-Step Progress Bar Component

This submission implements the `ease-progress-multi-step` component — a segmented progress indicator with three distinct per-step states: completed (green checkmark, fill animation), active (pulsing ring + inner dot), and pending (empty grey ring).

---

## Step States

| State | Class | Visual |
|-------|-------|--------|
| Completed | `.step--completed` | Green filled circle with checkmark SVG, animate-in on transition |
| Active | `.step--active` | Purple border ring with pulsing inner fill dot |
| Pending | `.step--pending` | Dimmed grey ring, no fill |

### Pulsing Active Indicator
The active step uses two animations:
- Outer ring: `activePulse` — box-shadow breathes in and out
- Inner fill (`::after`): `activeFillPulse` — scale oscillates between 1 and 0.85

### Connector Fill Animation
When a connector becomes `.step-connector--filled`, a `scaleX(0) → scaleX(1)` animation plays from left to right, simulating a fill sweep.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. In the **Step States Overview** section, verify three distinct visual states: green checkmark, purple pulsing, and empty grey.
3. In the **Interactive Demo** section, click **Next** — verify the active step advances and connectors fill with green.
4. Click **Previous** — verify steps revert correctly.
5. Enable `prefers-reduced-motion` — verify pulsing and fill animations are suppressed.
