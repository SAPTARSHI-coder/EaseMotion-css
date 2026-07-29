# CSS-only Count-Up Statistics Component

**Category:** Components — Dashboard & Data  
**Type:** Pure CSS (Zero JavaScript)  
**Folder:** `submissions/examples/ease-count-up/`

---

## 1. What does this do?

The **CSS-only Count-Up Statistics Component** displays interactive, animated SaaS metrics dashboards. It features realistic odometer-style counting reveals that roll digits from `0` to their final values upon page load, completely without JavaScript.

### Core Visual Capabilities:
- **Kinetic Odometer Roll** — digits `0` to `9` are compiled vertically inside an overflow-hidden window. A GPU-accelerated keyframe animation translates the columns to their final positions.
- **Staggered Digit Delays** — setting custom delays on consecutive digits (e.g. `0.15s`, `0.3s`) lets values roll in sequentially (e.g., from left to right) simulating mechanical counting wheels.
- **Animated Static Characters** — percentage signs (`%`), modifiers (`K`, `M`), and separators (`/`) fade and scale into view as the roll finishes, creating a complete final metric reveal.
- **Ambient SaaS Glow Cards** — modern cards that lift on hover, elevating depth (`translateY(-4px)`) and radiating customizable glow rings driven by inline custom properties.
- **Reduced Motion Support** — stands instantly at the final values when the system requests minimized animation.

---

## 2. How is it used?

### Basic Metric Structure (Odometer Grid)

Use the following markup skeleton:

```html
<article class="ease-stat-card" style="--card-glow: #6366f1;">
  <header class="ease-stat-meta-row">
    <!-- Icon and Tags -->
    <div class="ease-stat-icon-wrapper">👥</div>
    <span class="ease-stat-tag">+12.4%</span>
  </header>

  <!-- Odometer row: 120 -->
  <div class="ease-counter-roll" aria-label="120 active units">
    
    <!-- Digit 1: rolls to 1 -->
    <span class="ease-counter-track" style="--counter-y: calc(-1 * var(--stat-number-h)); --counter-delay: 0s;">
      <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
    </span>

    <!-- Digit 2: rolls to 2 -->
    <span class="ease-counter-track" style="--counter-y: calc(-2 * var(--stat-number-h)); --counter-delay: 0.15s;">
      <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
    </span>

    <!-- Digit 3: rolls to 0 -->
    <span class="ease-counter-track" style="--counter-y: calc(-0 * var(--stat-number-h)); --counter-delay: 0.3s;">
      <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
    </span>

    <!-- Static Symbol -->
    <span class="ease-counter-static">K</span>

  </div>

  <h2 class="ease-stat-label">Active Users</h2>
  <p class="ease-stat-desc">Monthly active metrics measured dynamically.</p>
</article>
```

### Odometer Target Calculation

The rolling track maps 10 digits (`0` to `9`). To set a digit target, calculate its negative offset index by multiplying by `var(--stat-number-h)`:

```css
--counter-y: calc(-<DIGIT_INDEX> * var(--stat-number-h));
```

*Example target digit `7`*:
```html
style="--counter-y: calc(-7 * var(--stat-number-h));"
```

### Class Reference

| Class | Role |
|---|---|
| `.ease-stat-grid` | Grid layout wrapper — automatically scales column counts |
| `.ease-stat-card` | Custom metric dashboard block with hover triggers |
| `.ease-counter-roll` | Window wrapper — hides track overflows and hosts odometer values |
| `.ease-counter-track` | Flex column containing 0-9 spans — executes vertical translation |
| `.ease-counter-static` | Non-animating visual qualifiers — scales/fades in as rolls settle |
| `.ease-stat-tag` | Green growth label |
| `.ease-stat-tag--neutral` | Blue live label |

---

## 3. Why is it useful?

1. **Zero JavaScript** — true odometer animations normally require complex numerical parsing engines (such as Odometer.js) and DOM manipulation scripts. This component achieves the exact same visual narrative using simple declarative HTML and CSS keyframes.
2. **GPU-Accelerated 60 FPS** — rather than modifying numerical strings (which forces text rendering reflows), this engine translates physical elements along the `Y` axis using GPU compositor-backed transforms.
3. **Accessible Odometer Strings** — standard odometer animations can confuse screen readers as digits rapidly transition. This component uses `aria-label` inside the roll container (e.g. `aria-label="120,000 active users"`) so assistive software reads the clean, final value immediately.
4. **Self-Contained Card Visuals** — easily theme any card's ambient highlight strip or border glow dynamically by setting `--card-glow` inline.
5. **Fluid Spacing and Responsiveness** — grids flex cleanly across standard mobile layouts, shrinking font sizes and columns to avoid layout breakage.
6. **Graceful Accessibility Degradation** — fully complies with accessibility demands. If `prefers-reduced-motion: reduce` is active, the scroll translation is skipped, snapping tracks immediately to their destination targets.
