# Elastic Number Counter

An elegant, minimalist metrics dashboard showcase featuring fluid spring transitions, individual staggered digit rolling (odometer style), and zero-JavaScript interaction.

## 1. What does this do?

This component renders an interactive statistical dashboard containing:

- **Hero Showcase Cards**: Four load/replay-triggered KPI counters (Downloads, Revenue, Projects, Success Rate) that roll digits independently from left to right with staggered cascading delays.
- **Interactive Control Dashboard**: Three plan-switcher cards (Active Users, Uptime, API Requests) that transition dynamically and continuously when changing plan tiers.

## 2. How is it used?

The odometer effect maps a vertical column of digits (0-9) inside a wrapper:

```html
<span class="digit-strip-ag">
  <span class="digit-list-ag">
    <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span
    ><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
  </span>
</span>
```

### Odometer Entrance Animation

For standard count-up on load/replay, map the target digit keyframe in CSS:

```css
.card-downloads .digit-strip:nth-child(1) .digit-list {
  animation: roll-to-4 1.8s var(--ease-elastic) forwards;
}

@keyframes roll-to-4 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(-4 * 1em));
  }
}
```

### Continuous State Transitions

For transitioning dynamically from a current value to a new value (such as plan tabs checked states):

```css
/* Assign card transitions on transform */
.card-mau .digit-strip .digit-list {
  transition: transform 1.6s var(--ease-elastic);
}

/* Bind checked states to offsets */
#plan-pro:checked ~ .container .card-mau .strip-tens .digit-list {
  transform: translateY(calc(-8 * 1em));
}
```

## 3. Why is it useful?

Odometer and KPI counters are highly requested features in SaaS dashboards. By splitting numbers into individual digit strips and animating them natively, we achieve a high-fidelity organic motion with soft bounce overshoots. Because this is built using pure CSS transitions, the browser manages the rendering thread directly on the GPU—avoiding layout thrashing, eliminating heavy JS packages, and keeping load performance fast.

---

## Technical Features

- **Independent Digit Roll**: Digits slide in independent columns, mimicking odometer gears.
- **Auto-Scaling Font Sizing**: The digit strip uses `1em` heights, ensuring that the odometer collapses and scales natively with whatever font size is assigned to the card.
- **True Continuous Transitions**: Plan tab updates animate directly from their current value to the new one (rather than snapping back to 0), maintaining a professional hardware look.
- **Cascading Delays**: Delays are set up across both cards (cascading columns) and individual digits (left-to-right digit roll), creating a high-fidelity visual waterfall.
- **Double-Keyframe Reset (Replay)**: A pure CSS technique utilizing two identical keyframe animations (`roll-to-X` and `roll-to-X-alt`) toggled by `#replay-toggle-ag` to instantly reset and replay all animations on click.
- **Reduced Motion**: Disables transforms and transitions when the client prefers reduced motion.

## Accessibility Notes

- **Announce Final Metrics Only**: Standard screen readers would try to read the scrolling columns (e.g., "0 1 2 3..."). To avoid this, the odometer is hidden with `aria-hidden="true"`, and the static final string values are wrapped in visually hidden `.sr-only` tags that display selectively matching the checked radio tab.
- **Keyboard Access**: Segmented tab labels include `tabindex="0"`, `role="radio"`, and `aria-checked` states. Progressive enhancement JS attaches keyboard listeners (space/enter keys) to guarantee keyboard accessibility.

## Customization

You can easily override variables and timing functions:

| Custom Token     | Default Value                       | Description                        |
| ---------------- | ----------------------------------- | ---------------------------------- |
| `--ease-elastic` | `cubic-bezier(0.25, 1.25, 0.45, 1)` | Premium overshoot spring timing    |
| `--ease-smooth`  | `cubic-bezier(0.4, 0, 0.2, 1)`      | Clean layout variables transitions |
