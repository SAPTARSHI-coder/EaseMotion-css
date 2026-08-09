# Interactive Quiz Card — Pure CSS

## What does this do?

A fully interactive multiple-choice quiz component that calculates and displays user scores automatically using **CSS counters and the `:has()` relational selector** — no JavaScript required.

## How is it used?

```html
<link rel="stylesheet" href="style.css">

<div class="quiz-container">
  <fieldset class="quiz-card">
    <legend class="question-text">What does CSS stand for?</legend>
    <div class="options-list">
      <input type="radio" name="q1" id="q1a" value="a">
      <label for="q1a">Computer Style Sheets</label>

      <input type="radio" name="q1" id="q1b" value="b" class="correct">
      <label for="q1b">Cascading Style Sheets</label>
    </div>
    <div class="feedback correct-feedback">✓ Correct!</div>
    <div class="feedback incorrect-feedback">✗ Incorrect.</div>
  </fieldset>

  <!-- Add more quiz-card elements, one per question -->

  <input type="checkbox" id="reveal-score" class="reveal-score-input">
  <label for="reveal-score" class="reveal-score-btn">Show Results</label>

  <div class="score-card">
    <div class="score-circle">
      <span class="score-number"></span>
      <span class="score-label">out of 5 correct</span>
    </div>
  </div>
</div>
```

**Key CSS classes:**
- `.quiz-card` — Each question container (uses `counter-increment: question-counter`)
- `.correct` — Add to the correct `<input type="radio">` to mark the answer
- `.option-label` — Styled clickable labels for radio options
- `.feedback` — Per-question feedback revealed via `:has(:checked)`
- `.score-card` — Revealed when the score checkbox is checked
- `.score-number::after` — Displays the CSS `counter(score)` value automatically

## Why is it useful?

This component demonstrates how modern CSS (`:has()`, CSS counters, `:checked`) can replace JavaScript for interactive form logic. It aligns with EaseMotion's philosophy of simple, declarative, framework-free UI.

**Features:**
- **Zero JavaScript** — Scoring, feedback, and visibility are CSS-driven
- **Dark mode** — Automatic via `prefers-color-scheme` with manual toggle override
- **`prefers-reduced-motion`** — Disables all animations for accessibility
- **Keyboard accessible** — Radio inputs are focusable and navigable with arrow keys
- **Semantic HTML** — `<fieldset>`, `<legend>`, `<label>`, and `aria-live` regions
- **Responsive** — Mobile-first layout adapts from 320px to wide screens
- **Print-friendly** — Hide interactive controls on print
- **High contrast mode** — Forced-colors media query support
