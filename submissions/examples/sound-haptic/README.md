# Tactile Sound & Haptic Hook

**What does this do?**

A tiny (< 1 KB), zero‑dependency JavaScript module that adds optional click/pop sound effects and vibration (haptic) feedback using the Web Audio API and the Navigator Vibration API.

**How is it used?**

```html
<script src="sound.js"></script>
<script>
  // Trigger a crisp click sound
  EaseMotionSound.click();

  // Trigger a low‑frequency pop sound
  EaseMotionSound.pop();

  // Trigger a vibration pattern (e.g., 200 ms)
  EaseMotionSound.haptic(200);
</script>
```

**Why is it useful?**

Adding subtle audio and haptic cues makes UI interactions feel more responsive and tactile, turning EaseMotion from a purely visual CSS framework into a multi‑sensory UI library. The module is intentionally lightweight, has no external dependencies, and works in any modern browser.
