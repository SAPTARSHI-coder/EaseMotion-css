# Back To Top Button Component (CSS-Only)

A high-performance, accessible navigation control utilizing custom elastic physics vectors to enable elegant back-to-top scrolling interactions.

## Features
* **Elastic Physic Responses:** Hover interaction vectors drive hardware-accelerated translations via customized `cubic-bezier` curves without external engine weights.
* **Custom Property Foundations:** Key behavioral definitions (durations, base states, geometries, colors) map straight into clean CSS global and local variables.
* **Reduced Motion Compliance:** Supports system media queries (`prefers-reduced-motion`) to dynamically disable spatial transformations when tracking safety limits.

## Variable Reference Map

| CSS Parameter | Default Vector | Objective |
| :--- | :--- | :--- |
| `--ease-btn-size` | `48px` | Sets the width/height boundary circle of the container. |
| `--ease-btn-bg` | `#38bdf8` | Declares the primary layout surface background profile. |
| `--ease-btn-curve` | `cubic-bezier(...)` | Directs the custom bounce timeline parameters. |