# Component: NPS / CSAT Feedback Widget with Motion

This submission implements the NPS/CSAT Feedback Widget for GSSoC issue **#44490**.

## Description

A 0-10 score selector with staggered hover effects, submit success animation, and thank-you state using EaseMotion CSS animation classes.

## Features

- **0-10 NPS Score Selector**: Interactive buttons for user feedback
- **Staggered Animations**: Score buttons animate in with staggered delay
- **Hover Effects**: Buttons scale up on hover with color transitions
- **Three NPS Categories**:
  - Detractor (0-6): Red styling
  - Passive (7-8): Yellow styling
  - Promoter (9-10): Green styling
- **Success Animation**: Animated checkmark with pop effect
- **Thank You State**: Entrance animation after submission
- **Responsive Design**: Works on all screen sizes

## Usage

```html
<div class="feedback-widget">
  <div class="nps-form">
    <h2>How likely are you to recommend us?</h2>
    <div class="score-buttons">
      <button class="score-btn" onclick="selectScore(0)">0</button>
      <!-- ... 1-9 buttons ... -->
      <button class="score-btn" onclick="selectScore(10)">10</button>
    </div>
    <button class="submit-btn" onclick="submitFeedback()">Submit</button>
  </div>
  <div class="success-state" style="display: none;">
    <div class="success-icon">✓</div>
    <h2>Thank You!</h2>
  </div>
</div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--nps-detractor` | `#ef4444` | Color for detractor scores |
| `--nps-passive` | `#eab308` | Color for passive scores |
| `--nps-promoter` | `#22c55e` | Color for promoter scores |

## Animations

- **Stagger In**: Score buttons appear with staggered fade+slide animation
- **Hover Scale**: Buttons scale up on hover
- **Success Pop**: Checkmark animates with pop effect
- **Fade Slide Up**: Success message and category fade in

## NPS Categories

| Score | Category | Color |
|-------|----------|-------|
| 0-6 | Detractor | Red |
| 7-8 | Passive | Yellow |
| 9-10 | Promoter | Green |

## Acceptance Criteria

- ✅ 0-10 NPS score selector UI
- ✅ Staggered hover animations on score buttons
- ✅ Active/selected score state styling
- ✅ Submit success animation
- ✅ Thank-you state with entrance animation
- ✅ Three NPS category variants
- ✅ Copy-ready HTML snippet
- ✅ Responsive design
- ✅ `prefers-reduced-motion` support
