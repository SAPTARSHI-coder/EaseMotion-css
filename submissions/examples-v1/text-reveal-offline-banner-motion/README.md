# Text Reveal Offline Banner

An advanced, CSS-only connection monitoring indicator featuring letter-by-letter staggered entrance animations, custom layout placement presets, and interactive connection simulation.

## 1. What does this do?
This component renders an interactive offline notification banner in sticky header, floating toast, or modal takeover layouts, displaying staggered text-reveal animations (such as clip-path transitions, cyber glitches, or holographic sweeps) to announce connection status modifications.

## 2. How is it used?

### Basic Sticky Header Alert
To add a sticky header banner, place this container at the top of your layout:
```html
<div class="offline-banner banner-header" role="alert" aria-live="assertive">
  <div class="banner-content">
    <span class="warning-icon">⚡</span>
    <div class="reveal-text-wrapper">
      <!-- Staggered Character Elements -->
      <span class="text-reveal-animation header-text">
        <span class="word">
          <span class="char" style="--i:0">O</span>
          <span class="char" style="--i:1">f</span>
          <span class="char" style="--i:2">f</span>
          <span class="char" style="--i:3">l</span>
          <span class="char" style="--i:4">i</span>
          <span class="char" style="--i:5">n</span>
          <span class="char" style="--i:6">e</span>
        </span>
      </span>
    </div>
  </div>
</div>
```

### Floating Card Alert (Bottom Right)
To add a floating card warning:
```html
<div class="offline-banner banner-toast" role="alert" aria-live="polite">
  <div class="toast-card-inner">
    <div class="toast-header">
      <span class="status-indicator-offline"></span>
      <span class="toast-tag">CONNECTION LOST</span>
    </div>
    <div class="toast-body">
      <h3>Connection Interrupted</h3>
      <p>Checkout features are cached. You can continue shopping safely.</p>
    </div>
  </div>
</div>
```

## 3. Why is it useful?
Handling offline states gracefully is a primary requirement for modern single-page applications and e-commerce platforms. 

This component fits EaseMotion's philosophy by:
- **Pure CSS Layout State System:** Employs sibling checkbox/radio binding inputs to simulate offline transitions, proving that complex, responsive layout overlays can operate without JavaScript overhead.
- **Micro-animation Staggering:** Uses CSS variables (`--i`) to establish letter-by-letter staggered delays dynamically in standard stylesheet keyframes.
- **Accessible & Accessible Designs:** Integrates `aria-live` alert regions to instantly ping assistive readers on disconnect events. It also provides automatic layout simplification under `prefers-reduced-motion: reduce` query environments.

## 4. Class Presets and Animations API

### Reveal Effects Presets
Apply these presets to the text elements inside `.reveal-text-wrapper` to trigger specific reveal animations:

| Animation Class preset | Active Reveal Effect | Key Visual Style |
|---|---|---|
| `#anim-clip:checked` | Clip-Path Slide Up | Letters slide up from an invisible boundaries. |
| `#anim-glitch:checked` | Cyberpunk Glitch Block | Distorted character scales, translations, and color inversions. |
| `#anim-sweep:checked` | Holographic Sweep | Blurry letters sharpen and glow dynamically. |
| `#anim-3d:checked` | 3D Flip-In | Character cards rotate in 3D perspective space. |

### Layout Placement Presets
Combine these structural classes on the main `.offline-banner` container to dictate positioning:

- `.banner-header`: Sticky top bar alignment.
- `.banner-toast`: Floating bottom-right action card.
- `.banner-modal`: Full-screen takeover overlay modal.

---
*Created as a submission for GSSOC-26  under submissions/examples/text-reveal-offline-banner-motion/*
