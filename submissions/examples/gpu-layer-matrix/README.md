# GPU Layer Promotion & Paint Optimization Utilities

An advanced collection of hardware-level optimization utilities that isolate rendering trees and promote target layout blocks directly onto independent browser composition planes.

## Performance Utilities
- `.ease-gpu-promote` : Commands the user-agent browser engine to offload rendering trees directly to the GPU using native hardware parameters.
- `.ease-gpu-isolate` : Sets up strict layout and paint containment fields (`contain`), preventing internal element shifts from triggering global layout recalculations.
- `.ease-gpu-card` : Composable presentation container demonstrating high-performance, non-composite transform vectors.