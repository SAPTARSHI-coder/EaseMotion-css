# Modern Statistics Card (SaaS KPI Card)

**Category:** Components — Dashboard & SaaS UI  
**Type:** Pure CSS (Zero JavaScript)  
**Folder:** `submissions/examples/ease-stat-card/`

---

## 1. What does this do?

The **Modern Statistics Card** is a highly interactive, hardware-accelerated dashboard KPI (Key Performance Indicator) component designed for professional SaaS applications and administrative panels. Built strictly in HTML and CSS with zero JavaScript, it introduces fluid cascading layouts and custom micro-animations that make data dashboards feel alive.

### Core Visual Capabilities:

- **Staggered Page Entrance Cascade:** Upon dashboard load, individual cards slide upward and fade in sequentially (Cascading left-to-right) using predefined CSS animation delays. This creates a coordinated layout reveal.
- **Dynamic Mini Sparklines:** Each statistics tile embeds a micro bar chart (sparkline). During page entrance, the sparkline bars grow vertically from their baselines using staggered load animations.
- **Color-Matched Ambient Glows:** Hovering a card triggers a multi-layered transition—the card lifts smoothly using an elastic spring curve, and a color-matched drop-shadow glow fades in to reflect the card's theme (e.g. emerald green for financial revenue, indigo blue for active users).
- **Interactive Sparkline Accentuation:** Moving the cursor over the card intensifies the opacity of the embedded sparkline bars, scaling individual bars dynamically in a staggered wave to accentuate trend changes.

---

## 2. How is it used?

To drop this statistics layout grid into your administrative interface, follow this markup design:

### Minimal HTML Structure

```html
<section class="ease-dashboard-stage">
  <!-- Blue Active Users Card (Slide Delay 0) -->
  <article
    class="ease-stat-card ease-stat-card--blue ease-stat-card--delay-0"
    tabindex="0"
  >
    <header class="ease-stat-card__header">
      <span class="ease-stat-card__label">Active Users</span>
      <div class="ease-stat-card__icon-wrapper" aria-hidden="true">👥</div>
    </header>

    <div class="ease-stat-card__main">
      <span class="ease-stat-card__value">14,820</span>
    </div>

    <footer class="ease-stat-card__footer">
      <div class="ease-stat-card__trend ease-stat-card__trend--up">+12.4%</div>
      <span class="ease-stat-card__meta-desc">vs last week</span>
    </footer>

    <!-- Mini Sparkline (Heights driven by inline style percentage heights) -->
    <div class="ease-stat-sparkline" aria-hidden="true">
      <div class="ease-stat-sparkline__bar" style="height: 35%;"></div>
      <div class="ease-stat-sparkline__bar" style="height: 50%;"></div>
      <div class="ease-stat-sparkline__bar" style="height: 42%;"></div>
      <div class="ease-stat-sparkline__bar" style="height: 70%;"></div>
      <div class="ease-stat-sparkline__bar" style="height: 60%;"></div>
      <div class="ease-stat-sparkline__bar" style="height: 90%;"></div>
    </div>
  </article>
</section>
```

### Color Theme Modifiers

Set the corresponding subclass modifier on the `.ease-stat-card` container to load customized HSL coordinate spectrums and HSL rgb values:

| Modifer Class            | Dashboard Theme Color | Translucent Color RGB Accent |
| ------------------------ | --------------------- | ---------------------------- |
| `ease-stat-card--blue`   | Indigo/Blue           | `rgba(99, 102, 241, 0.12)`   |
| `ease-stat-card--green`  | Emerald/Green         | `rgba(52, 211, 153, 0.12)`   |
| `ease-stat-card--amber`  | Amber/Orange          | `rgba(245, 158, 11, 0.12)`   |
| `ease-stat-card--purple` | Violet/Purple         | `rgba(167, 139, 250, 0.12)`  |

---

## 3. Why is it useful?

Analytical dashboards often battle loading sluggishness and high layout-shift scores when fetching graphs and analytics.

### Key Performance & Design Advantages:

1. **GPU-Accelerated Compositing (60+ FPS):**
   Animations animate strictly layout-stable properties (`transform`, `opacity`, `filter`), avoiding costly page layout recalculations or browser paint passes. This guarantees extremely stable, fluid 60+ FPS rendering even on low-power devices.

2. **Zero Main-Thread JavaScript Obstruction:**
   Requires 0 bytes of JavaScript. The staggered reveal and sparkline grow calculations execute synchronously on page load, keeping analytical dashboards responsive even under slow networks or rendering locks.

3. **Built-in Grid Responsiveness:**
   The grid utilizes CSS layout models that collapse from 4 columns on full monitors, to 2 columns on tablets, and a single centered stack on mobile phones, preserving visual layouts and spacing scales.

4. **Engineered Accessibility Standards:**
   - **Reduced Motion Support:** Respects system user preferences through `@media (prefers-reduced-motion: reduce)`, instantly halting the staggered entrances, sparkline growth keyframes, and hover scaling, presenting cards in a stable flat layout.
   - **Tab Navigation Support:** Employs explicit `tabindex="0"` elements, allowing keyboard-only users to navigate statistics and hover glow highlights using native focus states.
   - **Screen Reader Separation:** Visually decorative circular emoji indicators, progress graphs, and trend glyphs are masked using `aria-hidden="true"`, ensuring screen readers skip raw visual blocks.
