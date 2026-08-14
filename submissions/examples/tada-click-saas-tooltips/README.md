# Pure CSS Tada-Click SaaS Tooltip

An elegant, performant, and premium CSS tooltip architecture designed explicitly to match the clean surfaces and rich drop-shadow semantics of Modern SaaS control dashboards. 

## Features
- **Zero JavaScript Overhead:** Runs on native accelerated styling properties via synchronized pseudo-states.
- **Micro-Interaction Polish:** Incorporates a playful and distinct multi-axis "Tada" rotation shake upon being clicked (`:active`).
- **Accessible-Ready Structure:** Fully compatible with screen readers using custom `role="tooltip"` wrappers and focus indicators.
- **Theme Orchestration:** Easily override CSS custom variables to update timing profiles or background states.

## Custom Property Parameters

| Variable Name | Utility Focus | Default Configuration |
| :--- | :--- | :--- |
| `--saas-primary` | Core accent branding color theme | `#6366f1` |
| `--tooltip-bg` | Color mapping for tooltip surface layers | `#0f172a` |
| `--tooltip-fade-duration` | Fade opacity execution delay metric | `0.25s` |
| `--tooltip-tada-duration` | Comprehensive cycle period for the click ripple | `0.55s` |