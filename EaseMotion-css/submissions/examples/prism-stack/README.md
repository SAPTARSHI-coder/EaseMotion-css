# Prism Stack

Prism Stack is a layered data visualization component that presents related metrics as a physical stack of interactive data slices.

Instead of placing metrics inside a conventional grid of cards, Prism Stack creates a vertical stack where each metric behaves like an individual data plate.

Hovering or focusing a layer lifts it out of the stack and reveals additional context.

---

## Concept

Traditional dashboard:

```text
┌─────────────┐
│ API HEALTH  │
│ 98%         │
└─────────────┘

┌─────────────┐
│ LATENCY     │
│ 142ms       │
└─────────────┘

┌─────────────┐
│ ERRORS      │
│ 1.8%        │
└─────────────┘