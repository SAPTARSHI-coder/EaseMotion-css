# CSS Morph-Glow Progress Bar

A sleek, minimalist progress bar that combines a width-fill animation, a shifting background gradient, and a pulsating box-shadow to create a dynamic "morphing glow" effect. Built exclusively for **EaseMotion CSS**.

## 🚀 Features

- **Zero JavaScript:** The entire animation sequence relies purely on CSS keyframes.
- **Dynamic Fill:** Uses a CSS variable (`--target-width`) mapped directly in the HTML to determine where the progress bar stops growing.
- **Multi-Layered Animation:** Simultaneously animates the physical width, the gradient background position, and the intensity of the drop shadow.
- **Accessibility Ready:** Includes standard ARIA roles (`role="progressbar"`) and honors `prefers-reduced-motion: reduce` by snapping immediately to the target width and halting all pulsating effects.

## 🛠️ Usage

### 1. HTML Structure

To use the progress bar, set your desired completion percentage in the inline `--target-width` CSS variable.

```html
<div class="em-progress-track" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
    <!-- Set the target width inline -->
    <div class="em-progress-fill morph-glow" style="--target-width: 85%;"></div>
</div>