# Interactive Accordion Documentation

A lightweight, pure-CSS accordion component that allows toggling collapsible content panels using native HTML `<details>` and `<summary>` elements or hidden radio/checkbox inputs.

---

## 1. Quick Start

### HTML Structure
Use native `<details>` and `<summary>` elements for the cleanest zero-JS, accessible implementation:

```html
<div class="accordion-container">
  <!-- Accordion Item 1 -->
  <details class="accordion-item" open>
    <summary class="accordion-header">
      <span class="accordion-title">What is EaseMotion CSS?</span>
      <span class="accordion-icon" aria-hidden="true">+</span>
    </summary>
    <div class="accordion-body">
      <p>EaseMotion CSS is a library providing pure-CSS animations, UI patterns, and components.</p>
    </div>
  </details>

  <!-- Accordion Item 2 -->
  <details class="accordion-item">
    <summary class="accordion-header">
      <span class="accordion-title">Is JavaScript required?</span>
      <span class="accordion-icon" aria-hidden="true">+</span>
    </summary>
    <div class="accordion-body">
      <p>No, this accordion component relies strictly on native HTML5 elements and CSS transitions.</p>
    </div>
  </details>
</div>
