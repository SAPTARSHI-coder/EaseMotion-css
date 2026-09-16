# Ease Date Display

A compact, responsive date display component for presenting month, day, and year information.

## Overview

Dates appear throughout modern interfaces:

- Events
- Schedules
- Articles
- Activity feeds
- Announcements
- Release histories
- Calendars

This component provides a consistent visual treatment while supporting multiple layouts depending on the available space and context.

## Layouts

The example includes three primary layouts:

### Vertical

A calendar-style display with the month above the day and year below it.

```html
<time
  class="ease-date-display ease-date-display--vertical"
  datetime="2026-08-24"
>
  <span class="date-month">AUG</span>
  <span class="date-day">24</span>
  <span class="date-year">2026</span>
</time>
```

### Horizontal

A compact horizontal arrangement suitable for event cards and content metadata.

```html
<time
  class="ease-date-display ease-date-display--horizontal"
  datetime="2026-08-24"
>
  <span class="date-day">24</span>

  <span class="date-copy">
    <span class="date-month">August</span>
    <span class="date-year">2026</span>
  </span>
</time>
```

### Compact

A small pill-style display useful for metadata or dense interfaces.

```html
<time
  class="ease-date-display ease-date-display--compact"
  datetime="2026-08-24"
>
  <span class="date-month">AUG</span>
  <span class="date-day">24</span>
  <span class="date-year">'26</span>
</time>
```

## Feed Layout

The same date structure can be composed into an activity feed:

```html
<article class="feed-item">

  <time
    class="ease-date-display ease-date-display--feed"
    datetime="2026-08-24"
  >
    <span class="date-month">AUG</span>
    <span class="date-day">24</span>
  </time>

  <div class="feed-copy">

    <strong>
      New project created
    </strong>

    <p>
      The Motion Library project was created.
    </p>

  </div>

</article>
```

## Semantic HTML

The component uses the native `<time>` element.

The `datetime` attribute preserves the machine-readable date:

```html
<time datetime="2026-08-24">
  AUG 24 2026
</time>
```

This allows the visual formatting to remain flexible while the actual date remains available to browsers, assistive technologies, and other tools.

## Responsive Behavior

The layouts adapt to the available viewport.

On smaller screens:

* Example layouts stack vertically.
* Feed items become narrower.
* Date containers scale down.
* Text remains readable without horizontal overflow.

## Animation

Each date display uses a subtle entrance animation:

```css
@keyframes date-enter {
  from {
    opacity: 0;
    transform:
      translateY(8px)
      scale(0.96);
  }

  to {
    opacity: 1;
    transform:
      translateY(0)
      scale(1);
  }
}
```

The animation is intentionally restrained so the date remains the focus rather than the motion itself.

## Accessibility

The component uses semantic `<time>` elements and keeps the visual representation independent from the machine-readable date.

It also respects reduced-motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-date-display {
    animation: none;
  }
}
```

## Design Philosophy

This example follows the EaseMotion CSS principles:

* **Human-readable** — the structure and class names clearly describe the component.
* **Animation-first** — subtle entrance motion gives the component a polished appearance.
* **Composable** — the same base date structure supports multiple layouts.
* **Responsive** — layouts adapt to different interface sizes.
* **Lightweight** — no JavaScript or external dependencies are required.

## Demo

Open `demo.html` directly in a browser.

No server or build step is required.

## Files

```text
ease-date-display/
├── demo.html
├── style.css
└── README.md
```

## Contribution

This is a proposed EaseMotion CSS example.

The final EaseMotion class naming, tokens, and integration can be standardized by the repository maintainer.
