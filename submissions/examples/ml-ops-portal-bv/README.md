# ML Operations Portal

## What does this do?

The Machine Learning Operations (MLOps) Portal is an enterprise-grade control dashboard for managing models, monitoring training runs, deploying pipelines, and tracking compute infrastructures (CPU, GPU VRAM, RAM). It features model registries, active training epoch charts, API gateway metrics counters, replica scale controllers, and live Kubernetes log viewers.

## How is it used?

Open `demo.html` directly in any modern browser:

- **Model Registry Selectors**: Click models in the registry list (e.g. `llama-3-8b`, `deepseek-coder`). Watch parameters (replica count, replica scales, latency) update instantly.
- **Infrastructure Monitor**: Observe CPU, GPU VRAM, RAM, and Network bars fluctuate periodically to represent live telemetry data.
- **Train Custom Model**: Click "Train Model Run" to trigger a simulated training pipeline. Watch epochs iterate, CPU/GPU loads spike to 98%, and validation accuracy / training loss bars populate the charts. Once complete, a new model card is registered.
- **Rollout & Re-Scale**: Adjust replica sliders or select GPU classes. Click "Rollout to Production" or "Rescale Cluster" and monitor Kubernetes rollout states in the terminal panel.

## Why is it useful?

Managing production AI architectures requires unified environments to monitor training runs, model metadata, and API gateway requests in real-time.

This portal solves MLOps workflows by:

1. Displaying comparative training curves (ACC/LOSS) utilizing modular responsive CSS height bars.
2. Integrating dynamic hardware metrics gauges to track container health states.
3. Incorporating Kubernetes log tracing consoles, enabling immediate inspection of deployments.

## Tech Stack

- HTML5
- CSS3 (chart bar height transitions, pulsing beacons, progress bar overlays, flex grids)
- JavaScript (interactive model metadata, interval-based infrastructure simulation, training loop state controls, rollout handlers)

## Preview

Open [demo.html](file:///submissions/examples/ml-ops-portal-bv/demo.html) directly in your browser.
