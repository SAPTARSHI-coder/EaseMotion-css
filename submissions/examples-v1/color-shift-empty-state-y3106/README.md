# Color Shift Empty State

## 1. What does this do?

An energetic, health-and-fitness-inspired empty state card featuring a floating gradient backdrop aura that shifts colors dynamically, coupled with pulsing heart rate SVG illustrations and glowing action buttons.

## 2. How is it used?

Wrap the empty state graphic, labels, and action links inside the card component:

```html
<div class="empty-state-card">
  <div class="glow-backdrop"></div>
  <div class="illustration-container">
    <!-- SVG Icon -->
  </div>
  <h3 class="empty-title">No Activity Logged</h3>
  <p class="empty-text">Start your first workout session to see stats.</p>
  <button class="empty-action-btn">Log Activity</button>
</div>
```

## 3. Why is it useful?

It aligns perfectly with the EaseMotion CSS guidelines:

- **Human-readable**: Modular semantic layout tags like `empty-state-card` and `glow-backdrop` communicate functional roles clearly.
- **Animation-first**: Employs continuous multi-phase color-shift cycles (`easeColorShift`) and breath-like pulse animations to capture user attention.
- **Composable**: Easily dropped into health panels, user profile logs, fitness charts, or blank notification drawers.
