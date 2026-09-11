# Animated File Drop Zone — EaseMotion CSS

A responsive, high-fidelity landing dropzone shell component optimized for file workflow inputs. Features smooth idle hover states, drag indicators, click pop pulses, and horizontal shake errors.

## 🛠 Features & State Hooks

| Class Flag | Trigger Event Context | Visual Feedback Engine |
|---|---|---|
| `:hover` | Mouse focus entrance | Initiates a smooth infinite `translateY` micro-bob vector loop on the center vector icon. |
| `.is-dragover` | Element drag overlay | Intensifies borders with an outer accent glow container rings. |
| `.is-success` | Content successfully dropped | Triggers an elastic bounce scale popup tracking verification. |
| `.is-rejected` | Error validation flag | Discharges an energetic horizontal shake pattern signaling warning events. |

## 📦 Basic Usage

```html
<div class="ease-file-dropzone is-dragover">
  <svg class="ease-dropzone-icon"><use href="#icon-upload"/></svg>
  <h3 class="ease-dropzone-title">Upload profile data</h3>
</div>