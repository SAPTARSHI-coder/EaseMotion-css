# Pressure Map

Pressure Map is a spatial telemetry component that represents system metrics as localized pressure zones on a shared visualization surface.

Instead of presenting metrics as cards, lists, or charts, Pressure Map places each metric into a spatial field.

The size and intensity of each zone communicate the relative pressure of that metric.

---

## Concept

Traditional dashboard:

```text
┌──────────────┐
│ CPU      72% │
└──────────────┘

┌──────────────┐
│ NETWORK  86% │
└──────────────┘

┌──────────────┐
│ MEMORY   48% │
└──────────────┘