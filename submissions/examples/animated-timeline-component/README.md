# Animated Timeline Component

A vertical timeline with smooth entrance animations triggered on scroll. Zero dependencies — uses a tiny IntersectionObserver to add `.is-visible` class, and CSS transitions handle all animation.

## Classes

| Class | Description |
|-------|-------------|
| `.ease-timeline` | Container with vertical connecting line |
| `.ease-timeline-item` | Single milestone row (hidden until `.is-visible`) |
| `.ease-timeline-dot` | Circular connector dot |
| `.ease-timeline-card` | Content card with hover shadow |
| `.ease-timeline-card-date` | Coloured date/label above title |
| `.ease-timeline-card-title` | Milestone heading |
| `.ease-timeline-card-body` | Description text |
| `.ease-timeline-card-tag` | Pill tag for status/category |
| `.ease-timeline--compact` | Tighter spacing variant |

## CSS Custom Properties

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-timeline-line-color` | `--ease-color-primary` | Vertical line colour |
| `--ease-timeline-dot-size` | `1rem` | Dot diameter |
| `--ease-timeline-dot-color` | `--ease-color-primary` | Dot fill colour |
| `--ease-timeline-card-bg` | `--ease-color-surface` | Card background |
| `--ease-timeline-duration` | `0.5s` | Transition duration |
| `--ease-timeline-delay-step` | `0.1s` | Stagger delay per item |
| `--ease-timeline-gap` | `--ease-space-8` | Gap between items |

## Usage

```html
<div class="ease-timeline">
  <div class="ease-timeline-item">
    <div class="ease-timeline-dot"></div>
    <div class="ease-timeline-card">
      <div class="ease-timeline-card-date">Q1 2026</div>
      <h4 class="ease-timeline-card-title">Project Launch</h4>
      <p class="ease-timeline-card-body">Description here.</p>
      <span class="ease-timeline-card-tag">Planning</span>
    </div>
  </div>
</div>

<script>
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.15 }
  );
  document.querySelectorAll('.ease-timeline-item').forEach((el) => observer.observe(el));
</script>
```

## Accessibility

- Container uses `role="list"`, items use `role="listitem"`
- Dots use `aria-hidden="true"` (decorative)
- `prefers-reduced-motion`: transitions disabled, items shown immediately

## Dark Mode

Adapts automatically via `prefers-color-scheme: dark` and `[data-theme="dark"]`.

Closes #16131
