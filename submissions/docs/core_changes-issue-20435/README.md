# Core Changes Proposal: Issue #20435

## Feature Overview

Issue #20435 requests an **Animated Scroll-Reveal Timeline Component** for EaseMotion CSS — a reusable vertical timeline with alternating cards, connecting line, and scroll-triggered entrance animations.

## Proposed Structure

| Class / Element          | Purpose                                                           |
| ------------------------ | ----------------------------------------------------------------- |
| `.ease-timeline`         | Container — vertical flex column with central line via `::before` |
| `.ease-timeline-item`    | Each milestone — contains dot, card, and alternating side         |
| `.ease-timeline-dot`     | Circular indicator on the central line                            |
| `.ease-timeline-content` | Card with heading, text, optional badge                           |

## Behavior

- **Desktop**: Items alternate left/right of the central line
- **Tablet/Mobile**: Single column, all cards on one side
- **Scroll reveal**: Each item fades+slides in as it enters the viewport
- **Connecting line**: Animated `::before` pseudo-element on the container
- **Custom properties**: `--tl-color`, `--tl-dot-size`, `--tl-line-width` for theme customization

## Proposed CSS to add to `components/timeline.css`

```css
:root {
  --tl-color: #7c6cff;
  --tl-dot-size: 14px;
  --tl-line-width: 2px;
  --tl-bg-card: rgba(255, 255, 255, 0.05);
  --tl-border: rgba(255, 255, 255, 0.08);
}

.ease-timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
}

.ease-timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: var(--tl-line-width);
  background: var(--tl-color);
  transform: translateX(-50%);
  opacity: 0.3;
}

.ease-timeline-item {
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 50%;
  opacity: 0;
  transform: translateX(-30px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.ease-timeline-item:nth-child(even) {
  margin-left: auto;
  transform: translateX(30px);
}

.ease-timeline-item.revealed {
  opacity: 1;
  transform: translateX(0);
}

.ease-timeline-dot {
  position: absolute;
  top: 1rem;
  width: var(--tl-dot-size);
  height: var(--tl-dot-size);
  background: var(--tl-color);
  border-radius: 50%;
  border: 3px solid var(--tl-bg, #fff);
  z-index: 1;
  left: calc(-1 * var(--tl-dot-size) / 2 - var(--tl-line-width) / 2);
}

.ease-timeline-item:nth-child(even) .ease-timeline-dot {
  left: auto;
  right: calc(-1 * var(--tl-dot-size) / 2 - var(--tl-line-width) / 2);
}

.ease-timeline-content {
  padding: 1.25rem;
  background: var(--tl-bg-card);
  border: 1px solid var(--tl-border);
  border-radius: 12px;
  backdrop-filter: blur(12px);
  width: 90%;
}
```

## Why this is submitted here

Per CONTRIBUTING.md policy and Core Framework Protection, this component is proposed as a formal submission in `submissions/` rather than modifying `components/` directly.

Fixes #20435
