# AI Agent Command Center

## What does this do?

The AI Agent Command Center is a centralized control panel to orchestrate multiple autonomous AI agents (Planner, Coder, Reviewer). It features visual connection nodes, flow pulse links, live execution monitor logs, progress bars, and anomaly controllers.

## How is it used?

Open `demo.html` directly in any modern browser:

- **Agent Registry**: Monitor the status (IDLE, ACTIVE, OFFLINE) of registry cards on the left panel.
- **Execute Sequence**: Click "Execute Task Sequence" to trigger a step-by-step orchestrator loop. Watch the status beacons change, nodes light up, and linking paths pulse as payloads route from agent to agent.
- **Simulate Failure**: Check "Simulate Node Failure" to trigger a simulated compiler crash during the run, showing error indicators and halting the queue.
- **Clear Logs**: Click "Clear Logs Console" to reset the scrolling terminal history.

## Why is it useful?

Monitoring multi-agent systems requires centralized dashboards to trace execution, identify worker bottlenecks, and diagnose failures immediately.

This command center solves worker tracking by:

1. Simulating workflow graphs (connecting lines) with linear pulse keyframe animations representing active data routing.
2. Utilizing pulsing status beacons to represent agent activity (idle vs busy).
3. Linking controls to simulate node crashes, illustrating how production telemetry consoles handle exceptions.

## Tech Stack

- HTML5
- CSS3 (status pulsing animations, node grid layouts, linear pulse linking keyframes)
- JavaScript (orchestrator loops, status setters, console appenders, progress gauges)

## Preview

Open [demo.html](file:///submissions/examples/ai-agent-command-center-bv/demo.html) directly in your browser.
