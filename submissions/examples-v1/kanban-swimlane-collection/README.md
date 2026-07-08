# Animated Kanban Swimlane Collapse

A pure-CSS animated swimlane header for Kanban-style project boards. Click any lane header to smoothly collapse or expand its columns — chevron rotates, content folds away, and the count badge pulses to signal hidden items.

---

## Preview

| State     | Behaviour |
|-----------|-----------|
| Expanded  | Full column grid visible; chevron points down |
| Collapsed | Content folds to zero height; chevron rotates −90°; badge pulses indigo |

---

## Files

```
submissions/examples/kanban-swimlane-collection/
├── demo.html    ← self-contained live demo
├── style.css    ← all animation classes
└── README.md
```

---

## Classes

| Class | Description |
|-------|-------------|
| `ease-swimlane` | Wrapper element. Add `is-collapsed` to start collapsed. |
| `ease-swimlane-header` | Clickable header row; handles hover + focus-visible styles |
| `ease-swimlane-chevron` | SVG chevron; rotates −90° when `.is-collapsed` is present |
| `ease-swimlane-label` | Lane title text (flex-grows to fill available space) |
| `ease-swimlane-count-badge` | Item count pill; pulses on collapse to signal hidden items |
| `ease-swimlane-body` | Animates height via `grid-template-rows: 1fr → 0fr` |
| `ease-swimlane-body-inner` | Inner wrapper required by the grid trick (`overflow: hidden`) |

---

## Usage

```html
<div class="ease-swimlane" id="lane-high">
  <div class="ease-swimlane-header" tabindex="0" role="button"
       aria-expanded="true" aria-controls="lane-high-body">
    <span class="ease-swimlane-chevron">
      <!-- inline SVG chevron -->
    </span>
    <span class="ease-swimlane-label">🔴 High Priority</span>
    <span class="ease-swimlane-count-badge">6</span>
  </div>

  <div class="ease-swimlane-body" id="lane-high-body">
    <div class="ease-swimlane-body-inner">
      <!-- kanban columns / cards go here -->
    </div>
  </div>
</div>
```

### Toggle (the only JS this component needs)

```js
document.querySelectorAll('.ease-swimlane-header').forEach(header => {
  const lane = header.closest('.ease-swimlane');
  function toggle() {
    const collapsed = lane.classList.toggle('is-collapsed');
    header.setAttribute('aria-expanded', String(!collapsed));
  }
  header.addEventListener('click', toggle);
  header.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
  });
});
```

Start a lane **pre-collapsed** by adding `is-collapsed` to the wrapper:

```html
<div class="ease-swimlane is-collapsed" ...>
```

---

## Animation Details

### Height collapse — `grid-template-rows` trick

`height: auto` cannot be transitioned directly. This component uses the modern CSS grid approach:

```css
/* Expanded */
.ease-swimlane-body { grid-template-rows: 1fr; }

/* Collapsed */
.ease-swimlane.is-collapsed .ease-swimlane-body { grid-template-rows: 0fr; }
```

The inner wrapper has `overflow: hidden`, so the content clips as `1fr → 0fr` animates. No JavaScript height calculation needed.

### Chevron rotation

```css
.ease-swimlane.is-collapsed .ease-swimlane-chevron {
  transform: rotate(-90deg);
}
```

### Badge pulse

```css
@keyframes ease-badge-pulse {
  0%   { transform: scale(1); }
  40%  { transform: scale(1.35); }
  70%  { transform: scale(0.9); }
  100% { transform: scale(1); }
}
.ease-swimlane.is-collapsed .ease-swimlane-count-badge {
  animation: ease-badge-pulse 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
```

---

## Theming

All colours are CSS custom properties on `:root`. Override them per-swimlane:

```css
#lane-urgent {
  --ease-swimlane-accent:      #ef4444;
  --ease-swimlane-badge-bg:    #fee2e2;
  --ease-swimlane-badge-text:  #991b1b;
}
```

---

## Accessibility

- `role="button"` + `tabindex="0"` on the header for keyboard focus
- `aria-expanded` toggled in JS to reflect open/closed state
- `aria-controls` links header to its body panel
- `Enter` and `Space` trigger the toggle
- `prefers-reduced-motion: reduce` disables all transitions and the badge animation

---

## Browser Support

Works in all browsers that support CSS Grid (`grid-template-rows` transitions) — Chrome 107+, Firefox 110+, Safari 16+.

---

## Contributor

**@thakurakanksha288** — GSSoC 2026 participant  
Issue: [#16981](https://github.com/your-org/EaseMotion/issues/16981)