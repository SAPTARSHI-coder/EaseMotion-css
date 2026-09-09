# Tic-Tac-Marks Component (`ease-tic-tac-marks-ss`)

## Abstract

The **Tic-Tac-Marks** component provides a lightweight, pure CSS vector animation system for rendering sequential Tic-Tac-Toe moves. Using SVG path stroke offset animations combined with CSS custom properties for step delays, the component smoothly draws X and O marks on a 3x3 grid stage without requiring heavy JavaScript timeline libraries.

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a tic-tac-toe sequence component (`.ease-tictac-grid`) where X and O marks draw themselves sequentially using SVG stroke-dasharray animations and inline delay variables (`--step: N`).

### 2. How is it used?
Embed the `.ease-tictac-grid` structure into strategy game interfaces, dashboard widgets, or play gallery showcases. Use the provided JavaScript trigger to restart the stroke drawing sequence on demand.

### 3. Why is it useful?
Provides an engaging, high-fidelity visual indication of game states and turns using lightweight, hardware-accelerated vector graphics without heavy JavaScript timeline libraries.

## Stroke Drawing Architecture

The animation system leverages SVG `stroke-dasharray` and `stroke-dashoffset` techniques combined with CSS Keyframe animations:

- **Keyframe Trigger (`easeDrawMark`)**: Animates `stroke-dashoffset` from 100 to 0 over 0.6 seconds using a custom cubic-bezier timing function (`cubic-bezier(0.4, 0, 0.2, 1)`).
- **Staggered Delays (`--step`)**: Each mark SVG receives an inline `--step` custom property (e.g. `--step: 1`, `--step: 2`), calculating `animation-delay: calc(var(--step, 1) * 0.35s)` to orchestrate fluid sequential turn rendering.
- **Replay Reflow**: The container reset mechanism toggles `.is-animating` and triggers a DOM reflow (`void grid.offsetWidth`) to replay the animation timeline seamlessly.

## Custom CSS Properties

The component features modular design tokens for rapid theming and customization:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--tictac-bg` | `#030712` | Deep atmospheric background color |
| `--tictac-surface` | `#0f172a` | Wrapper card and cell container surface color |
| `--tictac-border` | `#334155` | Outer container and grid border color |
| `--tictac-grid` | `#1e293b` | 3x3 Grid arena background color |
| `--tictac-x` | `#38bdf8` | Cyan mark stroke color for 'X' |
| `--tictac-o` | `#ec4899` | Pink mark stroke color for 'O' |
| `--tictac-text` | `#f8fafc` | Primary header text color |
| `--tictac-muted` | `#94a3b8` | Subtitle description text color |
