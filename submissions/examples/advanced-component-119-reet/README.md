# Advanced Component 119 - Cyberpunk Glitch Text Effect

**What does this do?**  
This component produces an incredibly realistic "cyberpunk" digital glitch text effect. It utilizes overlapping CSS pseudo-elements (`::before`, `::after`), neon `text-shadow` displacement, and rapidly oscillating `clip-path: inset()` calculations to slice the text horizontally in real-time, accompanied by a subtle CRT scanline overlay.

**How is it used?**  

```html
<div class="ease-glitch-container">
    <!-- Ensure the data-text attribute matches the inner HTML exactly -->
    <h1 class="ease-glitch-text" data-text="CYBERPUNK">CYBERPUNK</h1>
</div>
```

**Why is it useful?**  
Achieving complex slicing animations usually requires heavy SVG displacement maps, Canvas API, or Javascript libraries (like Baffle.js). This component achieves a completely seamless visual glitching engine solely through pure CSS `@keyframes` and `clip-path`, remaining incredibly lightweight and adhering to EaseMotion's zero-dependency philosophy.
