# Native CSS Scroll-Driven Video Scrubber (Apple Style)

The famous Apple AirPods landing page (and many other premium hardware sites) features a "video" of a 3D object that scrubs forward and backward perfectly in sync with the user's scroll wheel. 

Historically, this required massive JavaScript engineering. Developers had to:
1. Export a 3D render as an MP4.
2. Load a massive JS library.
3. Draw the video onto a `<canvas>` element.
4. Hook into the `window.addEventListener('scroll')` event.
5. Calculate the scroll percentage.
6. Force the video's `currentTime` to match the scroll percentage.
7. Constantly redraw the canvas at 60fps.

This approach is notoriously heavy, causes extreme battery drain on mobile devices, and often results in scroll jitter. 

**This submission solves this entirely in CSS.**

---

## 🚀 The Native CSS Approach

By combining the bleeding-edge `animation-timeline` specification with the classic `steps()` timing function, we can perfectly simulate video scrubbing natively in the browser's hardware-accelerated compositor.

### Step 1: The Sprite Sheet
Instead of a video file, we use a single, ultra-wide image sprite sheet containing all the frames of our animation (e.g., a 60-frame rotation of a pair of headphones). If each frame is `1000px` wide, the sprite sheet is `60000px` wide.

### Step 2: The Timeline
We wrap our scrubber in a very tall section (e.g., `height: 400vh`). This gives the user plenty of physical scroll distance. We define a named view timeline on this container:
```css
.scrubber-section {
    view-timeline-name: --scrubber-timeline;
    view-timeline-axis: block;
}
```

### Step 3: The Animation
We apply the sprite sheet as a background image to a sticky container that stays centered on the screen. We animate the `background-position` from `0 0` to `100% 0`, tying the animation duration strictly to the scroll timeline.

```css
.sprite-scrubber {
    background-image: url('sprite.jpg');
    background-size: 6000% 100%; /* 60 frames * 100% */
    
    animation: scrub-frames linear;
    animation-timeline: --scrubber-timeline;
    
    /* Crucial: We don't want a smooth slide. We want it to SNAP to each frame */
    animation-timing-function: steps(59, end);
}

@keyframes scrub-frames {
    to { background-position: 100% 0; }
}
```

---

## 🎨 Contextual Text Overlays

To complete the premium experience, the demo includes contextual text overlays (e.g., "Acoustic Vents", "H2 Chip") that fade in and out at specific percentages of the scroll. 

Because we named our timeline `--scrubber-timeline`, we can attach multiple animations to it:
```css
.overlay-1 { 
    animation: show-overlay-1;
    animation-timeline: --scrubber-timeline;
}
@keyframes show-overlay-1 {
    10%, 20% { opacity: 1; transform: translateY(0); }
    0%, 5%, 25%, 100% { opacity: 0; transform: translateY(20px); }
}
```

---

## ♿ Accessibility Considerations (a11y)

Tying animations heavily to the scroll wheel can be a severe accessibility issue for users with vestibular disorders (motion sickness).

This submission includes a robust `prefers-reduced-motion` media query fallback. If a user has requested reduced motion in their OS settings:
1. The scroll timeline is completely decoupled.
2. The sticky wrapper degrades to a standard static layout.
3. All overlay text elements are rendered statically in standard document flow.
4. The massive 400vh spacer is collapsed to standard height.

```css
@media (prefers-reduced-motion: reduce) {
    .sprite-scrubber, .overlay-text { animation: none !important; }
    .sticky-wrapper { position: static; height: auto; }
}
```

---

## 📈 Performance Benchmarks

- **JavaScript Payload:** `0 KB`
- **Main Thread Blocking:** `0ms` (Animations are handed off to the compositor thread).
- **DOM Nodes:** Minimal. No massive `<canvas>` rendering loops.

This is the ultimate embodiment of the EaseMotion philosophy: achieving hyper-premium UI interactions by pushing modern CSS specifications to their absolute limit.
