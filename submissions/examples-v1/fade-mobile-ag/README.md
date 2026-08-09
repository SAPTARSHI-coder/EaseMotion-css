# Bug Reproduction: Fade Animation Mobile Skipping

This folder contains a minimal reproduction demo for Issue #48687, where the `ease-fade-in` animation fails to trigger consistently on mobile browsers.

## 📱 The Issue
Users have reported that on mobile devices, the CSS fade-in animation occasionally skips completely. Instead of smoothly transitioning from `opacity: 0` to `opacity: 1`, the element renders instantly at full opacity. This issue appears intermittently and primarily affects mobile browsers.

## 🔍 Reproduction Steps
1. Open `demo.html` in a mobile browser (or a simulated mobile viewport in desktop dev tools).
2. Tap the "Trigger Fade In" button.
3. Observe the blue gradient box.
4. Tap "Reset" and repeat step 2 multiple times.

### Expected Behavior
The box should fade in smoothly over 1.5 seconds.

### Actual Behavior
On mobile browsers, the animation occasionally drops frames or bypasses the transition entirely, rendering the box instantly.

## 🧪 Testing Environment
This issue has been reproduced and tested on the following configurations:
*   **Safari (iOS 16+)**: Frequent skipping observed, especially on initial load or right after a fast scroll.
*   **Chrome (Android 11+)**: Intermittent skipping.
*   **Chrome/Firefox/Edge (Desktop)**: Animations run smoothly and consistently.

## 💡 Observations & Potential Causes
While the project is under a framework freeze, this demo helps isolate the bug without altering `core/` or `components/`. Potential causes to investigate once the freeze is lifted include:

1.  **Hardware Acceleration (GPU rendering):** Changing only `opacity` might not reliably trigger hardware acceleration on some mobile browsers. Forcing hardware acceleration by adding `will-change: opacity;` or `transform: translateZ(0);` to the `.ease-fade-in` class often resolves this rendering bug by pushing the element to a separate compositor layer.
2.  **Touch Event Delays:** Rapid successive interactions or the 300ms mobile tap delay might interfere with JS reflow triggers (`void element.offsetWidth`).
3.  **Animation Fill Mode:** Sometimes, relying purely on `forwards` without explicitly declaring the starting styles on the base element can cause rendering hiccups on Safari.

This reproduction provides a self-contained baseline for maintainers to patch the EaseMotion core stylesheets safely in future updates.
