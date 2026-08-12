# 🤖 AI Thought Accordion

> A collapsible reasoning disclosure panel for AI chat interfaces — built with pure HTML, CSS & minimal vanilla JS.

---

## 📖 What does this do?

The **AI Thought Accordion** is a UI component that mimics the "thinking" or "reasoning" disclosure panel found in modern AI assistants (Google Gemini, Claude, o1). It renders an expandable/collapsible section inside an AI chat message showing step-by-step reasoning before presenting the final response.

---

## 🎯 How is it used?

Add the `thought-block` element inside your AI chat card. Control its visual state via the `data-state` attribute:

```html
<!-- Wrap inside your AI message card -->
<div id="thought-block" class="thought-block" data-state="idle">

  <!-- Toggle button -->
  <button
    class="thought-toggle"
    aria-expanded="false"
    aria-controls="thought-content"
  >
    <span class="thought-toggle__left">
      <span class="thought-pulse">
        <span class="thought-pulse__dot"></span>
        <span class="thought-pulse__ring"></span>
      </span>
      <span class="thought-toggle__label">Thought process</span>
    </span>
    <span class="thought-toggle__meta">
      <span class="thought-token-count">312 tokens</span>
      <span class="thought-toggle__chevron"><!-- SVG chevron --></span>
    </span>
  </button>

  <!-- Collapsible panel (CSS grid-template-rows trick) -->
  <div id="thought-content" class="thought-panel" aria-hidden="true">
    <div class="thought-panel__inner">
      <div class="thought-stream">
        <div class="thought-step is-visible">
          <span class="thought-step__bullet">→</span>
          <span class="thought-step__text">My reasoning step here...</span>
        </div>
      </div>
    </div>
  </div>

</div>
```

### State control (via `data-state`):

| `data-state` value | Visual effect |
|--------------------|---------------|
| `idle`             | Neutral border, grey dot indicator |
| `thinking`         | Glowing shimmer border, pulsing ring, blinking cursor |
| `done`             | Green accent dot, static display |

---

## ✨ Key Highlights

| Feature | Implementation |
|---------|----------------|
| **Smooth height animation** | `grid-template-rows: 0fr → 1fr` — no `max-height` hack |
| **Shimmer border glow** | `@keyframes thought-border-shimmer` on `[data-state="thinking"]` |
| **Pulsing ring indicator** | CSS `::pseudo`-based double-ring pulse keyframe |
| **Staggered step reveal** | `.thought-step.is-visible` with sequential `setTimeout` in JS |
| **Token counter** | Animated count-up via `setInterval` + `performance.now()` |
| **Blinking cursor** | `.thought-cursor` blink keyframe, shown only during `thinking` state |
| **Dark & Light mode** | Full CSS custom property theme system (`--ai-thought-bg`, etc.) |
| **Keyboard accessible** | `aria-expanded`, `aria-controls`, `aria-hidden`, Escape-to-close |
| **Reduced motion safe** | `@media (prefers-reduced-motion: reduce)` disables all animations |
| **Fully responsive** | Adapts from 320px to 1440px+ without breakage |

---

## 🎨 CSS Custom Properties

Override any of these in your `:root` to theme the component:

```css
:root {
  --ai-thought-bg:     rgba(129 140 248 / 0.05); /* panel background tint */
  --ai-thought-border: rgba(129 140 248 / 0.20); /* idle border color */
  --ai-pulse-color:    #818cf8;                  /* dot & active glow color */
  --ai-pulse-ring:     rgba(129 140 248 / 0.35); /* ring pulse color */
}
```

---

## ⌨️ Keyboard Support

| Key | Action |
|-----|--------|
| `Space` / `Enter` | Toggle accordion open/closed |
| `Escape` | Collapse panel if expanded |
| `Tab` | Standard focus traversal |

---

## ♿ Accessibility

- `aria-expanded` on the toggle button is updated on every state change.
- `aria-hidden` on the panel keeps it invisible to screen readers when collapsed.
- `aria-live="polite"` on the thought stream allows screen readers to announce streamed steps progressively.
- All icon-only elements carry `aria-hidden="true"`.
- `prefers-reduced-motion` fully respected — all keyframe animations are disabled.

---

## 🚀 Quick Start

1. Copy `demo.html`, `style.css`, and `script.js` into the same folder.
2. Open `demo.html` in any modern browser.
3. Click **Simulate Thinking** to watch the full streaming animation.

```
ai-thought-accordion-em/
├── demo.html    # Component demo with chat thread mockup
├── style.css    # Tokens, accordion, pulse animations, themes
├── script.js    # Toggle logic, streaming simulation, ARIA
└── README.md    # This documentation
```

---

## 🔍 Why is it useful?

EaseMotion CSS is increasingly used in application interfaces. As AI-powered products become standard, a well-built reasoning disclosure panel saves significant development time. This component:

- Demonstrates the modern **CSS grid height trick** for smooth expandable content without `max-height` limitations.
- Provides a **production-quality ARIA pattern** for dynamic AI state panels.
- Showcases how **CSS custom properties + `data-state` attributes** create rich, multi-state UI components without JavaScript-heavy approach.

---

## 🔬 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 85+ | ✅ Full |
| Firefox 90+ | ✅ Full |
| Safari 15.4+ | ✅ Full (grid subgrid) |
| Edge 85+ | ✅ Full |

> **Note:** The `grid-template-rows` height animation requires browsers supporting `grid-template-rows` transitions (Chrome 107+, Firefox 107+, Safari 16+). Older browsers fall back to an instant expand/collapse.
