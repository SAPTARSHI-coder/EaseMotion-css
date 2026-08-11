# Dashboard Analytics Fade-Out Modal (Pure CSS)

A lightweight, zero-dependency, pure CSS modal solution tailored for dashboard layouts. It demonstrates smooth visual transitions using native hardware-accelerated properties, allowing components to dynamically scale and gracefully fade out upon exit.

## Features
* ⚡ **Zero JavaScript Overhead:** Relies strictly on CSS `:target` structural pseudo-classes.
* 🎛️ **Fully Parameterized:** Timing, easing, scaling configurations, and background styling can be completely modified globally using CSS custom variables (`:root`).
* 🎨 **Dashboard Native Design:** Styled using a modern, clean tech aesthetic matching traditional cloud dashboard workflows.

## Configuration Parameters
Modify these variables inside `style.css` to change the component behavior:

| Custom Property | Description | Default Value |
| :--- | :--- | :--- |
| `--modal-duration` | Speeds up or slows down the fading sequence. | `0.35s` |
| `--modal-easing` | Controls the mechanical fluid motion curve. | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--modal-scale-start` | The transformation start ratio for the modal card. | `0.95` |