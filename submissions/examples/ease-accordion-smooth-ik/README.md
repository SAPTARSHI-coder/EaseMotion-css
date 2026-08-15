# EaseMotion CSS — Smooth Grid Accordion Component (`ease-accordion-smooth-ik`)

A pure CSS accordion component leveraging modern `grid-template-rows: 0fr -> 1fr` height expansion transitions with zero JavaScript.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a smooth accordion component (`ease-accordion-item`) that animates dynamic content expansion and collapse using native CSS Grid transitions without requiring hardcoded pixel heights or JS event listeners.

---

## 2. How is it used?

Wrap collapsible sections inside HTML `<details>` elements:

```html
<details class="ease-accordion-item">
  <summary class="accordion-summary">
    <span>Accordion Header</span>
  </summary>
  <div class="accordion-content-wrapper">
    <div class="accordion-content">
      <p>Collapsible content goes here...</p>
    </div>
  </div>
</details>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS focuses on zero-dependency, high-performance UI components. Using `grid-template-rows` interpolation offers full 60fps GPU acceleration while retaining semantic keyboard accessibility.
