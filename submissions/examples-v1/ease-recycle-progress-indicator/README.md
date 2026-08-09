# Recycle Progress Indicator

### 1. What does this do?
A circular (ring-style) progress indicator themed around recycling, showing completion percentage with a smooth animated fill and a distinct "complete" state.

### 2. How is it used?
\`\`\`html
<div class="recycle-progress" style="--progress: 65;">
  <svg viewBox="0 0 120 120">
    <circle class="track" cx="60" cy="60" r="52"></circle>
    <circle class="fill" cx="60" cy="60" r="52"></circle>
  </svg>
  <div class="recycle-label">
    <span class="recycle-icon">♻️</span>
    <span class="recycle-percent">65%</span>
  </div>
</div>
\`\`\`
- Set the \`--progress\` CSS custom property (0–100) inline to control fill amount.
- Add the \`is-complete\` class when progress reaches 100% to switch to a darker "done" fill color and can be paired with a checkmark icon instead of the recycle icon.

### 3. Why is it useful?
It gives EaseMotion CSS a lightweight, dependency-free way to visualize progress toward a goal (e.g., recycling/sorting tasks, sustainability trackers, onboarding checklists) with a smooth animated transition rather than an abrupt jump — fitting EaseMotion's philosophy of motion-driven, purposeful UI feedback.
