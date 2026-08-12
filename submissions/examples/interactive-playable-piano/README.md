# Interactive Playable Piano Keyboard

A self-contained, responsive, and visually stunning playable virtual piano keyboard. It synthesizes audio using the built-in browser Web Audio API oscillator nodes, showcasing how interactive micro-interactions can integrate clean CSS transformations and state handling.

## Feature Overview

- **Synthesized Audio Engine**: Leverages pure Web Audio API oscillator synthesis—no external audio files required, ensuring zero load latency and absolute durability.
- **Ivory & Glossy Key Gradients**: Custom ivory shine effects for white keys and glossy slate shadows for black keys.
- **3D Key Depression**: Physically simulates key depression depth on active states using transform transitions and inner-shadow changes.
- **Multiple Waveform Selections**: Toggle between Triangle, Sine, Sawtooth, and Square waveforms in real-time.
- **Dual Input Modes**: Full support for both mouse interaction (with click-and-drag slider playing) and computer keyboard mappings.
- **Active Key Glow**: Pulsing neon outline glows when black or white keys are active.
- **Dynamic Controls Drawer**: Adjust master volume thresholds and octaves using styled range sliders.

## File Structure

```
submissions/examples/interactive-playable-piano/
├── demo.html
├── style.css
└── README.md
```

## How to Use

1. Open `demo.html` in any web browser.
2. Select your desired Waveform from the dropdown menu (default is *Triangle*).
3. Play the piano using one of the following inputs:
   - **Mouse**: Click on any key. Hold the mouse button down and drag across keys to play continuously.
   - **Keyboard**: Type the keys corresponding to the mapping legend below.
4. Drag the **Volume** slider to adjust the audio gain output.
5. If any audio hangs, click the **Reset** button to release all active oscillators.

## Key Mappings

### White Keys (10 Notes)
| Key | Note | Frequency |
|:---:|:---:|:---:|
| **A** | C4 | 261.63 Hz |
| **S** | D4 | 293.66 Hz |
| **D** | E4 | 329.63 Hz |
| **F** | F4 | 349.23 Hz |
| **G** | G4 | 392.00 Hz |
| **H** | A4 | 440.00 Hz |
| **J** | B4 | 493.88 Hz |
| **K** | C5 | 523.25 Hz |
| **L** | D5 | 587.33 Hz |
| **;** | E5 | 659.25 Hz |

### Black Keys (7 Notes)
| Key | Note | Frequency |
|:---:|:---:|:---:|
| **W** | C#4 | 277.18 Hz |
| **E** | D#4 | 311.13 Hz |
| **T** | F#4 | 369.99 Hz |
| **Y** | G#4 | 415.30 Hz |
| **U** | A#4 | 466.16 Hz |
| **O** | C#5 | 554.37 Hz |
| **P** | D#5 | 622.25 Hz |

## Waveform Controls

- **Triangle**: Soft, woody tone ideal for standard keyboard sounds.
- **Sine**: Clean, rounded, flute-like frequency.
- **Sawtooth**: Bright, buzzy synth-like tone.
- **Square**: Classic hollow 8-bit retro arcade tone.

## Customization

### Modifying ADSR Envelope
You can edit the release envelope duration inside the `stopNote()` script in `demo.html` to create a shorter staccato or a longer decay note ring:
```javascript
// Ramp down speed (default is 0.15 seconds)
gainNode.gain.exponentialRampToValueAtTime(0.001, currentTime + 0.15);
osc.stop(currentTime + 0.15);
```

### Adjusting Keyboard Colors
Adjust neon accent colors by modifying the CSS variables inside `style.css`:
```css
:root {
  --accent-color: #ec4899; /* Change to your brand color */
  --shadow-active: 0 0 20px rgba(236, 72, 153, 0.55);
}
```

## Accessibility Notes

- Highly visible keyboard binding shortcuts visible on every key.
- Safe focus management with interactive control dropdowns.
- Synthesizer volume configuration scales down from 30% by default, keeping sound levels safe for headphone users.

## Animation Breakdown

1. **Staggered Key Entrance**: Key entrance slide-ups are staggered using custom properties calculated from key indexes (`animation-delay: calc(var(--key-index) * 0.04s)`).
2. **Neumorphic Panel Entry**: The dashboard controls slide down smoothly on page initialization.
3. **Key Depression translation**: Keys translate downward on the Y-axis and switch to inner shadows, simulating real physics.
4. **Active Glow Pulse**: Active keys pulse with custom shadows in real-time.
5. **Hover Lift**: Available keys float slightly on cursor hover.
