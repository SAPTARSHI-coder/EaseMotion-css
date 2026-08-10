# Motion Design Principles Reference

Welcome to the **Motion Design Principles Reference**! This comprehensive document translates classic animation theory (Disney's 12 principles of animation) into CSS implementations, mapping key concepts to EaseMotion helper classes.

---

## 📋 Table of Contents
1. [Disney's Principles in CSS Matrix](#1-disneys-principles-in-css-matrix)
2. [Squash and Stretch (`.ease-rubber-band`)](#2-squash-and-stretch-ease-rubber-band)
3. [Anticipation (`.ease-wind-up`)](#3-anticipation-ease-wind-up)
4. [Follow-Through & Overshoot (`.ease-overshoot`)](#4-follow-through--overshoot-ease-overshoot)
5. [Timing & Duration Guides](#5-timing--duration-guides)

---

## 1. Disney's Principles in CSS Matrix

The following table maps classic animation theories to modern CSS properties and EaseMotion layouts:

| Animation Principle | UI Application Purpose | CSS Implementation Method | EaseMotion Equivalent |
| :--- | :--- | :--- | :--- |
| **Squash and Stretch** | Indicates component volume elasticity. | `transform: scale()` | `.ease-rubber-band` |
| **Anticipation** | Prepares users for upcoming movements. | Reverse translates | `.ease-wind-up` |
| **Follow-through** | Overshoots final points before settling. | `cubic-bezier()` curves | `.ease-overshoot` |
| **Slow In / Slow Out** | Accelerates and decelerates naturally. | `transition-timing-function` | `--ease-curve-spring` |
| **Timing** | Establishes visual weight and speed. | `animation-duration` | `--ease-duration` |

---

## 2. Squash and Stretch (`.ease-rubber-band`)

Gives a sense of weight and flexibility to components. In user interfaces, squash and stretch is applied when tabs or buttons are clicked to indicate elastic feedback.

```css
@keyframes squashStretch {
  0%, 100% { transform: scale(1, 1); }
  15% { transform: scale(1.25, 0.75); } /* Squash */
  45% { transform: scale(0.75, 1.25); } /* Stretch */
  70% { transform: scale(1.15, 0.85); }
  85% { transform: scale(0.95, 1.05); }
}
```

---

## 3. Anticipation (`.ease-wind-up`)

Prepares users for upcoming movements. A card winds up (moves slightly backwards) before sliding rapidly forward onto the screen, helping guide the user's focus.

```css
@keyframes anticipation {
  0% { transform: translateX(0); }
  25% { transform: translateX(-20px) scaleX(0.9); } /* Backward Wind-up */
  100% { transform: translateX(150px); } /* Forward Motion */
}
```

---

## 4. Follow-Through & Overshoot (`.ease-overshoot`)

Elements overshoot their final destination before settling back into position, simulating physical inertia and making transitions feel alive.

```css
@keyframes overshoot {
  0% { transform: scale(0); }
  60% { transform: scale(1.2); } /* Overshoot target */
  80% { transform: scale(0.9); }
  100% { transform: scale(1); } /* Settle */
}
```

---

## 5. Timing & Duration Guides

Timing defines the weight and gravity of animated elements.
* **Fast Actions (100ms - 200ms)**: Micro-interactions (hovers, taps, switch toggles).
* **Normal Actions (300ms - 500ms)**: Mid-size layout changes (accordion folds, sliding sidebars).
* **Slow Actions (600ms - 1000ms)**: Heavy page entries (modals pops, spring bounces).
