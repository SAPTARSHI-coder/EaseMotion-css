# Soft Neumorphic Staggered Modal (Pure CSS)

A smooth, extruded tactile modal implementation running completely without JS overhead.

## Features
* ⚡ **Pure CSS Structural Cascade:** Uses calculated delay properties triggered strictly by the native browser URL `:target` parameter.
* 🧼 **High-Fidelity Soft Aesthetics:** Designed via balanced inner/outer double drop shadow mechanics.
* 🎛️ **Exposed CSS Variables:** Easily scale response timing configurations dynamically from the global scope.

## Configuration Details
| Custom Property | Description | Default Value |
| :--- | :--- | :--- |
| `--stagger-delay-multiplier` | Controls the spacing gap sequence between elements. | `0.1s` |
| `--stagger-item-duration` | Determines the scaling snap speed. | `0.45s` |
| `--stagger-easing` | Custom bouncy cubic curve parameters. | `cubic-bezier(0.34, 1.56, 0.64, 1)` |