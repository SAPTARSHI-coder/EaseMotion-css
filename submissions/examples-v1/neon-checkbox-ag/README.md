# 🎨 Neon Checkbox Component Variant (Tactile Neumorphic Style)

## 📋 What does this do?
A pure-CSS, highly accessible Neon Checkbox component inspired by modern Neumorphism interfaces that combines soft physical depth transitions with a vibrant, glowing neon checkmark reveal on activation.

## ⚡ How is it used?
Embed the semantic label container structure directly into your layouts:

```html
<label class="ease-neon-checkbox">
  <input type="checkbox" class="ease-neon-checkbox-input">
  <span class="ease-neon-checkbox-box">
    <svg class="ease-neon-checkbox-checkmark" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </span>
  <span class="ease-neon-checkbox-text">Interactable Option</span>
</label>
```

## 💡 Why is it useful?
It fits EaseMotion's philosophy by being completely modular, zero-dependency, and styling state changes entirely without JavaScript. It uses EaseMotion design tokens (variables like `--ease-color-primary` and `--ease-ease`) to remain unified with the core design system while providing rich aesthetic micro-interactions (drawn-in checkmark transitions and soft activation pulses) that feel high-quality and production-grade.

## 🛠️ Folder & Structural Architecture
```text
submissions/examples/neon-checkbox-ag/
├── demo.html     # Component preview sandbox
├── style.css     # CSS rules, shadows, animations, and accessibility rules
└── README.md     # Integration guide
```

## 🔍 Features & Interaction Physics
- **Soft Neumorphic Shadows**: Utilizes dual-layered light/dark drop-shadow coordinates (`4px 4px 8px var(--neon-shadow-dark), -4px -4px 8px var(--neon-shadow-light)`) that transition into soft inner pockets on hover and checked states.
- **Draw-in Checkmark Animation**: Animates the checkmark outline drawing-in natively via CSS `stroke-dashoffset` transitions.
- **Subtle Glow Activation Pulse**: Triggers a single soft neon breathing pulse when checked to confirm the selected state.
- **Complete A11y Support**: Retains the native `<input type="checkbox">` elements in the tab flow for screen-reader and keyboard visibility, applying custom `:focus-visible` outlines. Includes strict `prefers-reduced-motion` override sheets.

***
*Submitted under the GSSoC '26 initiative.*
