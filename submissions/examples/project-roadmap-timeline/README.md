# Project Roadmap Timeline Component

## 1. What does this do?
Provides a highly responsive, interactive, and visually polished project roadmap timeline component that tracks progress milestones (Completed, In Progress, Upcoming) with glassmorphic cards and spring-bounce animations.

---

## 2. How is it used?
Construct a timeline using the following semantic classes. No JavaScript required.

```html
<!-- Main timeline container (renders horizontal on desktop, vertical on mobile) -->
<div class="rt-timeline" role="list" aria-label="Roadmap milestones">

  <!-- Individual item (can be: rt-item--completed, rt-item--active, or rt-item--upcoming) -->
  <article class="rt-item rt-item--active" role="listitem">
    
    <!-- Milestone progress dot -->
    <div class="rt-marker">
      <span class="rt-dot rt-dot--pulse">
        <span class="rt-dot-inner"></span>
      </span>
    </div>
    
    <!-- Detailed information card -->
    <div class="rt-card">
      <span class="rt-badge rt-badge--active">In Progress</span>
      <h2 class="rt-title">Core Development</h2>
      <p class="rt-desc">Milestone details go here.</p>
      <time class="rt-date" datetime="2026-06">Jun 2026</time>
    </div>

  </article>

</div>
```

---

## 3. Why is it useful?
Roadmaps and progress stepper components are standard for landing pages, product pages, and developer dashboards, but they are difficult to code responsively. 

This component features:
- **Responsive Layout Shifting:** Automatically lays out steps horizontally on desktop viewports (>768px) and switches to vertical layouts on tablets and mobile screens using fluid grid metrics and no JavaScript.
- **High-fidelity Micro-interactions:** Applies a bouncy spring curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`) on card-lifts and dot scaling to match EaseMotion's snappy feel.
- **State-aware Connecting Connectors:** The timeline connecting bar transitions dynamically between states (green for completed, blue-to-gray gradient for in-progress, dark gray for upcoming).
- **Accessibility Audit Compliant:** Employs explicit ARIA role list/listitem annotations, semantic layout tags, keyboard-friendly outline hints, and complete `@media (prefers-reduced-motion: reduce)` resets.
