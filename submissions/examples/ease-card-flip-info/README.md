# 3D Flip Card (`ease-card-flip-info`)

A hardware-accelerated 3D flipping card that reveals additional information on its back. Built for the EaseMotion-css framework.

## 🚀 Features

- **Pure CSS 3D Engine**: Utilizes `perspective`, `transform-style: preserve-3d`, and `backface-visibility: hidden` to create a flawless 3D flip illusion.
- **Dual Triggers**: The flip is bound to both a CSS `:hover` state and a hidden `:checked` input. This ensures the card flips smoothly when moused over on desktop, and flips persistently when tapped on mobile.
- **Bouncy Physics**: Employs a custom `cubic-bezier` transition to give the 180-degree rotation a physical, weighty feel that overshoots slightly before settling.

## 🛠️ Usage

Your card requires a specific 4-layer nesting structure. 
1. The `.ease-card-flip` container establishes the 3D perspective.
2. The hidden checkbox manages the click state.
3. The `.ease-flip-inner` wrapper acts as the rotating axle.
4. The `.ease-card-front` and `.ease-card-back` faces contain your content.

```html
<div class="ease-card-flip">
  <!-- Controller -->
  <input type="checkbox" id="flip-trigger" class="ease-flip-input" />
  
  <!-- Rotating Axle -->
  <label class="ease-flip-inner" for="flip-trigger">
    
    <!-- Face 1 -->
    <div class="ease-card-front">
      <h2>Front Content</h2>
    </div>

    <!-- Face 2 -->
    <div class="ease-card-back">
      <h2>Back Content</h2>
    </div>
    
  </label>
</div>
