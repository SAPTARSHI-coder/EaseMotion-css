# EaseMotion CSS — Vertical Activity Timeline (`ease-timeline-activity-feed-ik`)

A vertical activity timeline component (`ease-timeline-feed`) featuring pop-scale node entrance transitions (`timeline-dot`), guide rails, and timestamp badges.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a vertical activity timeline feed component (`ease-timeline-feed`) that connects chronological activity nodes (`timeline-item`) with spring node scale micro-interactions (`transform: scale(1.35)`).

---

## 2. How is it used?

Include the timeline list structure in your layout:

```html
<ul class="ease-timeline-feed">
  <li class="timeline-item ease-timeline-node">
    <div class="timeline-dot dot-success"></div>
    <div class="timeline-content">
      <p class="timeline-title">Submitted Pull Request</p>
    </div>
  </li>
</ul>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS supports structured activity streams. The Timeline Activity Feed component delivers smooth 60fps spring node scaling (`cubic-bezier(0.34, 1.56, 0.64, 1)`) while respecting `prefers-reduced-motion` settings.
