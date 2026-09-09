# EaseMotion CSS — Floating Tooltip Popovers (`ease-tooltip-popover-ik`)

Pure CSS directional tooltip popovers (`ease-tooltip-trigger`) featuring spring scaling entrance dynamics, data-attribute text binding, and accessible focus visibility.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides pure CSS directional tooltip popovers (`tooltip-top`, `tooltip-bottom`, `tooltip-left`, `tooltip-right`) that display attribute labels (`data-tooltip="..."`) with smooth spring scale micro-interactions.

---

## 2. How is it used?

Apply the tooltip trigger class and data-tooltip attribute to any interactive button or link:

```html
<button class="ease-tooltip-trigger tooltip-top" data-tooltip="Spring scale top placement">
  <span>Hover Me</span>
</button>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS focuses on lightweight, zero-JS UI micro-interactions. Pure CSS tooltips deliver 60fps GPU compositor scaling (`cubic-bezier(0.34, 1.56, 0.64, 1)`) on hover and focus while respecting `prefers-reduced-motion` settings.
