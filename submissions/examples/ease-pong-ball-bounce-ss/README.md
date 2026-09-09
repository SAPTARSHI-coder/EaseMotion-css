# Pong Ball Bounce Component

## Abstract

The Pong Ball Bounce component (`ease-pong-ball-bounce-ss`) provides a retro arcade pong court animation built with pure CSS keyframes. It simulates a continuous rally between left and right paddles complete with ball squash-and-stretch micro-interactions and interactive animation reset capability.

## CONTRIBUTING.md Compliance

1. **What does this do?**  
   Implements a retro arcade pong rally animation (`.ease-pong-court`) where dual opposing paddles track and a pong ball bounces back and forth across the court using pure CSS keyframes and squash-and-stretch scaling.

2. **How is it used?**  
   Add the `.ease-pong-court` structure containing net, paddles, and ball elements into any portfolio, feature showcase, or play gallery. Use the provided JavaScript trigger to restart the rally animation on demand.

3. **Why is it useful?**  
   Demonstrates advanced keyframe choreography, multi-element spatial timing, and hardware-accelerated physics simulation entirely in CSS without JavaScript canvas loops.

## Animation Architecture

The component leverages synchronized CSS `@keyframes`:
- `easeBallBounce`: Controls spatial translation (`left`, `top`) and vertical impact deformation (`scale(1, 0.85)`).
- `easePaddleLeft`: Animates the vertical trajectory of the left paddle along the court boundary.
- `easePaddleRight`: Animates the vertical trajectory of the right paddle in synchronization with the ball arrival.
- DOM Reflow Helper: Toggles `.is-animating` to instantly reset CSS animations without layout thrashing.

## Custom CSS Properties

| Token | Default Value | Description |
| --- | --- | --- |
| `--pong-bg` | `#030712` | Main page background color |
| `--pong-surface` | `#0f172a` | Card wrapper background color |
| `--pong-border` | `#1e293b` | Outer container & court border color |
| `--pong-court` | `#020617` | Playfield arena background color |
| `--pong-net` | `#334155` | Center dashed net color |
| `--pong-paddle-left` | `#38bdf8` | Left paddle fill & shadow color |
| `--pong-paddle-right` | `#ec4899` | Right paddle fill & shadow color |
| `--pong-ball` | `#ffffff` | Pong ball fill color |
| `--pong-text` | `#f8fafc` | Primary text color |
| `--pong-muted` | `#94a3b8` | Subtitle/secondary text color |
