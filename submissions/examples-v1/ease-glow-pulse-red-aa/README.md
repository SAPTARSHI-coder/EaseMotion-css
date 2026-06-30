# Red Glow Pulse Utility Component

An interactive validation utility component designed to visually flag error, danger, or warning layout states using a hardware-isolated opacity pulse.

## Structural Parameter Matrices

- **3-Cycle Constrained Looping:** Implements strict limit sequences to terminate shadow pulsing animations after exactly 3 full iterations.
- **Configurable Theming Token:** Leverages the required `--ease-error-glow-color` variable channel seamlessly.
- **Dual Trigger Mapping:** Supports direct inline active applications or hover state pointers natively.
- **Accessibility Layers:** Degrades animation movement down to static highlight markers if `prefers-reduced-motion` properties are present.
