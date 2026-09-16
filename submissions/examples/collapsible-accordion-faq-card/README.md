# Collapsible Accordion FAQ Card

## What it does
A smooth, animated accordion component that expands and collapses content seamlessly with a clean, modern card design and subtle transition effects.

## How to use it
```html
<div class="accordion-card">
  <button class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
    <span>What is EaseMotion CSS?</span>
    <span class="accordion-icon">+</span>
  </button>
  <div class="accordion-content">
    <p>EaseMotion CSS is a lightweight, animation-first utility framework designed for modern web developers.</p>
  </div>
</div>
```
## Why it fits EaseMotion CSS
It provides an intuitive, highly reusable interactive component that aligns with the animation-first and composable philosophy of EaseMotion CSS, offering clean transitions without unnecessary script overhead.