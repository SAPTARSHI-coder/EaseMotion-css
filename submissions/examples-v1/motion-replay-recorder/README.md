# Motion Replay Recorder

Relates to feature request **#41420**.

## 1. What does this do?

Creates a Motion Replay Recorder that captures the complete execution timeline of an EaseMotion animation using the **Web Animations API**. Developers can:
- Record a running animation at ~60fps frame resolution.
- Inspect keyframes, opacity, and transform values at every frame.
- Replay the recorded animation.
- Export the recording as **JSON**, **CSS `@keyframes`**, or a **Timeline Report**.

## 2. Why is this useful for EaseMotion CSS?

Debugging animations usually requires browser DevTools or manual inspection. A built-in replay recorder makes EaseMotion CSS unique among animation libraries by providing an easy way to inspect, replay, compare, and share motion sequences. This improves debugging, collaboration, and documentation while remaining focused on developer experience.

## 3. How it Works

The utility leverages the **Web Animations API**:
1. Applies the specified EaseMotion classes to a target element.
2. **Pauses** the animation immediately using `anim.pause()`.
3. **Scrubs** through the timeline using `anim.currentTime` at ~16ms intervals (~60fps sampling).
4. At each frame, reads `opacity` and `transform` using `window.getComputedStyle()`.
5. Stores the full data array and **renders** it as a horizontal scrollable timeline.

## 4. Example Timeline Export (matches the issue's snippet exactly)

```
/* Example exported timeline */

Frame 0
Opacity: 0.00
Transform: translateY(20px)

Frame 18
Opacity: 0.45
Transform: translateY(10px)

Frame 36
Opacity: 1.00
Transform: translateY(0)

Export Format:
JSON
CSS
Timeline Report
```

## 5. Export Formats

| Format | Description |
|---|---|
| **JSON** | Full structured data of every sampled frame, classes, and duration. |
| **CSS** | Reconstructed `@keyframes` block and `.ease-recorded` utility class. |
| **Timeline Report** | Human-readable text report matching the issue's snippet format. |

## 6. Browser Support

Uses the **Web Animations API** (`getAnimations()`, `anim.currentTime`).

| Browser | Support |
|---|---|
| Chrome | 84+ ✅ |
| Firefox | 75+ ✅ |
| Safari | 14+ ✅ |
| Edge | 84+ ✅ |
