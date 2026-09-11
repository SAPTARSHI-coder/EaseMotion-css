# Pure CSS Advanced Interactive Toggle Card (Iteration 151)

A responsive, zero-JavaScript 3D flip card component built with pure CSS state management, accessible reduced-motion support, and modular styling tokens.

Designed for the **EaseMotion-css** repository.

---

## ✨ Key Features

* **Zero JavaScript:** Employs the CSS checkbox hack for smooth state switching without JS overhead.
* **Hardware-Accelerated 3D Transitions:** Clean `preserve-3d` and `rotateY` card mechanics.
* **Accessible First:** Honors `@media (prefers-reduced-motion: reduce)` system settings.
* **Responsive & Modular:** Styled with customizable CSS variables for seamless theme integration.

---

## 🚀 Setup & Usage

Open `demo.html` in any browser to test the interactive preview.

### Overriding CSS Variables

```css
:root {
  --em-151-bg: #0f172a;
  --em-151-card-bg: #1e293b;
  --em-151-accent: #38bdf8;
  --em-151-accent-alt: #f43f5e;
  --em-151-text: #f8fafc;
}