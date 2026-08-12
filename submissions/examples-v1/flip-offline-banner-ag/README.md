# Flip Offline Banner

### 1. What does this do?

The Flip Offline Banner provides a premium, responsive, and highly accessible network status notification banner featuring a pure CSS-driven vertical 3D split-flap flip transition. It automatically rotates between connectivity states (Offline / Reconnecting) every 3 seconds using subtle neon HSL borders, pulsing status dots, and a custom network search spinner.

### 2. How is it used?

Structure your HTML as follows and load the accompanying stylesheet:

```html
<div class="ease-fob-ag" role="status" aria-live="polite">
  <div class="ease-fob-inner-ag">
    <!-- Front Face: Offline -->
    <div class="ease-fob-face-ag ease-fob-front-ag">
      <div class="ease-fob-content-ag">
        <div class="ease-fob-status-ag">
          <span class="ease-fob-dot-ag ease-fob-dot-offline-ag" aria-hidden="true"></span>
          <!-- Signal Icon SVG -->
          <div class="ease-fob-text-ag">
            <strong class="ease-fob-title-ag">Offline</strong>
            <span class="ease-fob-message-ag">Connection lost. Some features are unavailable.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Back Face: Reconnecting -->
    <div class="ease-fob-face-ag ease-fob-back-ag">
      <div class="ease-fob-content-ag">
        <div class="ease-fob-status-ag">
          <span class="ease-fob-dot-ag ease-fob-dot-reconnecting-ag" aria-hidden="true"></span>
          <!-- Spinner Element -->
          <span class="ease-fob-spinner-ag" aria-hidden="true"></span>
          <div class="ease-fob-text-ag">
            <strong class="ease-fob-title-ag">Reconnecting</strong>
            <span class="ease-fob-message-ag">Attempting to restore network connection...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

No JavaScript is required! The CSS engine automatically handles the transition timeline.

### 3. Why is it useful?

It perfectly aligns with EaseMotion CSS's philosophy of high-performance, animation-first, utility-based stylesheets. By leveraging CSS keyframe segment timing with hardware-accelerated transforms (`perspective`, `rotateX`, `backface-visibility`), it achieves fluid, bounce-eased transitions without any external JavaScript runtime. Additionally, it gracefully degrades to flat opacity cross-fades for users who enable `prefers-reduced-motion`.

---

## Technical Overview

### Features

- **CSS-Only Auto-Flip Loop:** A loop that alternates between state faces every 3 seconds, using a local segment-level bounce curves structure to preserve the elastic bounce feeling during transitions.
- **Subtle Neon Styling:** Tasteful borders and box-shadow glows using saturated, high-contrast HSL accents for an elite dashboard look.
- **Blinking Neon Indicators:** Pulsing LED-style dots showing live statuses (Red/Amber for Offline, Cyan for Reconnecting).
- **Responsive Flex Layout:** Dynamically adjusts spacing and caps long labels to prevent text overflow or rendering bugs.
- **Accessibility & Performance:** Integrates proper `role="status"` and `aria-live="polite"` tags. Avoids CPU-heavy layout-shift properties by using GPU-friendly transforms.
- **Light/Dark Contrast Modes:** Automatically adapts to light/dark visual modes using standard variables and CSS selectors.

### Folder Structure

```
submissions/examples/flip-offline-banner-ag/
├── demo.html    # Standalone demo containing the component markup and body grid background
├── style.css    # Scoped tokens, 3D transform layers, theme media queries, and pulse animations
└── README.md    # Documentation and customization details
```

### Customization Guidance

To modify the styles, override the scoped variables in `style.css`:

- `--fob-neon-offline`: Accent color for connection failures.
- `--fob-neon-reconnecting`: Accent color for reconnection attempts.
- `--fob-bg`: Background translucent overlay color.
- `--fob-font`: Font family configuration.
