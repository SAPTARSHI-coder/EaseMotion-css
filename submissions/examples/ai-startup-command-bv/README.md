# AI Startup Command Center

## What does this do?

The AI Startup Command Center is a premium operational metrics dashboard designed for venture teams and executives. It features perspective toggles (Overview, MRR pipelines, Customer Intelligence), MRR target calculators, weekly recurring revenue runway charts, venture milestones progress bars, and live Stripe webhook ledger streams.

## How is it used?

Open `demo.html` directly in any modern browser:

- **Filter Viewpoints**: Select viewpoints (e.g. Overview, MRR Pipelines, Customer Intelligence) to reload metric values and chart columns instantly.
- **Venture Targets**: Change funding targets (Seed, Series A, Series B) in the dropdown or slide the Target MRR slider. Watch the venture target gap recalculate in real-time.
- **Refresh Financials**: Click "Refresh Financials" to trigger database syncs. Watch the green laser sweep down the runway panel as monthly values refresh.
- **Venture Milestones**: Check or uncheck milestone checkboxes (e.g. Cap Table ready, Pitch Deck finalized). Watch the Series A checklist progress bar update.
- **Stripe Alert Injector**: Type Stripe transaction updates in the ticker input and click Inject to append alerts to the billing feed.

## Why is it useful?

Tracking startup runways, MRR milestones, and customer retention metrics requires central dashboards to align developers, executives, and investors.

This command center solves startup intelligence by:

1. Displaying monthly MRR pipelines side-by-side using responsive vertical grid columns.
2. Integrating a responsive milestone checker that triggers progress indicator transitions.
3. Incorporating interactive viewpoint sliders to immediately compute MRR gaps.

## Tech Stack

- HTML5
- CSS3 (weekly runway transitions, scanning sweeps, pulsing alert beacons, progress checklists)
- JavaScript (viewpoint loaders, MRR gap calculators, milestone progress checks, event tickers)

## Preview

Open [demo.html](file:///submissions/examples/ai-startup-command-bv/demo.html) directly in your browser.
