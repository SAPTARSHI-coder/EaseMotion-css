# Sticky Glass Navbar Scroll Jank Lab

An interactive performance diagnostic lab explaining how the backdrop-filter blur of `ease-navbar-glass-sticky` interacts with animated background elements.

---

## 1. What does this do?
This performance showcase pairs the glass sticky navbar component with looping animations and dynamic canvas overlays to visually demonstrate scroll hitching, composite stress, and mobile GPU bottlenecks.

---

## 2. How is it used?
Open `demo.html` in a web browser to run the scroll diagnostic test-bench, manipulate the blur and opacity sliders, and copy production fallback snippets:

```html
<!-- High-performance fallback: sets blur to 0px and provides high opacity -->
<nav class="ease-navbar-glass ease-navbar-glass-sticky"
     style="--ease-navbar-glass-blur: 0px; background: rgba(255, 255, 255, 0.95);">
  <a href="#" class="ease-navbar-brand">EaseBrand</a>
</nav>
```

---

## 3. Why is it useful?
It documents a common layout performance pitfall (compositing overlap under sticky elements) and teaches contributors how to debug scroll rendering issues and test for mobile hardware limits.

---

## Features & Implementation Suffix

- **Folder Path:** `submissions/examples/ease-navbar-glass-jank-pp/`
- **Contributor Suffix:** `pp` (Pratyush Panda)
- **Resolved Ticket:** [Issue #46183](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46183)

### Included Interactive Diagnostic Features:
1. **Interactive Test-Bench:** Sliders to dynamically adjust `backdrop-filter: blur` and background opacity values.
2. **Scroll Telemetry Panel:** Reports Scroll Y position, scroll speed in px/s, and relative compositor workload.
3. **HTML5 Animated Particle Strip:** Simulates custom charts and graphics to test paint invalidation loads.
4. **Performance Quiz:** In-app quiz focusing on compositing loops and CSS optimization techniques.
