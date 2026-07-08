# 🌓 Dark Minimalist Shimmer Modal (Pure CSS)

An ultra-lightweight, high-performance interactive modal component engineered explicitly for dark-themed, minimalist developer dashboards and application interfaces. This component delivers a modern entry transition synchronized with an elegant shifting shimmer-pulse effect—**built with zero JavaScript overhead.**

---

## 🎯 Key Design Features

* **Pure CSS State Engine:** Utilizes the structural HTML checkbox-hack (`:checked ~ selector`) to handle open, closed, and interactive states cleanly without relying on script runtimes.
* **Exposed Parameter Tokens:** Crafted completely with native CSS Custom Properties, giving developers easy granular control over scale, timings, and custom easing curves.
* **A11y Compliant (Accessibility):** Integrates native focus indicators (`:focus-visible`), structural semantic roles (`role="dialog"`, `aria-modal="true"`), and intuitive keyboard interaction states via explicit tab-indexing.
* **Fluidly Responsive:** Adapts seamlessly across microviewports, mobile phones, tablets, and wide desktop screens.

---

## ⚙️ Custom Parameter Configuration

You can easily adjust the animation mechanics or look-and-feel of the modal component by modifying the following CSS custom variables located at the `:root` layer:

| Property Name | Default Value | Technical Description |
| :--- | :--- | :--- |
| `--modal-timing` | `0.55s` | Total duration of the scale-up and backdrop opacity fade animations. |
| `--modal-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Premium, ultra-smooth kinetic curve (`easeOutExpo`) for high-end feel. |
| `--modal-scale-factor` | `0.94` | The entry-point scale matrix of the modal card box before being activated. |
| `--shimmer-glow` | `rgba(255, 255, 255, 0.03)` | The intensity and hue profile of the passing linear gradient highlights. |
| `--modal-bg` | `#111113` | Primary solid hex color background profile for the modal interface. |
| `--modal-border` | `#222226` | Static border color token to match minimalist aesthetic schemas. |

---

## 🕹️ Deep-Dive Mechanics: Shimmer Pulse

The interactive loop runs two distinct CSS keyframe animations in unison on the modal container when activated:

1. **`shimmerRun`**: Smoothly offsets a multi-stop transparent gradient background across the matrix container width indefinitely.
2. **`ambientPulse`**: Modulates a soft box-shadow aura and subtly lifts the component border opacity on an infinite sinusoidal loop to simulate depth.

```css
@keyframes shimmerRun {
  0% { background-position: 150% 0; }
  100% { background-position: -150% 0; }
}

@keyframes ambientPulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.01), 0 20px 40px rgba(0, 0, 0, 0.6);
    border-color: var(--modal-border);
  }
  50% {
    box-shadow: 0 0 30px 2px rgba(255, 255, 255, 0.03), 0 20px 40px rgba(0, 0, 0, 0.7);
    border-color: rgba(255, 255, 255, 0.09);
  }
}