# Temperature Converter

A temperature converter component with sliding digit animation and a thermometer visual that fills with gradient color.

## Features

- Concurrent Celsius / Fahrenheit / Kelvin input fields
- Sliding digit animation on value change
- Fill-thermometer with hot-to-cold gradient
- Preset buttons (Freezing, Room, Body, Boiling)

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--tc-duration` | `0.4s` | Transition duration |
| `--tc-primary` | `#3b82f6` | Primary accent |
| `--tc-secondary` | `#1e293b` | Dark bg tone |
| `--tc-hot-color` | `#ef4444` | Hot end of gradient |
| `--tc-cold-color` | `#06b6d4` | Cold end of gradient |
| `--tc-radius` | `12px` | Container border-radius |

## Interactive JS

Input fields auto-sync on any change. Preset buttons jump to reference temperatures. The thermometer fill height transitions smoothly via `cubic-bezier(0.34, 1.56, 0.64, 1)`.
