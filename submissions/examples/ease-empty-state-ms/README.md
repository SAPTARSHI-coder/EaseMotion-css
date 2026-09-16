# Ease Empty State

Adds a visual empty-state component for screens with no content, no search results, empty inboxes, or dashboards waiting for data.

## How to Use

Use the component wherever an interface needs a friendly fallback state:

```html
<section class="empty-state empty-state-reveal">
  <div class="empty-illustration" aria-hidden="true">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <p class="empty-kicker">No projects yet</p>
  <h2>Create your first workspace</h2>
  <p>Add a project to start tracking tasks, owners, and progress.</p>
  <a class="empty-action" href="#">Create project</a>
</section>
```

The action link/button is optional, so the pattern also works for passive empty results, notifications, and compact cards.

## Why It Is Useful

EaseMotion CSS focuses on readable, animation-first UI building blocks. This empty state gives product screens a polished fallback that communicates clearly, offers an optional next step, and stays responsive without external dependencies.
