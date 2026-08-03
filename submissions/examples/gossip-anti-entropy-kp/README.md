# Gossip Anti-Entropy Convergence Lab

A responsive, CSS-only operations console that explains how replicas detect and
repair divergent data through periodic anti-entropy exchanges.

## What it demonstrates

- Random peer selection for a bounded gossip repair session
- Merkle digest comparison across eight token ranges
- Incremental row transfer for only the divergent ranges
- Replica generation and root-digest convergence
- A four-stage exchange timeline from peer selection to verification

## Interaction

Use the **Run repair** switch in the header. The native checkbox remains
keyboard focusable, so `Tab` and `Space` can move the console from the drifted
state to the converged state without JavaScript.

## Technical notes

- Pure HTML and CSS
- Responsive topology for desktop, tablet, and mobile layouts
- Visible keyboard focus treatment
- Reduced-motion support
- No external assets or runtime dependencies
