# Hover Lift & Glow Interaction Utilities

This submission directory houses the isolated sandbox playground demonstrating fluid, human-readable hover state transitions. 

It provides utility blocks that easily layer onto existing structural layout grids (`ease-grid`, `ease-gap`) without fracturing underlying page layouts.

### Implementation Checklist
- Hardware-accelerated movement translations (`translateY`)
- Drop-shadow color extensions for deep dynamic focus
- Pure decoupled HTML/CSS structure

### Core Composition Classes
- `.ease-hover-lift`: Orchestrates the micro-interaction timing curves and upward translation offset.
- `.ease-glow-purple`: Evaluates a soft, glowing canvas profile targeted for indigo/purple elements.
- `.ease-glow-green`: Evaluates a soft, glowing canvas profile targeted for emerald/green elements.
- `.ease-glow-red`: Evaluates a soft, glowing canvas profile targeted for crimson/red elements.