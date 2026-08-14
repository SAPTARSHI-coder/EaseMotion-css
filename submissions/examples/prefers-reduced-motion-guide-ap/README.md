# prefers-reduced-motion Accessibility Deep-Dive

Welcome to the **prefers-reduced-motion Accessibility Guide**! This directory provides design principles, code setups, and audit checklists to implement vestibular-safe animations correctly inside EaseMotion projects.

---

## 📋 Table of Contents
1. [Understanding Vestibular Disorders](#1-understanding-vestibular-disorders)
2. [The prefers-reduced-motion Media Query](#2-the-prefers-reduced-motion-media-query)
3. [Accessibility Audit Checklist](#3-accessibility-audit-checklist)
4. [Subtle Fallback Animations](#4-subtle-fallback-animations)
5. [Testing & Emulating Preferences](#5-testing--emulating-preferences)

---

## 1. Understanding Vestibular Disorders

The vestibular system is a sensory system located inside the inner ear that provides the brain with information about balance, spatial orientation, and motion tracking.

### Why Screen Motion Matters
Users with vestibular disorders (such as vertigo, labyrinthitis, or vestibular migraine) can experience severe physical symptoms when viewing movement on a screen. 
* **Triggers**: Rapid scaling, bouncing loops, flashing, and multi-directional parallax scroll transitions.
* **Symptoms**: Vertigo, nausea, headaches, dizziness, and cognitive disorientation.

Implementing motion reduction is a core requirement of **WCAG 2.1 Success Criterion 2.2.2 (Pause, Stop, Hide)**.

---

## 2. The prefers-reduced-motion Media Query

The `prefers-reduced-motion` media query allows developers to detect whether the user has requested the operating system to minimize motion.

### Core Implementation Pattern
```css
/* 1. Default elastic animation for normal screens */
.card-entrance {
  opacity: 0;
  animation: standardElasticEntry 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

/* 2. Reset query for reduced-motion users */
@media (prefers-reduced-motion: reduce) {
  .card-entrance {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
```

---

## 3. Accessibility Audit Checklist

When auditing a component library for vestibular safety, use this checklist:

| Audit Target | Hazard / Trigger | Required Action |
| :--- | :--- | :--- |
| **Parallax Scrolling** | Multi-speed layers trigger depth disorientation | Disable scroll offsets or lock speeds under media queries. |
| **Elastic Zooms** | Rapid scale shifts larger than 1.1x trigger nausea | Replace with simple opacity fades or set max scale to 1.05x. |
| **Continuous Loops** | Infinite bounce or rotation animations cause distraction | Stop loops completely or replace with a slow opacity pulse. |
| **Flashing Elements** | Flashing colors or blinking text can trigger seizures | Limit blink iterations to less than 3 flashes per second. |

---

## 4. Subtle Fallback Animations

Disabling animations entirely can make interfaces feel flat and strip away meaningful interaction feedback. To preserve user experience, replace movement transitions with **subtle, opacity-only fallbacks**.

### CSS Alternative Implementation

```css
/* Standard definitions */
@keyframes standardElasticEntry {
  from { opacity: 0; transform: translateY(40px) scale(0.9); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes standardConstantBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* Subtle fallbacks */
@keyframes subtleOpacityEntry {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes subtleScalePulse {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

/* Media Query bindings */
@media (prefers-reduced-motion: reduce) {
  /* Replace elastic translations with simple crossfades */
  .target-entrance {
    animation: subtleOpacityEntry 0.6s ease both !important;
    transform: none !important;
  }

  /* Replace physical bouncing loops with a gentle opacity pulse */
  .target-loop {
    animation: subtleScalePulse 2s ease-in-out infinite !important;
    transform: none !important;
  }
}
```

---

## 5. Testing & Emulating Preferences

### Operating System Settings
* **Windows**: Go to **Settings** ➔ **Accessibility** ➔ **Visual Effects** and turn off **Animation effects**.
* **macOS**: Go to **System Settings** ➔ **Accessibility** ➔ **Display** and check **Reduce motion**.

### Chrome DevTools Emulation
To test your layout changes without altering your OS preferences:
1. Open DevTools (`F12`).
2. Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on macOS) to open the Command Menu.
3. Type **"prefers-reduced-motion"** and select **Emulate CSS prefers-reduced-motion: reduce**.
