# CSS-Only Floating Cloud Background

### What does this do?
Implements an infinite, looping atmospheric sky background that uses three stacked structural layer vectors moving at distinct speeds to simulate physical camera parallax depth effects.

### How is it used?
Mount the root `.cloud-viewport-canvas` container straight into your target page framework. The structural panels (`.cloud-layer-far`, `.cloud-layer-mid`, `.cloud-layer-near`) manage their translation sweeps independently.

### Why is it useful?
It provides games, splash landing configurations, and hero profiles with an immersive depth canvas entirely within the browser's hardware-composited layer tracks, saving system resources by omitting JavaScript window tracking.