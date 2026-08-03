# Ease Reminder Notification Card

A modern, responsive, and fully accessible reminder notification card component styled with pure CSS.

Related Issue: #48044

---

## 📢 Repository Standard Answers

### 1. What does this do?
It displays a visually rich, responsive reminder notification card featuring micro-animations, customizable theme accents, and clear actions.

### 2. How is it used?
Apply the `.reminder-card` class to any `<article>` or `<div>` wrapper, and optionally append variant classes like `.reminder-card--meeting`, `.reminder-card--wellness`, or `.reminder-card--urgent`.

```html
<article class="reminder-card reminder-card--meeting">
  <header class="reminder-header">
    <div class="reminder-icon-container">
      <!-- Icon SVG here -->
    </div>
    <div class="reminder-title-area">
      <div class="reminder-category">Category</div>
      <h2 class="reminder-title">Reminder Title</h2>
    </div>
    <span class="reminder-badge reminder-badge--solid">Badge</span>
  </header>
  <div class="reminder-body">
    <p class="reminder-message">Reminder details go here...</p>
  </div>
  <footer class="reminder-footer">
    <button class="btn btn-secondary">Secondary Action</button>
    <button class="btn btn-primary">Primary Action</button>
  </footer>
</article>
```

### 3. Why is it useful?
It fits EaseMotion CSS's philosophy by adding subtle, high-performance micro-animations (like a swinging notification bell, spinning clock hands, or a beating wellness heart) triggered entirely through pure CSS (no JavaScript required), while strictly adhering to modern accessibility guidelines (`prefers-reduced-motion`, visible keyboard focus states, semantic HTML, and touch target sizes).

---

## ✨ Features

- **Soft Animations**: Subtle, keyframe-driven entrance transitions (`rm-slide-in`) and state feedback loops.
- **Micro-Interactions**: Hover states trigger contextual animations:
  - Bell swinging on meeting cards.
  - Heart pulsing on wellness cards.
  - Clock hands spinning on urgent alerts.
  - Pulsing glowing ring ping on warning badges.
- **Pure HTML + CSS**: Lightweight implementation with zero external JS, font dependencies, or CDN links.
- **Fully Responsive Layout**: Flexbox and mobile-first styles adjust gracefully from smart watches and phones up to high-resolution desktop grids.
- **Premium Design Aesthetics**: Includes rich dark-mode surface backdrops, smooth gradient outlines, soft overlapping box-shadow styling, and subtle back-glow lights.
- **Accessibility (A11y) First**:
  - Full keyboard focus handling (`:focus-visible` styling with custom glowing outlines).
  - Clear semantic headings and timing elements.
  - Large interactive touch targets (minimum 40px height for buttons).
  - Smooth animation cancellation when user prefers reduced motion.

---

## 🛠️ Customization

The component uses scoped CSS custom variables (`:root`) allowing easy custom theme integration:

| Variable | Description | Default |
|----------|-------------|---------|
| `--rm-surface` | Background color of the card | `#131a26` |
| `--rm-radius-card` | Outer corner radius of the card | `16px` |
| `--rm-accent` | Primary theme highlight color | `#3b82f6` |
| `--rm-transition-spring` | Custom cubic-bezier spring rate | `0.4s cubic-bezier(0.34, 1.56, 0.64, 1)` |

### Modifying Accents
To create custom accent categories, override the `--accent` and `--accent-rgb` variables on the card wrapper:

```css
.reminder-card--custom-category {
  --accent: #a855f7; /* Purple */
  --accent-rgb: 168, 85, 247;
  --accent-glow: rgba(168, 85, 247, 0.12);
}
```

---

## 📂 Folder Structure

```text
submissions/examples/ease-reminder-notification-card/
├── demo.html       ← Showcase containing Meeting, Wellness, and Urgent variants
├── style.css       ← Scoped, well-commented component stylesheet
└── README.md       ← Component documentation (This file)
```
