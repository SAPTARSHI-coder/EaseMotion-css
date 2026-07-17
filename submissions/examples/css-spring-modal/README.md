# Pure CSS Spring Physics Modal

A modular, framework-agnostic UI component replicating fluid elastic spring physics animations via pure CSS `@keyframes` properties. Optimized explicitly for SaaS workspace interfaces.

## Architectural Approach
This component removes linear easing vectors completely. It implements a multi-stage keyframe sequence to simulate mass, momentum, and restorative spring tension values natively inside the rendering layer without JavaScript framework bindings.

## Component Properties
Modify performance metrics directly by tweaking the custom properties assigned at the structural `:root` scope level:

| Custom Variable | Default Specification | Function |
| :--- | :--- | :--- |
| `--spring-duration` | `0.64s` | The total timeline duration window for spring stabilization |
| `--spring-initial-scale` | `0.75` | Initial geometric scaling variance profile |
| `--spring-initial-y` | `60px` | Absolute offset baseline distance before launching upward momentum |
| `--backdrop-blur` | `6px` | Visual background context abstraction depth |

## Verification & Execution
1. Include your container anchors `<a href="#spring-modal">`.
2. Ensure targets match container element identifiers (`id="spring-modal"`).
3. Tap anywhere outside the container overlay framework blocks to systematically release the focus state safely.