# Audio Equalizer Visualizer

## What it does
A fully animated music player UI featuring a **live CSS equalizer** that responds to play/pause state. Bars animate continuously when playing and freeze gracefully when paused — with zero JavaScript involved in the animation itself.

## Animations & Techniques
- **Staggered `animation-delay`**: Each of the 12 bars has a unique `animation-duration` (0.44s–0.80s) and `animation-delay` to create an organic, non-synchronized wave pattern.
- **`animation-direction: alternate`**: Bars oscillate smoothly up and down without jarring resets.
- **`animation-play-state`**: Toggled by a `.playing` class on the parent — pure CSS responds to JS class changes to pause/resume all bars simultaneously.
- **Rotating Album Art**: Uses a continuous `spin` keyframe with `animation-play-state` controlled by the same `.playing` class.
- **Progress Bar Animation**: A CSS `@keyframes` from 35% to 100% simulates track playback progress.
- **Glow Effect**: Each bar has a `::after` pseudo-element with `filter: blur()` to create a neon underglow.

## Folder structure
```
animations/audio-equalizer-visualizer/
├── demo.html
├── style.css
└── README.md
```

## Why it fits EaseMotion CSS
- Demonstrates mastery of `animation-play-state` — one of CSS animation's most powerful but underused features.
- All motion is declared declaratively in CSS; JavaScript only toggles a class.
- Includes `prefers-reduced-motion` support.
