# Interactive Virtual Drum Kit

A self-contained, highly responsive, and visually polished virtual drum kit. Synthesizes high-fidelity audio presets using the browser's built-in Web Audio API, showcasing realistic physical movement models (2D rotational wobble tilts, compression recoils, and neon active glows).

## Feature Overview

- **Synthesized Audio Engine**: Leverages pure Web Audio API synthesis—no external `.mp3` or `.wav` dependencies required, guaranteeing zero file-load delays and absolute durability.
- **Multiple Sound Presets**: Toggle between *Acoustic Kit* (snappy and clean tone curves) and *Lo-Fi Synth* (retro, low-filtered, and muffled sounds).
- **Physical Wobble Physics**: 3D cymbals wobbling using rotational keyframes and perspective skews to simulate realistic striking.
- **Drumhead Recoil**: Simulates drum head compression using scale-down transitions and active inner shadows.
- **Dual Input Modes**: Supports interactive mouse triggers and keyboard mapped keypress binds.

## Folder Structure

```
submissions/examples/interactive-virtual-drum-kit/
├── demo.html
├── style.css
└── README.md
```

## Controls

Play the drum kit using either input below:

### Keyboard Mappings
- **`A`** : Crash Cymbal
- **`S`** : Hi-Hat
- **`D`** : Snare Drum
- **`F`** : Tom-Tom Drum
- **`Space`** : Bass Kick Drum

### Mouse Interactions
Click or press down on any drum or cymbal element to strike it.

---

## Customization

### Editing Sound Presets
You can customize the base frequencies or decay durations inside the inline JavaScript synthesizers in `demo.html`. For example, to adjust the Bass Kick pitch slide:
```javascript
const startFreq = 150; // Pitch peak on strike
const duration = 0.25;  // Decay duration in seconds
```

### Customizing Cymbal Colors
Edit cymbals backgrounds inside `style.css`:
```css
:root {
  --cymbal-color: linear-gradient(135deg, #fef08a 0%, #eab308 100%);
}
```

---

## Animations

1. **Staggered Drum Entrance**: Drum components scale and slide in with distinct delays using custom properties (`animation-delay: calc(var(--element-index) * 0.05s)`).
2. **Cymbal Wobble**: Strikes on Hi-Hat or Crash trigger a complex rotation-tilt keyframe animation (`cymbalWobble`) simulating physical wobble recoil.
3. **Drumhead Recoil**: Drumheads scale down slightly (`scale(0.93)`) and shift shadow offsets to simulate stick impact.
4. **Neon Aura Glow**: Triggers generate neon active shadows and border pulses.
5. **Control Panel Entry**: The dashboard controls slide down on page load.

---

## Accessibility

- Keybind indicators are clearly overlaid on each drum skin/cymbal body.
- Fallback safe volume default setting (40%), adjustable via slider.
- Clear structural outlines for keyboard focus.
