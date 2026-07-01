# Tabs Memory Leak Fix Showcase

A premium, self-contained CSS and JS utility showcase that demonstrates and solves the Event Listener Accumulation Memory Leak within the tab initialization logic of EaseMotion CSS.

## 📖 Table of Contents

- [Overview](#overview)
- [The Memory Leak Problem](#the-memory-leak-problem)
- [The Event-Delegation Solution](#the-event-delegation-solution)
- [Interactive Simulator](#interactive-simulator)
- [Accessibility Compliance (WCAG 2.1)](#accessibility-compliance-wcag-21)
- [Installation & Setup](#installation--setup)

---

## 🌟 Overview

Single Page Applications (SPAs) and dynamic websites often modify the DOM. In the initial implementation of the EaseMotion CSS Tabs component, a MutationObserver triggered `initializeTabs()` on every DOM update. This resulted in duplicate event listeners stacking up, creating memory leaks.

This showcase contains:

1. **Memory Leak Diagnostics**: A visual console and chart tracking listener accumulation in real-time.
2. **Robust Event Delegation**: An optimized script demonstrating a leak-free binding mechanism.
3. **Core tabs styles**: Standard and custom tab designs conforming to accessibility standards.

---

## ⚠️ The Memory Leak Problem

In the core `tabs.js` codebase, the `initializeTabs` function executes the following event attachments:

```javascript
// Inside initializeTabs() - called on every DOM mutation!
window.addEventListener('resize', function () { ... });

Array.prototype.forEach.call(inputs, function (input) {
  input.addEventListener('change', function () { ... });
});
```

Because these listeners are anonymous and attached directly to the `window` and input nodes without cleanup or markers, every single DOM mutation duplicates these bindings. Over time, thousands of listeners accumulate, degrading browser CPU and memory performance.

---

## 🚀 The Event-Delegation Solution

We address the memory leak using a clean **event delegation** pattern combined with a global singleton resize listener:

### 1. Global Document Delegation

Rather than binding listeners to every individual `.ease-tab-input` input, we bind a single listener to the global `document` node once. When any tab changes, the event bubbles up to the document:

```javascript
document.addEventListener("change", function (event) {
  if (event.target && event.target.classList.contains("ease-tab-input")) {
    var container = event.target.closest(".ease-tabs");
    if (container) {
      updateUnderlineWidth(container);
    }
  }
});
```

This is self-cleaning and automatically supports new, dynamically appended tabs.

### 2. Singleton Resize Binding

We execute the resize listener outside of the mutable `initializeTabs` scope, ensuring only one listener is bound to the window:

```javascript
var resizeTimeout;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    var tabContainers = document.querySelectorAll(".ease-tabs");
    Array.prototype.forEach.call(tabContainers, function (container) {
      updateUnderlineWidth(container);
    });
  }, 150);
});
```

---

## 🛠️ Interactive Simulator

The showcase sandbox in `demo.html` lets you test both implementations:

- **Leaky Mode**: Simulates the original behavior. Pressing the "Trigger DOM Mutation" button repeatedly piles up duplicate listeners and highlights the leak warning.
- **Patched Mode**: Toggles the event delegation pattern. Mutations execute cleanly without adding any new listeners.

---

## ♿ Accessibility Compliance (WCAG 2.1)

Tab components require strong logical structure and sequence order:

### 1. DOM Structure & Labels (Success Criterion 1.3.1)

> [!IMPORTANT]
> Keep tab inputs (`type="radio"`) clearly linked to their respective `<label>` tags using the matching `id` and `for` attribute parameters.
> This allows screen readers to announce options clearly.

### 2. Focus Indicator Outlines (Success Criterion 2.4.7)

> [!CAUTION]
> The dynamic underline element shifts left and right depending on active checked input. Ensure keyboard focus outline states (`:focus-visible`) remain highly visible to assist keyboard-only navigators.

---

## 🚀 Installation & Setup

To view the showcase locally, spin up a basic HTTP server inside the project root:

```bash
# Using standard Node.js npx tool
npx live-server submissions/examples/tabs-memory-leak-fix-ap/

# Or using Python 3
python -m http.server -d submissions/examples/tabs-memory-leak-fix-ap/
```
