# Micro-Interaction Button State Machine

## 1. What does this do?

An interactive button demo that treats micro-interactions as a full state machine: idle → hover → focus → active → loading → success/error.

## 2. How is it used?

Open `demo.html` in a browser. Use the manual controls or **Play full flow** to trigger each state and watch its motion.

```html
<button class="action-btn" data-state="loading">
  <span class="btn-label">Saving…</span>
  <span class="btn-spinner"></span>
</button>
```

### State diagram

```text
idle ──hover──► hover ──focus──► focus
 │                │                │
 └──── active ◄───┴────── active ◄─┘
              │
              ▼
           loading
           /      \
      success     error
           \      /
             idle
```

## 3. Why is it useful?

Most button demos stop at hover. This shows a complete, teachable motion map that fits EaseMotion’s readable interaction philosophy.

## Issue

Resolves #51865
