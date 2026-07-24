# Global Smart Grid Renewable Energy Dispatch (Phase #864)

## 1. What does this do?
This is a high-performance, 60fps HTML/CSS UI design showcase demonstrating a futuristic, responsive smart-grid dashboard for renewable energy optimization and intelligent power dispatch.

## 2. How is it used?
Simply open `demo.html` in any modern web browser to view the interactive dashboard. The UI utilizes various EaseMotion CSS animation and utility classes alongside custom themed styles:

```html
<!-- Example of EaseMotion classes applied for animations -->
<nav class="ease-navbar ease-slide-down">
    <div class="nav-brand ease-hover-lift">
        <span class="brand-icon pulse-glow">⚡</span>
        <h1>SmartGrid</h1>
    </div>
</nav>

<!-- Staggered Entrance Animations -->
<aside class="sidebar-metrics ease-slide-right delay-1"></aside>
<section class="center-stage ease-fade-in delay-2"></section>
<aside class="sidebar-tasks ease-slide-left delay-3"></aside>

<!-- Interactive hover effects and continuous pulses -->
<div class="metric-group ease-hover-lift">...</div>
<div class="node ease-float"><span class="ping"></span></div>
<div class="task-status pending ease-pulse"></div>
```

## 3. Why is it useful?
It provides a stunning, complex layout example of how EaseMotion CSS can be leveraged to create highly dynamic, data-rich interfaces (like energy dashboards) entirely through CSS, adhering to EaseMotion's philosophy of delivering powerful, buttery-smooth 60fps micro-animations without relying on external JavaScript dependencies.

---

### Component Breakdown
- **Top Navigation**: Fixed navbar with glowing brand icon, active states, and magnetic button styles.
- **Left Sidebar (Energy Mix)**: Glassmorphism panels showing live renewable statistics with expanding progress bars using `ease-expand` and `ease-hover-lift`.
- **Center Stage (Global Dispatch Map)**: An animated network grid visualization using SVG routing lines and pulsing nodes. Incorporates floating animations (`ease-float`) and staggered delays.
- **Right Sidebar (Active Tasks & System Health)**: Displaying a live AI dispatch log with animated task statuses (`ease-pulse`) and a circular SVG percentage loader drawing itself dynamically (`ease-draw`).

### Live Preview Guide
1. Ensure the `easemotion.css` framework is present two directories up (relative path `../../../easemotion.css`).
2. Double click the `demo.html` file to open it.
3. No build tools or dev servers are required. Zero JavaScript is used for the animations.
