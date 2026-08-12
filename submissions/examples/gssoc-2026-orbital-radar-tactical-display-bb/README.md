# Orbital Radar Tactical Display

A 360-degree rotating tactical sonar radar display with pulsing target blips, range rings, and real-time telemetry readout.

## 1. What does this do?
This component renders a green sonar radar sweep interface with concentric distance rings, horizontal and vertical grid axes, animated target blips, and telemetry readouts.

## 2. How is it used?
Link `style.css` and use the `.radar-card` markup:

```html
<link rel="stylesheet" href="style.css">

<div class="radar-card" tabindex="0">
  <div class="radar-viewport">
    <div class="radar-sweep"></div>
  </div>
</div>
```

## 3. Why is it useful?
It provides defense, aerospace, sci-fi gaming dashboards, and monitoring tools with an authentic radar display requiring zero JavaScript or external libraries.
