# Workspace Switcher — `workspace-switcher-nk`

## 1. What does this do?

An animated workspace/account switcher dropdown where a trigger button with a rotating chevron opens a panel with staggered item entrance, a left accent bar that slides in on hover, a checkmark that scale-pops on the active item, a cross-fade when switching workspaces, a spinning `+` on the "Create workspace" item, and a scale-pop on the active workspace card — all driven by pure CSS keyframes and transitions off state classes toggled by a minimal JS bridge.

---

## 2. How is it used?

### HTML structure

```html
<!-- Trigger -->
<button class="ws-trigger" aria-haspopup="listbox" aria-expanded="false"
        aria-controls="ws-panel">
  <span class="ws-trigger__avatar">A</span>
  <span class="ws-trigger__name">Acme Corp</span>
  <svg class="ws-trigger__chevron">...</svg>
</button>

<!-- Panel -->
<div class="ws-panel" id="ws-panel" role="listbox" hidden>
  <ul class="ws-list">
    <li class="ws-item ws-item--active" role="option"
        data-name="Acme Corp" data-initial="A" data-color="#6366f1"
        aria-selected="true" tabindex="-1">
      <span class="ws-item__accent"></span>
      <span class="ws-item__avatar" style="--ws-avatar-color:#6366f1">A</span>
      <span class="ws-item__info">
        <span class="ws-item__name">Acme Corp</span>
        <span class="ws-item__role">Owner</span>
      </span>
      <svg class="ws-item__check">...</svg>
    </li>
  </ul>
  <button class="ws-new">
    <span class="ws-new__icon">+</span>
    <span class="ws-new__label">Create workspace</span>
  </button>
</div>
```

### State classes

| Class | Applied to | Effect |
|---|---|---|
| `ws-trigger--open` | `.ws-trigger` | Chevron rotates 180° |
| `ws-trigger--switching` | `.ws-trigger` | Cross-fade animation on name swap |
| `ws-panel--open` | `.ws-panel` | scaleY slide-down entrance |
| `ws-panel--closing` | `.ws-panel` | scaleY slide-up close |
| `ws-item--in` | `.ws-item` | Staggered fade-up entrance |
| `ws-item--active` | `.ws-item` | Indigo bg + checkmark scale-pop |
| `:hover .ws-item__accent` | `.ws-item__accent` | Left bar scaleY slides in |
| `:hover .ws-item__avatar` | `.ws-item__avatar` | Scale-up 1.1× |
| `:hover .ws-new__icon` | `.ws-new__icon` | 90° rotation (+ spin) |
| `ws-avatar--pop` | `.ws-active-card__avatar` | Scale bounce on switch |

### JS bridge (minimal — only toggles classes and aria attributes)

```js
// Open panel
panel.classList.add('ws-panel--open');
trigger.classList.add('ws-trigger--open');
items.forEach((item, i) => {
  item.style.animationDelay = (i * 0.055) + 's';
  item.classList.add('ws-item--in');
});

// Switch workspace
trigger.classList.add('ws-trigger--switching');
// on animationend: update text content
item.classList.add('ws-item--active');
avatar.classList.add('ws-avatar--pop');
```

All visual transitions are pure CSS. The JS manages aria attributes, hidden state, and focus only.

---

## 3. Why is it useful?

Workspace switching is a high-frequency action in every SaaS product — Slack, Linear, Notion, Vercel all have it. Yet it had zero coverage across thousands of EaseMotion submissions.

This component fits EaseMotion's philosophy because:

- **Every interaction has a micro-animation.** The chevron rotation signals open/closed state. The stagger entrance gives the panel spatial depth. The accent bar sliding in on hover guides the eye. The cross-fade on switch confirms the change without a page reload.
- **CSS does the heavy lifting.** All 6 keyframes (fade-up, panel-open, panel-close, item-in, trigger-switch, avatar-pop) and all hover transitions are pure CSS. The JS is ~80 lines managing aria attributes, focus, and keyboard navigation only — swap for React `useState`, Alpine `x-bind`, or Svelte without touching the stylesheet.
- **Fully keyboard accessible.** `↑↓` navigates items, `Enter`/`Space` selects, `Esc` closes, `Tab` closes. Proper `role="listbox"` + `role="option"` + `aria-selected` + `aria-expanded` semantics. Focus returns to trigger on close.
- **Zero dependencies.** Open `demo.html` directly in any modern browser — no server, no CDN, no build step.

---

## Animations used

| Animation | Trigger | Effect |
|---|---|---|
| `ws-fade-up` | Card / hint on page load | Fade + slide up entrance |
| `ws-panel-open` | `.ws-panel--open` | scaleY expand from top with bounce |
| `ws-panel-close` | `.ws-panel--closing` | scaleY collapse to top |
| `ws-item-in` | `.ws-item--in` (staggered) | Fade + slide up, 55ms delay each |
| `ws-trigger-switch` | `.ws-trigger--switching` | Cross-fade (out → in) on name change |
| `ws-avatar-pop` | `.ws-avatar--pop` | Scale bounce 1 → 1.2 → 1 on switch |
| Chevron rotate | `.ws-trigger--open` | 180° CSS `transform: rotate` transition |
| Accent bar slide | `.ws-item:hover .ws-item__accent` | `scaleY(0 → 1)` bounce transition |
| `+` icon spin | `.ws-new:hover .ws-new__icon` | `rotate(90deg)` transition |

---

## Files

```
submissions/examples/workspace-switcher-nk/
├── demo.html   — self-contained demo, works by opening directly in a browser
├── style.css   — all styles, keyframes, and state transitions
└── README.md   — this file
```
