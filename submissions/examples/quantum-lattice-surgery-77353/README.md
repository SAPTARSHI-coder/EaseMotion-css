# Quantum Error Correction: Fault-Tolerant Lattice Surgery

An educational, interactive, pure CSS visualization of Surface Code Lattice Surgery for Issue #77353.

## What does this add?
This component provides a visually meaningful representation of how two separate logical qubit patches (Patch A and Patch B) on a 2D physical qubit lattice can be "merged" to perform multi-qubit operations and then "split" back apart.

## Core Quantum Concepts Visualized
- **Data Qubits:** The white circles representing the physical qubits holding the actual quantum state.
- **Measure Qubits (Ancilla):** The rotating diamond shapes. They continuously measure the parity of adjacent data qubits to detect and correct errors without destroying the data state.
  - **X-Measure:** Turquoise diamonds representing X-stabilizers.
  - **Z-Measure:** Yellow diamonds representing Z-stabilizers.
- **Lattice Surgery (Merging):** When initiated, the "Boundary" between the two isolated patches becomes active. The measure qubits along this boundary start interacting with data qubits from *both* patches, effectively merging them into one larger, entangled logical qubit. 

## How does a developer use it?
Copy the `demo.html` grid structure and link the `style.css`. The interactivity is driven entirely by a pure CSS hidden checkbox hack (`#surgery-toggle`), ensuring zero JavaScript dependencies.

## Accessibility & Motion
- Built with semantic HTML and appropriate `aria-live` regions for the status panel.
- Fully respects `@media (prefers-reduced-motion: reduce)` by disabling the continuous measure qubit pulsing and instantaneous transitions during the lattice merge.
