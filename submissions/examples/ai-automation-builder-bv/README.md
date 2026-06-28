# AI Automation Builder

## What does this do?

The AI Automation Builder is a visual, no-code workflow orchestration dashboard. It features service node cards, a grid-styled design workspace, SVG path connectors with linear dash-array animations, real-time node inspector forms, pipeline execution telemetry consoles, and system metric counters.

## How is it used?

Open `demo.html` directly in any modern browser:

- **Add Custom Nodes**: Click on "Webhook Trigger", "LLM Agent Summarizer", "Conditional Router", or other service cards in the left sidebar to generate and position new nodes on the canvas.
- **Node Inspector**: Click on any node inside the canvas (e.g. Cron Trigger, LLM Summarizer, Check Confidence). The right sidebar will dynamically populate with configuration inputs (Title, Parameter Value, Secret Keys). Typing updates the node card on the canvas instantly.
- **Run Pipeline**: Click "Run Automation Pipeline" to trigger a simulated workflow. Beacons will pulse and connections will light up sequentially from left to right as data payloads flow through the pipeline.
- **Inspect Logs**: Check the bottom-right terminal panel to trace real-time execution states, logs, and pipeline success statuses.

## Why is it useful?

Visual pipeline designers enable developers and operations teams to organize services, control logic loops, and monitor executions in real-time.

This builder solves automation tracking workflows by:

1. Mapping visual node ports and smooth cubic bezier SVG paths overlaying the editor canvas.
2. Integrating pulsing beacons to distinguish between node states (Idle vs Active vs Busy).
3. Linking sequential step events to live terminal logging streams, enabling tracing of conditional logic paths.

## Tech Stack

- HTML5
- CSS3 (glowing dash flow keyframe animations, grid backgrounds, status beacon pulses, responsive structures)
- JavaScript (interactive node parameters, canvas node additions, sequential executor simulations, console logger feeds)

## Preview

Open [demo.html](file:///submissions/examples/ai-automation-builder-bv/demo.html) directly in your browser.
