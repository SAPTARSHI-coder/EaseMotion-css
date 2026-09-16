# EaseMotion CSS — Interactive Kanban Task Card (`ease-kanban-task-card-ik`)

Project task card component (`ease-kanban-card`) featuring status priority pills, avatar stacks, spring hover elevation, and interactive tilt micro-animations (`ease-card-tilt`).

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides an interactive Kanban board task card component (`ease-kanban-card`) that applies dynamic spring tilt transitions (`ease-card-tilt`) on hover and active grab states (`transform: rotate(0.8deg)`).

---

## 2. How is it used?

Apply the `ease-kanban-card` and `ease-card-tilt` classes directly to task card containers:

```html
<article class="ease-kanban-card ease-card-tilt" tabindex="0">
  <div class="card-meta">
    <span class="priority-pill priority-high">High</span>
  </div>
  <h3>Implement Motion Engine AST</h3>
</article>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS emphasizes tactile motion feedback for dashboard interfaces. The Kanban Task Card component delivers smooth 60fps spring tilt dynamics (`cubic-bezier(0.34, 1.56, 0.64, 1)`) on focus and drag while adhering to `prefers-reduced-motion` settings.
