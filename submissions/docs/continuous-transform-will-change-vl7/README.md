# Continuous Transform Animation `will-change` Optimization

## 🐛 Problem Statement

Continuous transform animations (such as `.ease-spin`, `.ease-bounce`, `.ease-pulse`, `.ease-ping`, and `.ease-wave`) run indefinitely. Without explicit layer promotion hints, browsers on mobile devices, low-power hardware, and integrated GPUs fail to promote these animated elements to dedicated GPU compositor layers before animation execution starts.

As a result:
- Main-thread layout and repaint cycles are triggered repeatedly every frame.
- Frame rates drop below 60fps on complex or media-heavy pages.
- Battery consumption increases on mobile devices.

---

## ⚡ Resolution & Hardware Acceleration

By adding the CSS `will-change: transform;` (and `will-change: transform, opacity;` for compound animations) property to continuous animation utility classes, browser layout engines (Blink, Gecko, WebKit) are instructed to allocate dedicated GPU compositor surfaces in advance.

```css
/* Continuous Transform Utility Classes with GPU Layer Promotion Hints */

.ease-spin,
.ease-rotate {
  animation: ease-kf-spin 1.2s linear infinite;
  will-change: transform;
}

.ease-bounce {
  animation: ease-kf-bounce 1s infinite;
  will-change: transform;
}

.ease-pulse {
  animation: ease-kf-pulse 2s ease infinite;
  will-change: transform, opacity;
}

.ease-ping {
  animation: ease-kf-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  will-change: transform, opacity;
}

.ease-wave {
  display: inline-block;
  animation: ease-kf-wave 1.5s ease infinite;
  will-change: transform;
}
```

---

## 🔬 How to Verify GPU Layer Promotion

1. Open `demo.html` in Chrome, Edge, or Safari.
2. Open **Chrome DevTools** (`F12` or `Ctrl+Shift+I`).
3. Open the Command Menu (`Ctrl+Shift+P` / `Cmd+Shift+P`), type **Rendering**, and select **Show Rendering**.
4. Check **Layer Borders** (or open the **Layers** panel under *More tools > Layers*).
5. Observe that elements with `will-change: transform` display teal/orange compositor layer borders and run smoothly off the main thread at 60 FPS.
