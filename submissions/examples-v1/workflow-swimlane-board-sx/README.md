# Workflow Swimlane Board Showcase

A multi-lane workflow / kanban-style board that visualizes product operations, team planning, approval pipelines, and multi-stage processes — built with pure HTML and CSS.

---

## 1. What does this do?

It renders a responsive, animated **5-lane swimlane board** (Backlog → In Progress → In Review → Approval → Done) that demonstrates advanced CSS layout (Grid + Flexbox) and interaction capabilities (hover lifts, pulse indicators, progress bars, approval step tracks) — without a single line of JavaScript.

---

## 2. How is it used?

The board is composed of three layered building blocks: a board container, swimlanes, and cards.

```html
<main class="swimlane-board">

  <section class="swimlane lane-progress">
    <header class="lane-header">
      <span class="lane-dot"></span>
      <h2>In Progress</h2>
      <span class="lane-count">3</span>
    </header>

    <div class="lane-body">
      <article class="card priority-high">
        <span class="card-tag">Engineering</span>
        <h3>Auth API refactor</h3>
        <p>Migrate to OAuth 2.1 and add refresh tokens.</p>
        <div class="progress-bar"><span style="width:65%"></span></div>
        <footer class="card-footer">
          <span class="avatar">NL</span>
          <span class="card-meta">Due Fri</span>
        </footer>
      </article>
    </div>
  </section>

</main>