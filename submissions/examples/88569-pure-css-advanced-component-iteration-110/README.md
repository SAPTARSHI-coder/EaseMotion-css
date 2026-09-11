# Pure CSS FinTech Wealth Portfolio Card (Iteration 110)

An interactive, pure CSS wealth portfolio management component featuring asset class switching, currency toggling, growth chart visualizers, and yield breakdown drawers.

> Part of GSSoC 2026 contributions. Fixes/Resolves Issue [#88569](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/88569).

## Features
- **100% Pure CSS State Machine**: Asset selection tabs (Crypto, Equities, Real Estate), USD/EUR currency switcher, and yield breakdown drawer powered with CSS `:checked` radio and checkbox state logic.
- **Animated Growth Visualizer**: Keyframe bar animations (`@keyframes barGrow`) and live performance badge indicators.
- **Glassmorphic FinTech Aesthetic**: Dark-mode emerald design system with custom properties, glassmorphism blur, and styled asset badges.
- **Responsive Layout**: Full screen adaptability across mobile and desktop breakpoints.

## Usage

```html
<div class="wealth-card">
  <!-- Asset State Controller -->
  <input type="radio" name="asset-tab" id="asset-crypto" class="state-radio" checked>
  <input type="checkbox" id="currency-toggle" class="state-checkbox">

  <!-- Navigation -->
  <nav class="asset-nav">
    <label for="asset-crypto">Crypto Assets</label>
    <label for="asset-stocks">Global Equities</label>
  </nav>

  <!-- Portfolio Display -->
  <div class="portfolio-body">...</div>
</div>
```

## Structure
```
submissions/examples/88569-pure-css-advanced-component-iteration-110/
├── demo.html
├── style.css
└── README.md
```

## Tech Stack
- HTML5
- CSS3 (Keyframe Animations, Custom Properties, Flexbox & Grid, CSS State Selectors)
