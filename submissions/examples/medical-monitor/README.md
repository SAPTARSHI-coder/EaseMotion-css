# Dynamic Patient Vital Signs & ECG Simulation Strip

A high-fidelity, hardware-accelerated monitoring interface utility built entirely with pure CSS transitions and matrix translations. It maps directly to medical, biotech, analytics, or dashboard layouts.

## Core Motion System Mechanism

1. **Endless Translation Loops (`.ease-ecg-translate`)**: Instead of relying on processing-heavy HTML Canvas rendering loops, this utility maps a repeating CSS background asset vector and pans it back along the X-axis by exactly `-50%`, triggering an infinite seamless reset pattern.
2. **Physiological Elastic Scales (`.ease-pulse-text`)**: Utilizes an asymmetrical scale loop mimicking real cardiovascular pressure waves instead of a uniform bounce.

## Classes & Modifiers Applied

| Utility Class Name  | Target Effect Behavior                                                      |
| ------------------- | --------------------------------------------------------------------------- |
| `.ease-pulse-text`  | Triggers a 4-stage physics-based heartbeat contraction animation            |
| `.pulse-glow-dot`   | Ambient warning alert glow loop with custom box-shadow spreading vectors    |
| `.ecg-scroll-track` | Shifts the viewport background container endlessly at a standard 3.5s tempo |

## Code Usage Example

```html
<div class="medical-display">
  <span class="value ease-pulse-text">72</span>

  <div class="ecg-viewport">
    <div class="ecg-scroll-track"></div>
  </div>
</div>
```
