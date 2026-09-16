# Cyberpunk Staggered Entrance Modal (Pure CSS)

A thematic utility modal utilizing cascading transition sequences to load inner layout elements step-by-step.

## Features
* ⚡ **Zero JavaScript Cascade Execution:** Uses calculated multiplier delays tied cleanly to the native CSS `:target` system.
* 🏮 **Sci-Fi Aesthetic Polish:** Equipped with cyberpunk terminal elements, hardware glows, dynamic clip-path corners, and data-stream layouts.
* 🎛️ **Exposed Variables Layout:** Timing, intervals, and delay gaps can be easily re-scaled on the fly using parameter attributes.

## Parameter Properties Map
| Custom Property | Description | Default Value |
| :--- | :--- | :--- |
| `--stagger-delay-gap` | Controls the chronological step time interval between item waves. | `0.12s` |
| `--stagger-item-duration` | Determines how quickly individual elements snap into their locations. | `0.4s` |
| `--stagger-easing` | Custom motion vector that introduces an elastic recoil animation snap. | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` |