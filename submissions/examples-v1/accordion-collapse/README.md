# Animated Accordion Collection

A pure-CSS animated accordion/collapse panel component covering all common variants — multi-open groups, single-open groups, standalone items, and a zero-JS native `<details>` version. Height animates via the `grid-template-rows` trick (no `max-height` hacks), chevrons rotate 180° in sync, and content slides + fades in on open.

---

## Preview

| Variant            | Behaviour                                       |
| ------------------ | ----------------------------------------------- |
| Multi-open group   | Any number of panels can be open simultaneously |
| Single-open group  | Opening one panel auto-closes the others        |
| Standalone         | Single collapsible block, no group wrapper      |
| Native `<details>` | Zero JavaScript — browser handles toggle        |

---

## Files

```
submissions/examples/accordion-collapse/
├── demo.html    ← all four variants in one page
├── style.css    ← all animation classes
└── README.md
```

---

## Classes

| Class                         | Description                                                   |
| ----------------------------- | ------------------------------------------------------------- |
| `ease-accordion-group`        | Bordered group container; divides items automatically         |
| `ease-accordion-item`         | Single accordion item                                         |
| `ease-accordion-item.is-open` | Open state — add/remove to toggle                             |
| `ease-accordion-header`       | `<button>` trigger; hover bg + focus-visible ring             |
| `ease-accordion-icon`         | Optional leading icon badge                                   |
| `ease-accordion-title`        | Header label text; changes colour when open                   |
| `ease-accordion-chevron`      | SVG chevron; rotates 180° when `is-open`                      |
| `ease-accordion-panel`        | Animated height wrapper via `grid-template-rows`              |
| `ease-accordion-panel-inner`  | Inner wrapper required by the grid trick (`overflow: hidden`) |
| `ease-accordion-content`      | Content area; slides + fades in on open                       |
| `ease-accordion-standalone`   | Single-item variant with border + open border-color           |
| `ease-accordion-details`      | Styles for native `<details>/<summary>` variant               |
| `ease-accordion-details-body` | Content inside `<details>`; slide-in keyframe on open         |

---

## Usage

### Multi-open group

```html
<div class="ease-accordion-group">
  <div class="ease-accordion-item is-open">
    <!-- is-open = starts expanded -->
    <button
      class="ease-accordion-header"
      aria-expanded="true"
      aria-controls="panel-1"
      id="btn-1"
    >
      <span class="ease-accordion-icon">💡</span>
      <span class="ease-accordion-title">What is EaseMotion CSS?</span>
      <span class="ease-accordion-chevron">
        <!-- inline SVG chevron -->
      </span>
    </button>
    <div
      class="ease-accordion-panel"
      id="panel-1"
      role="region"
      aria-labelledby="btn-1"
    >
      <div class="ease-accordion-panel-inner">
        <div class="ease-accordion-content">Answer text goes here.</div>
      </div>
    </div>
  </div>

  <div class="ease-accordion-item">
    <!-- more items… -->
  </div>
</div>
```

### Single-open group — add `data-single-open="true"`

```html
<div class="ease-accordion-group" data-single-open="true">
  <!-- items — JS closes siblings when one opens -->
</div>
```

### Standalone single item

```html
<div class="ease-accordion-standalone ease-accordion-item">
  <!-- header + panel as above -->
</div>
```

### Native `<details>` — zero JS

```html
<details class="ease-accordion-details" open>
  <summary>
    <span class="ease-accordion-icon">🌐</span>
    Question title
    <span class="ease-accordion-chevron"><!-- SVG --></span>
  </summary>
  <div class="ease-accordion-details-body">Answer content.</div>
</details>
```

### Toggle JS — the only script needed

```js
document.querySelectorAll(".ease-accordion-header").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".ease-accordion-item");
    const group = item.closest("[data-single-open]");
    const isOpen = item.classList.contains("is-open");

    // Single-open: close all siblings
    if (group) {
      group.querySelectorAll(".ease-accordion-item").forEach((s) => {
        s.classList.remove("is-open");
        s.querySelector(".ease-accordion-header").setAttribute(
          "aria-expanded",
          "false"
        );
      });
    }

    if (!isOpen || !group) {
      item.classList.toggle("is-open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
    }
  });
});
```

---

## Animation Details

### Height collapse — `grid-template-rows` trick

```css
/* Closed */
.ease-accordion-panel {
  grid-template-rows: 0fr;
}

/* Open */
.ease-accordion-item.is-open .ease-accordion-panel {
  grid-template-rows: 1fr;
}
```

The inner wrapper has `overflow: hidden` so content clips as `0fr → 1fr` animates. No `max-height` guessing, no jump on open.

### Chevron rotation

```css
.ease-accordion-item.is-open .ease-accordion-chevron {
  transform: rotate(180deg);
}
```

### Content slide + fade

```css
.ease-accordion-content {
  opacity: 0;
  transform: translateY(-4px);
  transition:
    opacity 300ms ease,
    transform 300ms ease;
}
.ease-accordion-item.is-open .ease-accordion-content {
  opacity: 1;
  transform: translateY(0);
}
```

### Native `<details>` slide-in

```css
@keyframes ease-accordion-slide-in {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## Theming

All colours are CSS custom properties on `:root`:

```css
:root {
  --ease-accordion-active-text: #5b21b6;
  --ease-accordion-active-border: #7c3aed;
  --ease-accordion-active-bg: #faf5ff;
}
```

---

## Accessibility

- `<button>` trigger with `aria-expanded` + `aria-controls`
- `role="region"` + `aria-labelledby` on each panel
- `focus-visible` ring on keyboard focus
- `Enter` and `Space` activate the trigger
- `prefers-reduced-motion` disables all transitions; panels are always visible

---

## Browser Support

Chrome 107+, Firefox 110+, Safari 16+ (for `grid-template-rows` transition). The native `<details>` variant works in all modern browsers.

---

## Contributor

**@thakurakanksha288** — GSSoC 2026 participant  
Issue: [#20327](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/20327)
