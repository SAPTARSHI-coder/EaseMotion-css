# Tail Latency Hedging Lab

A CSS-only systems visualization that demonstrates how a delayed replica
request can reduce read tail latency without exceeding a bounded amplification
budget.

## Features

- Toggle between a single-request baseline and a hedged read.
- Compare primary and replica timelines with winner and cancellation states.
- Watch p99 latency, SLO success, request amplification, and released work
  update together.
- Inspect a responsive percentile curve and hedge-budget safety rail.
- Use the keyboard-accessible control without any JavaScript.
- Respect reduced-motion preferences on every animated element.

## Run

Open `demo.html` in a browser, then enable **Request hedging** in the header to
compare both execution paths.

## Files

- `demo.html` contains the semantic experiment structure.
- `style.css` provides all interaction, data visualization, and responsive
  behavior.
- `README.md` documents the example.

The implementation has no dependencies, external assets, frameworks, or build
step.
