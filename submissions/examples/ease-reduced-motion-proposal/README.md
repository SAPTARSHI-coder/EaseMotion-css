# Reduced Motion Support Proposal (`ease-reduced-motion-proposal`)

A proposal for `core/animations.css` adding a global CSS media query override to instantly adapt all EaseMotion classes to respect user OS accessibility preferences.

## 🚀 Features

- **Global Catch-All**: Uses the `[class*="em-"]` attribute selector to automatically target all current and future EaseMotion utility classes.
- **Event Listener Safe**: Instead of completely removing the animation (`animation: none`), it sets the duration to `0.01ms`. This ensures that JavaScript `animationend` and `transitionend` events still fire properly, preventing UI lockups.
- **Instant Implementation**: Can be dropped directly at the bottom of the main core file to instantly upgrade the entire framework's accessibility rating.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. 

To see the effect, you must toggle your operating system's reduced motion setting.
- **macOS**: System Settings > Accessibility > Display > Reduce motion
- **Windows**: Settings > Accessibility > Visual Effects > Animation effects

Once merged into `core/animations.css`, it will automatically apply to all `.em-` prefixed classes without any developer intervention:

```css
@media (prefers-reduced-motion: reduce) {
  [class*="em-"] {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

*Note: This is submitted via the `submissions/examples/` directory to adhere to the strict CI/CD guidelines preventing external modification of `core/` files. The maintainer can easily merge these rules into `core/animations.css`.*

## 🔗 Related Issue
Resolves Issue #16933
