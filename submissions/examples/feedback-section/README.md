# Submission: Feedback Section

## 1. What does this do?

A complete feedback section with three switchable variants — general
feedback (with star rating), suggestion (with priority selector), and
bug report (with browser/OS fields). Each form animates in on tab switch
with a spring entrance, and all submissions show a success state with
a pop animation.

---

## 2. How is it used?

```html
<div class="feedback-section">

  <!-- type switcher -->
  <div class="feedback-types">
    <button class="feedback-type-btn feedback-type-btn--active" data-type="general">
      <span class="ftype-icon">💬</span>
      <span class="ftype-label">General</span>
    </button>
    <button class="feedback-type-btn" data-type="suggestion">
      <span class="ftype-icon">💡</span>
      <span class="ftype-label">Suggestion</span>
    </button>
    <button class="feedback-type-btn" data-type="bug">
      <span class="ftype-icon">🐛</span>
      <span class="ftype-label">Bug Report</span>
    </button>
  </div>

  <!-- general feedback form -->
  <div class="feedback-form" id="form-general">
    <div class="feedback-card">
      <div class="feedback-card-header">
        <h2 class="feedback-title">Share your feedback</h2>
        <p class="feedback-sub">Tell us what you think.</p>
      </div>
      <div class="feedback-field">
        <label class="feedback-label" for="msg">Your feedback</label>
        <textarea id="msg" class="feedback-textarea" rows="4" placeholder="What could be better?"></textarea>
      </div>
      <button class="feedback-submit" type="button">Send Feedback</button>
    </div>
  </div>

</div>
```

Activate tab switching and success state with the JS snippet in `demo.html`.

---

## 3. Why is it useful?

The issue reports that EaseMotion CSS has no feedback section — users
cannot submit feedback, suggestions, or bug reports directly. This
component fills that gap with three purpose-built variants, each with
an appropriate color accent:

- **General** — purple, star rating, char counter
- **Suggestion** — amber, priority selector (low/medium/high)
- **Bug report** — red, browser + OS fields, steps to reproduce

Fits EaseMotion CSS philosophy:
- `feedback-type-btn--active`, `feedback-card--bug` — readable modifier classes
- Form entrance uses `cubic-bezier(0.22, 1, 0.36, 1)` spring — consistent with framework easing
- Success icon uses `cubic-bezier(0.34, 1.56, 0.64, 1)` bounce pop
- Star rating hover scales each star — expressive micro-interaction
- `prefers-reduced-motion` strips all animations — accessible

---

## Proposed class names (maintainer decides)

| Raw name                      | Proposed ease-* name               |
|-------------------------------|------------------------------------|
| `feedback-section`            | `ease-feedback-section`            |
| `feedback-types`              | `ease-feedback-types`              |
| `feedback-type-btn`           | `ease-feedback-type-btn`           |
| `feedback-type-btn--active`   | `ease-feedback-type-btn-active`    |
| `feedback-card`               | `ease-feedback-card`               |
| `feedback-card--suggestion`   | `ease-feedback-card-suggestion`    |
| `feedback-card--bug`          | `ease-feedback-card-bug`           |
| `feedback-form`               | `ease-feedback-form`               |
| `feedback-input`              | `ease-feedback-input`              |
| `feedback-textarea`           | `ease-feedback-textarea`           |
| `feedback-submit`             | `ease-feedback-submit`             |
| `feedback-success`            | `ease-feedback-success`            |
| `star`                        | `ease-star`                        |
| `priority-btn`                | `ease-priority-btn`                |