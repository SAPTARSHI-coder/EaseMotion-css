# CSS Quest Reward Reveal

## 1. What does this do?
This component renders an interactive fantasy-themed treasure chest that opens with 3D rotation, bursting magical star particles and rising up a glowing gold honor badge when triggered.

## 2. How is it used?
Integrate the 3D chest layers and badge models, using sibling checkboxes to control animations:
```html
<input type="checkbox" id="chest-trigger" class="chest-trigger">

<div class="scene-cabinet" role="region" aria-label="Quest Reward Box">
  <div class="chest-area">
    <label for="chest-trigger" class="trigger-label">
      <div class="chest">
        <div class="chest-lid"></div>
        <div class="chest-body"></div>
      </div>
    </label>
    
    <!-- Reward Badge -->
    <div class="reward-badge">🏆</div>
  </div>
</div>
```

## 3. Why is it useful?
It provides gamification visual feedback patterns built entirely with CSS 3D transforms (`rotateX`) and particle animations, preventing front-end performance lag during UI transitions without loading JavaScript models.
