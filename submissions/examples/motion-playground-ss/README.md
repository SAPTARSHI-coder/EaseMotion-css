# Interactive Motion Playground — EaseMotion CSS Example

An interactive, real-time animation visualizer and code generator for **EaseMotion CSS**. 

This self-contained example allows developers, designers, and beginners to experiment with EaseMotion animation utilities, tweak animation timing properties, test trigger events, inspect generated HTML/CSS code, and verify accessibility compliance.

---

## 🚀 Features

- **Interactive Animation Selector**: Test entrance animations (`ease-fade-in`, `ease-slide-up`, `ease-zoom-in`, `ease-bounce-in`, `ease-flip`), looping animations (`ease-bounce`, `ease-pulse`, `ease-rotate`, `ease-shake`, `ease-wave`, `ease-shimmer-sweep`), and hover interactions (`ease-hover-grow`, `ease-hover-lift`, `ease-hover-glow`).
- **Real-Time Duration & Delay Control**: Fine-tune `animation-duration` (100ms – 3000ms) and `animation-delay` (0ms – 2000ms) using interactive range sliders and quick preset pills.
- **Custom Easing Functions**: Select standard CSS timing functions (`cubic-bezier`, `linear`, `bounce`, `elastic-back`).
- **Iteration Count Control**: Choose between fixed repetition counts (`1`, `2`, `3`, `5`) or continuous `infinite` loops.
- **Multiple Event Triggers**: Test animation execution on:
  - **On Load**: Plays automatically upon initial load or when clicking *Replay Animation*.
  - **On Hover**: Triggers dynamically when mouse enters the preview target element.
  - **On Click**: Triggers upon clicking the target element.
- **Element Presets**: Preview animations on multiple UI components including Cards, Buttons, Status Badges, Profile Avatars, and Notification Toasts.
- **Live Code Generator**: Generates clean HTML and customized CSS code snippets with single-click clipboard copying.
- **Accessibility & Reduced Motion**: Automatically detects OS-level `prefers-reduced-motion` settings and includes an in-app Reduced Motion Simulator toggle button.
- **Zero External Dependencies**: Built strictly with Vanilla HTML5, CSS3, and JavaScript using EaseMotion design tokens.

---

## 🛠️ How It Works

1. **Core Import**: Imports the complete EaseMotion framework entry point in `style.css`:
   ```css
   @import "../../../easemotion.css";
   ```
2. **Dynamic Property Binding**: Modifies CSS custom animation properties on the target DOM element in real-time:
   ```css
   .ease-fade-in {
     animation-duration: 600ms;
     animation-delay: 150ms;
     animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
     animation-iteration-count: infinite;
   }
   ```
3. **Keyframe Restart**: Triggers DOM reflow (`void targetEl.offsetWidth`) to replay keyframe animations instantly without reloading the browser.

---

## 📂 File Structure

```text
submissions/examples/motion-playground-ss/
├── demo.html    # Interactive playground UI & vanilla JavaScript application logic
├── style.css    # Playground layout styles, imports ../../../easemotion.css
└── README.md    # Documentation and usage guide
```

---

## ♿ Accessibility & `prefers-reduced-motion`

EaseMotion prioritizes user accessibility. The playground respects user preferences by checking:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

The embedded **Reduced Motion Simulator** allows testing how animations degrade safely when reduced motion is preferred by users.

---

## 💡 Running the Demo

Simply open `demo.html` in any web browser, or serve it using any static file server:

```bash
# Using Python builtin HTTP server
python -m http.server 8000

# Using Node npx serve
npx serve .
```
