# Signal Loom

Signal Loom is an interactive futuristic network visualization component
designed for dashboards, AI systems, monitoring interfaces, developer tools,
and experimental landing pages.

The component represents a group of connected system nodes through animated
signal paths and responsive interactions.

## Features

- Interactive network nodes
- Animated signal connections
- Node hover highlighting
- Connected-node visualization
- Clickable node information panel
- Multiple node states
- Ambient grid background
- Responsive layout
- Pure HTML and CSS
- Vanilla JavaScript
- No external dependencies
- No separate JavaScript file required

## Node States

Signal Loom demonstrates three basic states:

- Online
- Processing
- Warning

Each state is represented through a small animated status indicator.

## Interaction

### Hover

Hovering over a node:

- Highlights the selected node
- Highlights its connected paths
- Dims unrelated nodes
- Animates the active connections

### Click

Clicking a node opens a detail panel containing:

- Node name
- Node role
- Current status
- Load
- Latency

### Close

The information panel can be closed using the close button.

## Files

```text
signal-loom/
├── demo.html
├── style.css
└── README.md