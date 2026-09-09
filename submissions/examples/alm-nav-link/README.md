# Sticky Header Sandbox — EaseMotion CSS

A hardware-accelerated, glassmorphic sticky navigation header featuring high-diffusion backdrop filters and layout optimizations. This sandbox submodule contains architectural solutions for GPU layer promotion and custom accessibility focus indicators.

---

## 🛠️ Resolved Issues

### [BUG] Native focus indicators fail to map border-radius constraints on pill and circle components
* **Cause**: Browsers frequently default the native `:focus` or `:focus-visible` outline to a rectangular bounding box geometry when dealing with high layout constraints or extreme aspect variations (`border-radius: 9999px` / `50%`).
* **Fix**: Safely suppressed the buggy native rectangular engine tracking using `outline: 2px solid transparent`, then engineered a dual-layered `box-shadow` rendering pipeline on the primary interface class (`.alm-nav-link`). This guarantees focus rings track component curvatures flawlessly across all modern rendering engines.

---

## 🚀 Key Features

* **Hardware-Accelerated Layout Mechanics**: Forces sub-pixel composition directly onto the GPU using `will-change` and matrix triggers (`transform: translateZ(0)`), completely preventing main-thread layout thrashing and backdrop filter flickering loops during page scrolls.
* **Premium Glass Surface Mask**: Utilizes high-diffusion webkit and standard backdrop filters seamlessly balanced over variable alpha variable primitives.
* **Zero Main-Branch Friction**: Designed to attach natively onto existing `.alm-nav-link` design patterns, requiring absolutely no markup refactoring or template modification to implement.

---

## 📂 File Directory

* `style.css` — Production stylesheet containing hardware layer configurations and the a11y geometric focus fix.
* `demo.html` — An isolated sandbox prototyping document simulating token dependencies, long canvas scrolling, text links, pill buttons, and circle icon elements.

---

## 📦 Integration

To integrate this fix into production environments, make sure your header navigation targets the `.alm-nav-link` signature class. 

```html
<ul class="alm-nav-menu">
  <li><a href="#" class="alm-nav-link">Standard Link</a></li>
  <li><a href="#" class="alm-nav-link custom-pill-style">Pill Button</a></li>
</ul>
