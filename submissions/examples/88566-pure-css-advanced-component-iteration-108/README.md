# Pure CSS Cyberpunk Gaming Hub & Quest Dashboard (Iteration 108)

An interactive, pure CSS cyberpunk gaming dashboard component featuring quest tracking, skill tree nodes, inventory inspection, and system overdrive drawer overlays.

> Part of GSSoC 2026 contributions. Fixes/Resolves Issue [#88566](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/88566).

## Features
- **100% Pure CSS State Machine**: Navigation tabs (Quests, Skill Tree, Inventory) and System Overdrive HUD modal drawer powered entirely with CSS `:checked` radio and checkbox state logic.
- **Cyberpunk HUD Aesthetics**: Futuristic typography (`Orbitron` & `Rajdhani`), neon cyan/magenta glow effects, and animated XP progress bar fills (`@keyframes xpFill`).
- **Interactive Inventory Inspection**: CSS hover popups with item rarity badges (Legendary, Epic, Rare).
- **Responsive & Accessible Layout**: Supports desktop and mobile device views with keyboard focus indicators (`:focus-visible`).

## Usage

```html
<div class="cyber-card">
  <!-- State Controllers -->
  <input type="radio" name="hub-tab" id="tab-quests" class="state-radio" checked>
  <input type="radio" name="hub-tab" id="tab-skills" class="state-radio">
  <input type="radio" name="hub-tab" id="tab-inventory" class="state-radio">

  <!-- Navigation -->
  <nav class="hub-nav">
    <label for="tab-quests">Quests</label>
    <label for="tab-skills">Skill Tree</label>
  </nav>

  <!-- Body Content -->
  <div class="hub-body">
    <section class="section-content content-quests">...</section>
    <section class="section-content content-skills">...</section>
  </div>
</div>
```

## Structure
```
submissions/examples/88566-pure-css-advanced-component-iteration-108/
├── demo.html
├── style.css
└── README.md
```

## Tech Stack
- HTML5
- CSS3 (Keyframe Animations, Custom Properties, Flexbox & Grid, CSS State Selectors)
