# Holographic 3D Payment Card (`ease-holographic-credit-card`)

Category: **Fintech & E-Commerce Component**  
Use Case: Digital banking apps, crypto wallet cards, luxury fintech checkout flows.

## 1. What does this do?
A high-end 3D payment card component that tracks cursor movement in real-time to compute 3D perspective tilt (`rotateX`, `rotateY`, `perspective`), overlay dynamic holographic spectral rainbow refraction gradients (`conic-gradient` + `mix-blend-mode: color-dodge`), perform interactive 3D card flips to reveal card details and security CVV, and display glowing metallic chip and contactless payment pulse indicators.

## 2. How is it used?
Include `style.css` and wrap the HTML card structure:

```html
<div class="card-scene" id="card-scene">
  <div class="card-wrapper" id="card-wrapper" tabindex="0" role="button" aria-label="3D Payment Card">
    <!-- FRONT FACE -->
    <div class="card-face card-front">
      <div class="holographic-foil"></div>
      <div class="holographic-glare"></div>
      <!-- EMV Chip, Card Details & Contactless Indicator -->
      <div class="emv-chip"></div>
      <div class="card-number">4532 8901 2345 6789</div>
    </div>

    <!-- BACK FACE -->
    <div class="card-face card-back">
      <div class="back-magstripe"></div>
      <div class="back-cvv-box">883</div>
    </div>
  </div>
</div>
```

```javascript
// Vanilla JS Proximity Easing Loop (LERP)
cardScene.addEventListener('mousemove', (e) => {
  const rect = cardWrapper.getBoundingClientRect();
  const relX = (e.clientX - rect.left) / rect.width;
  const relY = (e.clientY - rect.top) / rect.height;
  
  cardWrapper.style.setProperty('--rx', `${(relY - 0.5) * -34}deg`);
  cardWrapper.style.setProperty('--ry', `${(relX - 0.5) * 40}deg`);
  cardWrapper.style.setProperty('--mx', `${relX * 100}%`);
  cardWrapper.style.setProperty('--my', `${relY * 100}%`);
});
```

## 3. Why is it useful?
Most web payment cards feel flat and lifeless. This component brings premium banking card feel to web applications with realistic optical physics (spectral rainbow refraction shifting with angle of incidence), smooth LERP-based 3D tilt tracking, metallic gold EMV chip keyframe pulses, and interactive card controls (themes, flip, freeze state, live number formatting).

## 4. Features & Themes
- **3D Proximity Tilt**: Eased rotation around X and Y axes driven by cursor distance from center.
- **Dynamic Spectral Refraction**: Refraction specular highlights and conic rainbow sheen with blend modes.
- **Foil Preset Themes**: Spectral Rainbow, Cyber Neon, Royal Gold, Obsidian Prism.
- **3D Card Flip**: Seamless 180° rotation on Y axis preserving 3D depth and tilt tracking on both faces.
- **Interactive Controls**: Real-time live card editing, clipboard copy, freeze card state toggle.

## 5. Accessibility

| Feature | Implementation |
|---------|---------------|
| Screen Reader | `role="button"`, `aria-label`, `aria-expanded` toggle status |
| Keyboard Nav | `Tab` focusable with visible `:focus-visible` ring; press `Enter` or `Space` to flip card |
| Touch Support | Proximity tracking on mobile touch devices (`touchstart`, `touchmove`, `touchend`) |
| Reduced Motion | `@media (prefers-reduced-motion: reduce)` disables background pulses and fixes tilt |

## 6. Files
- `demo.html` — Self-contained interactive showcase with controls
- `style.css` — Modern card styles, 3D transforms, holographic gradients
- `README.md` — Documentation & usage guide
