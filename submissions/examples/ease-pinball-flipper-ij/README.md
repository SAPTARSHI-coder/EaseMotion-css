# Ease Pinball Flipper Component

A highly realistic, semantically sound, interactive dual pinball-flipper component built natively using HTML5, CSS3 transitions, Custom Easing curves, and lightweight JavaScript hooks.

## 🚀 Features

- **Realistic Snapping Animation**: Uses custom dual-phase `cubic-bezier` timing variables (`--ease-flip-up` and `--ease-flip-back`) to simulate standard electromagnetic coils firing vs spring rebounds.
- **Semantic Structure**: Built completely out of structured structural blocks (`<main>`, `<header>`, `<footer>`, `<button>`, `<label>`).
- **Zero Heavy Overheads**: Pure modern CSS handles layout structural transforms and named dynamic keyframes (`leftImpactPulse`, `rightImpactPulse`).
- **Multi-Device Support**: Responsive layout mapping with fully functional hardware keyboard binding triggers (`A`/`D` keys or Left/Right Arrow keys) alongside touch/click controls.

## 📂 File Layout Structure

```text
ease-pinball-flipper-ij/
├── demo.html  # Application layout structure & event hooks
├── style.css  # Component custom variables, typography, layouts & custom ease matrices 
└── README.md  # Project documentation
```

## 🛠️ Local Usage Instructions

1. Direct copy or extract the directory contents.
2. Open up `demo.html` globally directly in your web browser.
3. Tap on the bottom dashboard buttons, or use your physical hardware keys (**A** for Left Flipper, **D** for Right Flipper) to interact with the mechanism.
