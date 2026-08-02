# 🗺 Onboarding Tour Spotlight

> A CSS `clip-path` guided onboarding tour overlay with smooth spotlight transitions, auto-positioned tooltips, and full keyboard accessibility — built with pure HTML, CSS & vanilla JS.

---

## 📖 What does this do?

The **Onboarding Tour Spotlight** is a lightweight, guided feature walkthrough component. When the user clicks "Start Tour", a dark backdrop appears with a transparent spotlight cutout revealing the currently highlighted element. A floating tooltip with step navigation appears next to the target element.

The spotlight rectangle transitions smoothly between elements as the user progresses through the tour steps.

---

## 🎯 How is it used?

### 1. HTML structure (three elements outside your app shell)

```html
<!-- 1. Backdrop with clip-path hole -->
<div id="tour-backdrop" class="tour-backdrop" aria-hidden="true"></div>

<!-- 2. Highlight ring around target -->
<div id="tour-highlight" class="tour-highlight" aria-hidden="true"></div>

<!-- 3. Tooltip popover -->
<div id="tour-tooltip" class="tour-tooltip" role="dialog" aria-modal="true"
     aria-labelledby="tooltip-title" aria-describedby="tooltip-desc" tabindex="-1">
  <!-- header, body, arrow, footer inside -->
</div>
```

### 2. Define tour steps in `script.js`

```js
const TOUR_STEPS = [
  {
    targetId:  'kpi-row',          // ID of the element to highlight
    icon:      '📊',
    title:     'Key Metrics',
    desc:      'Your most important numbers, all in one place.',
    placement: 'bottom',           // 'top' | 'bottom' | 'left' | 'right'
  },
  // ...more steps
];
```

### 3. The clip-path spotlight is driven entirely by CSS custom properties

```css
.tour-backdrop {
  clip-path: polygon(
    0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%,   /* outer frame */
    var(--tour-spotlight-x) var(--tour-spotlight-y),
    calc(var(--tour-spotlight-x) + var(--tour-spotlight-w)) var(--tour-spotlight-y),
    ...   /* inner cutout rectangle */
  );
  transition: clip-path 380ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

JavaScript only updates the four CSS variables — the animation is handled entirely by CSS.

---

## ✨ Key Highlights

| Feature | Implementation |
|---------|----------------|
| **CSS clip-path spotlight** | `polygon()` with inner cutout rectangle; smooth CSS transition |
| **Smooth spotlight move** | `clip-path` transitions via CSS custom props (`--tour-spotlight-x/y/w/h`) |
| **Pulsing highlight ring** | `@keyframes tour-ring-pulse` border glow animation |
| **Auto-positioned tooltip** | Smart placement (bottom/top/right/left) with viewport overflow detection + auto-flip |
| **Directional arrow** | Four placement modifier classes (`.arrow--top/bottom/left/right`) |
| **Step progress dots** | Animated pill-expand for active dot |
| **Focus trap** | Tab/Shift+Tab contained inside `role="dialog"` tooltip |
| **Keyboard navigation** | `Escape` → close, `ArrowRight` → next, `ArrowLeft` → prev |
| **Dark & Light mode** | Full CSS custom property theme system |
| **Responsive** | Tooltip re-positions on window resize; mobile stacks layout |
| **Reduced motion** | All transitions and animations disabled for motion-sensitive users |

---

## ⌨️ Keyboard Support

| Key | Action |
|-----|--------|
| `Space` / `Enter` (on "Start Tour") | Open the tour |
| `→ ArrowRight` | Advance to next step |
| `← ArrowLeft` | Go to previous step |
| `Escape` | Close/exit the tour |
| `Tab` / `Shift+Tab` | Move focus within tooltip (trapped) |

---

## 🎨 CSS Custom Properties

```css
:root {
  --tour-backdrop:     rgba(6 8 20 / 0.82);  /* backdrop darkness */
  --tour-tooltip-w:    320px;                 /* tooltip width */
  --tour-arrow-size:   10px;                  /* directional arrow size */
  --tour-highlight-clr: var(--clr-primary);   /* highlight ring colour */

  /* Updated by JS — do not hardcode */
  --tour-spotlight-x:  0px;
  --tour-spotlight-y:  0px;
  --tour-spotlight-w:  0px;
  --tour-spotlight-h:  0px;
}
```

---

## ♿ Accessibility

- Backdrop has `aria-hidden="true"` — screen readers skip the decorative overlay.
- Tooltip uses `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and `aria-describedby`.
- `tabindex="-1"` on tooltip allows programmatic focus.
- Focus is automatically trapped inside the tooltip with Tab/Shift+Tab wrapping.
- `Escape` always closes the tour and returns focus to the triggering element.
- Step dots use `role="tab"` with `aria-selected` state updates.
- `prefers-reduced-motion: reduce` eliminates all keyframe animations and smooths transitions to instant.

---

## 🚀 Quick Start

1. Copy `demo.html`, `style.css`, and `script.js` into the same folder.
2. Open `demo.html` in any modern browser.
3. Click **Start Tour** in the top bar.
4. Use **Next / Prev** buttons or `Arrow keys` to walk through steps.
5. Press `Escape` or click **Finish** to exit.

```
onboarding-tour-spotlight-ag/
├── demo.html    ← Mock SaaS dashboard + tour overlay markup
├── style.css    ← Dashboard UI + tour overlay styles (clip-path, ring, tooltip)
├── script.js    ← Tour engine (step rendering, spotlight calc, focus trap, keyboard)
└── README.md    ← This documentation
```

---

## 🔍 Why is it useful?

Onboarding tours traditionally rely on JavaScript-heavy libraries (Shepherd.js, Intro.js, Driver.js) that calculate bounding boxes, inject large DOM structures, and override page scroll. This submission shows that the **same visual effect can be driven by CSS** — the spotlight is purely a `clip-path: polygon()` hole cut from a dark backdrop, animated via CSS transitions and updated by four simple CSS variable assignments.

This pattern is:
- **Lightweight** — zero dependencies, ~350 lines of JS
- **Performant** — clip-path runs on the GPU compositor thread
- **Composable** — drop the three overlay elements into any existing page

---

## 🔬 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 80+ | ✅ Full |
| Firefox 72+ | ✅ Full |
| Safari 13.1+ | ✅ Full |
| Edge 80+ | ✅ Full |
