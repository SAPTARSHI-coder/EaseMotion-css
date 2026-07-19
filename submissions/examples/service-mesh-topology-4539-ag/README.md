# Service Mesh Topology Explorer

This submission implements a Service Mesh Topology Explorer component designed for cloud-native infrastructure platforms, platform engineering portals, and Istio/Linkerd telemetry panels.

---

## Component Features

- **Microservice Graph Layout**: Organizes service nodes (Gateway, Auth, Users, Payments, Notifications) hierarchically using relative absolute grids.
- **Node Status States**: Health status indicator dot containing breathing glowing pulses to denote live active services.
- **Traffic Connection Lines**: Shows dependency flows between nodes using border dashed configurations.
- **Interactive Metrics Side Panel**: Displays connected states, average latencies, and total connections in real-time.
- **Accessibility Friendly**: Support for mouse hovering, focus outlines, and keyboard tab structures.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Observe the service graph layout with live pulses on status nodes.
3. Hover over nodes to verify size scale-up and outline highlights.
4. Tab through the nodes with the keyboard — verify outlines and visibility.
5. Enable `prefers-reduced-motion` — verify all pulses and flow vectors are static.
