# Differential Streak Engine

Submission for Issue #8538

## Classes

| Class                         | Description                              |
| ----------------------------- | ---------------------------------------- |
| `streak-tower--velocity-high` | velocity > 1.5 — full glow, 100% opacity |
| `streak-tower--velocity-mid`  | velocity 0.8–1.5 — 4px glow, 70% opacity |
| `streak-tower--velocity-low`  | velocity < 0.8 — no glow, 40% opacity    |
| `streak-tower--momentum-full` | momentum = 1.0 (active streak)           |
| `streak-tower--momentum-high` | momentum = 0.74 (1–3 days since break)   |
| `streak-tower--momentum-mid`  | momentum = 0.41 (3–5 days since break)   |
| `streak-tower--momentum-low`  | momentum = 0.12 (7+ days since break)    |

## Usage

```html
<div
  class="streak-tower streak-tower--velocity-high streak-tower--momentum-full"
  style="height:80px"
></div>
```

Supports themes: default, neon, dracula, dark via data-theme attribute.
