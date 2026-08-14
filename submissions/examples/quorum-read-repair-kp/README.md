# Quorum Read Repair Explorer

A CSS-only distributed-systems visualization showing how a read quorum selects
the latest replica value and repairs an outdated node.

## Features

- Compare an inconsistent three-replica set with its converged state.
- Visualize `N = 3`, `R = 2`, `W = 2`, and the `R + W > N` guarantee.
- Follow quorum votes, vector clocks, winner selection, and background repair.
- Track visible versions, confidence, latency, and convergence together.
- Use a keyboard-accessible checkbox without JavaScript.
- Adapt the topology for narrow screens and reduced-motion preferences.

## Run

Open `demo.html` and activate **Quorum read** in the header.

## Files

- `demo.html` defines the semantic replica topology.
- `style.css` implements interaction, motion, metrics, and responsive states.
- `README.md` documents the example.

No external assets, frameworks, dependencies, or build step are required.
