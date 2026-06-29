# Confetti Burst Animation (`ease-confetti-burst`)

### 1. What does this do?
This is an advanced success-state animation that triggers a burst of colorful confetti particles from the center of an element. The particles explode outward, rotate, and fade away.

### 2. How is it used?
Wrap your trigger element (like a button) in an `.ease-confetti-container` and include several `.confetti-particle` spans. Toggle the `.burst-active` class on the container to trigger the effect.

```html
<div class="ease-confetti-container" id="my-confetti">
  <span class="confetti-particle"></span>
  <span class="confetti-particle"></span>
  <!-- ... add more spans ... -->
  
  <button onclick="document.getElementById('my-confetti').classList.add('burst-active')">
    Success!
  </button>
</div>
```

### 3. Why is it useful?
It provides high-impact visual feedback for major user accomplishments, such as:
- Completing a form or purchase.
- Reaching a milestone or achievement.
- Unlocking a new feature.
- Any "success" state that warrants a celebration.

---
**Implementation Details:**
- Follows specification from Issue #11909.
- Uses hardware-accelerated CSS `transform` and `opacity` for smooth performance.
- Supports 8+ colors out of the box.
- Composable and easy to re-trigger via class toggling.
