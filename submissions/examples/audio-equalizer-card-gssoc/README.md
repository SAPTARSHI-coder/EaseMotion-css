# Audio Equalizer Card

1. **What does this do?**  
Adds a glassmorphism audio player container featuring staggered keyframe frequency waveform bar animations.

2. **How is it used?**  
Apply the `.equalizer-visualizer` container class around a set of `.equalizer-bar` elements inside an audio player card:
```html
<div class="equalizer-visualizer">
  <div class="equalizer-bar bar-1"></div>
  <div class="equalizer-bar bar-2"></div>
  <div class="equalizer-bar bar-3"></div>
  <!-- ... -->
</div>
```

3. **Why is it useful?**  
It provides a visually engaging micro-animation for music players, podcasts, live streams, and sound interfaces while respecting `prefers-reduced-motion` settings.
