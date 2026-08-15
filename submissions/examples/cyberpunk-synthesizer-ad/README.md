# Cyberpunk Interactive Audio Synthesizer Interface

## 1. What does this do?
This submission implements a retro-futuristic Cyberpunk/Vaporwave styled Audio Synthesizer Dashboard interface, containing interactive drag-to-rotate dials (dials rotatable on dragging/touch), customized neon input range sliders, active equalizer monitoring bars, a scanning laser line, and an interactive "Glitch Core" chassis shake overlay.

## 2. How is it used?
Developers can drop the `.synth-rack` container structure into their designs and customize the parameters by modifying CSS custom properties or utilizing the custom knob events.

```html
<div class="synth-rack">
  <div class="scan-line"></div>
  <header class="synth-header">
    <div class="led-status active"></div>
    <h1 class="synth-title">EASE-SYNTH-ONE</h1>
  </header>
  
  <div class="synth-knob" id="freqKnob" data-value="50">
    <div class="knob-marker"></div>
  </div>
  
  <input type="range" class="synth-slider" id="attackSlider">
</div>
```

## 3. Why is this useful?
It showcases advanced UI composition techniques:
- **Custom Form Controls Styling:** Demonstrates styling native inputs like ranges and checkboxes with advanced CSS shadow casting and gradients.
- **Micro-interactions:** Custom JavaScript-free styles coupled with lightweight mouse position event listeners to map cursor drag to rotation degrees.
- **Hardware-accelerated Animations:** Displays complex grid scanlines, flickering lights, and equalizer height movements without causing CPU bottlenecks.
